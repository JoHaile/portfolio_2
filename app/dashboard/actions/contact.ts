"use server"

import { writeDataFileMulti } from "@/lib/data-files"
import {
  contactInfoSchema,
  socialLinkSchema,
} from "@/lib/schemas"
import type { ContactInfo, SocialLink } from "@/data/contact"

export type ContactState = {
  success: boolean
  error: string | null
  errors?: Record<string, string>
  data: { contactInfo?: ContactInfo[]; socialLinks?: SocialLink[] } | null
}

const CONTACT_INTERFACE_BODY = `{
  icon: string
  label: string
  value: string
  href?: string
}`

const SOCIAL_INTERFACE_BODY = `{
  label: string
  href: string
  icon: string
}`

export async function updateContactInfo(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  try {
    const { contactInfo, socialLinks } = await import("@/data/contact")

    const inputs: ContactInfo[] = contactInfo.map((item, index) => ({
      icon: item.icon,
      label: (formData.get(`label_${index}`) as string) || item.label,
      value: (formData.get(`value_${index}`) as string) || item.value,
      href:
        formData.get(`href_${index}`) !== null &&
        String(formData.get(`href_${index}`)) !== ""
          ? String(formData.get(`href_${index}`))
          : item.href,
    }))

    const errors: Record<string, string> = {}
    inputs.forEach((item, index) => {
      const r = contactInfoSchema.safeParse(item)
      if (!r.success) {
        for (const issue of r.error.issues) {
          errors[`value_${index}`] = issue.message
          break
        }
      }
    })

    if (Object.keys(errors).length > 0) {
      return { success: false, error: null, errors, data: null }
    }

    await writeDataFileMulti({
      filename: "contact.ts",
      vars: [
        { typeName: "ContactInfo[]", varName: "contactInfo", data: inputs, interfaceBody: CONTACT_INTERFACE_BODY },
        { typeName: "SocialLink[]", varName: "socialLinks", data: socialLinks, interfaceBody: SOCIAL_INTERFACE_BODY },
      ],
    })

    return { success: true, error: null, data: { contactInfo: inputs } }
  } catch {
    return { success: false, error: "Failed to update contact info", data: null }
  }
}

export async function updateSocialLinks(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  try {
    const { contactInfo, socialLinks } = await import("@/data/contact")

    const links: SocialLink[] = socialLinks.map((link, index) => ({
      label: (formData.get(`label_${index}`) as string) || link.label,
      href: String(formData.get(`href_${index}`) ?? link.href),
      icon: link.icon,
    }))

    const errors: Record<string, string> = {}
    links.forEach((link, index) => {
      const r = socialLinkSchema.safeParse(link)
      if (!r.success) {
        for (const issue of r.error.issues) {
          errors[`href_${index}`] = issue.message
          break
        }
      }
    })

    if (Object.keys(errors).length > 0) {
      return { success: false, error: null, errors, data: null }
    }

    await writeDataFileMulti({
      filename: "contact.ts",
      vars: [
        { typeName: "ContactInfo[]", varName: "contactInfo", data: contactInfo, interfaceBody: CONTACT_INTERFACE_BODY },
        { typeName: "SocialLink[]", varName: "socialLinks", data: links, interfaceBody: SOCIAL_INTERFACE_BODY },
      ],
    })

    return { success: true, error: null, data: { socialLinks: links } }
  } catch {
    return { success: false, error: "Failed to update social links", data: null }
  }
}
