export interface EducationEntry {
  degree: string
  institution: string
  location?: string
  description: string
  year: string
}

export const educationEntries: EducationEntry[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Gondar",
    location: "Gondar, Ethiopia",
    description:
      "Relevant study: software engineering, algorithms, database systems, computer networks, and full-stack application development.",
    year: "2022 – 2026",
  },
  {
    degree: "Data Analytics & Cloud Engineering Program",
    institution: "Datanomic",
    location: "Professional Training",
    description:
      "Practical training in Python, SQL, data visualization, cloud infrastructure, and scalable application deployment.",
    year: "Completed",
  },
]
