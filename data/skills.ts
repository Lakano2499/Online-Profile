export interface SkillGroup {
  id: string;
  category: string;
  icon: string;
  annotation?: string;
  skills: string[];
}

export const skillsData: SkillGroup[] = [
  {
    id: "languages",
    category: "Languages",
    icon: "code",
    annotation: "Core programming",
    skills: ["Python", "Dart", "JavaScript", "HTML", "CSS", "GDScript"]
  },
  {
    id: "frameworks",
    category: "Frameworks & Tools",
    icon: "tools",
    annotation: "App & game dev",
    skills: ["Flutter", "Godot", "Bootstrap", "VS Code", "Git", "GitHub"]
  },
  {
    id: "ml-nlp",
    category: "Machine Learning & NLP",
    icon: "brain",
    annotation: "Applied models",
    skills: [
      "BERT",
      "spaCy",
      "NLTK",
      "Text Classification",
      "Jupyter Notebook"
    ]
  },
  {
    id: "networking",
    category: "Networking",
    icon: "network",
    annotation: "Cisco & protocols",
    skills: [
      "Cisco IOS",
      "Routing Protocols",
      "Packet Tracer",
      "Network Topologies",
      "CLI"
    ]
  },
  {
    id: "collaboration",
    category: "Collaboration",
    icon: "team",
    annotation: "Agile & git flow",
    skills: [
      "Team Projects",
      "GitHub Collaboration",
      "Agile Workflows",
      "Code Review"
    ]
  }
];
