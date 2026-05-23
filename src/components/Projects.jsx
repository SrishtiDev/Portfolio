import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Layers, Server, Terminal, Code } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Spring Boot', 'React.js', 'NEXT.JS'];

  const projectsData = [
    {
      title: 'ShopVibe - E-Commerce Microservices',
      description: 'A scalable distributed e-commerce architecture utilizing cloud routing, load balancing, and high-performance caching for dynamic catalog search, cart operations, and order flows.',
      category: 'Spring Boot',
      tags: ['Spring Boot', 'Microservices', 'Eureka', 'API Gateway', 'Redis', 'MySQL', 'React.js'],
      githubLink: 'https://github.com',
      liveLink: 'https://google.com',
      backendHighlight: 'Built as independent microservices integrated through Spring Cloud Gateway and Netflix Eureka. Cached dynamic products using Redis.',
      frontendHighlight: 'Created full cart flows, payment integration models, and responsive client state using Redux Toolkit.',
      icon: <Terminal className="text-emerald-400" size={24} />
    },
    {
      title: 'DEA (Discovery & Execution Assistant)',
      description: 'An intelligence engine that takes your tech stack and interests and delivers tailored AI-generated project ideas, live trending project types across industries (FinTech, Cyber, Cloud & more), and full architecture breakdowns with implementation roadmaps.',
      category: 'NEXT.JS',
      tags: ['Next.js 15', 'React 19', 'Tailwind CSS v4', 'Framer Motion', 'NVIDIA NIM API'],
      githubLink: 'https://github.com/SrishtiDev/IDEA',
      liveLink: 'https://idea-gamma-azure.vercel.app/',
      backendLabel: 'THE DIFFERENTIATOR',
      backendHighlight: 'Integrated NVIDIA NIM reasoning models (GLM-4.7 & MiniMax-M2) directly into the backend — they reason through your stack before producing structured, actionable output. Results feel like a senior dev thinking it through with you, not generic GPT suggestions.',
      frontendLabel: 'UI LAYER',
      frontendHighlight: 'Glassmorphism + parallax UI built with Tailwind CSS v4 and Framer Motion. Server-side API routes keep all keys secure with zero client-side exposure.',
      icon: <Code className="text-amber-400" size={24} />
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter || p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            <FolderGit2 size={16} />
            My Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Full-Stack Work
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded mt-4 mx-auto" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm sm:text-base leading-relaxed">
            A showcase of my recent full-stack accomplishments. Bridging Enterprise Spring Boot backends and dynamic React frontends.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-lg mx-auto p-1.5 rounded-2xl bg-gray-900/60 border border-gray-800/80 backdrop-blur-md">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="group rounded-2xl glassmorphism-card border border-gray-800/80 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Card Titlebar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gray-950 border border-gray-800 rounded-2xl text-indigo-400 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
                      title="View GitHub Repository"
                    >
                      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
                      title="Visit Live Deployment"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-left">
                  {project.description}
                </p>

                {/* Split highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-y border-gray-900/80">
                  <div className="text-left space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                      {project.backendLabel || 'Backend Blueprint'}
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">{project.backendHighlight}</p>
                  </div>
                  <div className="text-left space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-violet-400">
                      {project.frontendLabel || 'Frontend Blueprint'}
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">{project.frontendHighlight}</p>
                  </div>
                </div>
              </div>

              {/* Badges / Tags */}
              <div className="flex flex-wrap gap-2 pt-6">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[11px] font-mono font-medium text-gray-400 bg-gray-900 border border-gray-800/80 px-2.5 py-1.5 rounded-lg group-hover:border-gray-800 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
