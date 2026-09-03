"use server"

import { techStackCategorySchema, type TechStackCategoryFormData } from "@/lib/schemas"
import { writeDataFile } from "@/lib/data-files"
import { zodErrorsToMap } from "@/lib/action-utils"

export type TechStackState = {
  success: boolean
  error: string | null
  errors?: Record<string, string>
  data: TechStackCategoryFormData | null
}

const INTERFACE_BODY = `{
  name: string
  label: string
  items: string[]
}`

function parse(formData: FormData): TechStackCategoryFormData {
  const items = (formData.get("items") as string) || ""
  return {
    name: formData.get("name") as string,
    label: formData.get("label") as string,
    items: items.split(",").map((i) => i.trim()).filter(Boolean),
  }
}

function invalid(record: Record<string, string>): TechStackState {
  return { success: false, error: null, errors: record, data: null }
}

export async function addTechStackCategory(
  _prevState: TechStackState,
  formData: FormData
): Promise<TechStackState> {
  try {
    const data = parse(formData)
    const validated = techStackCategorySchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { stackCategories } = await import("@/data/techStack")
    const next = [...stackCategories, validated.data]

    await writeDataFile({
      filename: "techStack.ts",
      typeName: "StackCategory[]",
      varName: "stackCategories",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to add tech stack category", data: null }
  }
}

export async function updateTechStackCategory(
  index: number,
  _prevState: TechStackState,
  formData: FormData
): Promise<TechStackState> {
  try {
    const data = parse(formData)
    const validated = techStackCategorySchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { stackCategories } = await import("@/data/techStack")
    if (index < 0 || index >= stackCategories.length) {
      return { success: false, error: "Invalid category index", data: null }
    }

    const next = stackCategories.map((c, i) => (i === index ? validated.data : c))
    await writeDataFile({
      filename: "techStack.ts",
      typeName: "StackCategory[]",
      varName: "stackCategories",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to update tech stack category", data: null }
  }
}

export async function deleteTechStackCategory(index: number): Promise<{ success: boolean; error: string | null }> {
  try {
    const { stackCategories } = await import("@/data/techStack")
    if (index < 0 || index >= stackCategories.length) {
      return { success: false, error: "Invalid category index" }
    }

    const next = stackCategories.filter((_, i) => i !== index)
    await writeDataFile({
      filename: "techStack.ts",
      typeName: "StackCategory[]",
      varName: "stackCategories",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null }
  } catch {
    return { success: false, error: "Failed to delete tech stack category" }
  }
}
