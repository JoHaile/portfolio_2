import { services } from "@/data/services"
import { ServicesForm } from "@/components/dashboard/ServicesForm"

export default function ServicesPage() {
  return <ServicesForm services={services} />
}
