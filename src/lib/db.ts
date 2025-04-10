import fs from 'fs';
import path from 'path';
import { Project, ContactSubmission } from '@/types';

// Define the path to our JSON database files
const DB_DIR = path.join(process.cwd(), 'data');
const PROJECTS_FILE = path.join(DB_DIR, 'projects.json');
const CONTACTS_FILE = path.join(DB_DIR, 'contacts.json');

// Ensure the data directory exists
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

// Initialize files if they don't exist
if (!fs.existsSync(PROJECTS_FILE)) {
  fs.writeFileSync(PROJECTS_FILE, JSON.stringify([]));
}

if (!fs.existsSync(CONTACTS_FILE)) {
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify([]));
}

// Project methods
export const projectsDb = {
  findMany: async (options: any = {}): Promise<Project[]> => {
    const projects: Project[] = JSON.parse(fs.readFileSync(PROJECTS_FILE, 'utf-8'));
    
    // Apply filtering if needed
    if (options.where?.featured !== undefined) {
      return projects.filter(project => project.featured === options.where.featured);
    }
    
    // Apply sorting
    if (options.orderBy?.createdAt === 'desc') {
      return [...projects].sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }
    
    return projects;
  },
  
  create: async (params: { data: any }): Promise<Project> => {
    const projects: Project[] = JSON.parse(fs.readFileSync(PROJECTS_FILE, 'utf-8'));
    const data = params.data;
    
    const newProject = {
      id: `project-${Date.now()}`,
      title: data.title,
      description: data.description,
      techStack: data.techStack,
      imageUrl: data.imageUrl,
      liveDemo: data.liveDemo,
      githubRepo: data.githubRepo,
      featured: data.featured,
      createdAt: data.createdAt || new Date(),
      updatedAt: data.updatedAt || new Date(),
    } as Project;
    
    projects.push(newProject);
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2));
    
    return newProject;
  },
  
  deleteMany: async (): Promise<void> => {
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify([]));
  }
};

// Contact submission methods
export const contactsDb = {
  findMany: async (): Promise<ContactSubmission[]> => {
    return JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf-8'));
  },
  
  create: async (params: { data: any }): Promise<ContactSubmission> => {
    const contacts: ContactSubmission[] = JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf-8'));
    const data = params.data;
    
    const newContact = {
      id: `contact-${Date.now()}`,
      name: data.name,
      email: data.email,
      message: data.message,
      createdAt: new Date(),
    } as ContactSubmission;
    
    contacts.push(newContact);
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
    
    return newContact;
  },
  
  deleteMany: async (): Promise<void> => {
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify([]));
  }
};

// Mock PrismaClient interface for local development
export const localPrisma = {
  project: projectsDb,
  contactSubmission: contactsDb,
}; 