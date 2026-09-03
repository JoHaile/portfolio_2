import { projects } from "@/data/projects"
import { stackCategories } from "@/data/techStack"
import { ProjectsForm } from "@/components/dashboard/ProjectsForm"

export default function ProjectsPage() {
  const categories = Array.from(new Set(projects.map((p) => p.category))).filter(Boolean)
  const statuses = Array.from(new Set(projects.map((p) => p.status))).filter(Boolean)
  const techOptions = Array.from(
    new Set([
      ...projects.flatMap((p) => p.techStack),
      ...stackCategories.flatMap((c) => c.items),
    ])
  ).filter(Boolean)

  return <ProjectsForm projects={projects} presets={{ categories, statuses, techOptions }} />
}
