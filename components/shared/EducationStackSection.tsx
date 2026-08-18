import {
  GraduationCap,
  BarChart3,
  Monitor,
  Server,
  Database as DatabaseIcon,
  Cloud,
  Brain,
  Layers,
} from "lucide-react"
import type { EducationEntry } from "@/data/education"
import type { StackCategory } from "@/data/techStack"

const educationIcons = [GraduationCap, BarChart3] as const

const stackIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Frontend: Monitor,
  "Forms & UI": Layers,
  Backend: Server,
  Databases: DatabaseIcon,
  "Auth & Cloud": Cloud,
  "AI & Data": Brain,
}

function EducationStackSection({
  entries,
  categories,
}: {
  entries: EducationEntry[]
  categories: StackCategory[]
}) {
  return (
    <section id="education" className="border-t border-border py-16 md:py-24">
      <div>
        <div className="mb-10 max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Education & Technical Skills
          </span>

          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl">
            Computer science degree & core tech stack.
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Academic fundamentals in software engineering combined with hands-on production tools.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Education Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Education & Training
            </h3>
            {entries.map((entry, i) => {
              const Icon = educationIcons[i] ?? GraduationCap

              return (
                <div
                  key={entry.degree}
                  className="group relative rounded-[20px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-105 sm:size-11">
                        <Icon className="size-5 text-primary" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-base font-bold text-foreground sm:text-lg">
                          {entry.degree}
                        </h4>
                        <p className="mt-0.5 text-xs text-muted-foreground font-medium sm:text-sm">
                          {entry.institution} {entry.location ? `• ${entry.location}` : ""}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {entry.year}
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {entry.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Stack Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Technical Skill Matrix
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {categories.map((cat) => {
                const Icon = stackIconMap[cat.name] ?? Monitor

                return (
                  <div
                    key={cat.name}
                    className="group rounded-[18px] border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-4 text-primary" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-foreground">
                          {cat.name}
                        </h4>
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                          {cat.label}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[11px] font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { EducationStackSection }
