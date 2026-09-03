import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react"
import { Label } from "@/components/ui/label"
import type { ExperienceEntry } from "@/data/experience"

function ExperienceSection({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <section id="experience" className="border-t border-border py-16 md:py-20">
      <div className="max-w-full md:max-w-[70%] lg:max-w-[60%]">
        <Label className="animate-fade-in text-primary">Work Experience</Label>
        <h2
          className="mt-4 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Engineering roles across SaaS, travel, and EdTech platforms.
        </h2>
        <p
          className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground animate-fade-in-up sm:text-base"
          style={{ animationDelay: "200ms" }}
        >
          Hands-on experience architecting Next.js applications, modeling relational databases, engineering auth systems, and coordinating Agile sprints.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        {entries.map((entry) => (
          <div
            key={`${entry.company}-${entry.role}`}
            className="group relative rounded-[20px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md sm:p-7"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-105">
                  <Briefcase className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">
                    {entry.company}
                  </h3>
                  <div className="mt-0.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold text-primary sm:text-sm">
                    <span>{entry.role}</span>
                    <span className="inline-block size-1 rounded-full bg-primary/40" />
                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-normal">
                      <MapPin className="size-3" />
                      {entry.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-semibold text-foreground">
                <Calendar className="size-3 text-muted-foreground" />
                <span>{entry.period}</span>
              </div>
            </div>

            <ul className="mt-5 flex flex-col gap-2">
              {entry.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {entry.tags && entry.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5 pt-3.5 border-t border-border/50">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export { ExperienceSection }
