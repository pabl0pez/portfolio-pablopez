'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      // Si no estamos en home, navegar a home con hash
      window.location.href = `/#${sectionId}`;
      setIsMobileMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', href: '/', section: 'home' },
    { label: 'About Me', href: '/#about', section: 'about' },
    { label: 'My Skills', href: '/#skills', section: 'skills' },
    { label: 'My Projects', href: '/projects', section: null },
    { label: 'Contact Me', href: '/#contact', section: 'contact' },
  ];

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
          <Link 
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-[#00CAFF] rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-[#00CAFF] rounded-full opacity-75 animate-ping"></div>
            </div>
            <span className="text-white font-bold text-xl tracking-wider bg-gradient-to-r from-[#00CAFF] to-[#4300FF] bg-clip-text text-transparent">
              PABLO LÓPEZ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.section ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.section!)}
                  className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 group p-2"
            aria-label="Toggle menu"
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
              {navItems.map((item) => (
                item.section ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.section!)}
                    className="text-white/80 hover:text-white transition-all duration-300 font-medium text-left py-2"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-white transition-all duration-300 font-medium text-left py-2"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}