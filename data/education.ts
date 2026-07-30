export interface EducationEntry {
  degree: string
  institution: string
  description: string
  year: string
}

export const educationEntries: EducationEntry[] = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "Addis Ababa University",
    description:
      "Focused on software engineering, systems design, algorithms, and human-centered computing.",
    year: "2024",
  },
  {
    degree: "Data Analyst & Cloud Engineering",
    institution: "Datanomics",
    description:
      "Comprehensive training in data analysis, data presentation, and cloud engineering — turning raw data into actionable insights.",
    year: "2023",
  },
  {
    degree: "Full Stack Web Development",
    institution: "Independent Learning & Bootcamps",
    description:
      "Intensive self-directed study covering modern frameworks, deployment pipelines, and production architecture.",
    year: "2022",
  },
]
