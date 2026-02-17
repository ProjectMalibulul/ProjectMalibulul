
import { TeamMember, Project } from './types.ts';

export const TEAM: TeamMember[] = [
  {
    name: "Prakyath Nayak",
    github: "PrakyathPNayak",
    role: "Full Stack Architect",
    specialty: "Systems Architecture & Cloud",
    avatar: "https://github.com/PrakyathPNayak.png"
  },
  {
    name: "CyberKNP",
    github: "Cyberknp",
    role: "Security & Backend",
    specialty: "Network Security & Logic",
    avatar: "https://github.com/Cyberknp.png"
  },
  {
    name: "Lazy Picker",
    github: "Lazy-picker",
    role: "Automation Lead",
    specialty: "Workflow Efficiency & DevOps",
    avatar: "https://github.com/Lazy-picker.png"
  },
  {
    name: "Akshara",
    github: "Akshara026",
    role: "UI/UX & Frontend",
    specialty: "Interactive Design & Experience",
    avatar: "https://github.com/Akshara026.png"
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    title: "Small Scale Web Utilities",
    description: "A collection of micro-tools designed for immediate public utility, ranging from converters to productivity scrapers.",
    tag: "Toolbox"
  },
  {
    title: "Community Automation Bots",
    description: "Intelligent Discord and Telegram integrations that manage community growth and automated moderation.",
    tag: "Automation"
  },
  {
    title: "Open Knowledge Base",
    description: "Shared repositories of documentation and resources for junior developers entering the ecosystem.",
    tag: "Education"
  }
];
