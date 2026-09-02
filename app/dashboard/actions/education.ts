"use server"

import { educationSchema, type EducationFormData } from "@/lib/schemas"
import { writeDataFile } from "@/lib/data-files"
import { zodErrorsToMap } from "@/lib/action-utils"

export type EducationState = {
  success: boolean
  error: string | null
  errors?: Record<string, string>
  data: EducationFormData | null
}

const INTERFACE_BODY = `{
  degree: string
  institution: string
  location?: string
  description: string
  year: string
}`

function parse(formData: FormData): EducationFormData {
  return {
    degree: formData.get("degree") as string,
    institution: formData.get("institution") as string,
    location: (formData.get("location") as string) || undefined,
    description: formData.get("description") as string,
    year: formData.get("year") as string,
  }
}

function invalid(record: Record<string, string>): EducationState {
  return { success: false, error: null, errors: record, data: null }
}

export async function addEducation(
  _prevState: EducationState,
  formData: FormData
): Promise<EducationState> {
  try {
    const data = parse(formData)
    const validated = educationSchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { educationEntries } = await import("@/data/education")
    const next = [...educationEntries, validated.data]

    await writeDataFile({
      filename: "education.ts",
      typeName: "EducationEntry[]",
      varName: "educationEntries",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to add education", data: null }
  }
}

export async function updateEducation(
  index: number,
  _prevState: EducationState,
  formData: FormData
): Promise<EducationState> {
  try {
    const data = parse(formData)
    const validated = educationSchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { educationEntries } = await import("@/data/education")
    if (index < 0 || index >= educationEntries.length) {
      return { success: false, error: "Invalid education index", data: null }
    }

    const next = educationEntries.map((e, i) => (i === index ? validated.data : e))
    await writeDataFile({
      filename: "education.ts",
      typeName: "EducationEntry[]",
      varName: "educationEntries",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to update education", data: null }
  }
}

export async function deleteEducation(index: number): Promise<{ success: boolean; error: string | null }> {
  try {
    const { educationEntries } = await import("@/data/education")
    if (index < 0 || index >= educationEntries.length) {
      return { success: false, error: "Invalid education index" }
    }

    const next = educationEntries.filter((_, i) => i !== index)
    await writeDataFile({
      filename: "education.ts",
      typeName: "EducationEntry[]",
      varName: "educationEntries",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null }
  } catch {
    return { success: false, error: "Failed to delete education" }
  }
}
