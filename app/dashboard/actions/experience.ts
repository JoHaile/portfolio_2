"use server"

import { experienceSchema, type ExperienceFormData } from "@/lib/schemas"
import { writeDataFile } from "@/lib/data-files"
import { zodErrorsToMap } from "@/lib/action-utils"

export type ExperienceState = {
  success: boolean
  error: string | null
  errors?: Record<string, string>
  data: ExperienceFormData | null
}

const INTERFACE_BODY = `{
  company: string
  role: string
  location: string
  period: string
  highlights: string[]
  tags?: string[]
}`

function parse(formData: FormData): ExperienceFormData {
  const highlights = (formData.get("highlights") as string) || ""
  const tags = (formData.get("tags") as string) || ""
  return {
    company: formData.get("company") as string,
    role: formData.get("role") as string,
    location: formData.get("location") as string,
    period: formData.get("period") as string,
    highlights: highlights.split("\n").map((h) => h.trim()).filter(Boolean),
    tags: tags ? tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
  }
}

function invalid(record: Record<string, string>): ExperienceState {
  return { success: false, error: null, errors: record, data: null }
}

export async function addExperience(
  _prevState: ExperienceState,
  formData: FormData
): Promise<ExperienceState> {
  try {
    const data = parse(formData)
    const validated = experienceSchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { experienceEntries } = await import("@/data/experience")
    const next = [...experienceEntries, validated.data]

    await writeDataFile({
      filename: "experience.ts",
      typeName: "ExperienceEntry[]",
      varName: "experienceEntries",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to add experience", data: null }
  }
}

export async function updateExperience(
  index: number,
  _prevState: ExperienceState,
  formData: FormData
): Promise<ExperienceState> {
  try {
    const data = parse(formData)
    const validated = experienceSchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { experienceEntries } = await import("@/data/experience")
    if (index < 0 || index >= experienceEntries.length) {
      return { success: false, error: "Invalid experience index", data: null }
    }

    const next = experienceEntries.map((e, i) => (i === index ? validated.data : e))
    await writeDataFile({
      filename: "experience.ts",
      typeName: "ExperienceEntry[]",
      varName: "experienceEntries",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to update experience", data: null }
  }
}

export async function deleteExperience(index: number): Promise<{ success: boolean; error: string | null }> {
  try {
    const { experienceEntries } = await import("@/data/experience")
    if (index < 0 || index >= experienceEntries.length) {
      return { success: false, error: "Invalid experience index" }
    }

    const next = experienceEntries.filter((_, i) => i !== index)
    await writeDataFile({
      filename: "experience.ts",
      typeName: "ExperienceEntry[]",
      varName: "experienceEntries",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null }
  } catch {
    return { success: false, error: "Failed to delete experience" }
  }
}
