'use client'; // 👈 AÑADE ESTO

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#4300FF]/10 to-black"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4300FF] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#00CAFF] rounded-full blur-3xl opacity-20"></div>
        
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-black/50 border border-[#4300FF]/30 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-[#00CAFF] rounded-full mr-3"></div>
            <span className="text-sm text-[#00CAFF] font-semibold">AVAILABLE FOR WORK</span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Welcome,</span>
            <br />
            <span className="bg-gradient-to-r from-[#4300FF] via-[#00CAFF] to-[#4300FF] bg-clip-text text-transparent">
              I'm Juan Pablo López
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Full Stack Developer specializing in modern web technologies and creating exceptional digital experiences.
          </p>

          {/* Botones */}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#4300FF] to-[#00CAFF] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-4">
              Passionate full-stack developer with expertise in modern web technologies.
            </p>
            <p className="text-lg text-gray-300">
              I love creating amazing digital experiences that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Skills */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black to-[#4300FF]/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#00CAFF] to-[#4300FF] bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((skill) => (
              <div key={skill} className="bg-white/5 rounded-lg p-4 border border-[#4300FF]/20 hover:border-[#00CAFF]/40 transition-colors">
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Projects */}
      <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#4300FF] to-[#00CAFF] bg-clip-text text-transparent">
            My Projects
          </h2>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#00CAFF] to-[#4300FF] bg-clip-text text-transparent">
            Contact Me
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-300 mb-8">
              Let's build something amazing together! I'm always open to discussing new opportunities.
            </p>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/5 rounded-lg p-6 border border-[#4300FF]/20">
                <div className="text-[#00CAFF] text-2xl mb-2">📧</div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-400">your.email@example.com</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-[#4300FF]/20">
                <div className="text-[#00CAFF] text-2xl mb-2">📍</div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Based in Your City</p>
              </div>
            </div>

            {/* Contact Form */}
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
    </div>
  );
}