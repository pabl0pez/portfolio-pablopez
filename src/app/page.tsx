'use client';

import { useEffect, useState } from 'react';

// Definimos los tipos para las skills
interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  
  const roles = [
    'Software Engineer',
    'Fullstack Developer', 
    'Software Architect',
    'UI Designer',
    'Game Developer'
  ];

  const skillCategories: SkillCategory[] = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: '💻',
      color: 'from-[#4300FF] to-[#00CAFF]',
      skills: ['Java', 'Python', 'Typescript', 'Javascript', 'C ++', 'GDScript']
    },
    
    {
      id: 'frameworks',
      title: 'Frameworks and Libraries',
      icon: '⚙️',
      color: 'from-[#00CAFF] to-[#4300FF]',
      skills: ['Spring Boot', 'JavaFX', 'React', 'Angular', 'Node.js', 'TailwindCSS']
    },
        {
      id: 'architecture',
      title: 'Software Architecture and System Design',
      icon: '🏗️',
      color: 'from-[#00CAFF] to-[#4300FF]',
      skills: ['UML Diagrams', 'ER Diagrams', 'Use Case Diagram', 'Design Patterns', 'Data Structures', 'OOP Principles', 'MVC Architecture', 'Clean Code']
    },
    {
      id: 'tools',
      title: 'Tools and Technologies',
      icon: '🛠️',
      color: 'from-[#4300FF] to-[#00CAFF]',
      skills: ['Git & GitHub', 'Docker', 'REST APIs', 'MySQL']
    },
    {
      id: 'database',
      title: 'Database and Data Management',
      icon: '🔐',
      color: 'from-[#4300FF] to-[#00CAFF]',
      skills: ['SQL queries', 'Data normalization', 'DB workbench tools', 'ER Modeling']
    },
    {
      id: 'ides',
      title: 'IDEs and Development Environments',
      icon: '🔧',
      color: 'from-[#4300FF] to-[#00CAFF]',
      skills: ['IntelliJ IDEA', 'VS Code', 'Enterprise Architect', 'VirtualBox', 'Insomnia', 'Godot Engine']
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 12,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, roles]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#4300FF]/10 to-black"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4300FF] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#00CAFF] rounded-full blur-3xl opacity-20"></div>
        
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-black/50 border border-[#4300FF]/30 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-[#00CAFF] rounded-full mr-3"></div>
            <span className="text-sm text-[#00CAFF] font-semibold">AVAILABLE FOR WORK</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">I'm Juan Pablo López</span>
            <br />
            <span className="bg-gradient-to-r from-[#4300FF] via-[#00CAFF] to-[#4300FF] bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Creative developer passionate about building innovative digital solutions and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-[#4300FF] to-[#00CAFF] text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#4300FF]/30"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-[#4300FF] text-white font-bold rounded-lg hover:bg-[#4300FF]/10 transition-colors duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Sección About */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#4300FF] to-[#00CAFF] bg-clip-text text-transparent pb-2">
            About Me
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-4">
              I'm a Colombian developer and a 7th-semester Systems and Computing Engineering student, passionate about creating software that delivers real value. 
            </p>
            <p className="text-lg text-gray-300">
              Discipline and consistency are my strongest assets: when everyone else gives their best, I keep pushing forward driven by my vocation and genuine love for technology.
            </p>
            <p className="text-lg text-gray-300">
              I'm motivated by building, learning, and contributing to solutions that make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Skills Mejorada */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black to-[#4300FF]/5">
        <div className="container mx-auto px-6">
          <div className="mb-12 pt-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00CAFF] to-[#4300FF] bg-clip-text text-transparent inline-block pb-3">
              My Skills
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Click on each category to explore my technical expertise and development tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={`bg-white/5 rounded-xl p-6 border transition-all duration-300 cursor-pointer group ${
                  openCategory === category.id 
                    ? 'border-[#00CAFF] shadow-lg shadow-[#00CAFF]/20' 
                    : 'border-[#4300FF]/20 hover:border-[#00CAFF]/40 hover:shadow-lg hover:shadow-[#00CAFF]/10'
                }`}
                onClick={() => toggleCategory(category.id)}
              >
                {/* Header de la Card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`text-2xl p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                      {category.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg text-left">
                      {category.title}
                    </h3>
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    openCategory === category.id ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-[#00CAFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Contenido desplegable */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  openCategory === category.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-[#4300FF]/20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.skills.map((skill, index) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-black/30 border border-[#4300FF]/10 hover:border-[#00CAFF]/30 transition-colors duration-200"
                          style={{
                            animationDelay: `${index * 100}ms`,
                            animation: openCategory === category.id ? 'slideInUp 0.5s ease-out forwards' : 'none'
                          }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                          <span className="text-gray-200 text-sm font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skills en estado cerrado (chips pequeños) */}
                <div className={`flex flex-wrap gap-2 transition-opacity duration-300 ${
                  openCategory === category.id ? 'opacity-0 h-0' : 'opacity-100 h-auto'
                }`}>
                  {category.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-black/40 border border-[#4300FF]/20 rounded-full text-gray-300 text-xs hover:border-[#00CAFF]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                  {category.skills.length > 4 && (
                    <span className="px-3 py-1 bg-[#4300FF]/20 text-[#00CAFF] rounded-full text-xs">
                      +{category.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Projects */}
      <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-12 pt-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4300FF] to-[#00CAFF] bg-clip-text text-transparent inline-block pb-3">
              My Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="bg-white/5 rounded-xl p-6 border border-[#4300FF]/20 hover:border-[#00CAFF]/40 transition-all duration-300 hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-[#4300FF]/20 to-[#00CAFF]/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white/60 text-lg">Project Image</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">E-Commerce Platform</h3>
              <p className="text-gray-400 mb-4">Full-stack e-commerce solution with modern features</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4300FF]/20 text-[#00CAFF] px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-[#4300FF]/20 text-[#00CAFF] px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-[#4300FF]/20 text-[#00CAFF] px-3 py-1 rounded-full text-sm">MongoDB</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white/5 rounded-xl p-6 border border-[#4300FF]/20 hover:border-[#00CAFF]/40 transition-all duration-300 hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-[#4300FF]/20 to-[#00CAFF]/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white/60 text-lg">Project Image</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Task Management App</h3>
              <p className="text-gray-400 mb-4">Productivity app with real-time collaboration</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4300FF]/20 text-[#00CAFF] px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-[#4300FF]/20 text-[#00CAFF] px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-[#4300FF]/20 text-[#00CAFF] px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white/5 rounded-xl p-6 border border-[#4300FF]/20 hover:border-[#00CAFF]/40 transition-all duration-300 hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-[#4300FF]/20 to-[#00CAFF]/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white/60 text-lg">Project Image</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Weather Dashboard</h3>
              <p className="text-gray-400 mb-4">Real-time weather data visualization</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4300FF]/20 text-[#00CAFF] px-3 py-1 rounded-full text-sm">Vue.js</span>
                <span className="bg-[#4300FF]/20 text-[#00CAFF] px-3 py-1 rounded-full text-sm">Express</span>
                <span className="bg-[#4300FF]/20 text-[#00CAFF] px-3 py-1 rounded-full text-sm">API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contact */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-t from-black to-[#00CAFF]/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#00CAFF] to-[#4300FF] bg-clip-text text-transparent pb-2">
            Contact Me
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-300 mb-8">
              Let's build something amazing together! I'm always open to discussing new opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/5 rounded-lg p-6 border border-[#4300FF]/20">
                <div className="text-[#00CAFF] text-2xl mb-2">📧</div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-400">pablo.lopez.g2005@gmail.com</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-[#4300FF]/20">
                <div className="text-[#00CAFF] text-2xl mb-2">📍</div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Armenia, Quindío - COLOMBIA</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-[#4300FF]/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/50 border border-[#4300FF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00CAFF] transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-black/50 border border-[#4300FF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00CAFF] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-[#4300FF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00CAFF] transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-black/50 border border-[#4300FF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00CAFF] transition-colors"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4300FF] to-[#00CAFF] text-white font-bold py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#4300FF]/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}