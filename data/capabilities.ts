export interface Capability {
  title: string
  description: string
}

export const capabilities: Capability[] = [
  {
    title: "Full-Stack Development",
    description:
      "Building web apps with Next.js, React, TypeScript, and Node.js. Implementing REST APIs, secure auth (Better Auth), and relational database schemas with Prisma & PostgreSQL.",
  },
  {
    title: "Type-Safe UI Systems",
    description:
      "Creating accessible interfaces using Tailwind CSS, Radix UI, ShadCN UI, and handling validated form workflows with Zod and React Hook Form.",
  },
  {
    title: "AI Integration & Analytics",
    description:
      "Integrating machine learning models (CNNs for image classification), LLM APIs, Python scripts, SQL query optimization, and CI/CD automated deployment pipelines.",
  },
]
