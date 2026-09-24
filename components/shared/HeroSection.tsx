import { ArrowRight, Mail, Download } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import ProfileCard from "./ProfileCard";
import type { ProfileData } from "@/data/profile";

function HeroSection({ profile }: { profile: ProfileData }) {
  return (
    <section id="hero" className="py-14 md:py-16 lg:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
        <div className="hero-reveal flex flex-1 flex-col gap-4">
          <SectionEyebrow
            style={{ "--t": "0ms" } as React.CSSProperties}
            className="text-primary font-semibold"
          >
            {profile.role}
          </SectionEyebrow>

          <h1
            style={{ "--t": "90ms" } as React.CSSProperties}
            className="text-2xl font-bold leading-[1.3] tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Building production-ready web apps, booking systems, & AI solutions.
          </h1>

          <p
            style={{ "--t": "180ms" } as React.CSSProperties}
            className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {profile.summary}
          </p>

          <div
            style={{ "--t": "270ms" } as React.CSSProperties}
            className="flex flex-wrap items-center gap-3 mt-6"
          >
            <a
              href="#contact"
              className="group/btn inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
            >
              Get in Touch
              <Mail className="size-4 transition-all duration-300 group-hover/btn:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="group/btn inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted hover:shadow-sm"
            >
              View Projects
              <ArrowRight className="size-4 transition-all duration-300 group-hover/btn:translate-x-1" />
            </a>
            <a
              href="/Yohannes_Haile_Resume.pdf"
              download="Yohannes_Haile_Resume.pdf"
              className="group/btn inline-flex cursor-pointer items-center gap-2 rounded-xl bg-muted px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted/80"
            >
              Download Resume
              <Download className="size-4 transition-transform duration-200 group-hover/btn:translate-y-0.5" />
            </a>
          </div>
        </div>

        <div
          className="hero-reveal flex w-full flex-col gap-4 md:flex-row lg:w-[380px] lg:flex-col lg:shrink-0"
        >
          {/* Profile card */}
          <div style={{ "--t": "150ms" } as React.CSSProperties}>
            <ProfileCard profile={profile} />
          </div>

          {/* Quick Highlights */}
          <div
            style={{ "--t": "240ms" } as React.CSSProperties}
            className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              KEY HIGHLIGHTS
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                Architected Next.js Multi-Brand Travel Platform
              </li>
              <li className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                Served as Scrum Master & Full-Stack Dev at EDit
              </li>
              <li className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                Built 6 Full-Stack, AI & JavaFX Applications
              </li>
              <li className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                B.Sc. Computer Science (Univ. of Gondar)
              </li>
            </ul>
          </div>

          {/* Stats grid */}
          <div
            style={{ "--t": "330ms" } as React.CSSProperties}
            className="grid flex-1 grid-cols-3 gap-2 rounded-2xl border border-border bg-card p-5 shadow-sm text-center"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                5
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Roles
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                6
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Projects
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                12+
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Skills
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
