import { contactInfo, socialLinks } from "@/data/contact"
import { ContactForm } from "@/components/dashboard/ContactForm"

export default function ContactPage() {
  return <ContactForm contact={{ contactInfo, socialLinks }} />
}
