import React from 'react';
import { Award, GitPullRequest, Code2, ExternalLink } from 'lucide-react';

const achievements = [
  {
    category: 'Open Source',
    title: 'opensearch-java (AWS)',
    description:
      'Merged PR adding equals() and hashCode() to FieldValue, fixing silent reference-equality failures; backported to the 3.x branch.',
    icon: GitPullRequest,
    link: 'https://github.com/opensearch-project/opensearch-java',
    tag: 'AWS OpenSearch',
  },
  {
    category: 'Competitive Programming',
    title: '300+ LeetCode & 450+ CodeChef Problems',
    description:
      'Consistent practice across advanced data structures and algorithms including arrays, trees, dynamic programming (DP), and graphs.',
    icon: Code2,
    link: null,
    tag: 'DSA & Algorithms',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-10 border-b border-zinc-800/80 scroll-mt-16">
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-4 h-4 text-cyan-400" />
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
          Achievements & Open Source
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group relative rounded-xl border border-zinc-800/90 bg-zinc-950/60 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Icon size={14} />
                    {item.category}
                  </span>

                  <span className="px-2 py-0.5 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800 text-xs font-mono">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5 mb-2">
                  {item.title}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
