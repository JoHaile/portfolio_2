"use server"

import { projectSchema, type ProjectFormData } from "@/lib/schemas"
import { writeDataFile } from "@/lib/data-files"
import { zodErrorsToMap } from "@/lib/action-utils"

export type ProjectState = {
  success: boolean
  error: string | null
  errors?: Record<string, string>
  data: ProjectFormData | null
}

const INTERFACE_BODY = `{
  category: string
  status: string
  title: string
  subtitle?: string
  description: string
  highlights?: string[]
  imageSrc: string
  imageAlt: string
  liveUrl?: string
  sourceUrl?: string
  techStack: string[]
}`

function parseProject(formData: FormData): ProjectFormData {
  const highlights = formData.get("highlights") as string
  return {
    category: formData.get("category") as string,
    status: formData.get("status") as string,
    title: formData.get("title") as string,
    subtitle: formData.get("subtitle") as string || undefined,
    description: formData.get("description") as string,
    highlights: highlights ? highlights.split("\n").map((h) => h.trim()).filter(Boolean) : [],
    imageSrc: formData.get("imageSrc") as string,
    imageAlt: formData.get("imageAlt") as string,
    liveUrl: formData.get("liveUrl") as string || undefined,
    sourceUrl: formData.get("sourceUrl") as string || undefined,
    techStack: formData.getAll("techStack").map(String).map((t) => t.trim()).filter(Boolean),
  }
}

function invalid(state: ProjectState, record: Record<string, string>): ProjectState {
  return { ...state, success: false, error: null, errors: record, data: null }
}

export async function addProject(
  _prevState: ProjectState,
  formData: FormData
): Promise<ProjectState> {
  try {
    const data = parseProject(formData)
    const validated = projectSchema.safeParse(data)
    if (!validated.success) {
      return invalid(_prevState, zodErrorsToMap(validated.error))
    }

    const { projects } = await import("@/data/projects")
    const next = [...projects, validated.data]

    await writeDataFile({
      filename: "projects.ts",
      typeName: "Project[]",
      varName: "projects",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to add project", data: null }
  }
}

export async function updateProject(
  index: number,
  _prevState: ProjectState,
  formData: FormData
): Promise<ProjectState> {
  try {
    const data = parseProject(formData)
    const validated = projectSchema.safeParse(data)
    if (!validated.success) {
      return invalid(_prevState, zodErrorsToMap(validated.error))
    }

    const { projects } = await import("@/data/projects")
    if (index < 0 || index >= projects.length) {
      return { success: false, error: "Invalid project index", data: null }
    }

    const next = [...projects]
    next[index] = validated.data

    await writeDataFile({
      filename: "projects.ts",
      typeName: "Project[]",
      varName: "projects",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to update project", data: null }
  }
}

export async function deleteProject(index: number): Promise<{ success: boolean; error: string | null }> {
  try {
    const { projects } = await import("@/data/projects")
    if (index < 0 || index >= projects.length) {
      return { success: false, error: "Invalid project index" }
    }

    const next = projects.filter((_, i) => i !== index)
    await writeDataFile({
      filename: "projects.ts",
      typeName: "Project[]",
      varName: "projects",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null }
  } catch {
    return { success: false, error: "Failed to delete project" }
  }
}
