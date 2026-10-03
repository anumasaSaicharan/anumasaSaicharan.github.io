import React from 'react';
import { Server, Layout, Cloud, Award } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend & Core",
      icon: <Server className="w-5 h-5 text-[#4facfe]" />,
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "Hibernate/JPA", "SQL"]
    },
    {
      title: "Frontend & UI",
      icon: <Layout className="w-5 h-5 text-[#4facfe]" />,
      skills: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5/CSS3"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5 text-[#4facfe]" />,
      skills: ["AWS", "Docker", "Git/GitHub", "CI/CD Pipelines", "Maven"]
    },
    {
      title: "Professional Attributes",
      icon: <Award className="w-5 h-5 text-[#4facfe]" />,
      skills: ["Agile/Scrum", "System Design", "Problem Solving", "Team Mentorship"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#fcfdff]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Core Competencies</h2>
        <p className="text-slate-600 mb-12">Categorized technical stack and professional strengths.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-[#4facfe]/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="font-semibold text-slate-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-700 text-sm font-medium rounded-md border border-slate-200/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
