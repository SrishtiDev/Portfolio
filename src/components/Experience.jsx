import React from 'react';
import { Calendar, Building2, Briefcase, ChevronRight } from 'lucide-react';

const experienceData = [
  {
    role: "AI Engineer Intern",
    company: "Tekurious",
    period: "July 2026 – Present",
    description: [
      "Redesigned the RAG pipeline from scratch — hybrid BM25 + semantic retrieval with Reciprocal Rank Fusion reranking across 50,000+ documents — cutting monthly LLM spend from $200 to $42 (79%) while sustaining a 90%+ top-5 hit rate on a 2,000-query labeled eval set, and removing a third-party retrieval API dependency.",
      "Engineered chapter-aware document chunking (PyMuPDF-based TOC/heading detection with page-range mapping) layered on the existing sliding-window pipeline, ensuring chunks never cross chapter boundaries — improving retrieval precision and enabling chapter-scoped, syllabus-accurate answers.",
      "Built an async BullMQ/Redis worker architecture for PDF parsing, embedding generation, and Tesseract WASM OCR fallback, cutting main API response latency from 12s to under 200ms.",
      "Designed a zero-dependency, stateless JWT auth system in NestJS that directly verifies Google RS256 x509 certs and token claims (iss/aud/exp), enforcing DB-bound RBAC across all protected endpoints.",
      "Replaced cloud embedding APIs with local multilingual-e5-base inference (via @xenova/transformers) running in-container, removing per-query embedding costs and an external network dependency.",
      "Built multi-agent AI workflows (Mastra framework) for adaptive study tools — e.g. active-recall and exam-prediction agents — with scoped working memory per resource."
    ],
    skills: ["RAG Pipeline", "BM25 & RRF", "NestJS", "BullMQ & Redis", "PyMuPDF", "Tesseract WASM OCR", "JWT & RBAC", "@xenova/transformers", "Mastra Framework"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center justify-center pt-16 pb-10">
      <h2 className="mb-12 text-center text-4xl lg:text-5xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
        EXPERIENCE
      </h2>

      <div className="w-[90%] md:w-[750px] lg:w-[900px]">
        {experienceData.map((exp, index) => (
          <div 
            key={index}
            className="rounded-2xl p-0.5 bg-gradient-to-br from-[#1e1e2e] via-[#2a2a3e] to-[#121218] shadow-[0_10px_30px_10px_rgba(0,150,255,0.1)] transition-all duration-300 hover:shadow-[0_10px_35px_15px_rgba(0,150,255,0.18)]"
          >
            <div className="bg-gradient-to-bl from-[#121218] via-[#1a1a24] to-[#0f0f14] rounded-2xl p-6 sm:p-8">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-800/80">
                <div>
                  <div className="flex items-center gap-2.5 text-cyan-400 font-semibold mb-1">
                    <Briefcase size={20} className="text-cyan-400" />
                    <span className="text-xl sm:text-2xl font-bold text-white">{exp.role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 font-medium text-base">
                    <Building2 size={16} className="text-indigo-400" />
                    <span className="text-indigo-300 font-semibold">{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-gray-900/80 px-4 py-2 rounded-full border border-gray-800 text-gray-300 text-sm w-fit">
                  <Calendar size={15} className="text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-6 space-y-4">
                {exp.description.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                    <div className="mt-1.5 p-1 rounded-full bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                      <ChevronRight size={14} className="stroke-[3]" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              {exp.skills && (
                <div className="mt-8 pt-6 border-t border-gray-800/60 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="bg-indigo-950/60 text-cyan-300 border border-indigo-800/40 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
