import React from 'react';

const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl p-0.5 shadow-[0_10px_25px_10px_rgba(4,57,57,0.2)] ${className}`}>
    <div className="h-full w-full rounded-xl bg-transparent p-5">
      {children}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div id="skills" className="flex h-fit flex-col items-center justify-center pt-20">
      <h1 className="mb-8 text-center text-5xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
        SKILLS
      </h1>

      <div className="grid w-[90%] grid-cols-1 gap-x-10 gap-y-5 md:w-[600px] lg:w-2/3 lg:grid-cols-3">
        
        {/* Skills List Card */}
        <Card className="bg-gradient-to-br from-[#101010] to-[#202020]">
          <div className="flex flex-col items-start justify-start gap-4 text-left">
            <div>
              <div className="text-xl font-bold text-white mb-1">Backend Engineering</div>
              <div className="flex flex-row flex-wrap items-center justify-start gap-x-1 gap-y-1 text-sm text-gray-400">
                <div>Java,</div>
                <div>Spring Boot,</div>
                <div>Spring Security,</div>
                <div>RESTful APIs,</div>
                <div>Hibernate/JPA</div>
              </div>
            </div>
            
            <div>
              <div className="text-xl font-bold text-white mb-1">Frontend Development</div>
              <div className="flex flex-row flex-wrap items-center justify-start gap-x-1 gap-y-1 text-sm text-gray-400">
                <div>React.js,</div>
                <div>JavaScript (ES6+),</div>
                <div>Tailwind CSS,</div>
                <div>Redux Toolkit</div>
              </div>
            </div>

            <div>
              <div className="text-xl font-bold text-white mb-1">Databases & Cloud</div>
              <div className="flex flex-row flex-wrap items-center justify-start gap-x-1 gap-y-1 text-sm text-gray-400">
                <div>PostgreSQL,</div>
                <div>MySQL,</div>
                <div>MongoDB,</div>
                <div>Docker</div>
              </div>
            </div>

            <div>
              <div className="text-xl font-bold text-white mb-1">Core Fundamentals</div>
              <div className="flex flex-row flex-wrap items-center justify-start gap-x-1 gap-y-1 text-sm text-gray-400">
                <div>Data Structures,</div>
                <div>Algorithms,</div>
                <div>OOP,</div>
                <div>DBMS</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Info & Resume Card */}
        <Card className="bg-gradient-to-br from-[#202020] to-[#101010] lg:col-span-2">
          <div className="flex h-full flex-col justify-between w-full lg:w-4/5">
            <div className="mb-6 text-gray-300">
              <p className="mb-4 leading-relaxed">
                I primarily work on complex web applications, handling both backend architecture and frontend interfaces. My specialization lies in enterprise Java Spring Boot systems connected to highly responsive React user interfaces.
              </p>
              <p className="mb-4 leading-relaxed">
                Beyond my core stack, I have strong competencies in database management, object-oriented design, and algorithms, allowing me to build scalable and optimized software solutions from the ground up.
              </p>
              <p className="mb-4 leading-relaxed">
                Full resume available upon request via <a href="mailto:rawat.srishti1010@gmail.com" className="text-[#0096ff] hover:underline">Email</a>.
              </p>
            </div>
            
            <div className="text-center lg:text-left mt-auto">
              <a 
                href="/S_Resume.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-[#0096ff] text-black hover:bg-white rounded-full px-6 py-2.5 font-bold transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default Skills;
