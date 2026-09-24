export interface Project {
  category: string;
  status: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  imageSrc: string;
  imageAlt: string;
  liveUrl?: string;
  sourceUrl?: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    category: "Full-Stack Travel Platform",
    status: "Live Application",
    title: "Enjoy Ethiopia",
    subtitle: "Travel Ethiopia — multi-brand tourism & booking platform",
    description:
      "Architected a multi-brand travel platform in Next.js that consolidates Travel Ethiopia (travelethiopia.com.et) and Enjoy Ethiopia into a scalable shared system. Built end-to-end booking workflows with secure account authentication and email verification using Better Auth, and modeled booking, customer, and operational data in PostgreSQL with Prisma.",
    highlights: [
      "Architected a shared multi-brand platform consolidating Travel Ethiopia & Enjoy Ethiopia",
      "Built end-to-end booking flows with Better Auth authentication & email verification",
      "Modeled relational booking, customer, and operational data in PostgreSQL with Prisma",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=500&fit=crop&q=80",
    imageAlt: "Enjoy Ethiopia multi-brand tourism & booking platform",
    liveUrl: "https://www.enjoyethiopia.com/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Better Auth",
      "Prisma",
      "PostgreSQL",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    category: "Full-Stack & Cinema",
    status: "Production Ready",
    title: "StreamFlix",
    subtitle: "Movie Streaming & Virtual Cinema Web App",
    description:
      "Engineered a full-stack platform for discovering and streaming movies and television series. Developed room-based virtual cinemas that allow multiple users to join a shared viewing session with synchronized playback controls.",
    highlights: [
      "Engineered room-based virtual cinemas for multi-user synchronized watch parties",
      "Implemented full-stack streaming workflows & responsive viewing interface",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=500&fit=crop&q=80",
    imageAlt: "StreamFlix Movie Streaming & Virtual Cinema Platform",
    liveUrl: "https://stream-flix-cinema.vercel.app/",
    sourceUrl: "https://github.com/JoHaile/stream-flex",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Client Project",
    status: "Live Application",
    title: "Obed Temba Tuyumvire",
    subtitle: "Conservation & Eco-Tourism Platform — client project (DRC, Congo)",
    description:
      "Client website for Obed Temba Tuyumvire, a conservation leader in Eastern DRC working at the intersection of eco-tourism, community development, and Congo Basin forest protection. Features curated tour packages, editorial stories, testimonials, and contact & speaking-inquiry flows.",
    highlights: [
      "Client project for a conservation leader based in the DRC, Congo",
      "Eco-tourism & community development hub with curated tour packages",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop&q=80",
    imageAlt: "Obed Temba Tuyumvire conservation & eco-tourism platform",
    liveUrl: "https://obedtemba.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "AI & EdTech",
    status: "Featured AI Project",
    title: "Career Guide AI",
    subtitle: "AI Career Planning & Interview Simulator",
    description:
      "AI-powered career planning, skill-gap analysis, and interview-preparation platform. Developed an AI mentor that maps career paths, identifies actionable skill gaps, and creates interactive interview simulations with performance feedback.",
    highlights: [
      "Developed AI mentor for mapping personalized career paths & skill gaps",
      "Created interview simulations providing immediate performance feedback",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&q=80",
    imageAlt: "Career Guide AI Planning & Interview Preparation",
    liveUrl: "https://career-guide-ai-nine.vercel.app/",
    sourceUrl: "https://github.com/JoHaile/career-guide-ai",
    techStack: [
      "Next.js",
      "TypeScript",
      "LLM Integration",
      "Python",
      "Node.js",
    ],
  },
  {
    category: "Full-Stack SaaS",
    status: "2nd Place — Univ. of Gondar Hackathon",
    title: "Pharmacy Inventory & Delivery System",
    subtitle: "Pharmacy Operations & Logistics Platform",
    description:
      "Full-stack pharmacy management & delivery platform built with the Next.js ecosystem. Developed an operations dashboard for inventory, order processing, and delivery management with secure Better Auth authentication and Prisma relational layer. Awarded 2nd place at the University of Gondar hackathon.",
    highlights: [
      "Awarded 2nd Place at the University of Gondar Hackathon",
      "Operations dashboard for inventory, order processing, and delivery workflows",
      "Implemented secure Better Auth authentication & scalable Prisma relational layer",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=800&h=500&fit=crop&q=80",
    imageAlt: "Pharmacy Inventory & Delivery Management System",
    sourceUrl: "https://github.com/JoHaile/pharmacy-inventory-and-delivery",
    techStack: [
      "Next.js",
      "Better Auth",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    category: "Full-Stack Platform",
    status: "Live Application",
    title: "Car Rental Web-App",
    subtitle: "Vehicle Reservation & Rental Platform",
    description:
      "Full-stack rental platform built with Next.js, PostgreSQL/MySQL, and ShadCN UI. Implemented authentication, role-based access control, automated transactional emails, real-time rental updates, and reservation data architecture.",
    highlights: [
      "Implemented RBAC, authentication, and automated transactional email workflows",
      "Designed real-time rental updates and relational data model for vehicles & bookings",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop&q=80",
    imageAlt: "Car Rental Full-Stack Platform",
    liveUrl: "https://car-rental-puce-ten-74.vercel.app/",
    sourceUrl: "https://github.com/JoHaile/car-rental",
    techStack: ["Next.js", "PostgreSQL", "ShadCN UI", "React Hook Form", "Zod"],
  },
  {
    category: "Desktop Application",
    status: "Desktop Game",
    title: "Typing Speed Racer",
    subtitle: "JavaFX Desktop Typing Game",
    description:
      "Desktop typing game built with JavaFX. Developed real-time typing-speed and accuracy tracking with a responsive JavaFX interface, scoring system, gameplay progression, and performance feedback.",
    highlights: [
      "Developed real-time typing-speed and accuracy tracking",
      "Implemented scoring, gameplay progression, and interactive JavaFX interface",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=500&fit=crop&q=80",
    imageAlt: "Typing Speed Racer Desktop Game",
    sourceUrl: "https://github.com/JoHaile/Typing-speed-racer",
    techStack: ["Java", "JavaFX", "Object-Oriented Programming"],
  },
];