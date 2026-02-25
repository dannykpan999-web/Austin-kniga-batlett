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
    location: string;
    github: string;
    linkedin?: string;
  };
  education: {
    degree: string;
    institution: string;
    year: string;
  };
  avatar: {
    image: string;
    fallback: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: {
    first: "Haruka",
    last: "Leonhart"
  },
  title: "Full Stack Developer",
  bio: {
    short: "Building innovative web solutions with modern technologies to deliver exceptional user experiences.",
    long: [
      "A versatile Full Stack Developer with 6+ years of experience in developing innovative, scalable web solutions. My expertise spans both frontend and backend technologies.",
      "I focus on creating seamless integration and exceptional user experiences through thoughtful design and robust implementation.",
      "With a proven ability to collaborate with cross-functional teams, I deliver impactful and user-centric products that meet business objectives while delighting users."
    ]
  },
  contact: {
    email: "harukaleonhart@gmail.com",
    location: "Tokyo, Japan",
    github: "https://github.com/darkmage108",
    linkedin: undefined // Set to undefined if not available, or provide URL if you have one
  },
  education: {
    degree: "Bachelor's in Computer Science",
    institution: "University of Tokyo",
    year: "2022"
  },
  avatar: {
    image: "img/avatar.png",
    fallback: "HL"
  }
};
