// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  liveDemo?: string;
  githubRepo?: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Contact form submission interface
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Experience interface
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

// Skill interface
export interface Skill {
  category: string;
  items: string[];
}

// Education interface
export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
}

// Achievement interface
export interface Achievement {
  title: string;
  description: string;
} 