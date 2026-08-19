export interface Testimonial {
  quote: string
  authorName: string
  authorRole: string
  authorCompany: string
  avatarSrc: string
  avatarAlt: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Yohannes architected our multi-brand travel platform in Next.js and implemented secure Better Auth workflows flawlessly. Excellent code quality and speed.",
    authorName: "Travel Platform Lead",
    authorRole: "Engineering Lead",
    authorCompany: "Travel Ethiopia",
    avatarSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    avatarAlt: "Engineering Lead, Travel Ethiopia",
  },
  {
    quote:
      "As Scrum Master and developer, Yohannes coordinated daily stand-ups while building role-based authentication across student and admin apps. Dependable engineering.",
    authorName: "EdTech Product Lead",
    authorRole: "Product Manager",
    authorCompany: "EDit Educational Services PLC",
    avatarSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    avatarAlt: "Product Manager, EDit Educational Services",
  },
  {
    quote:
      "Yohannes automated our build/deployment workflows with CI/CD and built accessible Next.js UI components quickly. Highly recommended for any dev team.",
    authorName: "Tech Lead",
    authorRole: "Senior Engineer",
    authorCompany: "NextPulse Labs",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    avatarAlt: "Senior Engineer, NextPulse Labs",
  },
]
