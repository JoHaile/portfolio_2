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
        "group flex flex-col rounded-[20px] border border-cream/60 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cream hover:shadow-[0_8px_30px_-4px_rgba(240,90,40,0.10),0_4px_12px_-2px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      {/* Quote mark */}
      <div className="mb-5 text-[40px] font-bold leading-none tracking-tight text-primary/70">
        &ldquo;
      </div>

      {/* Testimonial */}
      <p className="flex-1 text-[15px] leading-[1.7] text-cream-foreground/80">
        {quote}
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-gradient-to-r from-transparent via-cream-foreground/10 to-transparent" />

      {/* Author */}
      <div className="flex items-center gap-3.5">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-cream-foreground/[0.06] ring-offset-2 ring-offset-cream">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold tracking-tight text-cream-foreground">
            {authorName}
          </span>
          <span className="text-xs text-cream-foreground/50">
            {authorRole} at{" "}
            <span className="font-medium text-cream-foreground/60">
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
