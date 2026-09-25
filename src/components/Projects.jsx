import React from 'react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Project = ({ position = 'left', title, description, highlights = [], tags, link, githubLink, image }) => {
  const isLeft = position === 'left';
  
  return (
    <div className={`mb-16 flex h-fit w-full flex-col justify-center px-6 lg:px-20 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      
      {/* 3D Image Container */}
      <div className="group relative mb-6 flex aspect-video w-full lg:w-1/2 [perspective:800px] lg:mb-0 lg:ml-auto">
        <div className={`absolute top-1/2 left-1/2 aspect-video w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-gray-700 bg-gradient-to-br from-[#202020] to-[#101010] opacity-50 transition-transform duration-500 ease-in-out group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:translate-z-0 ${isLeft ? 'translate-x-[calc(-50%+15px)] rotate-y-6' : 'translate-x-[calc(-50%-15px)] -rotate-y-6'}`} />
        <div className={`absolute top-1/2 left-1/2 aspect-video w-[90%] overflow-hidden -translate-x-1/2 -translate-y-1/2 rounded-xl border border-gray-600 bg-gradient-to-br from-[#303030] to-[#181818] opacity-100 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:translate-z-0 ${isLeft ? 'translate-x-[calc(-50%+25px)] translate-y-[calc(-50%+10px)] rotate-y-6 translate-z-[-20px]' : 'translate-x-[calc(-50%-25px)] translate-y-[calc(-50%+10px)] -rotate-y-6 translate-z-[-20px]'}`}>
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover opacity-80" />
          ) : (
            <h3 className="text-2xl font-black text-cyan-400 uppercase tracking-widest p-4 text-center">{title}</h3>
          )}
        </div>

        {/* Visit Overlay on Hover */}
        <div className="absolute top-1/2 left-1/2 aspect-video w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-gray-500 bg-black/70 opacity-0 transition-opacity duration-300 delay-300 group-hover:opacity-100 hidden lg:flex lg:items-center lg:justify-center gap-3 pointer-events-none">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="rounded-xl border-2 border-[#0096ff] bg-black px-5 py-2.5 font-bold text-[#0096ff] hover:bg-[#0096ff] hover:text-black transition-colors duration-300 pointer-events-auto">
              View Project
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border-2 border-gray-400 bg-black px-5 py-2.5 font-bold text-gray-300 hover:border-white hover:text-white transition-colors duration-300 pointer-events-auto">
              <GithubIcon /> GitHub
            </a>
          )}
        </div>
      </div>

      {/* Mobile buttons */}
      <div className="mb-6 flex items-center justify-center gap-3 lg:hidden">
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="rounded-full bg-[#0096ff] px-6 py-2.5 font-bold text-black transition-colors duration-300 hover:bg-white text-sm">
            View Project
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border-2 border-gray-500 px-5 py-2 font-bold text-gray-300 hover:border-white hover:text-white transition-colors duration-300 text-sm">
            <GithubIcon /> GitHub
          </a>
        )}
      </div>

      {/* Text Content */}
      <div className={`flex h-fit w-full flex-col justify-center lg:w-1/2 lg:px-10 ${isLeft ? 'lg:items-start' : 'lg:items-end'}`}>
        <h2 className={`mb-3 text-2xl lg:text-3xl font-bold text-white ${isLeft ? 'lg:text-left' : 'lg:text-right'}`}>
          {title}
        </h2>
        
        {description && (
          <p className={`mb-3 max-w-lg text-gray-300 text-base leading-relaxed ${isLeft ? 'lg:text-left' : 'lg:text-right'}`}>
            {description}
          </p>
        )}

        {highlights.length > 0 && (
          <ul className={`mb-4 space-y-2 text-sm text-gray-300 text-left w-full ${isLeft ? 'lg:text-left' : 'lg:text-right'}`}>
            {highlights.map((point, pIdx) => (
              <li key={pIdx} className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className={`mt-2 flex w-full flex-row flex-wrap gap-2 ${isLeft ? 'lg:justify-start' : 'lg:justify-end'}`}>
          {tags.map((tag, i) => (
            <div key={i} className="bg-[#1e293b] text-cyan-300 border border-cyan-800/40 rounded-full px-3.5 py-1 text-xs font-semibold">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center pt-20">
      <h1 className="mb-16 text-center text-5xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
        PROJECTS
      </h1>
      
      <div className="w-full max-w-[1440px]">
        <Project 
          position="left"
          title="RepoMind"
          description="High-performance GitHub code intelligence and RAG agent."
          highlights={[
            "Built a multi-path RAG agent — parallel vector + AST-graph retrieval with self-correcting query refinement — cut hallucinations 40%, lifted context relevance 35%.",
            "Architected an asynchronous BullMQ ingestion pipeline with Piscina-isolated AST parsing, handling concurrent ingestion requests — 10x Express throughput, 99.9% data consistency across batch processing.",
            "Enforced 100% multi-tenant isolation via Qdrant metadata filtering; shipped a standalone MCP server for Claude Code/Cursor — 25% faster search on 1,000+ file repos."
          ]}
          tags={["TypeScript", "LangGraph", "LangChain", "Qdrant", "BullMQ", "Redis", "Docker"]}
          link="https://repo-mind-brown.vercel.app"
          githubLink="https://github.com/SrishtiDev/RepoMind"
          image="/repomind.png"
        />

        <Project 
          position="right"
          title="Selvedge CRM"
          description="AI-native autonomous marketing campaign agent and event-driven pipeline."
          highlights={[
            "Architected an AI-native CRM agent on LangGraph (ReAct) + Google Gemini with 5 tool-calling functions — turns natural-language marketing intent into fully executed campaigns, zero manual query building.",
            "Built an async, event-driven messaging pipeline across a 3-service NestJS monorepo — BullMQ + Upstash Redis, concurrency-5 job processing with webhook-based tracking across 5 live delivery states.",
            "Engineered a segmentation engine on PostgreSQL (Supabase/TypeORM) — 8 dynamic filter dimensions and LLM-context-safe result limiting, preventing token overflow across 500 seeded customers."
          ]}
          tags={["TypeScript", "LangGraph", "Google Gemini", "NestJS", "BullMQ", "PostgreSQL", "Supabase"]}
        />
        
        <Project 
          position="left"
          title="HireOrbit"
          description="Multi-model AI pipeline simulating enterprise ATS systems."
          highlights={[
            "Cut ATS scoring latency from ~30s to under 1.5s by migrating inference to Groq's LPU-based API, layered with Redis caching on JD keyword sets — validated across 30+ users spanning SDE, Data Science, and PM roles.",
            "Designed a RESTful 3-stage inference API — JD keyword extraction → resume-JD scoring → LaTeX generation — with middleware-style JSON schema validation enforcing deterministic outputs across concurrent stateless requests.",
            "Containerized Tectonic LaTeX compiler in Docker; orchestrated non-blocking child_process.spawn calls from Node.js so the event loop never blocked under concurrent PDF compilation load."
          ]}
          tags={["TypeScript", "Next.js 14", "Node.js", "Express.js", "Docker", "Redis", "Groq API"]}
          link="https://hire-orbit-weld.vercel.app"
          image="/hireorbit.png"
        />

        <Project 
          position="right"
          title="DEA (Discovery & Execution Assistant)"
          description="Intelligence engine delivering AI-generated project ideas, live trending project types, and full architecture breakdowns with implementation roadmaps using NVIDIA NIM reasoning models."
          tags={["Next.js", "React", "Tailwind CSS", "Framer Motion", "NVIDIA NIM"]}
          link="https://idea-gamma-azure.vercel.app"
          image="/p2.png"
        />
      </div>
    </div>
  );
};

export default Projects;
