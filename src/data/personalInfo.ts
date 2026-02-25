export interface PersonalInfo {
  name: {
    first: string;
    last: string;
  };
  title: string;
  bio: {
    short: string;
    long: string[];
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin?: string;
  };
  education: {
    degree: string;
    institution: string;
    year: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: {
    first: "Austin",
    last: "Bartlett"
  },
  title: "Senior Full Stack Developer",
  bio: {
    short: "Senior Full-Stack Software Engineer with 7+ years of experience building high-performance web applications.",
    long: [
      "Senior Full-Stack Software Engineer with 7+ years of experience building high-performance web applications. Expert in React, TypeScript, Next.js, Remix, and modern frontend architectures, with strong backend knowledge in Node.js and Python.",
      "Skilled in AI/ML applications, state management, performance optimization, testing strategies, cloud deployments, and data visualization.",
      "Passionate about delivering scalable, maintainable, and accessible software solutions that make a real impact for users and businesses alike."
    ]
  },
  contact: {
    email: "austinkbartlettwork@gmail.com",
    phone: "(248) 925-2139",
    location: "Royal Oak, Michigan 48067",
    github: "",
    linkedin: "https://linkedin.com/in/austin-bartlett-in/"
  },
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Oakland University",
    year: "2023 – 2025"
  },
};
