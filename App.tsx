import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EngineeringFocus from './components/EngineeringFocus';
import History from './components/History';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen bg-[#fcfdff] w-full overflow-x-hidden font-sans text-gray-800">
      <Navbar />

      <main className="w-full">
        <Hero />
        <EngineeringFocus />
        <History />
        <Projects />
        <Skills />

        {/* CTA Banner */}
        <section id="contact" className="py-24 md:py-32 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2d3436] mb-8 tracking-tight">Let's Build the Future</h2>
            <p className="text-gray-600 text-lg md:text-xl mb-12 font-medium">
              Available for discussions on backend architecture, enterprise systems, and engineering leadership.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:saicharan.anumasa@gmail.com"
                className="px-10 py-4 bg-blue-600 text-white rounded-md text-sm font-bold shadow-md hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/sai-charan-anumasa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-gray-300 hover:border-gray-400 text-gray-700 bg-white rounded-md text-sm font-bold shadow-sm transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-extrabold text-[#2d3436] tracking-tight">
              SCA<span className="text-blue-500">.</span>
            </a>
            <p className="text-gray-500 text-sm mt-2 font-medium">Senior Java Software Engineer</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© {currentYear} Sai Charan Anumasa</p>
            <p className="text-xs text-gray-400">Hyderabad, India</p>
          </div>
        </div>
      </footer>

      <AiAssistant />
    </div>
  );
};

export default App;
