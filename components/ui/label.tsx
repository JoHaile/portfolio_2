import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="label"
      className={cn(
        "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Label }
