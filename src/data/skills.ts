export interface SkillCategory {
  title: string;
  icon: string; // Icon name from lucide-react
  skills: string[];
}

export interface TechnicalProficiency {
  name: string;
  percentage: number;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Monitor",
    skills: ["React", "Next.js", "Vue.js", "HTML5", "Tailwind CSS", "TypeScript", "Responsive Design"]
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "ExpressJS", "NestJS", "Python", "Django", "FastAPI", "RESTful API"]
  },
  {
    title: "Database",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "Firebase"]
  },
  {
    title: "DevOps",
    icon: "Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins"]
  }
];

export const technicalProficiency: TechnicalProficiency[] = [
  { name: "Frontend Development", percentage: 95 },
  { name: "Backend Development", percentage: 90 },
  { name: "Database Management", percentage: 90 },
  { name: "DevOps", percentage: 85 }
];
