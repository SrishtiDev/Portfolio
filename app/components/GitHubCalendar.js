'use client';

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { GitCommit } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function GitHubCalendarSection() {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  const customTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section id="github" className="py-10 border-b border-zinc-200 dark:border-zinc-800/80 scroll-mt-16">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <GitCommit className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
            GitHub Activity
          </h2>
        </div>

        <a
          href="https://github.com/SrishtiDev"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-mono transition-colors"
        >
          @SrishtiDev
        </a>
      </div>

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50/60 dark:bg-zinc-950/60 p-4 sm:p-6">
        {/* Scrollable Container on Mobile */}
        <div className="overflow-x-auto pb-2 scrollbar-thin">
          <div className="min-w-[720px] flex justify-center text-zinc-700 dark:text-zinc-300">
            <GitHubCalendar
              username="SrishtiDev"
              theme={customTheme}
              colorScheme={currentTheme === 'light' ? 'light' : 'dark'}
              blockSize={12}
              blockRadius={3}
              blockMargin={3}
              fontSize={12}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
