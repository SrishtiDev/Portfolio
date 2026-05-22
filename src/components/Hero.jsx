import React from 'react';
import { ArrowUpRight, Code, Terminal, Server, Award, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glowing blurred circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-indigo-600/10 blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[120px] animate-pulse-slow animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[150px] animate-pulse-slow animation-delay-4000" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism text-indigo-400 border border-indigo-500/20 text-sm font-semibold tracking-wide shadow-md shadow-indigo-950/20 animate-fade-in">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Final Year CSE Student at ABES EC
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-500 bg-clip-text text-transparent">Srishti Rawat</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting scalable <span className="text-indigo-400 font-semibold">Java Spring Boot</span> backends and highly responsive <span className="text-violet-400 font-semibold">React</span> frontends.
            </h2>
          </div>

          {/* Bio Brief */}
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I build comprehensive full-stack applications. Driven by clean code, robust database designs, and interactive user experiences. Currently searching for Software Development Engineer (SDE) roles.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explore Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glassmorphism text-white font-medium hover:bg-gray-900/60 border border-gray-800/80 hover:border-gray-700/80 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Me
            </a>
          </div>

          {/* Stats / Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-16 border-t border-gray-900/50">
            <div className="p-4 rounded-2xl glassmorphism-card flex flex-col items-center justify-center">
              <Server className="text-indigo-400 mb-2" size={24} />
              <span className="text-white font-bold text-lg">Backend</span>
              <span className="text-gray-400 text-xs mt-1">Spring Boot, Rest API</span>
            </div>
            <div className="p-4 rounded-2xl glassmorphism-card flex flex-col items-center justify-center">
              <Code className="text-violet-400 mb-2" size={24} />
              <span className="text-white font-bold text-lg">Frontend</span>
              <span className="text-gray-400 text-xs mt-1">React, Tailwind CSS</span>
            </div>
            <div className="p-4 rounded-2xl glassmorphism-card flex flex-col items-center justify-center">
              <Terminal className="text-emerald-400 mb-2" size={24} />
              <span className="text-white font-bold text-lg">DSA & Coding</span>
              <span className="text-gray-400 text-xs mt-1">C++, Java, OOPs</span>
            </div>
            <div className="p-4 rounded-2xl glassmorphism-card flex flex-col items-center justify-center">
              <Award className="text-amber-400 mb-2" size={24} />
              <span className="text-white font-bold text-lg">ABES EC</span>
              <span className="text-gray-400 text-xs mt-1">Final-Year CSE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Down Chevron Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>
          <ChevronDown size={24} className="text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
