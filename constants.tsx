import { Project, Experience, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'emtransq',
    title: 'EmtransQ',
    category: 'Product Traceability & Authentication | SaaS',
    architecture: 'Multi-Tenant SaaS',
    ownership: 'Sole full-stack owner',
    description: 'Production multi-tenant SaaS platform for product traceability and authentication. Generates unique product UIDs and QR labels at production and enables end users to verify product authenticity through a web-based verification flow.',
    technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Redis', 'Spring Security', 'AWS EC2', 'Nginx'],
    details: {
      technicalDecisions: [
        'Multi-tenant architecture',
        'Tenant-isolated databases',
        'Tenant ID propagation through request context',
        'Backend tenant authorization',
        'Redis-based verification',
        'Spring Security & OAuth authentication',
        'Session handling & single-device login',
        'Subscription workflows'
      ]
    }
  },
  {
    id: 'savvynutri',
    title: 'Savvy Nutri',
    category: 'Pharmaceutical LIMS/MES',
    architecture: 'Monolithic Application',
    ownership: 'End-to-end development ownership',
    description: 'End-to-end pharmaceutical manufacturing platform covering the lifecycle from customer demand and procurement through quality checks, production, packing, shipment, and billing.',
    technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'AWS EC2'],
    details: {
      technicalDecisions: [
        'Backend workflows and database structures',
        'Role-Based Access Control (RBAC)',
        'Business validations and end-to-end traceability',
        'Audit-oriented record keeping',
        'Workflow: Procurement → QC → QA → Production → BMR → IPQC → Finished Goods → Packing → Shipment/Billing'
      ]
    }
  },
  {
    id: 'primaryserialization',
    title: 'Primary Serialization Application',
    category: 'Product Traceability & Verification',
    description: 'Primary serialization application extending UID/QR-based product traceability and verification workflows with industrial printing integration.',
    technologies: ['Java', 'Spring Boot', 'React.js', 'TypeScript', 'MySQL', 'AWS EC2', 'Kafka'],
    details: {
      technicalDecisions: [
        'Industrial printers integration',
        'Kafka-based event-driven processing for serialization workflows'
      ]
    }
  },
  {
    id: 'vyaparmitra',
    title: 'Vyapar Mitra',
    category: 'Retailer & Distributor Engagement',
    scale: '~70,000 users',
    description: 'Employee, Retailer and distributor engagement platform supporting hierarchical operations, role-based access control, sales programs, loyalty campaigns, coupon redemption, cashback programs, and user engagement workflows.',
    technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'AWS EC2'],
    details: {
      technicalDecisions: [
        'Hierarchical operations',
        'Role-based access control',
        'Sales programs and loyalty campaigns',
        'Coupon redemption & cashback programs'
      ]
    }
  },
  {
    id: 'subeejkisan',
    title: 'Subeej Kisan',
    category: 'Farmer Information & Operations',
    scale: '~150,000 farmers',
    description: 'Farmer-focused information and engagement platform supporting hierarchical organizational operations and tracking from organizational levels through farmer-level interactions.',
    technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'AWS EC2']
  },
  {
    id: 'mcrc',
    title: 'MCRC',
    category: 'Agricultural Research Operations',
    description: 'Enterprise agricultural research operations platform supporting farm operations, inventory handling, central-store activities, equipment management, and repair and maintenance workflows.',
    technologies: ['Java', 'Spring Boot', 'Microsoft SQL Server', 'IBM Cloud']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'Cognivox Solutions',
    role: 'Senior Java Software Engineer',
    period: 'Sep 2025 – Present',
    description: [
      'Sole full-stack owner of EmtransQ, a production multi-tenant SaaS platform built with Java, Spring Boot, React.js, and MySQL.',
      'Designed and implemented multi-tenant architecture, including tenant-isolated databases, context propagation, and subscription workflows.',
      'Work directly with clients to gather requirements, propose technical solutions, and provide deployment and production support.',
      'Directed 3–4 junior developers across module implementation and QA while owning system design and release sign-off.',
      'Built and independently maintain Savvy Nutri, a pharmaceutical LIMS/MES for end-to-end manufacturing workflows.',
      'Delivered a primary serialization and product verification application integrating industrial printers and Kafka-based event processing.',
      'Manage AWS EC2 deployments, Nginx configuration, production releases, and operational support.'
    ]
  },
  {
    id: 'exp2',
    company: 'Empover i-Tech Pvt Ltd',
    role: 'Assistant System Engineer (Java Developer)',
    period: 'Apr 2023 – Sep 2025',
    description: [
      'Developed and maintained Spring Boot REST APIs for platforms serving over 200,000 users; optimized SQL queries, reducing average API response time by ~25%.',
      'Implemented Redis caching and SQL indexing for high-traffic endpoints, reducing database load and latency by ~30%.',
      'Developed secure REST integrations with payment gateways and third-party services, supporting >50,000 transactions monthly.',
      'Built reusable React.js components and integrated frontend workflows for a platform receiving over 1 million monthly visits.',
      'Maintained backend functionality for Vyapar Mitra, Subeej Kisan, MCRC, and UID/label printing systems.'
    ]
  },
  {
    id: 'exp3',
    company: 'Empover i-Tech Pvt Ltd',
    role: 'Java Developer Intern',
    period: 'Oct 2022 – Mar 2023',
    description: [
      'Implemented distributed caching using Redis, Caffeine, and Ehcache, improving application performance by ~35%.',
      'Optimized SQL queries and developed backend APIs supporting over 10,000 daily transactions.',
      'Developed React.js UI enhancements and API integrations, improving user experience and reducing page abandonment by ~15%.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java (8/17)', 'SQL']
  },
  {
    title: 'Backend Frameworks',
    skills: ['Spring Boot', 'Spring Security', 'Hibernate', 'Spring Cloud', 'RESTful APIs', 'Microservices']
  },
  {
    title: 'Databases & Caching',
    skills: ['MySQL', 'Microsoft SQL Server', 'Redis', 'SQL Optimization', 'Database Indexing']
  },
  {
    title: 'Messaging & Data Integration',
    skills: ['Apache Kafka', 'Debezium', 'Change Data Capture (CDC)', 'Event-Driven Architecture']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS EC2', 'AWS S3', 'Nginx', 'IBM Cloud', 'Git', 'Maven']
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Flutter', 'UI Components', 'REST API Integration']
  },
  {
    title: 'AI-Assisted Development',
    skills: ['ChatGPT', 'Claude', 'GitHub Copilot', 'Code Generation', 'Debugging', 'Refactoring', 'Frontend Development']
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
      'Role-Based Access Control',
      'Agile Methodology'
    ]
  }
];
