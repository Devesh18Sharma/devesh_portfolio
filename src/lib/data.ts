import { Experience, Skill, Education, Achievement, Project } from "@/types";

export const personalInfo = {
  name: "Devesh Sharma",
  location: "New Delhi, India",
  email: "devesh181002@gmail.com",
  mobile: "+91 8800480000",
  resumeUrl: "https://drive.google.com/file/d/1zEoL6FtFfag8z14r9K8o5gTIRVmVMKZq/view?usp=sharing",
  links: {
    linkedin: "https://linkedin.com/in/devesh-sharma-87242a14b",
    github: "https://github.com/Devesh18Sharma",
    leetcode: "https://leetcode.com/u/Devman_24",
    portfolio: "/"
  },
  tagline: "Full-Stack Web Developer | Problem Solver | Innovator",
  shortBio: "I'm a passionate full-stack developer with expertise in modern web technologies, delivering scalable and user-centric solutions.",
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "SDE Intern (Full-Stack Developer)",
    company: "Zest Infotech",
    location: "Remote – Seattle, US",
    period: "Aug 2024 – Present",
    description: [
      "Enhanced UI responsiveness by 95% across 10+ device types using React Ionic, ensuring seamless user experience.",
      "Designed and deployed a robust Cheating Prevention System, securing 1,000+ live exams with features like Screen Change Detection (35% fewer incidents) and Browser Lock (50% compliance improvement)."
    ],
    technologies: ["React Ionic", "UI/UX", "Security Systems"]
  },
  {
    id: "exp-2",
    title: "Junior Developer Consultant",
    company: "SwipeSwipe",
    location: "Remote – Brooklyn, US",
    period: "Apr 2024 – Aug 2024",
    description: [
      "Integrated 200+ online stores, including Zara, H&M, and Converse, into a Chrome extension, boosting user engagement by 20%.",
      "Reduced bug occurrence by 15% by streamlining store configurations and enhancing integration workflows."
    ],
    technologies: ["Chrome Extensions", "Integration", "Debugging"]
  },
  {
    id: "exp-3",
    title: "SDE Intern (Full-Stack Developer)",
    company: "Immersfy",
    location: "Remote – New Delhi, India",
    period: "Sep 2023 – Nov 2023",
    description: [
      "Optimized UI, resulting in a 25% increase in website traffic and improved user satisfaction.",
      "Reduced response latency by 48% through strategic code optimization, database tuning, and API performance enhancements."
    ],
    technologies: ["UI Optimization", "Performance Enhancement", "API Development"]
  }
];

export const education: Education[] = [
  {
    institution: "ADGITM, GGSIPU",
    degree: "B.Tech in Information Technology",
    period: "2021 – 2025",
    location: "New Delhi, India",
    gpa: "9.2/10 (up to 7th Semester)"
  },
  {
    institution: "Kendriya Vidyalaya Keshavpuram",
    degree: "12th CBSE Board",
    period: "2021",
    location: "New Delhi, India",
    gpa: "91%"
  },
  {
    institution: "Kendriya Vidyalaya Keshavpuram",
    degree: "10th CBSE Board",
    period: "2019",
    location: "New Delhi, India",
    gpa: "92.4%"
  }
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["C", "C++", "JavaScript", "TypeScript", "Python", "Golang", "HTML", "CSS"]
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React.js", "Redux", "Express.js", "Node.js", "Tailwind CSS", "Bootstrap", "TensorFlow", "PyTorch"]
  },
  {
    category: "Databases",
    items: ["NoSQL", "MongoDB", "MySQL", "PostgreSQL", "Prisma"]
  },
  {
    category: "Dev Tools",
    items: ["AWS", "Vercel", "Railway", "Render", "Strapi", "GrafBase", "Git", "GitHub", "Docker", "RESTful APIs"]
  }
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Automate Hub",
    description: "B2C SaaS platform integrating Google Drive, Slack, and Notion, with real-time workflows increasing productivity by 45% and reducing management time by 50%.",
    techStack: ["Next.js", "MERN", "TypeScript", "Prisma", "Uploadcare", "Stripe", "Clerk", "Ngrok", "Bun", "Neon-Tech"],
    imageUrl: "/images/projects/automate_hub.png",
    liveDemo: "https://automate-hub-ltso-bw6u2er9e-devesh18sharmas-projects.vercel.app/",
    githubRepo: "https://github.com/Devesh18Sharma/Automate_Hub",
    featured: true,
    createdAt: new Date("2023-12-01"),
    updatedAt: new Date("2024-02-15")
  },
  {
    id: "project-2",
    title: "Kadam Shoes",
    description: "E-commerce platform with Next.js and Stripe, achieving a 40% surge in sales conversions and enhancing user experience to drive significant digital revenue growth.",
    techStack: ["React.js", "Strapi", "Stripe", "Cloudinary", "Redux", "JavaScript", "Tailwind CSS", "Vercel", "Render"],
    imageUrl: "/images/projects/kadam-shoes.png",
    liveDemo: "https://kadam-shoes.vercel.app/",
    githubRepo: "https://github.com/Devesh18Sharma/shoe-store-frontend",
    featured: true,
    createdAt: new Date("2023-09-01"),
    updatedAt: new Date("2024-01-10")
  },
  {
    id: "project-3",
    title: "Connectify",
    description: "Secure, real-time P2P communication tool with video, messaging, and screen-sharing capabilities for seamless collaboration.",
    techStack: ["WebRTC", "Firebase", "TypeScript", "Next.js", "Node.js"],
    imageUrl: "/images/projects/connectify.png",
    githubRepo: "https://github.com/Devesh18Sharma/Connectify",
    featured: false,
    createdAt: new Date("2023-07-15"),
    updatedAt: new Date("2023-11-20")
  },
  {
    id: "project-4",
    title: "Fusion-Vault",
    description: "Collaborative platform for tech project showcases, integrating cloud storage and responsive UI for improved user experience.",
    techStack: ["TypeScript", "Next.js", "React.js", "GrafBase", "Google Cloud", "Cloudinary"],
    imageUrl: "/images/projects/Fusion-Vault.png",
    githubRepo: "https://github.com/Devesh18Sharma/FusionVault",
    featured: false,
    createdAt: new Date("2023-05-10"),
    updatedAt: new Date("2023-09-05")
  },
  {
    id: "project-5",
    title: "Real-Time Chat App",
    description: "Real-time chat application with chat rooms and secure data handling using Socket.IO for seamless communication.",
    techStack: ["React", "Node.js", "Express", "Socket.IO"],
    imageUrl: "/images/projects/chat_app.png",
    liveDemo: "https://frontend-real-time-app.vercel.app/",
    featured: false,
    createdAt: new Date("2023-04-01"),
    updatedAt: new Date("2023-06-15")
  },
  {
    id: "project-6",
    title: "Meme Creator App",
    description: "Simple, user-friendly meme generation tool allowing users to create custom memes with various templates.",
    techStack: ["React.js", "HTML", "CSS"],
    imageUrl: "/images/projects/meme-creator.png",
    liveDemo: "https://meme-creator-app-m6pb.vercel.app/",
    featured: false,
    createdAt: new Date("2023-02-20"),
    updatedAt: new Date("2023-03-10")
  }
];

export const achievements: Achievement[] = [
  {
    title: "Technical Head, Quintessence ADGITM",
    description: "Led a team of 23 developers, organizing 5+ successful tech events"
  },
  {
    title: "Content Head, E-Cell ADGITM",
    description: "Managed content strategy, increasing social media engagement by 40%"
  },
  {
    title: "Winner, GDSC Hackathon 2022",
    description: "Developed an innovative solution, securing first place among 100+ teams"
  },
  {
    title: "Top 5 Finalist, Vihaan Hackathon, DTU 2023",
    description: "Created a sustainable urban mobility solution"
  },
  {
    title: "Honorable Mention, National Youth Parliament, Hansraj College DU",
    description: "Recognized for exceptional leadership and oratory skills"
  },
  {
    title: "Open Source Contributor",
    description: "Contributed to 3+ popular open-source projects, resolving critical issues"
  },
  {
    title: "Problem Solving",
    description: "Solved 300+ DSA problems on Leetcode and other coding platforms"
  }
]; 