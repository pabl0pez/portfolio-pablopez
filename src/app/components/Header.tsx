'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false); // Cerrar menú móvil después de click
    }
  };

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 
      transition-all duration-300
      ${isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-[#4300FF]/40 py-3' 
        : 'bg-black/80 backdrop-blur-sm py-4'
      }
    `}>
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-[#00CAFF] rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-[#00CAFF] rounded-full opacity-75 animate-ping"></div>
            </div>
            <span className="text-white font-bold text-xl tracking-wider bg-gradient-to-r from-[#00CAFF] to-[#4300FF] bg-clip-text text-transparent">
              PABLO LÓPEZ
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105"
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105"
            >
              My Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105"
            >
              My Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 group p-2"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#4300FF]/20 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-white transition-all duration-300 font-medium text-left py-2"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-white/80 hover:text-white transition-all duration-300 font-medium text-left py-2"
              >
                My Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-white/80 hover:text-white transition-all duration-300 font-medium text-left py-2"
              >
                My Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-white transition-all duration-300 font-medium text-left py-2"
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}