import NavBar from "@/components/shared/NavBar"
import SectionNav from "@/components/shared/SectionNav"
import { HeroSection } from "@/components/shared/HeroSection"
import { CapabilitiesSection } from "@/components/shared/CapabilitiesSection"
import { ProjectsSection } from "@/components/shared/ProjectsSection"
import { EducationSection } from "@/components/shared/EducationSection"
import { TechStackSection } from "@/components/shared/TechStackSection"
import { TestimonialsSection } from "@/components/shared/TestimonialsSection"
import { ContactSection } from "@/components/shared/ContactSection"
import { Footer } from "@/components/shared/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <SectionNav />

      <main className="mx-auto max-w-[1280px] px-6 md:px-10">
        <HeroSection />
        <CapabilitiesSection />
        <ProjectsSection />

        <section id="education" className="border-t border-border py-20 md:py-28">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
            <EducationSection />
            <TechStackSection />
          </div>
        </section>

        <TestimonialsSection />
        <ContactSection />
      </main>

      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <Footer />
      </div>
    </div>
  )
}
