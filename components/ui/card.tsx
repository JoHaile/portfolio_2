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

function CardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />
}

function CardLabel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-xs font-medium uppercase tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn("text-lg font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Card, CardContent, CardLabel, CardTitle, CardDescription }
