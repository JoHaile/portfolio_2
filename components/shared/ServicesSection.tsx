import { Label } from "@/components/ui/label"
import type { Service } from "@/data/services"

function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section id="services" className="border-t border-border pt-12 pb-20 md:pt-16 md:pb-28">
      <Label>Services</Label>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-md"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-muted transition-colors duration-200 group-hover:bg-primary/10">
                <Icon className="size-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
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
