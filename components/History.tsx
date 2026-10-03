
import React from 'react';
import { EXPERIENCES } from '../constants';

const History: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center md:items-start mb-16">
            <span className="text-xs font-bold text-pink-400 uppercase tracking-[0.3em] mb-4 block">Career Path</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d3436]">Professional Journey</h2>
          </div>
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              I am a <strong className="text-slate-800 font-semibold">Senior Java Software Engineer & Full-Stack Developer</strong> dedicated to building high-performance, maintainable web systems. My design philosophy prioritizes clean system architecture, robust microservices, and slick, intuitive frontend experiences. I focus on bridging complex backend infrastructure with modern user interfaces to deliver measurable business growth and optimized system performance.
            </p>
          </div>
          
          <div className="space-y-4">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="relative pl-10 md:pl-16 border-l-2 border-gray-100 pb-16 last:pb-0">
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md z-10" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-3">
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl md:text-2xl font-bold text-[#2d3436] mb-1 leading-tight">{exp.role}</h3>
                    <p className="text-blue-500 font-bold text-sm tracking-wide uppercase">{exp.company}</p>
                  </div>
                  <span className="inline-flex items-center px-4 py-1.5 bg-gray-50 text-gray-400 text-[10px] font-bold rounded-full uppercase tracking-widest whitespace-nowrap self-start shadow-sm border border-gray-100">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2 list-disc ml-5 text-gray-500 font-medium leading-relaxed text-sm md:text-base max-w-2xl marker:text-blue-500">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
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
