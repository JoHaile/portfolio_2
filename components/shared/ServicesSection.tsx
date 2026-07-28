import { Code2, Palette, Zap, Server, Smartphone, Globe } from "lucide-react"
import { Label } from "@/components/ui/label"

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end product engineering — from database schema to pixel-perfect interfaces, built for scale.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Thoughtful interfaces grounded in usability, visual hierarchy, and consistent design systems.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Core Web Vitals, bundle analysis, and runtime profiling to ship products that feel instant.",
  },
  {
    icon: Server,
    title: "Backend & Infrastructure",
    description:
      "APIs, databases, auth, caching, and deployment pipelines — the invisible backbone of every product.",
  },
  {
    icon: Smartphone,
    title: "Responsive Engineering",
    description:
      "Mobile-first, accessible, and performant across every device and browser.",
  },
  {
    icon: Globe,
    title: "Technical Consulting",
    description:
      "Architecture reviews, stack selection, and technical strategy for teams building at pace.",
  },
]

function ServicesSection() {
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
