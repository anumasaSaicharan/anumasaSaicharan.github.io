import { Project, Experience, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'emtransq',
    title: 'EmtransQ',
    category: 'Product Traceability & Authentication | SaaS',
    status: 'Production',
    architecture: 'Monolithic SaaS',
    ownership: 'Sole full-stack owner',
    description: 'Production monolithic SaaS platform for product traceability and authentication. Generates unique product UIDs and QR labels at production, then enables end users to verify product authenticity through a web-based verification flow.',
    technologies: ['Java 17', 'Spring Boot', 'React.js', 'MySQL', 'Redis', 'AWS EC2', 'Nginx', 'Spring Security'],
    details: {
      problem: 'Counterfeit products require a mechanism for manufacturers and end users to verify whether a product originated from the genuine manufacturer.',
      solution: 'The platform generates unique UIDs during production and associates them with QR-based labels. Users scan the QR code and are redirected to a web verification page.',
      technicalDecisions: [
        'Monolithic Spring Boot architecture',
        'Tenant-isolated databases',
        'Tenant ID propagated through request context',
        'Backend tenant authorization before tenant-specific operations',
        'Redis for fast authentication/verification',
        'Spring Security',
        'OAuth authentication',
        'Session handling',
        'Single-device login',
        'AWS EC2 deployment',
        'Nginx',
        'User/volume-based SaaS subscription model.'
      ]
    }
  },
  {
    id: 'savvynutri',
    title: 'Savvy Nutri',
    category: 'Pharmaceutical LIMS/MES',
    // status: 'In Development',
    architecture: 'Monolithic Application',
    ownership: 'End-to-end development ownership',
    description: 'Pharmaceutical Manufacturing Execution System covering the manufacturing lifecycle from customer demand and procurement through quality checks, production, packing, shipment, and billing.',
    technologies: ['Java 17', 'Spring Boot', 'React', 'MySQL', 'AWS EC2'],
    details: {
      technicalDecisions: [
        'End-to-end application ownership',
        'Database design/development ownership',
        'RBAC',
        'Audit-oriented record keeping',
        'Workflow: Procurement → QC → QA → Production → BMR → IPQC → Finished Goods → Packing → Shipment/Billing'
      ]
    }
  },
  {
    id: 'vyaparmitra',
    title: 'Vyapar Mitra',
    category: 'Retailer & Distributor Engagement',
    scale: '~70,000 users',
    description: 'Hierarchy-based retailer and distributor engagement platform focused on sales programs, loyalty campaigns, coupon redemption, cashback programs, and user engagement.',
    technologies: ['Java 17', 'Spring Boot', 'React', 'MySQL', 'AWS EC2'],
    details: {
      technicalDecisions: [
        'Hierarchical access control',
        'Role-based access control',
        'Retailer/distributor workflows',
        'Loyalty programs',
        'Coupon/cashback programs',
        'Sales engagement'
      ]
    }
  },
  {
    id: 'subeejkisan',
    title: 'Subeej Kisan',
    category: 'Farmer Information & Operations',
    scale: '~150,000 farmers',
    description: 'Farmer-focused information and engagement platform supporting hierarchical operations and tracking from organizational levels through farmer-level interactions.',
    technologies: ['Java 17', 'Spring Boot', 'React', 'MySQL', 'AWS EC2']
  },
  {
    id: 'mcrc',
    title: 'MCRC',
    category: 'Agricultural Research Operations',
    description: 'Enterprise agricultural research operations platform supporting farm operations, inventory handling, central-store activities, equipment management, and repair & maintenance workflows.',
    technologies: ['Java 17', 'Spring Boot', 'Microsoft SQL Server', 'IBM Cloud']
  },
  {
    id: 'shivashakti',
    title: 'Primary Serialization Application',
    category: 'Product Traceability & Verification',
    // status: 'In Development',
    description: 'Primary serialization application for pharmaceutical industry that extends QR/UID-based product authentication workflows with industrial printing integration.',
    technologies: ['Java 17', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'AWS EC2', 'Kafka'],
    details: {
      technicalDecisions: [
        'Domino industrial printers integration',
        'Kafka is used as part of the application\'s event-driven processing workflow.'
      ]
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'Cognivox Solutions',
    role: 'Senior Java Software Engineer',
    period: 'Sep 2025 – Present',
    description: [
      'Own EmtransQ end-to-end as a production SaaS platform, covering backend, frontend, database, authentication, multi-tenancy, subscriptions, and deployment.',
      'Built EmtransQ as a monolithic Java 17 / Spring Boot application with React, MySQL, Redis, AWS EC2, and Nginx.',
      'Implemented tenant isolation using tenant-specific databases and tenant context validation across requests.',
      'Implemented OAuth authentication, session handling, Spring Security, and single-device login.',
      'Used Redis specifically for fast product authentication and verification to minimize repeated database/network overhead during QR/UID verification.',
      'Designed UID generation and QR-based product authentication workflows for counterfeit detection and product verification.',
      'Directed 3–4 junior developers on module implementation and QA while retaining ownership of system design, integration decisions, and releases.',
      'Independently built and maintain Savvy Nutri, a monolithic pharmaceutical LIMS currently under development.',
      'Manage AWS EC2 deployments, production releases, and server configuration for owned platforms.'
    ]
  },
  {
    id: 'exp2',
    company: 'Empover i-Tech Pvt Ltd',
    role: 'Assistant System Engineer (Java Developer)',
    period: 'Apr 2023 – Sep 2025',
    description: [
      'Developed and maintained backend services and APIs as a core contributor to enterprise applications.',
      'Worked extensively with Spring Boot, React, and MySQL to deliver end-to-end features.',
      'Contributed to the development of Vyapar Mitra (~70,000 users) and Subeej Kisan (~150,000 farmers), implementing hierarchical access controls and loyalty program workflows.',
      'Participated in application deployment and maintenance processes.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java (8/17)', 'SQL (Structured Query Language)', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Backend Frameworks',
    skills: ['Spring Boot', 'Spring Security', 'Hibernate', 'Spring Cloud', 'RESTful Microservices']
  },
  {
    title: 'Databases & Caching',
    skills: ['MySQL', 'Microsoft SQL Server', 'Redis', 'Distributed Caching (Caffeine, Ehcache)']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Amazon Web Services (AWS EC2, S3)', 'Nginx', 'IBM Cloud', 'Git', 'Maven']
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Flutter', 'UI Components', 'HTML/CSS']
  },
  {
    title: 'Testing & Tools',
    skills: ['JUnit', 'JMeter', 'Postman', 'API Testing']
  },
  {
    title: 'Core Concepts',
    skills: [
      'Multi-Tenant SaaS Architecture',
      'System Design',
      'Database Optimization',
      'Workflow Automation',
      'Agile Methodology',
      'Role-Based Access Control'
    ]
  }
];
