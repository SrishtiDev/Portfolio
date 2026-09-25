import React from 'react';
import { Mail, FileText, Github, Linkedin, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-12 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
        
        {/* Profile Avatar */}
        <div className="relative shrink-0 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 w-24 h-24 sm:w-28 sm:h-28 shadow-lg shadow-cyan-950/20">
          <img
            src="/srishti.jpg"
            alt="Srishti Rawat"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Srishti Rawat
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              Available for AI / Backend Roles
            </span>
          </div>

          <p className="text-base sm:text-lg font-semibold text-cyan-600 dark:text-cyan-400 leading-snug mb-3">
            AI/backend engineer shipping production LLM systems end-to-end.
          </p>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
            At Tekurious, architected a NestJS layer routing live student queries across specialized RAG pipelines with fault-tolerant fallback — cutting LLM costs <strong className="text-zinc-900 dark:text-white font-semibold">79% ($200 → $42)</strong> on a hybrid BM25 + semantic system over 50,000+ documents. Also cut ATS-scoring latency <strong className="text-zinc-900 dark:text-white font-semibold">20x (30s → 1.5s)</strong> via Groq LPU + Redis caching. Owns the full stack: Docker, async job queues, LLM API design, and every architectural tradeoff.
          </p>

          {/* Social Links & Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:rawat.srishti1010@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 font-semibold text-xs transition-all shadow-sm"
            >
              <Mail size={14} /> Send an email
            </a>

            <a
              href="/srisRESUME.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/80 text-xs font-semibold transition-all"
            >
              <FileText size={14} className="text-cyan-600 dark:text-cyan-400" /> Resume
            </a>

            <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />

            <a
              href="https://github.com/SrishtiDev"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 transition-colors"
              title="GitHub"
            >
              <Github size={16} />
            </a>

            <a
              href="https://linkedin.com/in/srishtirwt"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <div className="flex items-center gap-1.5 text-xs text-zinc-500 ml-auto sm:ml-2">
              <MapPin size={13} className="text-zinc-500 dark:text-zinc-400" /> Delhi, NCR
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
