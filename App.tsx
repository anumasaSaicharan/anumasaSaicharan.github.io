
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import History from './components/History';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#fcfdff] w-full overflow-x-hidden">
      <Navbar />

      <main className="w-full">
        <Hero />

        {/* Separator Line */}
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="h-px w-full bg-gray-100" />
        </div>

        <Services />

        {/* Industry Presence Banner */}
        <section className="py-12 md:py-20 bg-gray-50/20 border-y border-gray-100 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-wrap justify-center gap-10 md:gap-24 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-700">
              <span className="text-xs md:text-base font-black tracking-widest uppercase">Java 17</span>
              <span className="text-xs md:text-base font-black tracking-widest uppercase">Spring Boot</span>
              <span className="text-xs md:text-base font-black tracking-widest uppercase">React.js</span>
              <span className="text-xs md:text-base font-black tracking-widest uppercase">AWS EC2/S3</span>
              <span className="text-xs md:text-base font-black tracking-widest uppercase">Redis</span>
            </div>
          </div>
        </section>

        <History />

        <Skills />

        <Projects />

        {/* CTA Banner */}
        <section id="contact" className="py-24 md:py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-blue-gradient rounded-[40px] md:rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 relative z-10 leading-tight">Build the Future Together.</h2>
              <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium relative z-10">
                Sai is currently available for Full Stack leadership roles and strategic technical consultations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                <a
                  href="mailto:saicharan.anumasa@gmail.com"
                  className="px-12 py-5 bg-white text-blue-600 rounded-full text-sm font-extrabold shadow-xl hover:scale-105 hover:bg-gray-50 transition-all"
                >
                  Send Inquiry
                </a>
                <a
                  href="https://linkedin.com/in/sai-charan-anumasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 border-2 border-white/20 hover:bg-white/10 text-white rounded-full text-sm font-extrabold transition-all"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12">
            <div>
              <a href="#" className="text-2xl font-extrabold text-[#2d3436] tracking-tight">
                SCA<span className="text-[#4facfe]">.</span>
              </a>
              <p className="text-gray-400 text-sm mt-3 font-medium">Engineering High-Impact Systems Since 2022.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
              <a href="#experience" className="hover:text-blue-500 transition-colors">Journey</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">Works</a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">© 2024 Sai Charan Anumasa</p>
              <p className="text-[9px] font-medium text-gray-200">Hyderabad, India</p>
            </div>
          </div>
        </div>
      </footer>

      <AiAssistant />
    </div>
  );
};

export default App;
