import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'Tekurious',
    role: 'AI Engineer Intern',
    period: 'July 2026 – Present',
    location: 'Remote',
    bullets: [
      'Redesigned a RAG pipeline from scratch — hybrid BM25 + semantic retrieval with Reciprocal Rank Fusion reranking across 50,000+ documents — cut monthly LLM spend from $200 to $42 (79%) while sustaining a 90%+ top-5 hit rate on a 2,000-query labelled eval set, eliminating a third-party API dependency.',
      'Engineered chapter-aware document chunking (PyMuPDF-based TOC/heading detection with page-range mapping), ensuring chunks never cross chapter boundaries — improving retrieval precision and enabling chapter-scoped, syllabus-accurate answers.',
      'Engineered an async BullMQ/Redis worker architecture for PDF parsing, embedding generation, and Tesseract WASM OCR fallback — cut main API response latency from 12s to under 200ms.',
      'Built a zero-dependency, stateless JWT auth system in NestJS that directly verifies Google RS256 x509 certs and token claims, enforcing DB-bound RBAC across all protected endpoints.',
    ],
    tech: ['RAG Pipeline', 'BM25 & RRF', 'NestJS', 'BullMQ & Redis', 'PyMuPDF', 'Tesseract WASM', 'JWT Auth'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 border-b border-zinc-200 dark:border-zinc-800/80 scroll-mt-16">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
          Work Experience
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50/60 dark:bg-zinc-950/60 p-5 sm:p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/40"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-zinc-200 dark:border-zinc-800/80">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {exp.role} <span className="text-cyan-600 dark:text-cyan-400 font-medium">@ {exp.company}</span>
                </h3>
              </div>

              <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">
                  <Calendar size={12} className="text-cyan-600 dark:text-cyan-400" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1 text-zinc-500">
                  <MapPin size={12} />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Metrics & Bullets directly visible */}
            <ul className="space-y-3 mb-5">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  <CheckCircle2 size={15} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-1 opacity-80" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200 dark:border-zinc-900">
              {exp.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-cyan-800 dark:text-cyan-300 border border-zinc-300 dark:border-zinc-800 text-xs font-mono font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
