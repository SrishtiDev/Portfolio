'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#skills' },
  { label: 'GitHub Activity', href: '#github' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/80 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-sm tracking-tight text-white hover:text-cyan-400 transition-colors">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Srishti Rawat
          </a>

          {/* Desktop Index Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-cyan-400 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/srisRESUME.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 rounded-md text-xs font-medium transition-all"
            >
              <FileText size={13} className="text-cyan-400" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed inset-x-0 top-14 z-40 bg-zinc-950 border-b border-zinc-800 p-4 md:hidden shadow-2xl space-y-3">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'bg-zinc-900 text-cyan-400 font-semibold border-l-2 border-cyan-400'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-around text-zinc-400">
            <a href="https://github.com/SrishtiDev" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs hover:text-white">
              <Github size={14} /> GitHub
            </a>
            <a href="https://linkedin.com/in/srishtirwt" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs hover:text-white">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="mailto:rawat.srishti1010@gmail.com" className="flex items-center gap-1.5 text-xs hover:text-white">
              <Mail size={14} /> Email
            </a>
          </div>
        </div>
      )}
    </>
  );
}
