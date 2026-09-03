import { Label } from "@/components/ui/label"
import type { Service } from "@/data/services"
import { DataIcon } from "@/components/shared/DataIcon"

function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section id="services" className="border-t border-border py-16 md:py-20">
      <div className="max-w-full md:max-w-[70%] lg:max-w-[60%]">
        <Label className="animate-fade-in text-primary font-semibold">Services</Label>
        <h2
          className="mt-4 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Six ways I can help bring your product from idea to shipped.
        </h2>
        <p
          className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground animate-fade-in-up sm:text-base"
          style={{ animationDelay: "200ms" }}
        >
          Full-stack engineering, API design, secure auth, and AI integration as an embedded partner.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-md"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-muted transition-colors duration-200 group-hover:bg-primary/10">
                <DataIcon name={Icon} className="size-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
              </div>
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export { ServicesSection }
