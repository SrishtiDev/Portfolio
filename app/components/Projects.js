'use client';

import React from 'react';
import { FolderGit2, ArrowUpRight, Github, Pin } from 'lucide-react';

const projects = [
  {
    name: 'RepoMind',
    image: '/repomind.png',
    status: 'Live',
    description: 'Multi-path RAG agent & AST-graph code intelligence engine. Reduces LLM hallucinations by 40% with self-correcting query refinement over 1,000+ file codebases.',
    link: 'https://repo-mind-brown.vercel.app',
    github: 'https://github.com/SrishtiDev/RepoMind',
    tags: ['TypeScript', 'LangGraph', 'Qdrant', 'BullMQ', 'Docker'],
  },
  {
    name: 'Selvedge CRM',
    image: '/selvedge.png',
    status: 'Source',
    description: 'AI-native autonomous marketing campaign agent & event-driven NestJS monorepo supporting 5 delivery states and natural-language audience segmentation.',
    link: null,
    github: 'https://github.com/SrishtiDev/Selvedge',
    tags: ['NestJS', 'LangGraph', 'Gemini', 'BullMQ', 'PostgreSQL'],
  },
  {
    name: 'HireOrbit',
    image: '/hireorbit.png',
    status: 'Live',
    description: 'Multi-model AI pipeline simulating enterprise ATS resume scoring. Cut scoring latency 20x (30s → 1.5s) via Groq LPUs and Redis caching.',
    link: 'https://hire-orbit-weld.vercel.app',
    github: 'https://github.com/SrishtiDev/HireOrbit',
    tags: ['Next.js', 'Node.js', 'Express', 'Redis', 'Docker', 'Groq API'],
  },
  {
    name: 'DEA',
    image: '/dea.png',
    status: 'Source',
    description: 'A full-stack web application built for real-world use-case. Shipped end-to-end with a modern tech stack.',
    link: null,
    github: null,
    tags: [],
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-10 border-b border-zinc-200 dark:border-zinc-800/80 scroll-mt-16">
      <div className="flex items-center gap-2 mb-6">
        <FolderGit2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50/50 dark:bg-zinc-950/50 p-4 sm:p-5 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
          >
            <div>
              {/* Image Preview Box */}
              <div className="relative rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900 p-2 sm:p-2.5 mb-4 overflow-hidden group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-all">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[16/10] object-cover object-top rounded-lg shadow-sm group-hover:scale-[1.015] transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback placeholder if image load fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="absolute top-4 right-4 p-1.5 rounded-md bg-zinc-900/60 dark:bg-black/60 backdrop-blur-md text-zinc-300 border border-zinc-700/50">
                  <Pin size={12} className="rotate-45" />
                </span>
              </div>

              {/* Title & Status Badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  {project.status}
                </div>
              </div>

              {/* Punchy Outcome Description */}
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 font-normal">
                {project.description}
              </p>
            </div>

            {/* Card Footer: Tags & Action Links */}
            <div className="flex items-center justify-between gap-3 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 text-xs">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-[11px] font-mono border border-zinc-200/60 dark:border-zinc-800/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium inline-flex items-center gap-1 transition-colors"
                    title="View GitHub Source"
                  >
                    <Github size={13} />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                )}

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={13} />
                  </a>
                ) : (
                  project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      <span>View Code</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

