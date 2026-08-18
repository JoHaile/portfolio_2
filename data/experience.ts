export interface ExperienceEntry {
  company: string
  role: string
  location: string
  period: string
  highlights: string[]
  tags?: string[]
}

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Travel Ethiopia & Enjoy Ethiopia",
    role: "Full-Stack Developer",
    location: "Addis Ababa, Ethiopia",
    period: "January 2026 – Present",
    highlights: [
      "Architected a multi-brand travel platform in Next.js, consolidating separate services into a scalable shared system.",
      "Developed end-to-end booking workflows with secure account authentication and email verification using Better Auth.",
      "Modeled booking, customer, and operational data in PostgreSQL with Prisma to support complex relational workflows.",
      "Implemented type-safe, validated user flows with TypeScript, Zod, and React Hook Form.",
    ],
    tags: ["Next.js", "TypeScript", "Better Auth", "Prisma", "PostgreSQL", "Zod", "React Hook Form"],
  },
  {
    company: "EDit Educational Services PLC.",
    role: "Full-Stack Developer",
    location: "Addis Ababa, Ethiopia",
    period: "August 2025 – December 2025",
    highlights: [
      "Contributed to a three-application gamified learning platform serving students, parents, and administrators.",
      "Served as Scrum Master, facilitating daily stand-ups, sprint planning, and team coordination.",
      "Engineered secure authentication and role-based access across the student, parent, and admin applications.",
      "Optimized Prisma queries and data-access patterns to reduce latency and improve API responsiveness.",
    ],
    tags: ["Full-Stack", "Prisma", "RBAC", "Agile / Scrum", "Performance Optimization"],
  },
  {
    company: "NextPulse Labs",
    role: "Full-Stack Developer Intern",
    location: "Addis Ababa, Ethiopia",
    period: "June 2024 – September 2024",
    highlights: [
      "Delivered custom SaaS features using Next.js and Supabase, covering frontend interfaces and data integration.",
      "Automated build and deployment workflows with CI/CD to support faster, more reliable releases.",
      "Created reusable, accessible interface components with Chakra UI and Mantine UI.",
    ],
    tags: ["Next.js", "Supabase", "CI/CD", "Chakra UI", "Mantine UI"],
  },
  {
    company: "University of Gondar",
    role: "Full-Stack Developer Intern",
    location: "Gondar, Ethiopia",
    period: "April 2023 – August 2023",
    highlights: [
      "Developed an e-commerce application with the MERN stack, integrating customer-facing and administrative workflows.",
      "Created responsive interfaces with Tailwind CSS and interactive animations with Framer Motion.",
      "Designed and maintained REST APIs in Express for product, user, and order operations.",
    ],
    tags: ["MERN Stack", "Express", "REST APIs", "Tailwind CSS", "Framer Motion"],
  },
  {
    company: "Oasis Infobyte",
    role: "Frontend Developer Intern",
    location: "Remote, India",
    period: "May 2022 – September 2022",
    highlights: [
      "Developed an issue-tracking application with Next.js and MySQL, supporting structured issue creation and management.",
      "Implemented responsive, accessible interfaces using Radix UI and Tailwind CSS.",
    ],
    tags: ["Next.js", "MySQL", "Radix UI", "Tailwind CSS"],
  },
]
