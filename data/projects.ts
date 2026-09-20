export interface ProjectLink {
  label: string;
  url: string;
  isPrimary?: boolean;
}

export interface Project {
  id: string;
  title: string;
  featured: boolean;
  badge?: string;
  description: string;
  role: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  links: ProjectLink[];
  sketchNote?: string;
  hasTextPanel?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "safescape",
    title: "Berong SafeScape",
    featured: true,
    badge: "Flagship Project",
    description:
      "A web-based fire safety education platform built for the BFP Santa Cruz community. Features age-segmented learning paths, interactive safety games, quizzes, a badge system, and certificate generation for community members.",
    role: "Team contribution — Developed the Task Master interactive game module within the Kids dashboard.",
    tech: ["Laravel", "Inertia.js", "JavaScript", "Game Logic"],
    image: "/assets/img/project-safescape.jpg",
    imageAlt:
      "Screenshot of the Berong SafeScape fire safety education platform showing the dashboard with learning modules, quizzes, and progress tracking",
    links: [
      {
        label: "Live Site",
        url: "https://bfpscberong.app/",
        isPrimary: true
      }
    ],
    sketchNote: "★ BFP Santa Cruz Platform"
  },
  {
    id: "fire-inspector",
    title: "Fire Inspector Game",
    featured: false,
    description:
      "A complete 2D game built with the Godot engine where players take on the role of a fire inspector, identifying hazards and ensuring building safety through gameplay, asset integration, and level design.",
    role: "Solo project — Full game design and development in Godot.",
    tech: ["Godot", "GDScript", "2D Game Design", "Asset Integration"],
    image: "/assets/img/project-fire-game.png",
    imageAlt:
      "Screenshot of the Fire Inspector Game — a 2D pixel art game where players inspect buildings for fire hazards",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Lakano2499/Fire_Inspector_Game"
      }
    ],
    sketchNote: "Godot 2D Engine"
  },
  {
    id: "ecommerce-app",
    title: "Ecommerce Mobile App",
    featured: false,
    description:
      "A mobile shopping application with product browsing, user authentication, and a dynamic cart system. Built using Flutter with Material Design UI principles and a Figma-based design workflow.",
    role: "Solo project — Mobile UI & full-stack architecture with Flutter.",
    tech: ["Flutter", "Dart", "Figma", "Material Design"],
    image: "/assets/img/project-flutter.jpg",
    imageAlt:
      "Screenshot of a Flutter ecommerce mobile application showing a product listing grid with add-to-cart buttons",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Lakano2499/Ecommerce_Mobile_App"
      }
    ],
    sketchNote: "Flutter + Material UI"
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    featured: false,
    description:
      "A Flutter-based fitness tracking application developed as part of a collaborative team project. Features include workout logging, exercise performance metrics, health dashboard insights, and fitness community updates.",
    role: "Team Contributor",
    tech: ["Flutter", "Dart", "Firebase", "Supabase"],
    hasTextPanel: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/UmaliPrinceGenel/Fitness-Tracker-app"
      }
    ],
    sketchNote: "Flutter Team App"
  }
];
