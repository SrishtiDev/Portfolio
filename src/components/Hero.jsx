import React from 'react';
import { Mail, FileText } from 'lucide-react';

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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16"
    >
      <div className="w-[90%] md:w-[600px] lg:w-1/2 z-10">
        <div className="rounded-2xl p-0.5 bg-gradient-to-br from-[#101010] to-[#202020] shadow-[0_10px_25px_10px_rgba(4,57,57,0.2)] hover:scale-[1.02] transition-transform duration-300">
          <div className="flex flex-col text-white p-5 lg:p-10 bg-[#101010]/50 rounded-xl backdrop-blur-sm">
            <div className="flex h-20 flex-row items-center">
              <div className="mr-4 flex w-20 h-20 items-center justify-center rounded-full bg-[#505050] overflow-hidden">
                <img
                  src="/srishti.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#72ffff] via-[#20ffb8] to-[#0096ff] bg-[length:200%] bg-clip-text text-transparent">
                  Srishti Rawat
                </h1>
                <div className="w-full text-xl text-cyan-400 font-sans font-medium">
                  AI / Backend Engineer
                </div>
              </div>
            </div>

            <div
              className="mt-8 mb-4 text-2xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Hey There!
            </div>

            <p className="text-left text-gray-300 leading-relaxed font-sans">
              AI/backend engineer shipping production LLM systems end-to-end. Architecting fault-tolerant RAG pipelines, async job queues, and high-performance backend systems with NestJS, Docker, LangChain, LangGraph, and full-stack LLM orchestration.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
              <a
                href="https://github.com/SrishtiDev"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#202020] hover:bg-[#303030] rounded-full transition-colors text-white"
                title="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/srishtirwt/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#202020] hover:bg-[#303030] rounded-full transition-colors text-[#0077b5]"
                title="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:rawat.srishti1010@gmail.com"
                className="p-3 bg-[#202020] hover:bg-[#303030] rounded-full transition-colors text-[#ea4335]"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="/srisRESUME.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-full font-bold text-sm text-black transition-all shadow-md shadow-cyan-500/20"
              >
                <FileText size={16} /> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
