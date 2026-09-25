import React from 'react';
import { Cpu } from 'lucide-react';

const techItems = [
  { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#ED8B00' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#5FA04E' },
  { name: 'NestJS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', color: '#E0234E' },
  { name: 'Express.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#FFFFFF' },
  { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
  { name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
  { name: 'TypeORM', iconUrl: 'https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png', color: '#FE0803' },
  { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#FFCA28' },
  { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#FFFFFF' },
  { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
  { name: 'Framer Motion', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg', color: '#0055FF' },
  { name: 'LangChain.js', iconUrl: 'https://cdn.simpleicons.org/langchain/1C3C3C', color: '#38BDF8' },
  { name: 'LangGraph.js', iconUrl: 'https://cdn.simpleicons.org/langchain/00E676', color: '#00E676' },
  { name: 'Qdrant', iconUrl: 'https://cdn.simpleicons.org/qdrant/00D2FF', color: '#00D2FF' },
  { name: 'BullMQ', iconUrl: 'https://cdn.simpleicons.org/redis/E11D48', color: '#E11D48' },
  { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
  { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#FF9900' },
  { name: 'GitHub Actions', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#2088FF' },
  { name: 'Nginx', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', color: '#009639' },
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-10 border-b border-zinc-800/80 scroll-mt-16">
      <div className="flex items-center gap-2 mb-6">
        <Cpu className="w-4 h-4 text-cyan-400" />
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {techItems.map((tech, idx) => (
          <div
            key={idx}
            className="group flex items-center gap-3 p-3 rounded-xl border border-zinc-800/90 bg-zinc-950/60 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all cursor-default"
          >
            <div className="w-7 h-7 shrink-0 flex items-center justify-center">
              <img
                src={tech.iconUrl}
                alt={tech.name}
                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-200"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors truncate">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
