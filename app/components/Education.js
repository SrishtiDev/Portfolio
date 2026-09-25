import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-10 border-b border-zinc-800/80 scroll-mt-16">
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="w-4 h-4 text-cyan-400" />
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
          Education
        </h2>
      </div>

      <div className="rounded-xl border border-zinc-800/90 bg-zinc-950/60 p-5 sm:p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-white">
              ABES Engineering College, Ghaziabad
            </h3>
            <p className="text-sm font-medium text-cyan-400">
              B.Tech in Computer Science & Engineering (AKTU)
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
              <Calendar size={12} className="text-cyan-400" />
              Expected July 2027
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-300 pt-2 border-t border-zinc-900 mt-3">
          <div className="flex items-center gap-1.5 font-semibold text-white bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 px-3 py-1 rounded-md">
            <Award size={13} />
            CGPA: 8.05 / 10
          </div>

          <div className="flex items-center gap-1 text-zinc-400">
            <MapPin size={13} /> Ghaziabad, UP, India
          </div>
        </div>
      </div>
    </section>
  );
}
