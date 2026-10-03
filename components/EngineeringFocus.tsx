import React from 'react';

const EngineeringFocus: React.FC = () => {
  const cards = [
    {
      title: "Backend Engineering",
      description: "Java 17, Spring Boot, REST APIs, authentication, business workflows."
    },
    {
      title: "Enterprise Systems",
      description: "LIMS, ERP-style workflows, traceability, hierarchy and RBAC."
    },
    {
      title: "Full-Stack Product Ownership",
      description: "Backend, React frontend, database, integrations and deployment."
    },
    {
      title: "Production & Cloud",
      description: "AWS EC2, Nginx, releases, server configuration."
    }
  ];

  const highlights = [
    { value: "3+", label: "Years Professional Experience" },
    { value: "6", label: "Featured Enterprise Projects" },
    { value: "Java 17", label: "Primary Backend Stack" }
  ];

  return (
    <section id="engineering-focus" className="py-24 md:py-32 bg-[#fcfdff]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">Core Competencies</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d3436]">Engineering Focus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 hover:border-blue-100 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <h3 className="relative z-10 text-xl font-bold text-[#2d3436] mb-4 group-hover:text-blue-500 transition-colors">{card.title}</h3>
              <p className="relative z-10 text-gray-500 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {highlights.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-[#2d3436] mb-2">{item.value}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringFocus;
