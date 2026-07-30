import { Star } from "lucide-react"
import { Label } from "@/components/ui/label"
import { TestimonialCard } from "@/components/shared/TestimonialCard"
import type { Testimonial } from "@/data/testimonials"

function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section
      id="testimonials"
      className="border-t border-border py-20 md:py-28"
    >
      {/* Section header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[60%]">
          <Label className="animate-fade-in">Testimonials</Label>
          <h2
            className="mt-5 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Words from people I&apos;ve worked with.
          </h2>
        </div>
        <p
          className="text-sm text-muted-foreground animate-fade-in md:text-right"
          style={{ animationDelay: "200ms" }}
        >
          Real feedback. Unfiltered.
        </p>
      </div>

      {/* Testimonials grid */}
      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard
            key={testimonial.authorName}
            {...testimonial}
            className="animate-fade-in-up"
            style={{ animationDelay: `${300 + i * 100}ms` }}
          />
        ))}
      </div>

      {/* Trust bar */}
      <div
        className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[20px] border border-border bg-background px-8 py-7 sm:flex-row sm:gap-4 animate-fade-in-up"
        style={{ animationDelay: "600ms" }}
      >
        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="size-4 fill-primary text-primary"
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">5.0</span>
          <span className="text-sm text-muted-foreground">
            Average Rating
          </span>
        </div>

        {/* Divider */}
        <div className="hidden h-8 w-px bg-border sm:block" />

        {/* Metrics */}
        <div className="flex gap-8 sm:gap-12">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold tracking-tight text-foreground">
              18+
            </span>
            <span className="text-xs text-muted-foreground">
              Projects Delivered
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold tracking-tight text-foreground">
              100%
            </span>
            <span className="text-xs text-muted-foreground">
              On-Time Delivery
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold tracking-tight text-foreground">
              3+
            </span>
            <span className="text-xs text-muted-foreground">
              Years Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export { TestimonialsSection }
