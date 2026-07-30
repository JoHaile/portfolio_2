import NavBar from "@/components/shared/NavBar"
import ScrollTracker from "@/components/shared/ScrollTracker"
import { HeroSection } from "@/components/shared/HeroSection"
import { CapabilitiesSection } from "@/components/shared/CapabilitiesSection"
import { ProjectsSection } from "@/components/shared/ProjectsSection"
import { EducationStackSection } from "@/components/shared/EducationStackSection"
import { ServicesSection } from "@/components/shared/ServicesSection"
import { TestimonialsSection } from "@/components/shared/TestimonialsSection"
import { ContactSection } from "@/components/shared/ContactSection"
import { Footer } from "@/components/shared/Footer"

import { profile } from "@/data/profile"
import { capabilities } from "@/data/capabilities"
import { projects } from "@/data/projects"
import { educationEntries } from "@/data/education"
import { stackCategories } from "@/data/techStack"
import { services } from "@/data/services"
import { testimonials } from "@/data/testimonials"
import { contactInfo, socialLinks } from "@/data/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <ScrollTracker />

      <main className="mx-auto max-w-[1440px] px-6 md:px-10 lg:pl-[100px]">
        <HeroSection profile={profile} />
        <CapabilitiesSection capabilities={capabilities} />
        <ProjectsSection projects={projects} />

        <EducationStackSection entries={educationEntries} categories={stackCategories} />

        <ServicesSection services={services} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection contactInfo={contactInfo} socialLinks={socialLinks} />
      </main>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:pl-[100px]">
        <Footer />
      </div>
    </div>
  )
}
