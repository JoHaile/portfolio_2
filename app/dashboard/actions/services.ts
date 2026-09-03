"use server"

import { serviceSchema, type ServiceFormData } from "@/lib/schemas"
import { writeDataFile } from "@/lib/data-files"
import { zodErrorsToMap } from "@/lib/action-utils"

export type ServiceState = {
  success: boolean
  error: string | null
  errors?: Record<string, string>
  data: ServiceFormData | null
}

const INTERFACE_BODY = `{
  icon: string
  title: string
  description: string
}`

function parse(formData: FormData): ServiceFormData {
  return {
    icon: formData.get("icon") as string,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  }
}

function invalid(record: Record<string, string>): ServiceState {
  return { success: false, error: null, errors: record, data: null }
}

export async function addService(
  _prevState: ServiceState,
  formData: FormData
): Promise<ServiceState> {
  try {
    const data = parse(formData)
    const validated = serviceSchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { services } = await import("@/data/services")
    const next = [...services, validated.data]

    await writeDataFile({
      filename: "services.ts",
      typeName: "Service[]",
      varName: "services",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to add service", data: null }
  }
}

export async function updateService(
  index: number,
  _prevState: ServiceState,
  formData: FormData
): Promise<ServiceState> {
  try {
    const data = parse(formData)
    const validated = serviceSchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { services } = await import("@/data/services")
    if (index < 0 || index >= services.length) {
      return { success: false, error: "Invalid service index", data: null }
    }

    const next = services.map((s, i) => (i === index ? validated.data : s))
    await writeDataFile({
      filename: "services.ts",
      typeName: "Service[]",
      varName: "services",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to update service", data: null }
  }
}

export async function deleteService(index: number): Promise<{ success: boolean; error: string | null }> {
  try {
    const { services } = await import("@/data/services")
    if (index < 0 || index >= services.length) {
      return { success: false, error: "Invalid service index" }
    }

    const next = services.filter((_, i) => i !== index)
    await writeDataFile({
      filename: "services.ts",
      typeName: "Service[]",
      varName: "services",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null }
  } catch {
    return { success: false, error: "Failed to delete service" }
  }
}
