import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const featuredProjects = [
    {
      title: "Enterprise Microservices Platform",
      tags: ["Java", "Spring Boot", "AWS", "Docker"],
      star: {
        situation: "Legacy monolithic application causing slow deployment cycles and horizontal scaling bottlenecks.",
        task: "Decouple the core billing and inventory modules into highly reliable microservices.",
        action: "Designed and engineered fault-tolerant microservices using Spring Cloud, implemented Redis caching, and containerized deployment with Docker.",
        result: "Reduced system API latency by **42%** and cut deployment infrastructure overhead costs by **25%**."
      },
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Full-Stack Analytics Dashboard",
      tags: ["React.js", "TypeScript", "Spring Boot", "PostgreSQL"],
      star: {
        situation: "Business users lacked a unified real-time portal to analyze operational supply chain telemetry.",
        task: "Build an end-to-end dashboard handling high-frequency data ingestion and interactive UI charts.",
        action: "Developed asynchronous REST API endpoints in Java and mapped responsive, state-managed data visualizations using React and Tailwind.",
        result: "Delivered data-sync capability down to **under 2 seconds**, driving an immediate **15% increase** in regional operational efficiency."
      },
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Projects</h2>
        <p className="text-slate-600 mb-12">High-impact engineering solutions built with the STAR framework.</p>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-[#fcfdff] rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                <div className="flex gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 bg-[#4facfe]/10 text-[#4facfe] text-xs font-semibold rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* STAR Framework Format */}
              <div className="space-y-3 my-6 text-slate-600 text-sm md:text-base border-l-2 border-slate-200 pl-4">
                <p><strong className="text-slate-800">Situation:</strong> {project.star.situation}</p>
                <p><strong className="text-slate-800">Task:</strong> {project.star.task}</p>
                <p><strong className="text-slate-800">Action:</strong> {project.star.action}</p>
                <p><strong className="text-slate-800">Result:</strong> <span dangerouslySetInnerHTML={{ __html: project.star.result }} /></p>
              </div>

              <div className="flex gap-4 pt-2">
                <a href={project.liveLink} className="inline-flex items-center gap-2 text-sm font-semibold text-[#4facfe] hover:underline">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={project.codeLink} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                  <Code className="w-4 h-4" /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
