"use client"

const sections = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export default function SectionNav() {
  return (
    <div className="border-b border-border-subtle">
      <div className="mx-auto flex w-full max-w-[1280px] items-center gap-6 overflow-x-auto px-6 py-3 scrollbar-none md:px-10">
        {sections.map((section, i) => (
          <a
            key={section.label}
            href={section.href}
            className={`relative pb-3 text-xs font-medium tracking-wide transition-colors duration-200 ${
              i === 0
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground/70"
            }`}
          >
            {section.label}
            {i === 0 && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary" />
            )}
          </a>
        ))}
      </div>
    </div>
  )
}
