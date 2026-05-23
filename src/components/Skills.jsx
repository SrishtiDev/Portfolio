import React from 'react';
import { Layers, Server, Database, Brain, Cpu, ShieldCheck } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Engineering',
      icon: <Server className="text-indigo-400" size={22} />,
      skills: [
        { name: 'Java', level: 'Advanced' },
        { name: 'Spring Boot', level: 'Advanced' },
        { name: 'Spring Security & JWT', level: 'Intermediate' },
        { name: 'RESTful APIs', level: 'Advanced' },
        { name: 'Hibernate / JPA', level: 'Advanced' },
        { name: 'Microservices', level: 'Intermediate' },
        { name: 'Maven', level: 'Advanced' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Layers className="text-violet-400" size={22} />,
      skills: [
        { name: 'React.js', level: 'Advanced' },
        { name: 'JavaScript (ES6+)', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'Redux Toolkit', level: 'Intermediate' },
        { name: 'HTML5 & CSS3', level: 'Advanced' },
        { name: 'Axios / Fetch API', level: 'Advanced' },
      ]
    },
    {
      title: 'Databases & Cloud',
      icon: <Database className="text-emerald-400" size={22} />,
      skills: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'Docker', level: 'Basic' },
        { name: 'Git / GitHub', level: 'Advanced' },
        { name: 'Postman', level: 'Advanced' },
      ]
    },
    {
      title: 'Core CSE Fundamentals',
      icon: <Brain className="text-amber-400" size={22} />,
      skills: [
        { name: 'Data Structures & Algos', level: 'Advanced' },
        { name: 'Object-Oriented Programming', level: 'Advanced' },
        { name: 'DBMS', level: 'Advanced' },
        { name: 'Computer Networks', level: 'Intermediate' },
        { name: 'Operating Systems', level: 'Intermediate' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gray-950/60">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-[250px] h-[250px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            <Cpu size={16} />
            My Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Competence & Stack
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded mt-4 mx-auto" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm sm:text-base leading-relaxed">
            Here is a breakdown of my engineering competencies, including frontend UI libraries, backend framework specialities, databases, and core computer science concepts.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-8 rounded-2xl glassmorphism-card border border-gray-800/80 flex flex-col justify-between"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-6 border-b border-gray-900">
                <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>

              {/* Skills Badges Wrapper */}
              <div className="flex flex-wrap gap-3 pt-6">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="tech-badge px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 flex items-center justify-between gap-4 cursor-default select-none"
                  >
                    <span>{skill.name}</span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${
                      skill.level === 'Advanced' 
                        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                        : skill.level === 'Intermediate'
                        ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default Skills;
