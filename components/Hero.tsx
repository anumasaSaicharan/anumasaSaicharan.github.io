import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 bg-[#fcfdff] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col items-start relative z-30">
            <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-md uppercase tracking-wider mb-8 inline-block border border-blue-100">
              Senior Java Software Engineer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2d3436] mb-6 md:mb-8 leading-[1.15] tracking-tight">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 block mt-1 md:mt-2">Sai Charan Anumasa.</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg lg:text-xl mb-10 md:mb-12 max-w-2xl font-medium leading-relaxed">
              I build backend and enterprise systems with Java 17, Spring Boot, React, and AWS — from database design and business workflows to production deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <a href="#projects" className="px-8 lg:px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl text-sm font-bold text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                View My Work
              </a>
              <a href="https://linkedin.com/in/sai-charan-anumasa" target="_blank" rel="noopener noreferrer" className="px-8 lg:px-10 py-4 bg-gray-900 text-white rounded-xl text-sm font-bold text-center hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                LinkedIn
              </a>
              <a href="/resume/Sai-Charan-Anumasa-Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 lg:px-10 py-4 border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 rounded-xl text-sm font-bold transition-all duration-300 text-center w-full sm:w-auto hover:-translate-y-1">
                Download CV
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10 py-10 lg:py-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative blobs matching the screenshot */}
              <div className="absolute top-0 right-10 w-16 h-16 bg-gradient-to-br from-red-300 to-pink-300 rounded-full floating blur-sm opacity-80 mix-blend-multiply"></div>
              <div className="absolute bottom-4 left-0 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-300 blob-shape floating-delayed blur-sm opacity-80 mix-blend-multiply"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-orange-100 rounded-full floating-delayed opacity-60"></div>
              <div className="absolute top-12 -right-20 w-12 h-12 bg-pink-50 rounded-xl rotate-12 floating opacity-60"></div>
              
              {/* Main Avatar Circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white rounded-full flex items-center justify-center p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-4 border-white">
                <div className="w-full h-full bg-blue-400 rounded-full flex items-center justify-center shadow-inner border-4 border-white overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-300"></div>
                   <span className="relative z-10 text-white text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight">SA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
