/**
 * Core TypeScript interfaces for Sowmya's Developer Portfolio
 */

export type ProjectCategory = 'web' | 'python' | 'fullstack' | 'frontend' | 'backend';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  slug: string;
}

export interface DeveloperInfo {
  name: string;
  role: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  certifications: string[];
  highlights: string[];
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'collaboration' | 'job' | 'freelance' | 'other';
  message: string;
  timestamp: Date;
}
