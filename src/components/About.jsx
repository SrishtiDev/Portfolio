import React from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const Position = ({ title, dateRange, location, summary, highlights = [] }) => (
  <div className="flex flex-row items-start gap-4 pb-8">
    <div className="flex flex-col items-center justify-start gap-2 self-stretch pt-2">
      <div className="bg-[#0096ff] h-2 w-2 rounded-full"></div>
      <div className="w-[1px] flex-grow bg-gray-700"></div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      
      <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-3">
        <div className="flex items-center gap-1.5">
          <Calendar size={14} /> {dateRange}
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin size={14} /> {location}
        </div>
      </div>
      
      {summary && <p className="text-gray-300 mb-3 leading-relaxed">{summary}</p>}
      
      {highlights.length > 0 && (
        <ul className="list-inside list-disc text-gray-400 space-y-1 ml-1">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center pt-10 pb-10">
      <h2 className="mb-8 text-center text-4xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
        BACKGROUND
      </h2>
      
      <div className="w-[90%] md:w-[600px] lg:w-2/3">
        <div className="rounded-xl p-0.5 bg-gradient-to-br from-[#101010] to-[#202020] shadow-[0_10px_25px_10px_rgba(4,57,57,0.2)]">
          <div className="bg-gradient-to-bl from-[#101010] via-[#272727] to-[#181818] rounded-xl px-6 py-8">
            <Position 
              title="Full Stack Engineering"
              dateRange="Present"
              location="ABES Engineering College"
              summary="My engineering stack focuses heavily on enterprise-grade backends using Java & Spring Boot and dynamic user interfaces using React & Tailwind CSS. I love bridging the gap between back-end robustness and clean, highly engaging front-end visual experiences."
              highlights={[
                "Maintained a Cumulative CGPA of 8.05 through 5 semesters.",
                "Completed 100+ LeetCode problems practicing Data Structures and Algorithms in Java."
              ]}
            />
            
            <Position 
              title="B.Tech - Computer Science and Engineering"
              dateRange="2023 - 2027"
              location="Ghaziabad, UP, India"
              summary="Currently in my final year. Built a strong foundation in core computer science principles, including Data Structures, Algorithms, Object-Oriented Programming, and Database Management Systems."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
