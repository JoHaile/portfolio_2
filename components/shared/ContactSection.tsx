import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/shared/ContactForm"
import type { ContactInfo, SocialLink } from "@/data/contact"

function ContactSection({ contactInfo, socialLinks }: { contactInfo: ContactInfo[]; socialLinks: SocialLink[] }) {
  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      {/* Section header */}
      <div className="max-w-full md:max-w-[70%] lg:max-w-[60%]">
        <Label className="animate-fade-in">Contact</Label>
        <h2
          className="mt-5 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Let&apos;s build something useful, bold, and clear.
        </h2>
        <p
          className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground animate-fade-in-up sm:text-lg"
          style={{ animationDelay: "200ms" }}
        >
          Whether you&apos;re hiring, starting a new product, or simply want to
          connect, I&apos;d love to hear from you.
        </p>
      </div>

      {/* Contact layout */}
      <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Left — Info + social */}
        <div className="flex flex-1 flex-col lg:flex-[0.45]">
          {/* 2x2 Grid: Email, Location, Response Time, Current Focus — 80% */}
          <div className="grid grow grid-cols-1 gap-4 sm:grid-cols-2">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <Card
                  key={info.label}
                  variant="default"
                  className="flex flex-col items-center justify-center gap-3 p-7 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_-4px_rgba(240,90,40,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-muted">
                    <Icon className="size-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="mt-1 text-base font-medium text-foreground">
                      {info.value}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Social links — 20% */}
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex size-12 items-center justify-center rounded-xl border border-border bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_4px_16px_-4px_rgba(240,90,40,0.12)]"
                >
                  <Icon className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Right — Contact form */}
        <div className="flex-1 lg:flex-[0.55]">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export { ContactSection }
