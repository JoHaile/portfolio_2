import Image from "next/image"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  authorName: string
  authorRole: string
  authorCompany: string
  avatarSrc: string
  avatarAlt: string
  className?: string
  style?: React.CSSProperties
}

function TestimonialCard({
  quote,
  authorName,
  authorRole,
  authorCompany,
  avatarSrc,
  avatarAlt,
  className,
  style,
}: TestimonialCardProps) {
  return (
    <article
      style={style}
      className={cn(
        "group flex flex-col rounded-[20px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(240,90,40,0.10),0_4px_12px_-2px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="mb-3 text-3xl font-bold leading-none tracking-tight text-primary/70">
        &ldquo;
      </div>

      <p className="flex-1 text-[15px] leading-[1.7] text-muted-foreground">
        {quote}
      </p>

      <div className="my-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="flex items-center gap-3.5">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-border ring-offset-2 ring-offset-background">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {authorName}
          </span>
          <span className="text-xs text-muted-foreground/70">
            {authorRole} at{" "}
            <span className="font-medium text-muted-foreground">
              {authorCompany}
            </span>
          </span>
        </div>
      </div>
    </article>
  )
}

export { TestimonialCard }
export type { TestimonialCardProps }
