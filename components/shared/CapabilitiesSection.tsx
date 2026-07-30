import { Label } from "@/components/ui/label"
import type { Capability } from "@/data/capabilities"

function CapabilitiesSection({ capabilities }: { capabilities: Capability[] }) {
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
