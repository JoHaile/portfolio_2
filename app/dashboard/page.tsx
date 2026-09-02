import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profile } from "@/data/profile"
import { projects } from "@/data/projects"
import { experienceEntries } from "@/data/experience"
import { educationEntries } from "@/data/education"
import { capabilities } from "@/data/capabilities"
import { services } from "@/data/services"
import { stackCategories } from "@/data/techStack"
import { testimonials } from "@/data/testimonials"
import { contactInfo, socialLinks } from "@/data/contact"
import Link from "next/link"
import {
  User,
  FolderKanban,
  Briefcase,
  GraduationCap,
  Zap,
  Wrench,
  Layers,
  MessageSquareQuote,
  Mail,
} from "lucide-react"

const sections = [
  { name: "Profile", href: "/dashboard/profile", icon: User, count: 1 },
  { name: "Projects", href: "/dashboard/projects", icon: FolderKanban, count: projects.length },
  { name: "Experience", href: "/dashboard/experience", icon: Briefcase, count: experienceEntries.length },
  { name: "Education", href: "/dashboard/education", icon: GraduationCap, count: educationEntries.length },
  { name: "Capabilities", href: "/dashboard/capabilities", icon: Zap, count: capabilities.length },
  { name: "Services", href: "/dashboard/services", icon: Wrench, count: services.length },
  { name: "Tech Stack", href: "/dashboard/tech-stack", icon: Layers, count: stackCategories.length },
  { name: "Testimonials", href: "/dashboard/testimonials", icon: MessageSquareQuote, count: testimonials.length },
  { name: "Contact", href: "/dashboard/contact", icon: Mail, count: contactInfo.length + socialLinks.length },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your portfolio content. Changes are saved to the data files.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{section.name}</CardTitle>
                <section.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{section.count}</div>
                <p className="text-xs text-muted-foreground">
                  {section.count === 1 ? "item" : "items"}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
