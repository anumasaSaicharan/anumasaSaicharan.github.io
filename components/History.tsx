import React from 'react';
import { EXPERIENCES } from '../constants';

const History: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div id="about" className="max-w-3xl mb-20 scroll-mt-24">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">About Me</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Engineering Background</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              I am a Senior Java Software Engineer focused on backend and enterprise application development. My experience spans SaaS platforms, pharmaceutical LIMS, agricultural research systems, retailer and distributor engagement platforms, and product traceability solutions. I work across Java/Spring Boot backends, React interfaces, relational databases, authentication, integrations, and AWS deployments.
            </p>
          </div>
          
          <div className="flex flex-col items-start mb-12">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">Experience</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d3436]">Professional Timeline</h2>
          </div>
          
          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-12 border-l-2 border-gray-200 pb-16 last:pb-0">
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-500 z-10" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-3">
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl md:text-2xl font-bold text-[#2d3436] mb-1 leading-tight">{exp.role}</h3>
                    <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">{exp.company}</p>
                  </div>
                  <span className="inline-flex items-center px-4 py-1.5 bg-gray-50 text-gray-500 text-xs font-bold rounded-md uppercase tracking-wider self-start border border-gray-200">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3 list-disc ml-5 text-gray-600 font-medium leading-relaxed text-sm md:text-base max-w-2xl marker:text-gray-300">
                  {exp.description.map((point, i) => (
                    <li key={i} className="pl-1">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
