import React from 'react';
import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-zinc-800/80 text-xs text-zinc-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p>© {new Date().getFullYear()} Srishti Rawat. All rights reserved.</p>
          <p className="text-[11px] text-zinc-600 mt-0.5">
            Built with Next.js (SSG/SSR), Tailwind CSS & Lucide Icons. Deployed on Vercel.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SrishtiDev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors"
            title="GitHub"
          >
            <Github size={15} />
          </a>

          <a
            href="https://linkedin.com/in/srishtirwt"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={15} />
          </a>

          <a
            href="mailto:rawat.srishti1010@gmail.com"
            className="hover:text-zinc-200 transition-colors"
            title="Email"
          >
            <Mail size={15} />
          </a>

          <a
            href="/srisRESUME.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors"
            title="Resume"
          >
            <FileText size={15} />
          </a>

          <a
            href="#"
            className="p-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors ml-2"
            title="Back to Top"
          >
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
