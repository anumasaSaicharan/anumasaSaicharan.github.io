import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

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
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg text-slate-800 mb-6 pb-4 border-b border-gray-100">{category.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded border border-gray-200">
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
