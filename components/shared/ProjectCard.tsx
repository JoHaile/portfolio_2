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
  liveUrl?: string
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
  liveUrl,
  techStack,
  className,
  style,
}: ProjectCardProps) {
  return (
    <article
      style={style}
      className={cn(
        "group relative flex flex-col rounded-[20px] border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(240,90,40,0.12),0_4px_12px_-2px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="flex flex-col px-6 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            {category}
          </span>
          <span className="rounded-full bg-primary/10 px-2.5 text-[10px] font-semibold tracking-wide text-primary">
            {status}
          </span>
        </div>

        <h3 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-foreground">
          {title}
        </h3>
      </div>

      <div className="mx-4 my-6 overflow-hidden rounded-xl">
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
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="my-6 flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <span className="group/btn inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-foreground px-4 py-2 text-xs font-medium text-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            View App
            <ArrowRight className="size-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  )
}

export { ProjectCard }
export type { ProjectCardProps }
