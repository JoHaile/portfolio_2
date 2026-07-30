import { Code2, Palette, Zap, Server, BarChart3, Globe } from "lucide-react"

export interface Service {
  icon: typeof Code2
  title: string
  description: string
}

export const services: Service[] = [
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
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Dashboards, pipelines, and reports that transform complex data into clear, actionable business intelligence.",
  },
  {
    icon: Globe,
    title: "Technical Consulting",
    description:
      "Architecture reviews, stack selection, and technical strategy for teams building at pace.",
  },
]
