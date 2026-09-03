"use server"

import { profileSchema, type ProfileFormData } from "@/lib/schemas"
import { writeDataFile } from "@/lib/data-files"
import { zodErrorsToMap } from "@/lib/action-utils"

export type ProfileState = {
  success: boolean
  error: string | null
  errors?: Record<string, string>
  data: ProfileFormData | null
}

export async function updateProfile(
  _prevState: ProfileState,
  formData: FormData
): Promise<ProfileState> {
  try {
    const data: ProfileFormData = {
      initials: formData.get("initials") as string,
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      basedIn: formData.get("basedIn") as string,
      bestAt: formData.get("bestAt") as string,
      summary: formData.get("summary") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      github: formData.get("github") as string,
      linkedin: formData.get("linkedin") as string,
    }

    const validated = profileSchema.safeParse(data)
    if (!validated.success) {
      return {
        success: false,
        error: null,
        errors: zodErrorsToMap(validated.error),
        data: null,
      }
    }

    await writeDataFile({
      filename: "profile.ts",
      typeName: "ProfileData",
      varName: "profile",
      data: validated.data,
      interfaceBody: `{
  initials: string
  name: string
  role: string
  basedIn: string
  bestAt: string
  summary: string
  email: string
  phone: string
  github: string
  linkedin: string
}`,
    })

    return {
      success: true,
      error: null,
      data: validated.data,
    }
  } catch {
    return {
      success: false,
      error: "Failed to update profile",
      data: null,
    }
  }
}
