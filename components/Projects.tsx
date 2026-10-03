import React from 'react';
import { PROJECTS } from '../constants';

export default function Projects() {
  const emtransq = PROJECTS.find(p => p.id === 'emtransq');
  const otherProjects = PROJECTS.filter(p => p.id !== 'emtransq');

  return (
    <section id="projects" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d3436] mb-4">Selected Projects</h2>
        </div>

        {/* Featured Project: EmtransQ */}
        {emtransq && (
          <div className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Flagship Project</span>
                <h3 className="text-3xl font-extrabold text-slate-900">{emtransq.title}</h3>
                <p className="text-blue-600 font-medium text-sm mt-1">{emtransq.category} • {emtransq.architecture}</p>
              </div>
              <div className="flex flex-col items-end gap-2 text-sm text-gray-600 text-right">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded font-semibold text-xs uppercase">{emtransq.status}</span>
                <span className="font-medium">{emtransq.ownership}</span>
              </div>
            </div>

            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              {emtransq.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Problem</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{emtransq.details?.problem}</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Solution</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{emtransq.details?.solution}</p>
              </div>
            </div>

            <div className="mb-10">
              <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">Key Architecture & Technical Decisions</h4>
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
              <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {emtransq.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white text-gray-700 text-xs font-semibold rounded border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col h-full hover:border-blue-300 transition-colors">
              <div className="mb-4">
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

              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded">
                      {tech}
                    </span>
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
