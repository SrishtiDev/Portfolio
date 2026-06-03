import React from 'react';

const Project = ({ position = 'left', title, description, tags, link, image }) => {
  const isLeft = position === 'left';
  
  return (
    <div className={`mb-10 flex h-fit w-full flex-col justify-center px-6 lg:px-20 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      
      {/* 3D Image Container */}
      <div className="group relative mb-5 flex aspect-video w-full lg:w-1/2 [perspective:800px] lg:mb-0 lg:ml-auto">
        {/* We use a colored gradient placeholder instead of an image to match the dark theme */}
        <div className={`absolute top-1/2 left-1/2 aspect-video w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-gray-700 bg-gradient-to-br from-[#202020] to-[#101010] opacity-50 transition-transform duration-500 ease-in-out group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:translate-z-0 ${isLeft ? 'translate-x-[calc(-50%+15px)] rotate-y-6' : 'translate-x-[calc(-50%-15px)] -rotate-y-6'}`} />
        <div className={`absolute top-1/2 left-1/2 aspect-video w-[90%] overflow-hidden -translate-x-1/2 -translate-y-1/2 rounded-xl border border-gray-600 bg-gradient-to-br from-[#303030] to-[#181818] opacity-100 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:translate-z-0 ${isLeft ? 'translate-x-[calc(-50%+25px)] translate-y-[calc(-50%+10px)] rotate-y-6 translate-z-[-20px]' : 'translate-x-[calc(-50%-25px)] translate-y-[calc(-50%+10px)] -rotate-y-6 translate-z-[-20px]'}`}>
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover opacity-80" />
          ) : (
            <h3 className="text-2xl font-black text-gray-500 uppercase tracking-widest">{title}</h3>
          )}
        </div>

        {/* Visit Overlay on Hover */}
        <div className="absolute top-1/2 left-1/2 aspect-video w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-gray-500 bg-black/60 opacity-0 transition-opacity duration-300 delay-300 group-hover:opacity-100 hidden lg:block pointer-events-none">
          <a href={link} target="_blank" rel="noreferrer" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-[#0096ff] bg-black px-6 py-3 font-bold text-[#0096ff] hover:bg-[#0096ff] hover:text-black transition-colors duration-300 pointer-events-auto">
            View Project
          </a>
        </div>
      </div>

      {/* Mobile button */}
      <div className="mb-8 flex items-center justify-center lg:hidden">
        <a href={link} target="_blank" rel="noreferrer" className="rounded-full bg-[#0096ff] px-6 py-3 font-bold text-black transition-colors duration-300 hover:bg-white">
          View Project
        </a>
      </div>

      {/* Text Content */}
      <div className={`flex h-fit w-full flex-col items-center justify-center lg:h-[340px] lg:w-1/2 lg:px-10 ${isLeft ? 'lg:items-start' : 'lg:items-end'}`}>
        <h2 className={`mb-4 text-center text-3xl font-bold ${isLeft ? 'lg:text-left' : 'lg:text-right'}`}>
          {title}
        </h2>
        <p className={`max-w-lg text-center text-lg text-gray-300 leading-relaxed lg:max-w-none ${isLeft ? 'lg:text-left' : 'lg:text-right'}`}>
          {description}
        </p>
        <div className={`mt-6 flex w-full flex-row flex-wrap justify-center gap-2 ${isLeft ? 'lg:justify-start' : 'lg:justify-end'}`}>
          {tags.map((tag, i) => (
            <div key={i} className="bg-[#20ffb8] rounded-full px-4 py-1 text-sm font-bold text-black transition-colors duration-300 hover:bg-white">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center pt-20">
      <h1 className="mb-16 text-center text-5xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
        PROJECTS
      </h1>
      
      <div className="w-full max-w-[1440px]">
        <Project 
          position="left"
          title="DEA (Discovery & Execution Assistant)"
          description="An intelligence engine that takes your tech stack and interests and delivers tailored AI-generated project ideas, live trending project types, and full architecture breakdowns with implementation roadmaps. Integrated NVIDIA NIM reasoning models."
          tags={["Next.js", "React", "Tailwind CSS", "Framer Motion"]}
          link="https://idea-gamma-azure.vercel.app"
          image="/p2.png"
        />
        
        <Project 
          position="right"
          title="HIRE ORBIT"
          description="A multi-model AI pipeline that simulates enterprise ATS systems to parse, score, and optimize resumes. Leverages LLMs for deterministic keyword gap detection and dynamically compiles ATS-optimized PDFs using a containerized LaTeX engine."
          tags={["Next.js 14", "Node.js", "Express.js", "Docker", "LLMs"]}
          link="https://hire-orbit-weld.vercel.app"
          image="/hireorbit.png"
        />
      </div>
    </div>
  );
};

export default Projects;
