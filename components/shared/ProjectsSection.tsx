import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ProjectCard } from "@/components/shared/ProjectCard"

const projects = [
  {
    category: "Developer Platform",
    status: "Production Ready",
    title: "Atlas Ops",
    description:
      "An analytics platform with dashboards, automated workflows, and a component library powering internal tooling.",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
    imageAlt: "Atlas Ops analytics dashboard",
    liveUrl: "https://atlasops.com/dashboard",
    infoRows: [],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis"],
  },
  {
    category: "AI Product",
    status: "Featured",
    title: "Signal Engine",
    description:
      "An AI-powered platform that analyzes and surfaces actionable insights from unstructured data.",
    imageSrc:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80",
    imageAlt: "Signal Engine AI interface",
    liveUrl: "https://signalengine.ai",
    infoRows: [],
    techStack: ["React", "Node.js", "OpenAI", "Pinecone", "Docker"],
  },
  {
    category: "SaaS Platform",
    status: "Live",
    title: "Frame Docs",
    description:
      "A collaborative docs platform with real-time editing, version history, and a structured content API.",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    imageAlt: "Frame Docs editor interface",
    liveUrl: "https://framedocs.com",
    infoRows: [],
    techStack: ["Next.js", "Supabase", "Tailwind", "Vercel", "TypeScript"],
  },
]

function ProjectsSection() {
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
          <Button size="lg" className="group">
            View All Projects
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export { ProjectsSection }
