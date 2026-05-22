import React from 'react';
import { User, BookOpen, GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-950/40">
      {/* Background shape */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            <User size={16} />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Journey & Background
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded mt-4 mx-auto md:mx-0" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Image (Left Column - 5 cols) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative group">
              {/* Subtle background glow element */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-20 blur-lg group-hover:opacity-45 transition-opacity duration-500 pointer-events-none" />
              
              {/* Purple gradient border wrapper */}
              <div className="p-1 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                <img 
                  src="/srishti.jpg" 
                  alt="Srishti Rawat" 
                  width="400"
                  height="400"
                  className="rounded-full object-cover w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] max-w-full"
                />
              </div>
            </div>
          </div>


          {/* Biography Text (Right Column - 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-white">
              Aspiring Software Engineer based in Ghaziabad, UP.
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              I am currently in my final year of Computer Science and Engineering at <strong>ABES Engineering College</strong>. My educational journey has provided me with a strong foundation in core computer science principles, including Data Structures, Algorithms, Object-Oriented Programming, and Database Management Systems.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My engineering stack focuses heavily on enterprise-grade backends using <strong>Java & Spring Boot</strong> and dynamic user interfaces using <strong>React & Tailwind CSS</strong>. I love bridging the gap between back-end robustness and clean, highly engaging front-end visual experiences.
            </p>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-indigo-400">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">B.Tech - CSE</h4>
                  <p className="text-gray-400 text-xs mt-0.5">ABES Engineering College</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-violet-400">
                  <Calendar size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Graduation Year</h4>
                  <p className="text-gray-400 text-xs mt-0.5">2027 Batch</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-emerald-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Location</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Ghaziabad, UP, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-amber-400">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Key Focus</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Full Stack Development</p>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="p-5 rounded-2xl glassmorphism-card border-indigo-500/10 flex flex-col sm:flex-row gap-4 items-center justify-between mt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-sm">
                  8.05
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Cumulative CGPA</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Through 5 semesters of study</p>
                </div>
              </div>
              <div className="h-px w-full sm:h-8 sm:w-px bg-gray-800" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold text-sm">
                  100+
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">LeetCode Questions</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Java DSA practice</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
