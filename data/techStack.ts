export interface StackCategory {
  name: string
  label: string
  items: string[]
}

export const stackCategories: StackCategory[] = [
  {
    name: "Frontend",
    label: "Client-Side & Architecture",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
  },
  {
    name: "Forms & UI",
    label: "Interfaces & State",
    items: [
      "Zod",
      "React Hook Form",
      "Radix UI",
      "Chakra UI",
      "Mantine UI",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    name: "Backend",
    label: "Server & APIs",
    items: ["Node.js", "Express", "REST APIs", "Prisma", "Drizzle"],
  },
  {
    name: "Databases",
    label: "Data Relational & NoSQL",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    name: "Auth & Cloud",
    label: "Security & Infrastructure",
    items: [
      "Better Auth",
      "NextAuth",
      "OAuth",
      "JWT",
      "RBAC",
      "Vercel",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
    ],
  },
  {
    name: "AI & Data",
    label: "Machine Learning & Analytics",
    items: [
      "Python",
      "SQL",
      "LLM Integration",
      "CNNs",
      "Image Classification",
    ],
  },
]
