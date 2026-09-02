"use server"

import { capabilitySchema, type CapabilityFormData } from "@/lib/schemas"
import { writeDataFile } from "@/lib/data-files"
import { zodErrorsToMap } from "@/lib/action-utils"

export type CapabilityState = {
  success: boolean
  error: string | null
  errors?: Record<string, string>
  data: CapabilityFormData | null
}

const INTERFACE_BODY = `{
  title: string
  description: string
}`

function invalid(record: Record<string, string>): CapabilityState {
  return { success: false, error: null, errors: record, data: null }
}

export async function addCapability(
  _prevState: CapabilityState,
  formData: FormData
): Promise<CapabilityState> {
  try {
    const data: CapabilityFormData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    }

    const validated = capabilitySchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { capabilities } = await import("@/data/capabilities")
    const next = [...capabilities, validated.data]

    await writeDataFile({
      filename: "capabilities.ts",
      typeName: "Capability[]",
      varName: "capabilities",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to add capability", data: null }
  }
}

export async function updateCapability(
  index: number,
  _prevState: CapabilityState,
  formData: FormData
): Promise<CapabilityState> {
  try {
    const data: CapabilityFormData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    }

    const validated = capabilitySchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { capabilities } = await import("@/data/capabilities")
    if (index < 0 || index >= capabilities.length) {
      return { success: false, error: "Invalid capability index", data: null }
    }

    const next = capabilities.map((c, i) => (i === index ? validated.data : c))
    await writeDataFile({
      filename: "capabilities.ts",
      typeName: "Capability[]",
      varName: "capabilities",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to update capability", data: null }
  }
}

export async function deleteCapability(index: number): Promise<{ success: boolean; error: string | null }> {
  try {
    const { capabilities } = await import("@/data/capabilities")
    if (index < 0 || index >= capabilities.length) {
      return { success: false, error: "Invalid capability index" }
    }

    const next = capabilities.filter((_, i) => i !== index)
    await writeDataFile({
      filename: "capabilities.ts",
      typeName: "Capability[]",
      varName: "capabilities",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null }
  } catch {
    return { success: false, error: "Failed to delete capability" }
  }
}
