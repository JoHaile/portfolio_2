import { SectionEyebrow } from "./SectionEyebrow"
import type { Capability } from "@/data/capabilities"

function CapabilitiesSection({ capabilities }: { capabilities: Capability[] }) {
  return (
    <section id="about" className="border-t border-border py-16 md:py-20">
      <div className="reveal">
        <div className="max-w-full md:max-w-[70%] lg:max-w-[60%]">
          <SectionEyebrow className="text-primary font-semibold">Capabilities</SectionEyebrow>
          <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl">
            Full-stack, type-safe UI, and AI integration.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            From production Next.js front-ends to relational data layers and machine-learning integration.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
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
      </div>
    </section>
  )
}

export { CapabilitiesSection }
