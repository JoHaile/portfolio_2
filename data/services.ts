import { Code2, Server, ShieldCheck, Brain, Database, Users } from "lucide-react"

export interface Service {
  icon: typeof Code2
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building web applications with Next.js, React, and TypeScript for responsive interfaces and server-side rendering.",
  },
  {
    icon: Server,
    title: "Backend & API Engineering",
    description:
      "Designing REST APIs, Node.js/Express web servers, and scalable serverless functions.",
  },
  {
    icon: ShieldCheck,
    title: "Auth & Access Control",
    description:
      "Implementing secure authentication (Better Auth, NextAuth, OAuth) and Role-Based Access Control (RBAC).",
  },
  {
    icon: Brain,
    title: "AI Model & API Integration",
    description:
      "Connecting web platforms with LLM APIs, image classification models (CNNs), and Python services.",
  },
  {
    icon: Database,
    title: "Database & Data Layer",
    description:
      "Relational data modeling, SQL optimization, and ORM integration using Prisma, Drizzle, PostgreSQL, and MySQL.",
  },
  {
    icon: Users,
    title: "Agile & Team Leadership",
    description:
      "Facilitating Scrum ceremonies (stand-ups, sprint planning) and setting up automated CI/CD deployment pipelines.",
  },
]
