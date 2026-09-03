import { educationEntries } from "@/data/education"
import { EducationForm } from "@/components/dashboard/EducationForm"

export default function EducationPage() {
  return <EducationForm entries={educationEntries} />
}
