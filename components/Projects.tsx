import React from 'react';
import { PROJECTS } from '../constants';
import { TechBadge } from './TechBadge';

export default function Projects() {
  const emtransq = PROJECTS.find(p => p.id === 'emtransq');
  const otherProjects = PROJECTS.filter(p => p.id !== 'emtransq');

  return (
    <section id="projects" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-xs font-heading font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d3436] mb-4">Selected Projects</h2>
        </div>

        {/* Featured Project: EmtransQ */}
        {emtransq && (
          <div className="mb-16 bg-gradient-to-br from-[#f8fbff] to-white rounded-3xl p-8 md:p-12 border border-blue-100/50 shadow-[0_20px_50px_rgba(59,130,246,0.06)] relative overflow-hidden group">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl group-hover:bg-blue-200/40 transition-colors duration-700 pointer-events-none z-0"></div>
            <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <span className="text-xs font-heading font-bold text-gray-500 uppercase tracking-widest mb-2 block">Flagship Project</span>
                <h3 className="text-3xl font-extrabold text-slate-900">{emtransq.title}</h3>
                <p className="text-blue-600 font-medium text-sm mt-1">{emtransq.category} • {emtransq.architecture}</p>
              </div>
              <div className="flex flex-col items-end gap-2 text-sm text-gray-600 text-right">
                {emtransq.status && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded font-semibold text-xs uppercase">{emtransq.status}</span>
                )}
                <span className="font-medium">{emtransq.ownership}</span>
              </div>
            </div>

            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              {emtransq.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-heading font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Problem</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{emtransq.details?.problem}</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Solution</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{emtransq.details?.solution}</p>
              </div>
            </div>

            <div className="mb-10">
              <h4 className="font-heading font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">Key Architecture & Technical Decisions</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-600">
                {emtransq.details?.technicalDecisions?.map((decision, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>

              <div>
                <h4 className="font-heading font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {emtransq.technologies.map((tech, idx) => (
                    <TechBadge key={idx} tech={tech} className="bg-blue-50/30 border-blue-100/50 text-blue-700" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="relative z-10 mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                  {project.status && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] uppercase font-bold rounded">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-wide">{project.category}</p>
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {(project.scale || project.ownership || project.details?.technicalDecisions) && (
                <div className="mb-6 space-y-4">
                  {(project.scale || project.ownership) && (
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 font-medium">
                      {project.scale && <span><strong className="text-gray-700">Scale:</strong> {project.scale}</span>}
                      {project.ownership && <span><strong className="text-gray-700">Role:</strong> {project.ownership}</span>}
                    </div>
                  )}
                  {project.details?.technicalDecisions && (
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.details.technicalDecisions.map((decision, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-gray-400">•</span>
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              <div className="relative z-10 mt-auto pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <TechBadge key={idx} tech={tech} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
