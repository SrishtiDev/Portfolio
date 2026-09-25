'use client';

import React from 'react';
import { Cpu } from 'lucide-react';

const categories = [
  {
    number: '01',
    title: 'AI / ML & RAG',
    skills: [
      { name: 'RAG Pipelines', core: true, iconUrl: 'https://cdn.simpleicons.org/qdrant/00D2FF' },
      { name: 'LLM Agents', core: true, iconUrl: 'https://cdn.simpleicons.org/openai/ffffff' },
      { name: 'LangChain', core: true, iconUrl: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
      { name: 'Vector Retrieval', core: true, iconUrl: 'https://cdn.simpleicons.org/qdrant/00D2FF' },
      { name: 'LangGraph', core: false, iconUrl: 'https://cdn.simpleicons.org/langchain/00E676' },
      { name: 'BM25 + Hybrid Search', core: false },
      { name: 'Embeddings & Reranking', core: false },
    ],
  },
  {
    number: '02',
    title: 'BACKEND',
    skills: [
      { name: 'Node.js', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'NestJS', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'Express.js', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'BullMQ', core: true, iconUrl: 'https://cdn.simpleicons.org/redis/E11D48' },
      { name: 'Redis', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'REST APIs', core: false },
      { name: 'TypeORM', core: false, iconUrl: 'https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png' },
      { name: 'Firebase', core: false, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    number: '03',
    title: 'LANGUAGES',
    skills: [
      { name: 'TypeScript', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Java', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'SQL', core: false },
      { name: 'C / C++', core: false, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    ],
  },
  {
    number: '04',
    title: 'DATABASES',
    skills: [
      { name: 'PostgreSQL', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Qdrant Vector DB', core: true, iconUrl: 'https://cdn.simpleicons.org/qdrant/00D2FF' },
      { name: 'Redis', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'MySQL', core: false, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    number: '05',
    title: 'FRONTEND',
    skills: [
      { name: 'React', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Framer Motion', core: false, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
      { name: 'HTML / CSS', core: false, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    ],
  },
  {
    number: '06',
    title: 'DEVOPS & CLOUD',
    skills: [
      { name: 'Docker', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'AWS (EC2, S3)', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Linux', core: true, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'GitHub Actions', core: false, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Nginx', core: false, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      { name: 'Git', core: false, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-10 border-b border-zinc-200 dark:border-zinc-800/80 scroll-mt-16">
      <div className="flex items-center gap-2 mb-6">
        <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
          Tech Stack
        </h2>
      </div>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50/50 dark:bg-zinc-950/50 p-6 sm:p-8">
        {/* Intro Header & Domain Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800/80">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
            The tools I reach for most. <strong className="text-zinc-900 dark:text-white font-semibold">Filled chips</strong> are my day-to-day core; the rest I&apos;ve shipped with.
          </p>

          <div className="flex items-center gap-2 font-mono text-xs text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider shrink-0">
            <span className="w-2 h-2 bg-orange-500 rounded-sm inline-block"></span>
            6 DOMAINS
          </div>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              {/* Category Title */}
              <div className="flex items-center gap-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-2">
                <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">{cat.number}</span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  {cat.title}
                </h3>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill, sIdx) => {
                  const isCore = skill.core;
                  return (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all cursor-default ${
                        isCore
                          ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border border-zinc-800 dark:border-zinc-200 font-semibold shadow-sm'
                          : 'bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300/80 dark:border-zinc-800 font-medium hover:border-zinc-400 dark:hover:border-zinc-700'
                      }`}
                    >
                      {skill.iconUrl && (
                        <img
                          src={skill.iconUrl}
                          alt={skill.name}
                          className="w-3.5 h-3.5 object-contain shrink-0"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

