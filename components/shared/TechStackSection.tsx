import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const stackCategories = [
  {
    name: "Frontend",
    label: "Core Technologies",
    items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    name: "Backend",
    label: "Server Side",
    items: ["Node.js", "Express", "NestJS", "REST", "GraphQL"],
  },
  {
    name: "Database",
    label: "Data Layer",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    name: "DevOps",
    label: "Infrastructure",
    items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Turborepo"],
  },
  {
    name: "AI & Tools",
    label: "Intelligence",
    items: ["OpenAI", "LangChain", "Pinecone", "Python", "Git"],
  },
]

function TechStackSection({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-1 flex-col", className)}>
      <Label className="animate-fade-in">Stack</Label>

      <h2 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl max-w-[70%] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        A curated technical stack for building modern digital products.
      </h2>

      <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        Technologies grouped by responsibility, making the stack easy to
        understand instead of appearing as a keyword dump.
      </p>

      {/* Categories */}
      <div className="mt-10 flex flex-col gap-5">
        {stackCategories.map((cat, i) => (
          <div
            key={cat.name}
            className="group rounded-[20px] border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-md animate-fade-in-up"
            style={{ animationDelay: `${300 + i * 80}ms` }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">
                {cat.name}
              </h3>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                {cat.label}
              </span>
            </div>

            <div className="my-3 h-px bg-border" />

            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { TechStackSection }
