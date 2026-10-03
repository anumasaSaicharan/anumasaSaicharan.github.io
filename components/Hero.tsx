
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 bg-[#fcfdff] overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-1/4 right-[5%] w-12 h-12 bg-pink-100 rounded-lg rotate-12 floating-delayed opacity-30 md:opacity-50 pointer-events-none" 
        style={{ transform: `translateY(${scrollY * 0.15}px) rotate(12deg)` }}
      />
      <div 
        className="absolute bottom-1/4 left-[5%] w-16 h-16 bg-yellow-100 rounded-full floating opacity-30 md:opacity-50 pointer-events-none" 
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />
      <div 
        className="absolute top-32 right-[15%] w-24 h-24 border-4 border-orange-100 rounded-full opacity-20 md:opacity-30 pointer-events-none" 
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-20">
        <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start relative z-30">
          <span className="px-4 py-1.5 bg-pink-50 text-pink-400 text-xs font-bold rounded-md uppercase tracking-wider mb-8 inline-block shadow-sm">
            Full Stack Developer
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#2d3436] mb-8 leading-[1.1] tracking-tight">
            Hi I'm <br />
            <span className="text-[#2d3436] block mt-2">Sai Charan Anumasa</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-12 max-w-lg font-medium leading-relaxed">
            Architecting robust, scalable Java systems since 2022. I specialize in backend performance tuning, cloud orchestration, and responsive frontend ecosystems.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 w-full sm:w-auto mb-16">
            <a href="https://linkedin.com/in/sai-charan-anumasa" target="_blank" className="px-10 py-4 btn-primary rounded-full text-sm font-bold text-center shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
              Hire Me
            </a>
            <button className="px-10 py-4 border-2 border-gray-100 hover:bg-white hover:shadow-md text-gray-600 rounded-full text-sm font-bold transition-all text-center w-full sm:w-auto">
              Download CV
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 opacity-60">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Connect :</span>
            <div className="flex gap-5">
              <a href="https://linkedin.com/in/sai-charan-anumasa" target="_blank" className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-sm" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:saicharan.anumasa@gmail.com" className="w-11 h-11 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm" aria-label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center relative w-full px-4 z-10">
          {/* Animated Blob Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[100%] max-w-[320px] sm:max-w-[450px] aspect-square bg-[#4facfe]/10 blob-shape -z-10 animate-pulse opacity-50" />
          
          <div className="relative w-full max-w-[280px] sm:max-w-[400px] aspect-square group flex items-center justify-center">
            <img 
              src="https://ui-avatars.com/api/?name=Sai+Charan+Anumasa&background=4facfe&color=fff&size=512&font-size=0.33" 
              alt="Sai Charan Anumasa" 
              className="rounded-full w-full h-full object-cover shadow-[0_32px_64px_rgba(0,0,0,0.1)] transition-transform duration-700 border-[8px] border-white group-hover:scale-[1.03]"
            />
            {/* 3D Floating Elements with Parallax */}
            <div 
              className="absolute -top-4 -right-2 md:-top-8 md:-right-4 w-12 h-12 md:w-16 md:h-16 rounded-full floating blur-[1px] shadow-lg pointer-events-none z-20" 
              style={{ background: 'radial-gradient(circle at 30% 30%, #ff9a9e, #fad0c4)', transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.1}px)` }} 
            />
            <div 
              className="absolute bottom-4 -left-4 md:bottom-8 md:-left-8 w-14 h-14 md:w-20 md:h-20 blob-shape floating-delayed pointer-events-none z-20 shadow-lg" 
              style={{ background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', transform: `translate(${scrollY * -0.05}px, ${scrollY * -0.08}px)` }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
