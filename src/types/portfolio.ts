export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'cybersecurity' | 'fullstack';
  categoryLabel: string;
  subtitle: string;
  description: string;
  image: string; // e.g. /projects/project-1.png
  videoUrl?: string; // e.g. /projects/project-1.mp4
  captionsUrl?: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  type: 'stage' | 'formation' | 'education';
  typeLabel: string;
  duration: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  skills: string[];
  badgeColor?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Avancé", "Intermédiaire"
    iconName?: string;
    tags?: string[];
  }[];
}

export interface ProfileInfo {
  name: string;
  initials: string;
  role: string;
  statusLabel: string;
  isAvailableForPFA: boolean;
  aboutText: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  cvUrl: string;
  avatarUrl?: string;
  education: {
    degree: string;
    year: string;
    institution: string;
    location: string;
    period: string;
  };
}
