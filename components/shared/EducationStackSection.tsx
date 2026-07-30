import { cn } from "@/lib/utils"
import {
  GraduationCap,
  BarChart3,
  Rocket,
  Monitor,
  Server,
  Database as DatabaseIcon,
  Cloud,
  Brain,
} from "lucide-react"
import type { EducationEntry } from "@/data/education"
import type { StackCategory } from "@/data/techStack"

const educationIcons = [GraduationCap, BarChart3, Rocket] as const

const stackIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Frontend: Monitor,
  Backend: Server,
  Database: DatabaseIcon,
  DevOps: Cloud,
  "AI & Tools": Brain,
}

function EducationStackSection({
  entries,
  categories,
}: {
  entries: EducationEntry[]
  categories: StackCategory[]
}) {
  return (
    <section id="education" className="border-t border-border py-20 md:py-28">
      <div>
        <div className="mb-14 max-w-3xl">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Education & Stack
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
            Learning through formal education and modern technologies.
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            A combination of academic foundations, self-directed learning, and
            production-ready tools used to build scalable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Education Column */}
          <div className="flex flex-col gap-5">
            {entries.map((entry, i) => {
              const Icon = educationIcons[i] ?? GraduationCap

              return (
                <div
                  key={entry.degree}
                  className="group relative rounded-[20px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(240,90,40,0.10),0_4px_12px_-2px_rgba(0,0,0,0.06)] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-105 sm:size-11">
                        <Icon
                          className="size-5 text-primary"
                          fill="currentColor"
                          fillOpacity="0.25"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-foreground sm:text-lg">
                          {entry.degree}
                        </h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {entry.institution}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 self-start rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                      {entry.year}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Stack Column */}
          <div className="flex flex-col gap-5">
            {categories.map((cat) => {
              const Icon = stackIconMap[cat.name] ?? Monitor

              return (
                <div
                  key={cat.name}
                  className="group rounded-[20px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_8px_30px_-4px_rgba(240,90,40,0.08),0_4px_12px_-2px_rgba(0,0,0,0.04)] sm:p-7"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:size-11">
                      <Icon className="size-5 text-primary" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-foreground sm:text-base">
                        {cat.name}
                      </h3>
                      <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                        {cat.label}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
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
    </section>
  )
}

export { EducationStackSection }
