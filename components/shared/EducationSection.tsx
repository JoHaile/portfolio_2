import { SectionEyebrow } from "./SectionEyebrow"
import { cn } from "@/lib/utils"
import type { EducationEntry } from "@/data/education"

function EducationSection({ entries, className }: { entries: EducationEntry[]; className?: string }) {
  return (
    <div className={cn("flex flex-1 flex-col", className)}>
      <div className="flex h-full flex-col rounded-[32px] bg-primary p-8 sm:p-10">
        <SectionEyebrow className="text-primary-foreground/60">Education</SectionEyebrow>

        <h2 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-primary-foreground sm:text-3xl md:text-4xl max-w-[70%]">
          Learning through formal education and real-world products.
        </h2>

        <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
          A combination of academic foundations, independent learning, and
          building production-ready software.
        </p>

        {/* Timeline */}
        <div className="mt-10 flex flex-col gap-4">
          {entries.map((entry, i) => (
            <div
              key={entry.degree}
              className={cn(
                "group relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-foreground/20 hover:bg-primary-foreground/8",
                i > 0 && "mt-2"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-primary-foreground">
                    {entry.degree}
                  </h3>
                  <p className="text-sm text-primary-foreground/60">
                    {entry.institution}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-primary-foreground/15 px-3 py-1 text-[10px] font-semibold tracking-wide text-primary-foreground">
                  {entry.year}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { EducationSection }
