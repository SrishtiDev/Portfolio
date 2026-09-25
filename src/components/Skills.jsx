import React from 'react';
import { FileText } from 'lucide-react';

const skillCategories = [
  {
    title: "AI / ML & Agents",
    skills: ["LangChain.js", "LangGraph.js", "Qdrant", "BullMQ", "RAG Pipelines", "Vector Retrieval", "LLM Orchestration", "Prompt Engineering"]
  },
  {
    title: "Backend Engineering",
    skills: ["Node.js", "NestJS", "Express.js", "REST", "Middleware", "WebSocket", "PostgreSQL", "Redis", "MySQL", "TypeORM", "Firebase", "RBAC"]
  },
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Java"]
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Git", "GitHub Actions (CI/CD)", "Vercel", "Docker", "AWS (EC2, S3)", "Nginx", "PM2", "Linux (Ubuntu)"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col items-center justify-center pt-20 pb-10">
      <h1 className="mb-12 text-center text-5xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
        SKILLS
      </h1>

      <div className="w-[90%] md:w-[750px] lg:w-[950px] space-y-6">
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-0.5 bg-gradient-to-br from-[#181824] via-[#242436] to-[#101018] shadow-[0_8px_20px_rgba(0,150,255,0.08)] hover:shadow-[0_8px_25px_rgba(0,150,255,0.15)] transition-all duration-300 ${idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="bg-[#12121a]/90 h-full rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4 pb-2 border-b border-gray-800">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="bg-[#1e1e2d] text-gray-200 border border-gray-800 hover:border-cyan-500/50 hover:text-cyan-300 rounded-lg px-3 py-1 text-xs font-semibold transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Overview & Resume Card */}
          <div className="md:col-span-2 lg:col-span-1 rounded-2xl p-0.5 bg-gradient-to-br from-[#1a2536] via-[#111827] to-[#0f172a] shadow-[0_8px_20px_rgba(0,150,255,0.1)]">
            <div className="bg-[#0b1120]/90 h-full rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Technical Expertise
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Specializing in production-grade LLM orchestration, fault-tolerant RAG architectures, multi-agent workflows with LangGraph, and async worker queues.
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Proven track record in optimizing backend latency, cutting cloud LLM spend, and building zero-dependency auth systems.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-800/80 mt-4">
                <a 
                  href="/srisRESUME.pdf" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400 rounded-xl px-5 py-2.5 font-bold text-sm transition-all shadow-md shadow-cyan-500/20"
                >
                  <FileText size={16} /> View Full Resume
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
