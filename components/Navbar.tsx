
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
      }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-baseline gap-0.5 text-xl md:text-2xl font-extrabold text-[#2d3436] tracking-tight z-[110]">
          <span>SCA</span>
          <span className="text-[#4facfe] leading-none">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 items-center text-sm font-semibold text-gray-500">
          <a href="#home" className="hover:text-[#4facfe] transition-colors">Home</a>
          <a href="#services" className="hover:text-[#4facfe] transition-colors">Services</a>
          <a href="#experience" className="hover:text-[#4facfe] transition-colors">History</a>
          <a href="#projects" className="hover:text-[#4facfe] transition-colors">Works</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/sai-charan-anumasa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center px-8 py-2.5 btn-primary rounded-full text-sm font-bold tracking-tight shadow-lg"
          >
            Connect
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-[#2d3436] z-[110]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-500 md:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } flex flex-col items-center justify-center space-y-8`}>
        <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-[#2d3436]">Home</a>
        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-[#2d3436]">Services</a>
        <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-[#2d3436]">Experience</a>
        <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-[#2d3436]">Works</a>
        <a
          href="https://linkedin.com/in/sai-charan-anumasa"
          className="px-10 py-4 btn-primary rounded-full font-bold text-white shadow-xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          LinkedIn Profile
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
