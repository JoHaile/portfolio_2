import { SectionEyebrow } from "./SectionEyebrow"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/shared/ContactForm"
import { DataIcon } from "@/components/shared/DataIcon"
import type { ContactInfo, SocialLink } from "@/data/contact"

function ContactSection({ contactInfo, socialLinks }: { contactInfo: ContactInfo[]; socialLinks: SocialLink[] }) {
  return (
    <section id="contact" className="border-t border-border py-16 md:py-20">
      <div className="reveal">
      {/* Section header */}
      <div className="max-w-full md:max-w-[70%] lg:max-w-[60%]">
        <SectionEyebrow className="text-primary font-semibold">Contact & Hiring</SectionEyebrow>
        <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl">
          Let&apos;s discuss full-time roles, contracts, or engineering projects.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Available for Full-Stack Developer opportunities in Addis Ababa or Remote. Reach out directly via email, phone, or message.
        </p>
      </div>

      {/* Contact layout */}
      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:gap-14">
        {/* Left — Info + social */}
        <div className="flex flex-1 flex-col lg:flex-[0.45]">
          {/* 2x2 Grid */}
          <div className="grid grow grid-cols-1 gap-3.5 sm:grid-cols-2">
            {contactInfo.map((info) => {
              const Icon = info.icon
              const Content = (
                <Card
                  variant="default"
                  className="flex flex-col items-center justify-center gap-2.5 p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm h-full"
                >
                  <div className="flex size-9 items-center justify-center rounded-xl bg-muted">
                    <DataIcon name={Icon} className="size-4.5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-foreground sm:text-sm break-all">
                      {info.value}
                    </p>
                  </div>
                </Card>
              )

              if (info.href) {
                return (
                  <a key={info.label} href={info.href} className="block h-full">
                    {Content}
                  </a>
                )
              }

              return <div key={info.label}>{Content}</div>
            })}
          </div>

          {/* Social links */}
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex size-11 items-center justify-center rounded-xl border border-border bg-background transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5"
                >
                  <DataIcon name={Icon} className="size-4.5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
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
      </div>
    </section>
  )
}

export { ContactSection }
