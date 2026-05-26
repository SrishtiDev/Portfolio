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

const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl p-0.5 shadow-[0_10px_25px_10px_rgba(4,57,57,0.2)] ${className}`}>
    <div className="h-full w-full rounded-xl bg-transparent p-5">
      {children}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="relative flex w-full flex-col items-center justify-center pt-20 pb-20">
      
      <h1 className="mb-12 text-center text-5xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
        CONTACT
      </h1>

      <div className="w-[90%] md:w-[600px] lg:w-2/3">
        <Card className="bg-gradient-to-br from-[#101010] via-[#252525] to-[#101010]">
          <div className="flex flex-col items-center justify-center gap-4 py-10">
            <div className="mb-2 px-5">
              <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full border-2 border-solid border-[#0096ff] bg-[#505050]">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200" 
                  alt="Profile" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-white">Srishti Rawat</div>
              <div className="text-xl text-gray-400">
                Full Stack Developer
              </div>
            </div>
            
            <div className="mt-6 flex flex-col items-stretch justify-center gap-6 md:flex-row md:gap-10">
              <div className="flex flex-col justify-center text-center md:text-left">
                <div className="text-base text-gray-400">
                  Email me at:
                </div>
                <div className="text-white">
                  <a href="mailto:contact@srishti.dev" className="text-[#0096ff] hover:underline hover:text-white transition-colors duration-200">
                    contact@srishti.dev
                  </a>
                </div>
              </div>

              {/* vertical divider */}
              <div className="h-[1px] w-full bg-[#0096ff] md:h-auto md:w-[1px]"></div>

              <div className="flex flex-row items-center justify-center gap-4">
                <a href="https://github.com/SrishtiRawat" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#0096ff] transition-colors">
                  <GithubIcon size={24} />
                </a>
                <a href="https://linkedin.com/in/srishtirawat" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#0096ff] transition-colors">
                  <LinkedinIcon size={24} />
                </a>
                <a href="mailto:contact@srishti.dev" className="text-gray-300 hover:text-[#0096ff] transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
