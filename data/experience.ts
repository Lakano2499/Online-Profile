export interface TimelineItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  isCurrent?: boolean;
  description?: string;
  highlights?: string[];
  sketchTag?: string;
}

export const educationData: TimelineItem[] = [
  {
    id: "lspu",
    title: "Bachelor of Science in Computer Science",
    institution: "Laguna State Polytechnic University — Sta. Cruz Campus",
    period: "2022 – Present (4th Year)",
    isCurrent: true,
    description:
      "Focusing on software engineering, algorithms, systems design, machine learning, and networking. Active in team-based projects including the Berong SafeScape platform.",
    sketchTag: "Current Studies"
  },
  {
    id: "spc",
    title: "Senior High School (STEM/TVL)",
    institution: "San Pablo Colleges",
    period: "2020 – 2022",
    description:
      "Completed senior high school with specialization in Science, Technology, Engineering, and Mathematics.",
    sketchTag: "Foundations"
  }
];

export const experienceData: TimelineItem[] = [
  {
    id: "rizal-data-entry",
    title: "Data Entry & Administrative Support",
    institution: "Municipality of Rizal, Laguna",
    period: "2 Months",
    highlights: [
      "Managed data entry tasks with high accuracy and efficiency.",
      "Created and formatted PowerPoint presentations for municipal reporting.",
      "Supported office operations and document organization."
    ],
    sketchTag: "Public Service"
  },
  {
    id: "rizal-library",
    title: "Library Assistant & Service Staff",
    institution: "Rizal Re-creation Center",
    period: "1 Month",
    highlights: [
      "Performed data entry and inventory management for the library system."
    ],
    sketchTag: "Records & Support"
  }
];
