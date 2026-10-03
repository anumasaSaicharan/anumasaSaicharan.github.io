export interface Project {
  id: string;
  title: string;
  category: string;
  status?: string;
  description: string;
  architecture?: string;
  technologies: string[];
  scale?: string;
  ownership?: string;
  details?: {
    problem?: string;
    solution?: string;
    technicalDecisions?: string[];
  };
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
