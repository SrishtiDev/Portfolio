import React from 'react';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-16">
      <div className="w-[90%] md:w-[600px] lg:w-1/2 z-10">
        <div className="rounded-2xl p-0.5 bg-gradient-to-br from-[#101010] to-[#202020] shadow-[0_10px_25px_10px_rgba(4,57,57,0.2)] hover:scale-[1.02] transition-transform duration-300">
          <div className="flex flex-col text-white p-5 lg:p-10 bg-[#101010]/50 rounded-xl backdrop-blur-sm">
            <div className="flex h-20 flex-row items-center">
              <div className="mr-4 flex w-20 h-20 items-center justify-center rounded-full bg-[#505050] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#72ffff] via-[#20ffb8] to-[#0096ff] bg-[length:200%] bg-clip-text text-transparent">
                  Srishti Rawat
                </h1>
                <div className="w-full text-xl text-gray-300 font-sans">Full Stack Developer</div>
              </div>
            </div>
            
            <div className="mt-8 mb-4 text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              Hello World!
            </div>
            
            <p className="text-left text-gray-300 leading-relaxed font-sans">
              I build comprehensive full-stack applications. Driven by clean code, robust database designs, and interactive user experiences. Crafting scalable Java Spring Boot backends and highly responsive React frontends.
            </p>

            <div className="mt-8 flex flex-row items-center justify-start gap-4">
              <a href="https://github.com/SrishtiRawat" target="_blank" rel="noreferrer" className="p-3 bg-[#202020] hover:bg-[#303030] rounded-full transition-colors text-white">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com/in/srishtirawat" target="_blank" rel="noreferrer" className="p-3 bg-[#202020] hover:bg-[#303030] rounded-full transition-colors text-[#0077b5]">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:contact@srishti.dev" className="p-3 bg-[#202020] hover:bg-[#303030] rounded-full transition-colors text-[#ea4335]">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
