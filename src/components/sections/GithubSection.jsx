import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { githubData, personalData } from '../../data/portfolioData';
import { 
  ExternalLink, 
  Star, 
  GitFork, 
  Code2, 
  Flame, 
  GitCommit, 
  FolderGit2, 
  Terminal, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { Github } from '../common/BrandIcons';

const GithubSection = () => {
  return (
    <section id="github" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          pill="Open Source & Version Control"
          title="GitHub Activity &"
          highlightedTitle="Code Repositories"
          subtitle="A glimpse into my open-source work, continuous commit streak, and software repositories hosted on GitHub."
        />

        {/* GitHub Highlight Card */}
        <div className="mb-12 glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* User Profile Spotlight */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg border border-slate-700">
                  <Github className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
                    <span>@{githubData.username}</span>
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    GitHub Developer Profile · Md. Abir Hossan
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                "{githubData.tagline}" I use Git and GitHub to document every step of my learning journey—from data structure exercises to full-scale web applications and collaborative campus club repositories.
              </p>

              {/* Journey Highlights */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                <span className="px-3 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                  <GitCommit className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                  Consistent Commits
                </span>
                <span className="px-3 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                  Clean Commit Conventions
                </span>
                <span className="px-3 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                  Structured Branches & PRs
                </span>
              </div>

              {/* CTA Button: Visit My GitHub */}
              <div className="pt-4">
                <a
                  href={githubData.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-indigo-600 dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit My GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Stat Tiles */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <div className="text-2xl font-bold font-heading text-indigo-600 dark:text-cyan-400 mb-1">
                  {githubData.stats.repositories}
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Public Repositories</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Algorithms & Web Apps</div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <div className="text-2xl font-bold font-heading text-emerald-500 mb-1">
                  {githubData.stats.contributions}
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Code Contributions</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Annual Commit Volume</div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <div className="text-2xl font-bold font-heading text-amber-500 mb-1">
                  4+ Languages
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Stack Diversity</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">C++, Java, JS, HTML/CSS</div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <div className="text-2xl font-bold font-heading text-rose-500 mb-1">
                  Daily
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Coding Habit</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Continuous Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-indigo-500 dark:text-cyan-400" />
            <span>Featured Repositories on GitHub</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {githubData.featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 block transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-cyan-400 font-bold text-base group-hover:underline">
                    <FolderGit2 className="w-4 h-4 shrink-0" />
                    <span>{repo.name}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-cyan-400"></span>
                    {repo.language}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
