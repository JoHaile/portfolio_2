import { ArrowRight } from "lucide-react"
import { SectionEyebrow } from "./SectionEyebrow"
import { ProjectCard } from "@/components/shared/ProjectCard"
import type { Project } from "@/data/projects"

function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="border-t border-border py-16 md:py-20">
      <div className="reveal">
        <div className="max-w-full md:max-w-[70%] lg:max-w-[60%]">
          <SectionEyebrow className="text-primary font-semibold">Featured Work</SectionEyebrow>
          <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl">
            Production projects spanning full-stack & AI applications.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Built using Next.js, React, TypeScript, Node.js, Better Auth, Prisma, PostgreSQL, and Python models.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/johaile"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            View More on GitHub
            <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export { ProjectsSection }
