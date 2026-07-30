import { ArrowRight, Download, Mail } from "lucide-react";
import { Label } from "@/components/ui/label";
import ProfileCard from "./ProfileCard";
import type { ProfileData } from "@/data/profile";

function HeroSection({ profile }: { profile: ProfileData }) {
  return (
    <section id="hero" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="flex flex-1 flex-col gap-5">
          <Label
            style={{ animationDelay: "100ms" }}
            className="animate-fade-in"
          >
            Fullstack Developer and Junior Data Analyst
          </Label>

          <h1
            className="text-[22px] font-bold leading-[1.35] tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl lg:text-5xl  animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            I craft products with clear systems and strong visual design.
          </h1>

          <p
            className="max-w-lg text-sm leading-relaxed text-muted-foreground animate-fade-in-up sm:text-base lg:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            Senior Full Stack Engineer based in Addis Ababa. Building products
            that merge technical excellence with thoughtful design.
          </p>

          <div
            className="flex flex-wrap items-center gap-4 animate-fade-in-up mt-10"
            style={{ animationDelay: "400ms" }}
          >
            <span className="group/btn inline-flex cursor-pointer items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_4px_16px_-4px_rgba(240,90,40,0.3)]">
              Download Resume
              <Download className="size-4 transition-all duration-300 group-hover/btn:-translate-y-1" />
            </span>
            <a href="#work" className="group/btn inline-flex cursor-pointer items-center gap-2 rounded-xl bg-muted px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted/80 hover:shadow-md">
              View Work
              <ArrowRight className="size-4 transition-all duration-300 group-hover/btn:translate-x-1" />
            </a>
            <span className="group/btn inline-flex cursor-pointer items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <Mail className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              Get in touch
            </span>
          </div>
        </div>

        <div
          className="flex w-full flex-col gap-4 animate-fade-in-up md:flex-row lg:w-[400px] lg:flex-col lg:shrink-0"
          style={{ animationDelay: "350ms" }}
        >
          {/* Profile card */}
          <ProfileCard profile={profile} />

          {/* Quick Facts */}
          <div className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              QUICK FACTS
            </p>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2 text-xs text-foreground/80">
                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                Ex Shopify, Vercel contractor
              </li>
              <li className="flex items-center gap-2 text-xs text-foreground/80">
                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                Contributed to 3 OSS frameworks
              </li>
              <li className="flex items-center gap-2 text-xs text-foreground/80">
                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                Shipped 2 profitable SaaS products
              </li>
              <li className="flex items-center gap-2 text-xs text-foreground/80">
                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                Speaker at JSConf 2023
              </li>
            </ul>
          </div>

          {/* Stats grid */}
          <div className="grid flex-1 grid-cols-3 gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                8+
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Years Exp
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                50+
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Projects
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                15+
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
