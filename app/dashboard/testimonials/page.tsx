import { testimonials } from "@/data/testimonials"
import { TestimonialsForm } from "@/components/dashboard/TestimonialsForm"

export default function TestimonialsPage() {
  return <TestimonialsForm testimonials={testimonials} />
}
