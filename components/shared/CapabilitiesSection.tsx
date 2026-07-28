import { Label } from "@/components/ui/label"

const capabilities = [
  {
    title: "Clean Architecture",
    description:
      "Scalable systems with maintainable code, test-driven practices, and thoughtful architecture decisions.",
  },
  {
    title: "UI/UX Craft",
    description:
      "Interfaces that feel premium — every interaction, spacing decision, and visual hierarchy is intentional.",
  },
  {
    title: "Optimized Delivery",
    description:
      "Fast, accessible products that perform under real-world conditions, from first paint to runtime.",
  },
]

function CapabilitiesSection() {
  return (
    <section id="about" className="border-t border-border pt-12 pb-20 md:pt-16 md:pb-28">
      <Label>Capabilities</Label>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
        {capabilities.map((cap) => (
          <div key={cap.title}>
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              {cap.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {cap.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export { CapabilitiesSection }
