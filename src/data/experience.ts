export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    company: "TechnoBridge Inc.",
    location: "Remote / Shibuya, Tokyo, Japan",
    period: "April 2022 - May 2025",
    achievements: [
      "Developed custom SaaS platforms and web applications using React, Next.js, Node.js, and MongoDB.",
      "Led a team of developers in delivering scalable, high-performing applications.",
      "Integrated APIs, third-party services, and cloud solutions (AWS, Firebase).",
      "Engineered a microservices architecture for an e-commerce platform, improving deployment speed by 50% and enhancing system reliability using Docker, Kubernetes, and Jenkins pipelines.",
      "Enhanced Node.js application performance by 30% through code optimization and scaling infrastructure over a 6-month project, utilizing AWS and Elastic Load Balancing."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Nihon Digital Works",
    location: "Remote / Osaka, Japan",
    period: "July 2020 – March 2022",
    achievements: [
      "Developed user-friendly interfaces and experiences for mobile and web apps.",
      "Built responsive frontend applications using Vue.js, React, and Tailwind CSS.",
      "Conducted user research and usability testing to enhance app engagement.",
      "Revamped existing digital products by implementing intuitive design principles and leveraging prototyping tools like Figma and Sketch, leading to a 30% increase in user satisfaction scores."
    ]
  }
];
