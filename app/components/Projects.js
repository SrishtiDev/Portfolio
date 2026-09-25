import React from 'react';
import { FolderGit2, ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'RepoMind',
    subtitle: 'Multi-path RAG agent & AST-graph code intelligence engine.',
    link: 'https://repo-mind-brown.vercel.app',
    github: 'https://github.com/SrishtiDev/RepoMind',
    bullets: [
      'Built a multi-path RAG agent — parallel vector + AST-graph retrieval with self-correcting query refinement — cut hallucinations 40%, lifted context relevance 35%.',
      'Architected an asynchronous BullMQ ingestion pipeline with Piscina-isolated AST parsing, handling concurrent ingestion requests — 10x Express throughput, 99.9% data consistency across batch processing.',
      'Enforced 100% multi-tenant isolation via Qdrant metadata filtering; shipped a standalone MCP server for Claude Code/Cursor — 25% faster search on 1,000+ file repos.',
    ],
    tags: ['TypeScript', 'LangGraph', 'LangChain', 'Qdrant', 'BullMQ', 'Redis', 'Docker'],
  },
  {
    name: 'Selvedge CRM',
    subtitle: 'AI-native autonomous marketing campaign agent & event-driven monorepo.',
    link: null,
    github: null,
    bullets: [
      'Architected an AI-native CRM agent on LangGraph (ReAct) + Google Gemini with 5 tool-calling functions — turns natural-language marketing intent into fully executed campaigns, zero manual query building.',
      'Built an async, event-driven messaging pipeline across a 3-service NestJS monorepo — BullMQ + Upstash Redis, concurrency-5 job processing with webhook-based tracking across 5 live delivery states.',
      'Engineered a segmentation engine on PostgreSQL (Supabase/TypeORM) — 8 dynamic filter dimensions and LLM-context-safe result limiting, preventing token overflow across 500 seeded customers.',
    ],
    tags: ['TypeScript', 'LangGraph', 'Google Gemini', 'NestJS', 'BullMQ', 'PostgreSQL', 'Supabase'],
  },
  {
    name: 'HireOrbit',
    subtitle: 'Multi-model AI pipeline simulating enterprise ATS resume scoring.',
    link: 'https://hire-orbit-weld.vercel.app',
    github: null,
    bullets: [
      "Cut ATS scoring latency from ~30s to under 1.5s by migrating inference to Groq's LPU-based API, layered with Redis caching on JD keyword sets — validated across 30+ users spanning SDE, Data Science, and PM roles.",
      'Designed a RESTful 3-stage inference API — JD keyword extraction → resume-JD scoring → LaTeX generation — with middleware-style JSON schema validation enforcing deterministic outputs across concurrent stateless requests.',
      'Containerized Tectonic LaTeX compiler in Docker; orchestrated non-blocking child_process.spawn calls from Node.js so the event loop never blocked under concurrent PDF compilation load.',
    ],
    tags: ['TypeScript', 'Next.js 14', 'Node.js', 'Express.js', 'Docker', 'Redis', 'Groq API'],
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

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50/60 dark:bg-zinc-950/60 p-5 sm:p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/40 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-700 dark:text-cyan-400/90 font-medium mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-300 dark:border-zinc-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github size={15} />
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-cyan-50 dark:bg-cyan-950 hover:bg-cyan-100 dark:hover:bg-cyan-900 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 text-xs font-semibold transition-colors"
                    >
                      <span>View Project</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 my-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200 dark:border-zinc-900 mt-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
