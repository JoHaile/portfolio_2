"use server"

import { testimonialSchema, type TestimonialFormData } from "@/lib/schemas"
import { writeDataFile } from "@/lib/data-files"
import { zodErrorsToMap } from "@/lib/action-utils"

export type TestimonialState = {
  success: boolean
  error: string | null
  errors?: Record<string, string>
  data: TestimonialFormData | null
}

const INTERFACE_BODY = `{
  quote: string
  authorName: string
  authorRole: string
  authorCompany: string
  avatarSrc: string
  avatarAlt: string
}`

function parse(formData: FormData): TestimonialFormData {
  return {
    quote: formData.get("quote") as string,
    authorName: formData.get("authorName") as string,
    authorRole: formData.get("authorRole") as string,
    authorCompany: formData.get("authorCompany") as string,
    avatarSrc: formData.get("avatarSrc") as string,
    avatarAlt: formData.get("avatarAlt") as string,
  }
}

function invalid(record: Record<string, string>): TestimonialState {
  return { success: false, error: null, errors: record, data: null }
}

export async function addTestimonial(
  _prevState: TestimonialState,
  formData: FormData
): Promise<TestimonialState> {
  try {
    const data = parse(formData)
    const validated = testimonialSchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { testimonials } = await import("@/data/testimonials")
    const next = [...testimonials, validated.data]

    await writeDataFile({
      filename: "testimonials.ts",
      typeName: "Testimonial[]",
      varName: "testimonials",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to add testimonial", data: null }
  }
}

export async function updateTestimonial(
  index: number,
  _prevState: TestimonialState,
  formData: FormData
): Promise<TestimonialState> {
  try {
    const data = parse(formData)
    const validated = testimonialSchema.safeParse(data)
    if (!validated.success) {
      return invalid(zodErrorsToMap(validated.error))
    }

    const { testimonials } = await import("@/data/testimonials")
    if (index < 0 || index >= testimonials.length) {
      return { success: false, error: "Invalid testimonial index", data: null }
    }

    const next = testimonials.map((t, i) => (i === index ? validated.data : t))
    await writeDataFile({
      filename: "testimonials.ts",
      typeName: "Testimonial[]",
      varName: "testimonials",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null, data: validated.data }
  } catch {
    return { success: false, error: "Failed to update testimonial", data: null }
  }
}

export async function deleteTestimonial(index: number): Promise<{ success: boolean; error: string | null }> {
  try {
    const { testimonials } = await import("@/data/testimonials")
    if (index < 0 || index >= testimonials.length) {
      return { success: false, error: "Invalid testimonial index" }
    }

    const next = testimonials.filter((_, i) => i !== index)
    await writeDataFile({
      filename: "testimonials.ts",
      typeName: "Testimonial[]",
      varName: "testimonials",
      data: next,
      interfaceBody: INTERFACE_BODY,
    })

    return { success: true, error: null }
  } catch {
    return { success: false, error: "Failed to delete testimonial" }
  }
}
