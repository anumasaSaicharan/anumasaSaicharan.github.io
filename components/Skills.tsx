import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { TechBadge } from './TechBadge';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#fcfdff]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">Technical Stack</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d3436] mb-4">Skills & Technologies</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-300 opacity-50"></div>
              <h3 className="font-extrabold text-lg text-slate-800 mb-6 pb-4 border-b border-gray-100">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <TechBadge key={idx} tech={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
