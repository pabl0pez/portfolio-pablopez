'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { projects, getProjectById } from '../../../lib/data/projects';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      const projectId = Array.isArray(params.id) ? params.id[0] : params.id;
      const foundProject = getProjectById(projectId);
      
      if (foundProject) {
        setProject(foundProject);
      } else {
        router.push('/not-found');
      }
      setLoading(false);
    }
  }, [params, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#4300FF] border-t-[#00CAFF] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4300FF] to-[#00CAFF] text-white rounded-lg hover:shadow-lg transition-all"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Botón de volver */}
      <div className="container mx-auto px-6 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Projects
        </Link>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            {/* Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/50 border border-[#4300FF]/30">
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  project.status === 'Completed' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500 animate-pulse'
                }`} />
                <span className="text-sm text-gray-300">{project.status}</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/50 border border-[#00CAFF]/30">
                <span className="text-sm text-gray-300">{project.duration}</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/50 border border-[#4300FF]/30">
                <span className="text-sm text-gray-300">{project.role}</span>
              </div>
            </div>

            {/* Título */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            
            {/* Descripción */}
            <p className="text-xl text-gray-300 mb-8 max-w-4xl">
              {project.fullDescription}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/5 border border-[#4300FF]/30 text-white rounded-lg hover:bg-[#4300FF]/10 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[#4300FF] to-[#00CAFF] text-white rounded-lg hover:shadow-lg hover:shadow-[#00CAFF]/20 transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Layout de dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Columna principal */}
            <div className="lg:col-span-2 space-y-12">
              {/* Technologies */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-[#4300FF] to-[#00CAFF] bg-clip-text text-transparent">
                    Technologies Used
                  </span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#4300FF]/10 text-[#00CAFF] rounded-lg border border-[#4300FF]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-[#00CAFF] to-[#4300FF] bg-clip-text text-transparent">
                    Key Features
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-[#4300FF]/10 hover:border-[#00CAFF]/30 transition-colors"
                    >
                      <div className="w-2 h-2 bg-[#00CAFF] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem & Solution */}
              {project.problem && project.solution && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white">
                    <span className="bg-gradient-to-r from-[#4300FF] to-[#00CAFF] bg-clip-text text-transparent">
                      Project Context
                    </span>
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-[#4300FF]/20">
                      <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
                      <p className="text-gray-300">{project.problem}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-6 border border-[#00CAFF]/20">
                      <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
                      <p className="text-gray-300">{project.solution}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Challenges & Learnings */}
              {project.challenges && project.learnings && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-[#4300FF]/20">
                    <h3 className="text-2xl font-bold text-white mb-4">Technical Challenges</h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#00CAFF] mt-1">•</span>
                          <span className="text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-[#00CAFF]/20">
                    <h3 className="text-2xl font-bold text-white mb-4">Key Learnings</h3>
                    <ul className="space-y-3">
                      {project.learnings.map((learning: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#4300FF] mt-1">•</span>
                          <span className="text-gray-300">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Details Card */}
              <div className="bg-white/5 rounded-xl p-6 border border-[#4300FF]/20">
                <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-[#4300FF]/20">
                    <span className="text-gray-400">Status</span>
                    <span className={`font-semibold ${
                      project.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#00CAFF]/20">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-semibold">{project.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#4300FF]/20">
                    <span className="text-gray-400">Role</span>
                    <span className="text-white font-semibold">{project.role}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Technologies</span>
                    <span className="text-white font-semibold">{project.technologies.length}</span>
                  </div>
                </div>
              </div>

              {/* Links Card */}
              <div className="bg-white/5 rounded-xl p-6 border border-[#00CAFF]/20">
                <h3 className="text-xl font-bold text-white mb-6">Project Links</h3>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-black/30 rounded-lg hover:bg-[#4300FF]/10 transition-colors group"
                    >
                      <span className="text-white">GitHub Repository</span>
                      <span className="text-gray-400 group-hover:text-[#00CAFF]">↗</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-black/30 rounded-lg hover:bg-[#00CAFF]/10 transition-colors group"
                    >
                      <span className="text-white">Live Demo</span>
                      <span className="text-gray-400 group-hover:text-[#4300FF]">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}