import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 bg-[#fcfdff] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl flex flex-col items-start relative z-30">
          <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-md uppercase tracking-wider mb-8 inline-block border border-blue-100">
            Senior Java Software Engineer
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-[#2d3436] mb-6 md:mb-8 leading-[1.15] tracking-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-[#2d3436] block mt-1 md:mt-2">Sai Charan Anumasa.</span>
          </h1>
          <p className="text-gray-500 text-base md:text-xl mb-10 md:mb-12 max-w-2xl font-medium leading-relaxed">
            I build backend and enterprise systems with Java 17, Spring Boot, React, and AWS — from database design and business workflows to production deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16">
            <a href="#projects" className="px-10 py-4 bg-blue-600 text-white rounded-md text-sm font-bold text-center hover:bg-blue-700 transition-colors w-full sm:w-auto">
              View My Work
            </a>
            <a href="https://linkedin.com/in/sai-charan-anumasa" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-gray-900 text-white rounded-md text-sm font-bold text-center hover:bg-gray-800 transition-colors w-full sm:w-auto">
              LinkedIn
            </a>
            <a href="/resume/Sai-Charan-Anumasa-Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border-2 border-gray-200 text-gray-700 hover:border-gray-300 rounded-md text-sm font-bold transition-colors text-center w-full sm:w-auto">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
