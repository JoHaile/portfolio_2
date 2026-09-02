export interface ContactInfo {
  icon: string
  label: string
  value: string
  href?: string
}

export const contactInfo: ContactInfo[] = [
  { icon: "Mail", label: "Email", value: "yohannes.h93@gmail.com", href: "mailto:yohannes.h93@gmail.com" },
  { icon: "Phone", label: "Phone", value: "+251 9 35 35 55 87", href: "tel:+251935355587" },
  { icon: "MapPin", label: "Location", value: "Addis Ababa, Ethiopia" },
  { icon: "Lightbulb", label: "Current Focus", value: "Multi-brand Travel & AI Products" },
]

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/johaile", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/johnny-haile", icon: "Linkedin" },
  { label: "Email", href: "mailto:yohannes.h93@gmail.com", icon: "Mail" },
]
