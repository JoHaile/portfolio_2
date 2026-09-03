import { z } from "zod"

export const profileSchema = z.object({
  initials: z.string().min(1, "Initials are required").max(5, "Initials must be 5 characters or less"),
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  basedIn: z.string().min(1, "Location is required"),
  bestAt: z.string().min(1, "Best at is required"),
  summary: z.string().min(10, "Summary must be at least 10 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  github: z.string().url("Invalid GitHub URL").or(z.literal("")),
  linkedin: z.string().url("Invalid LinkedIn URL").or(z.literal("")),
})

export type ProfileFormData = z.infer<typeof profileSchema>

export const projectSchema = z.object({
  category: z.string().min(1, "Category is required"),
  status: z.string().min(1, "Status is required"),
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  highlights: z.array(z.string()).min(1, "At least one highlight is required"),
  imageSrc: z.string().url("Invalid image URL"),
  imageAlt: z.string().min(1, "Image alt text is required"),
  liveUrl: z.string().url("Invalid URL").or(z.literal("")).optional(),
  sourceUrl: z.string().url("Invalid URL").or(z.literal("")).optional(),
  techStack: z.array(z.string()).min(1, "At least one tech is required"),
})

export type ProjectFormData = z.infer<typeof projectSchema>

export const experienceSchema = z.object({
  company: z.string().min(1, "Company is required"),
  role: z.string().min(1, "Role is required"),
  location: z.string().min(1, "Location is required"),
  period: z.string().min(1, "Period is required"),
  highlights: z.array(z.string()).min(1, "At least one highlight is required"),
  tags: z.array(z.string()).optional(),
})

export type ExperienceFormData = z.infer<typeof experienceSchema>

export const educationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  location: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  year: z.string().min(1, "Year is required"),
})

export type EducationFormData = z.infer<typeof educationSchema>

export const capabilitySchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
})

export type CapabilityFormData = z.infer<typeof capabilitySchema>

export const serviceSchema = z.object({
  icon: z.string().min(1, "Icon name is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
})

export type ServiceFormData = z.infer<typeof serviceSchema>

export const techStackCategorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  label: z.string().min(1, "Label is required"),
  items: z.array(z.string()).min(1, "At least one item is required"),
})

export type TechStackCategoryFormData = z.infer<typeof techStackCategorySchema>

export const testimonialSchema = z.object({
  quote: z.string().min(10, "Quote must be at least 10 characters"),
  authorName: z.string().min(1, "Author name is required"),
  authorRole: z.string().min(1, "Author role is required"),
  authorCompany: z.string().min(1, "Author company is required"),
  avatarSrc: z.string().url("Invalid avatar URL"),
  avatarAlt: z.string().min(1, "Avatar alt text is required"),
})

export type TestimonialFormData = z.infer<typeof testimonialSchema>

export const contactInfoSchema = z.object({
  icon: z.string().min(1, "Icon is required"),
  label: z.string().min(1, "Label is required"),
  value: z.string().min(1, "Value is required"),
  href: z.string().optional(),
})

export type ContactInfoFormData = z.infer<typeof contactInfoSchema>

export const socialLinkSchema = z.object({
  label: z.string().min(1, "Label is required"),
  href: z.string().url("Invalid URL"),
})

export type SocialLinkFormData = z.infer<typeof socialLinkSchema>
