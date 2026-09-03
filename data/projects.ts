export interface Project {
  category: string
  status: string
  title: string
  subtitle?: string
  description: string
  highlights?: string[]
  imageSrc: string
  imageAlt: string
  liveUrl?: string
  sourceUrl?: string
  techStack: string[]
}

export const projects: Project[] = [
    {
        category: "Full-Stack & Cinema",
        status: "Production Ready",
        title: "StreamFlix",
        subtitle: "Movie Streaming & Virtual Cinema Web App",
        description: "Engineered a full-stack platform for discovering and streaming movies and television series. Developed room-based virtual cinemas that allow multiple users to join a shared viewing session with synchronized playback controls.",
        highlights: [
            "Engineered room-based virtual cinemas for multi-user synchronized watch parties",
            "Implemented full-stack streaming workflows & responsive viewing interface",
          ],
        imageSrc: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=500&fit=crop&q=80",
        imageAlt: "StreamFlix Movie Streaming & Virtual Cinema Platform",
        liveUrl: "https://github.com/johaile/streamflix",
        sourceUrl: "https://github.com/johaile/streamflix",
        techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Tailwind CSS",
          ],
      },
    {
        category: "AI & Healthcare",
        status: "Featured AI Project",
        title: "RadiAid",
        subtitle: "AI-Assisted Brain MRI Screening Platform",
        description: "AI-assisted brain MRI screening and image-classification web application. Developed a web interface for analyzing brain MRI scans and identifying potential abnormalities using pretrained convolutional neural network (CNN) models.",
        highlights: [
            "Integrated pretrained CNN models for medical-image classification",
            "Presented predicted condition, severity estimate, and model confidence scores",
          ],
        imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=80",
        imageAlt: "RadiAid AI-Assisted Brain MRI Screening Platform",
        liveUrl: "https://github.com/johaile/radiaid",
        sourceUrl: "https://github.com/johaile/radiaid",
        techStack: [
            "Python",
            "CNNs",
            "Next.js",
            "React",
            "REST APIs",
            "Tailwind CSS",
          ],
      },
    {
        category: "AI & EdTech",
        status: "Featured AI Project",
        title: "Career Guide AI",
        subtitle: "AI Career Planning & Interview Simulator",
        description: "AI-powered career planning, skill-gap analysis, and interview-preparation platform. Developed an AI mentor that maps career paths, identifies actionable skill gaps, and creates interactive interview simulations with performance feedback.",
        highlights: [
            "Developed AI mentor for mapping personalized career paths & skill gaps",
            "Created interview simulations providing immediate performance feedback",
          ],
        imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&q=80",
        imageAlt: "Career Guide AI Planning & Interview Preparation",
        liveUrl: "https://github.com/johaile/career-guide-ai",
        sourceUrl: "https://github.com/johaile/career-guide-ai",
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
        status: "Live Application",
        title: "Pharmacy Inventory & Delivery System",
        subtitle: "Pharmacy Operations & Logistics Platform",
        description: "Full-stack pharmacy management & delivery platform built with the Next.js ecosystem. Developed an operations dashboard for inventory, order processing, and delivery management with secure Better Auth authentication and Prisma relational layer.",
        highlights: [
            "Operations dashboard for inventory, order processing, and delivery workflows",
            "Implemented secure Better Auth authentication & scalable Prisma relational layer",
          ],
        imageSrc: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=800&h=500&fit=crop&q=80",
        imageAlt: "Pharmacy Inventory & Delivery Management System",
        liveUrl: "https://github.com/johaile/pharmacy-inventory-system",
        sourceUrl: "https://github.com/johaile/pharmacy-inventory-system",
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
        description: "Full-stack rental platform built with Next.js, PostgreSQL/MySQL, and ShadCN UI. Implemented authentication, role-based access control, automated transactional emails, real-time rental updates, and reservation data architecture.",
        highlights: [
            "Implemented RBAC, authentication, and automated transactional email workflows",
            "Designed real-time rental updates and relational data model for vehicles & bookings",
          ],
        imageSrc: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop&q=80",
        imageAlt: "Car Rental Full-Stack Platform",
        liveUrl: "https://github.com/johaile/car-rental-app",
        sourceUrl: "https://github.com/johaile/car-rental-app",
        techStack: [
            "Next.js",
            "PostgreSQL",
            "ShadCN UI",
            "React Hook Form",
            "Zod",
          ],
      },
    {
        category: "Desktop Application",
        status: "Desktop Game",
        title: "Typing Speed Racer",
        subtitle: "JavaFX Desktop Typing Game",
        description: "Desktop typing game built with JavaFX. Developed real-time typing-speed and accuracy tracking with a responsive JavaFX interface, scoring system, gameplay progression, and performance feedback.",
        highlights: [
            "Developed real-time typing-speed and accuracy tracking",
            "Implemented scoring, gameplay progression, and interactive JavaFX interface",
          ],
        imageSrc: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=500&fit=crop&q=80",
        imageAlt: "Typing Speed Racer Desktop Game",
        liveUrl: "https://github.com/johaile/typing-speed-racer",
        sourceUrl: "https://github.com/johaile/typing-speed-racer",
        techStack: [
            "Java",
            "JavaFX",
            "Object-Oriented Programming",
          ],
      },
  ];
