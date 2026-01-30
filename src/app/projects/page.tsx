'use client';

import { projects } from '../../lib/data/projects';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#4300FF] via-[#00CAFF] to-[#4300FF] bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A complete collection of my work, showcasing different technologies, challenges, and solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6 border border-[#4300FF]/20 text-center">
            <div className="text-3xl font-bold text-[#00CAFF] mb-2">{projects.length}</div>
            <div className="text-gray-400">Total Projects</div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-[#00CAFF]/20 text-center">
            <div className="text-3xl font-bold text-[#00CAFF] mb-2">
              {projects.filter(p => p.status === 'Completed').length}
            </div>
            <div className="text-gray-400">Completed</div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-[#4300FF]/20 text-center">
            <div className="text-3xl font-bold text-[#00CAFF] mb-2">
              {projects.filter(p => p.status === 'In Progress').length}
            </div>
            <div className="text-gray-400">In Progress</div>
          </div>
        </div>

        {/* Projects Grid CON IMÁGENES REALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-white/5 rounded-xl p-6 border border-[#4300FF]/20 hover:border-[#00CAFF]/40 transition-all duration-300 hover:scale-105"
            >
              {/* Imagen - VERSIÓN CORREGIDA */}
              <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error(`Error cargando imagen: ${project.image}`);
                    e.currentTarget.style.display = 'none';
                    // Muestra placeholder si falla
                    const placeholder = e.currentTarget.nextElementSibling;
                    if (placeholder) placeholder.classList.remove('hidden');
                  }}
                />
                
                {/* Placeholder si falla la imagen */}
                <div className="hidden absolute inset-0 bg-gradient-to-br from-[#4300FF]/20 to-[#00CAFF]/20 flex flex-col items-center justify-center">
                  <div className="text-5xl mb-3">
                    {project.id === 'snugplace' ? '🏠' : 
                     project.id === 'colabedu' ? '🎓' : '💻'}
                  </div>
                  <span className="text-white/70 text-sm">{project.title}</span>
                  <span className="text-white/50 text-xs mt-1">Project Image</span>
                </div>
                
                {/* Overlay para efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{project.shortDescription}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#4300FF]/10 text-[#00CAFF] rounded-lg text-xs border border-[#4300FF]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-[#4300FF]/20">
                  <span>{project.duration}</span>
                  <span>{project.role}</span>
                </div>

                {/* Button */}
                <div className="pt-2">
                  <span className="inline-flex items-center text-[#00CAFF] text-sm font-medium group-hover:gap-2 transition-all">
                    View Project Details
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}