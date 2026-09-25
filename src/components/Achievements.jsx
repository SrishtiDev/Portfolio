import React from 'react';
import { Trophy, GitPullRequest, Code2, ExternalLink } from 'lucide-react';

const achievementsList = [
  {
    icon: GitPullRequest,
    category: "Open Source Contribution",
    title: "opensearch-java (AWS)",
    description: "PR merged adding equals() and hashCode() to FieldValue, fixing silent reference-equality failures; backported to the 3.x branch.",
    badge: "AWS OpenSearch",
    link: "https://github.com/opensearch-project/opensearch-java"
  },
  {
    icon: Code2,
    category: "Competitive Programming",
    title: "300+ LeetCode & 450+ CodeChef Problems",
    description: "Consistent practice across advanced data structures and algorithms including arrays, trees, dynamic programming (DP), and graphs.",
    badge: "Problem Solving"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="flex flex-col items-center justify-center pt-16 pb-10">
      <h2 className="mb-12 text-center text-4xl lg:text-5xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
        ACHIEVEMENTS
      </h2>

      <div className="w-[90%] md:w-[750px] lg:w-[900px] grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsList.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index}
              className="rounded-2xl p-0.5 bg-gradient-to-br from-[#1e1e2e] via-[#2a2a3e] to-[#121218] shadow-[0_10px_30px_10px_rgba(0,150,255,0.08)] hover:shadow-[0_10px_35px_15px_rgba(0,150,255,0.15)] transition-all duration-300 flex"
            >
              <div className="bg-gradient-to-bl from-[#121218] via-[#1a1a24] to-[#0f0f14] rounded-2xl p-6 sm:p-8 flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5 text-cyan-400">
                      <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">{item.category}</span>
                    </div>

                    <span className="bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 rounded-full px-3 py-1 text-xs font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {item.title}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors" title="View Source">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
