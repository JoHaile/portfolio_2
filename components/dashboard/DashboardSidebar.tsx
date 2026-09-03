"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
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
  LayoutDashboard,
} from "lucide-react"

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/profile", label: "Profile", icon: User, description: "Hero section, contact info" },
  { href: "/dashboard/projects", label: "Projects", icon: FolderKanban, description: "Project cards, live demo & source URLs" },
  { href: "/dashboard/experience", label: "Experience", icon: Briefcase, description: "Work history timeline" },
  { href: "/dashboard/education", label: "Education", icon: GraduationCap, description: "Education cards" },
  { href: "/dashboard/capabilities", label: "Capabilities", icon: Zap, description: "Skills & capabilities" },
  { href: "/dashboard/services", label: "Services", icon: Wrench, description: "Services grid" },
  { href: "/dashboard/tech-stack", label: "Tech Stack", icon: Layers, description: "Technology categories" },
  { href: "/dashboard/testimonials", label: "Testimonials", icon: MessageSquareQuote, description: "Client testimonials" },
  { href: "/dashboard/contact", label: "Contact", icon: Mail, description: "Contact & social links" },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-muted/40">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="text-lg font-semibold">
          Admin Dashboard
        </Link>
      </div>
      <nav className="space-y-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium">{item.label}</span>
                {item.description && (
                  <span className={cn(
                    "text-xs",
                    isActive ? "text-primary-foreground/80" : "text-muted-foreground/60"
                  )}>
                    {item.description}
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </nav>
      <div className="absolute bottom-4 left-4 right-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          View Portfolio
        </Link>
      </div>
    </aside>
  )
}
