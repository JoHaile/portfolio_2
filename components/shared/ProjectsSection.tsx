import { ArrowRight } from "lucide-react"
import { Label } from "@/components/ui/label"
import { ProjectCard } from "@/components/shared/ProjectCard"
import type { Project } from "@/data/projects"

function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="pb-20 md:pb-28">
      <div className="rounded-[32px] border border-border bg-muted/30 px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-20">
        <div className="max-w-[60%]">
          <Label className="animate-fade-in">Selected Work</Label>
          <h2
            className="mt-5 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Featured projects that combine engineering with thoughtful design.
          </h2>
          <p
            className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground animate-fade-in-up sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            A curated collection of products built with performance, usability,
            scalability, and business impact in mind.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              {...project}
              className="animate-fade-in-up"
              style={{ animationDelay: `${300 + i * 100}ms` }}
            />
          ))}
        </div>

        <div
          className="mt-14 flex justify-center animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <span className="group/btn inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            View All Projects
            <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </span>
        </div>
      </div>
    </section>
  )
}

export { ProjectsSection }
