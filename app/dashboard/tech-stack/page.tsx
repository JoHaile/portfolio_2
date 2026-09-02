import { stackCategories } from "@/data/techStack"
import { TechStackForm } from "@/components/dashboard/TechStackForm"

export default function TechStackPage() {
  return <TechStackForm categories={stackCategories} />
}
