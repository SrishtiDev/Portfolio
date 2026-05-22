import React from 'react';
import { Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-gray-900 bg-gray-950/80 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Brand Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={handleScrollToTop}>
            <div className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-indigo-400 group-hover:scale-105 transition-transform duration-300">
              <Code size={18} className="stroke-[2.5]" />
            </div>
            <span className="font-bold tracking-tight text-white">
              Srishti<span className="text-indigo-500">.</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-sm text-center max-w-md">
            Final-year Computer Science and Engineering student at ABES Engineering College. Engineering sturdy backends and immersive frontends.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-xl bg-gray-900 border border-gray-800/80 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
              title="GitHub Profile"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-xl bg-gray-900 border border-gray-800/80 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
              title="LinkedIn Profile"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="mailto:srishti.rawat@email.com" 
              className="p-3 rounded-xl bg-gray-900 border border-gray-800/80 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
              title="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Details Row */}
          <div className="pt-8 border-t border-gray-900 w-full max-w-xl text-center space-y-2">
            <p className="text-gray-500 text-xs flex items-center justify-center gap-1.5">
              <span>Made with</span>
              <Heart size={12} className="text-rose-500 fill-rose-500" />
              <span>using React, Vite, & Tailwind CSS</span>
            </p>
            <p className="text-gray-500 text-xs">
              &copy; {currentYear} Srishti Rawat. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
