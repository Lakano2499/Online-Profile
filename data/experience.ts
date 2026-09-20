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

export interface CollaborationItem {
  id: string;
  title: string;
  context: string;
  role: string;
  responsibilities: string[];
  sketchTag?: string;
}

export const educationData: TimelineItem[] = [
  {
    id: "lspu",
    title: "Bachelor of Science in Computer Science",
    institution: "Laguna State Polytechnic University — Sta. Cruz Campus",
    period: "2023 – 2027 (Expected Graduation · 4th Year)",
    isCurrent: true,
    description:
      "Specializing in software development and data analytics. Coursework covers software engineering, data structures & algorithms, machine learning, systems architecture, and computer networking.",
    sketchTag: "Current Studies"
  },
  {
    id: "spc",
    title: "Senior High School (STEM Strand)",
    institution: "San Pablo Colleges",
    period: "2020 – 2022",
    description:
      "Graduated under the Science, Technology, Engineering, and Mathematics strand with core academic foundations in mathematics and science.",
    sketchTag: "Academic Foundations"
  }
];

export const experienceData: TimelineItem[] = [
  {
    id: "rizal-data-entry",
    title: "Data Entry & Administrative Support",
    institution: "Municipality of Rizal, Laguna",
    period: "2 Months",
    highlights: [
      "Managed municipal data entry tasks with high accuracy and efficiency.",
      "Prepared and formatted presentation decks for municipal office reporting.",
      "Assisted administrative staff with document filing and office operations."
    ],
    sketchTag: "Public Service"
  },
  {
    id: "rizal-library",
    title: "Library Assistant & Service Staff",
    institution: "Rizal Re-creation Center",
    period: "1 Month",
    highlights: [
      "Assisted in cataloging, book inventory records, and patron service support.",
      "Performed digital data entry tasks to maintain organized record systems."
    ],
    sketchTag: "Records & Support"
  }
];

export const collaborationData: CollaborationItem[] = [
  {
    id: "safescape-collab",
    title: "Berong SafeScape Platform",
    context: "LSPU Academic Capstone Project",
    role: "Module Developer & Team Contributor",
    responsibilities: [
      "Collaborated with teammate to build the interactive fire safety educational platform.",
      "Developed and integrated the interactive Task Master educational module.",
      "Participated in code integration, UI component alignment, and client-side testing."
    ],
    sketchTag: "Web Platform"
  },
  {
    id: "fitness-collab",
    title: "Rockies Fitness Tracker App",
    context: "Collaborative Mobile Application",
    role: "Frontend & Integration Contributor",
    responsibilities: [
      "Contributed to Flutter mobile UI layouts and component modularization.",
      "Assisted in state integration and workout logging feature testing.",
      "Collaborated on backend data synchronization with Firebase and Supabase."
    ],
    sketchTag: "Mobile App"
  }
];
