import { experienceEntries } from "@/data/experience"
import { ExperienceForm } from "@/components/dashboard/ExperienceForm"

export default function ExperiencePage() {
  return <ExperienceForm entries={experienceEntries} />
}
