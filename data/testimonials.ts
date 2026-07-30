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
      "Yohannes brought a level of craft to our platform that completely transformed how our users experience the product. His attention to detail in both architecture and UI is rare.",
    authorName: "Sarah Chen",
    authorRole: "CTO",
    authorCompany: "Nexus Labs",
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    avatarAlt: "Sarah Chen",
  },
  {
    quote:
      "Working with Yohannes felt like partnering with someone who genuinely cared about the outcome. He doesn't just build features — he thinks about the product holistically.",
    authorName: "Marcus Rivera",
    authorRole: "Product Lead",
    authorCompany: "Frame Studio",
    avatarSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    avatarAlt: "Marcus Rivera",
  },
  {
    quote:
      "The codebase Yohannes delivered was clean, well-documented, and a joy to maintain. He set a standard for engineering quality that our team still follows today.",
    authorName: "Aisha Patel",
    authorRole: "Engineering Manager",
    authorCompany: "Atlas Systems",
    avatarSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    avatarAlt: "Aisha Patel",
  },
]
