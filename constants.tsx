import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EmtransQ',
    category: 'Internal SaaS Platform',
    description: 'Internal SaaS application providing secure QR code product traceability, loyalties, AI-powered supply chain insights, and product authentication from production to consumer.',
    image: '/images/emtransq.jpg',
    link: 'https://linkedin.com/in/sai-charan-anumasa',
    tags: ['Java 17', 'Spring Boot', 'React.js', 'AWS']
  },
  {
    id: '2',
    title: 'Savvy Nutri',
    category: 'Manufacturing Automation (LIMS)',
    description: 'An end-to-end Laboratory Information Management System (LIMS) covering process management from raw material procurement to dispatch for pharmaceutical manufacturing.',
    image: '/images/savvy_nutri.jpg',
    link: 'https://linkedin.com/in/sai-charan-anumasa',
    tags: ['Java', 'Spring Boot', 'Traceability', 'LIMS']
  },
  {
    id: '3',
    title: 'Vyapar Mitra',
    category: 'Trade & Commerce',
    description: 'A platform for Nuziveedu Seeds to engage retailers and distributors. Features loyalty program campaigns, redemption programs, crop disease diagnosis, knowledge center, mandi prices, and full hierarchy management.',
    image: '/images/vyapar_mitra.jpg',
    link: 'https://linkedin.com/in/sai-charan-anumasa',
    tags: ['REST APIs', 'Hierarchical RBAC', 'React']
  },
  {
    id: '4',
    title: 'Subeej Kisan',
    category: 'Agri-Tech Solutions',
    description: 'Farmer influencer engagement platform for Nuziveedu Seeds. Connects directly with Vyapar Mitra to ensure full transparency and hierarchy management for the agricultural supply chain.',
    image: '/images/subeej_kisan.jpg',
    link: 'https://linkedin.com/in/sai-charan-anumasa',
    tags: ['Agri-Tech', 'Farmer App', 'Transparency']
  },
  {
    id: '5',
    title: 'MCRC',
    category: 'Internal Operations',
    description: 'Internal research operations platform for Corteva Agriscience. Facilitates farm operations, inventory management, central store tracking, and repair & maintenance logs.',
    image: '/images/mcrc.jpg',
    link: 'https://linkedin.com/in/sai-charan-anumasa',
    tags: ['Internal Tools', 'Asset Management', 'Tracking']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'Cognivox Solutions',
    role: 'Senior Java Software Engineer',
    period: 'Sep 2025 – Present',
    description: [
      'Sole full-stack owner of EmtransQ, a multi-tenant SaaS platform (Java, Spring Boot, React.js, MySQL) – covering tenant isolation, subscriptions, and payment integration.',
      'Directed 3–4 junior developers on module-level implementation and QA, while personally owning system design, integration decisions, and release sign-off.',
      'Accelerated feature delivery across multiple concurrent enterprise products while maintaining full ownership of architecture, implementation, debugging, and production releases.',
      'Built and independently maintain Savvy Nutri, a pharmaceutical LIMS covering procurement, production, quality assurance, inventory, and finance workflows.',
      'Own V-Square ERP end-to-end, including configurable approval workflows, employee operations, settlement processing, and role-based access control.',
      'Delivered a continuous pipeline of additional modules and internal tools – including agricultural traceability, UID/label printing systems, and retailer engagement platforms – across multiple concurrent product lines.',
      'Manage AWS EC2 deployments, production releases, and server configuration for all owned platforms.'
    ]
  },
  {
    id: 'exp2',
    company: 'Empover i-Tech Pvt Ltd',
    role: 'Assistant System Engineer (Java Developer)',
    period: 'Apr 2023 – Sep 2025',
    description: [
      'Personally developed and maintained Spring Boot REST APIs for a platform serving over 200,000 users; optimized query patterns and endpoint logic to cut average API response time by roughly 25%.',
      'Built reusable React.js components adopted across the product’s core screens, supporting a platform with over one million monthly visits.',
      'Introduced Redis caching and reworked SQL indexing on high-traffic endpoints, cutting database load and latency by roughly 30% on the modules I owned.',
      'Implemented secure REST integrations with payment gateways and third-party services, handling upwards of 50,000 transactions monthly with zero reported integration failures.',
      'Delivered additional agri-focused tools – Vyapar Mitra (retailer engagement), MCRC (farm operations), and UID/label printing systems.'
    ]
  },
  {
    id: 'exp3',
    company: 'Empover i-Tech Pvt Ltd',
    role: 'Java Developer Intern',
    period: 'Oct 2022 – Mar 2023',
    description: [
      'Implemented distributed caching using Redis, Caffeine and Ehcache, improving application performance by 35%.',
      'Optimized SQL queries and developed backend APIs supporting over 10,000 daily transactions.',
      'Developed React.js UI enhancements improving user experience and reducing page abandonment by 15%.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Java (8, 11, 17) & Spring Boot', level: 98 },
  { name: 'React.js, Redux & ES6+', level: 92 },
  { name: 'Microservices & RESTful APIs', level: 95 },
  { name: 'AWS (EC2, S3) & Cloud Ops', level: 88 },
  { name: 'MySQL, Redis & Hibernate', level: 94 }
];

export const EDUCATION = [
  {
    degree: 'B.Tech in Electronics & Communication Engineering',
    institution: 'Vaagdevi Engineering College',
    period: '2019 – 2022'
  },
  {
    degree: 'Diploma in Engineering',
    institution: 'Government Polytechnic College',
    period: '2016 – 2019'
  }
];
