import Image from "next/image"
import { ExternalLink, GitBranch } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  category: string
  status: string
  title: string
  subtitle?: string
  description: string
  highlights?: string[]
  imageSrc: string
  imageAlt: string
  liveUrl?: string
  sourceUrl?: string
  techStack: string[]
  className?: string
  style?: React.CSSProperties
}

function ProjectCard({
  category,
  status,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  liveUrl,
  sourceUrl,
  techStack,
  className,
  style,
}: ProjectCardProps) {
  const actualLiveUrl = liveUrl || "https://github.com/johaile"
  const actualSourceUrl = sourceUrl || "https://github.com/johaile"

  return (
    <article
      style={style}
      className={cn(
        "group relative flex flex-col rounded-[22px] border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_8px_30px_-4px_rgba(240,90,40,0.12),0_4px_12px_-2px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="flex flex-col px-6 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            {category}
          </span>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-primary">
            {status}
          </span>
        </div>

        <h3 className="mt-2 text-xl font-bold leading-tight tracking-[-0.02em] text-foreground sm:text-2xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-0.5 text-xs font-medium text-primary/80">
            {subtitle}
          </p>
        )}
      </div>

      <div className="mx-4 my-5 overflow-hidden rounded-xl">
        <div className="relative aspect-[16/9]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6">
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {description}
        </p>

        <div className="my-5 flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2.5 py-1 text-[10px] font-medium text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-4 border-t border-border/50">
          <a
            href={actualLiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex-1 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-primary px-3.5 py-2.5 text-xs font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-sm"
          >
            View Live
            <ExternalLink className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </a>
          <a
            href={actualSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex-1 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2.5 text-xs font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted hover:shadow-sm"
          >
            <GitBranch className="size-3.5 text-muted-foreground transition-colors group-hover/btn:text-foreground" />
            Source Code
          </a>
        </div>
      </div>
    </article>
  )
}

export { ProjectCard }
export type { ProjectCardProps }
