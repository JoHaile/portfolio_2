import { cn } from "@/lib/utils"

function SectionEyebrow({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="section-eyebrow"
      className={cn(
        "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { SectionEyebrow }
