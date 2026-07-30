export interface Project {
  category: string
  status: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  liveUrl?: string
  sourceUrl?: string
  techStack: string[]
}

export const projects: Project[] = [
  {
    category: "Developer Platform",
    status: "Production Ready",
    title: "Atlas Ops",
    description:
      "An analytics platform with dashboards, automated workflows, and a UI library.",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
    imageAlt: "Atlas Ops analytics dashboard",
    liveUrl: "https://atlasops.com/dashboard",
    sourceUrl: "https://github.com/user/atlasops",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Redis"],
  },
  {
    category: "AI Product",
    status: "Featured",
    title: "Signal Engine",
    description:
      "An AI-powered platform that analyzes and surfaces good insights from data.",
    imageSrc:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80",
    imageAlt: "Signal Engine AI interface",
    liveUrl: "https://signalengine.ai",
    sourceUrl: "https://github.com/user/signal-engine",
    techStack: ["React", "Node.js", "Pinecone", "Docker"],
  },
  {
    category: "SaaS Platform",
    status: "Live",
    title: "Frame Docs",
    description:
      "A collaborative docs platform with real-time editing and a content API.",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    imageAlt: "Frame Docs editor interface",
    liveUrl: "https://framedocs.com",
    sourceUrl: "https://github.com/user/frame-docs",
    techStack: ["Next.js", "Supabase", "Tailwind", "Vercel"],
  },
]
