import { cn } from "@/lib/utils"

function Card({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "cream" | "accent" }) {
  const variantStyles = {
    default: "bg-background border-border",
    cream: "bg-cream border-cream/80",
    accent: "bg-primary border-primary",
  }

  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-[20px] border p-6 transition-all duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
}

export { Card }
