export interface StackCategory {
  name: string
  label: string
  items: string[]
}

export const stackCategories: StackCategory[] = [
  {
    name: "Frontend",
    label: "Core Technologies",
    items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    name: "Backend",
    label: "Server Side",
    items: ["Node.js", "Express", "NestJS", "REST", "GraphQL"],
  },
  {
    name: "Database",
    label: "Data Layer",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    name: "DevOps",
    label: "Infrastructure",
    items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Turborepo"],
  },
  {
    name: "AI & Tools",
    label: "Intelligence",
    items: ["OpenAI", "LangChain", "Pinecone", "Python", "Git"],
  },
]
