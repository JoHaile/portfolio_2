import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  category: string
  status: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  infoRows: { label: string; value: string }[]
  techStack: string[]
  className?: string
  style?: React.CSSProperties
}

function ProjectCard({
  category,
  status,
  title,
  description,
  imageSrc,
  imageAlt,
  infoRows,
  techStack,
  className,
  style,
}: ProjectCardProps) {
  return (
    <article
      style={style}
      className={cn(
        "group relative flex flex-col rounded-[20px] border border-cream/60 bg-cream transition-all duration-300 hover:-translate-y-1.5 hover:border-cream hover:shadow-[0_8px_30px_-4px_rgba(240,90,40,0.12),0_4px_12px_-2px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="flex items-center justify-between px-6 pt-6">
        <span className="text-[11px] font-medium uppercase tracking-widest text-cream-foreground/50">
          {category}
        </span>
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-primary">
          {status}
        </span>
      </div>

      <h3 className="mt-3 px-6 text-[28px] font-bold leading-tight tracking-[-0.02em] text-cream-foreground">
        {title}
      </h3>

      <div className="mx-6 mt-5 overflow-hidden rounded-xl border border-cream-foreground/8 transition-all duration-300 group-hover:border-cream-foreground/12">
        <div className="flex items-center gap-2 bg-cream-foreground/[0.04] px-3.5 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="size-[7px] rounded-full bg-cream-foreground/15" />
            <span className="size-[7px] rounded-full bg-cream-foreground/15" />
            <span className="size-[7px] rounded-full bg-cream-foreground/15" />
          </div>
          <div className="ml-3 flex-1 rounded-md bg-cream-foreground/[0.06] px-3 py-1">
            <span className="text-[10px] text-cream-foreground/30">
              {title.toLowerCase().replace(/\s+/g, "")}.com
            </span>
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-cream-foreground/[0.04]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-foreground/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>

      <div className="mx-6 mt-5 flex flex-col">
        {infoRows.map((row, i) => (
          <div
            key={row.label}
            className={cn(
              "flex items-center justify-between py-2.5",
              i < infoRows.length - 1 && "border-b border-cream-foreground/8"
            )}
          >
            <span className="text-xs text-cream-foreground/50">
              {row.label}
            </span>
            <span className="text-xs font-medium text-cream-foreground">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <p className="mx-6 mt-4 text-sm leading-relaxed text-cream-foreground/60">
        {description}
      </p>

      <div className="mt-auto flex items-end justify-between px-6 pb-6 pt-5">
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-cream-foreground/[0.06] px-2 py-0.5 text-[10px] font-medium text-cream-foreground/60 transition-colors duration-200 group-hover:bg-cream-foreground/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="group/btn inline-flex items-center gap-1.5 rounded-xl bg-cream-foreground px-4 py-2 text-xs font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-cream-foreground/90 hover:shadow-md">
          View
          <ArrowRight className="size-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </span>
      </div>
    </article>
  )
}

export { ProjectCard }
export type { ProjectCardProps }
