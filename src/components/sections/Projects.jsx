import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { projectsData } from '../../data/portfolioData';
import { 
  ExternalLink, 
  Sparkles, 
  Code2, 
  Eye, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  FolderGit2, 
  Star, 
  GitFork 
} from 'lucide-react';
import { Github } from '../common/BrandIcons';

const Projects = ({ onSelectProject }) => {
  const [filter, setFilter] = useState('All');

  const featuredProject = projectsData.find(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);

  const categories = ['All', 'Web Development', 'Software & C++'];

  const filteredProjects = filter === 'All'
    ? otherProjects
    : otherProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          pill="Portfolio Showcase"
          title="Featured Creations &"
          highlightedTitle="Software Projects"
          subtitle="A selection of web applications, systems programs, and problem-solving tools engineered with performance, clean code, and intuitive UX in mind."
        />

        {/* Featured Project Spotlight */}
        {featuredProject && (
          <div className="mb-16">
            <div className="relative rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-blue-600 shadow-2xl shadow-indigo-500/10">
              <div className="rounded-[22px] bg-white dark:bg-slate-950 p-6 sm:p-8 lg:p-10 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Visual Mockup Showcase */}
                  <div className="lg:col-span-6">
                    <div className="terminal-window rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900">
                      {/* Browser Mockup Top Bar */}
                      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                          <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                          <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                          https://codewithabir.github.io/algorithm-visualizer
                        </div>
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      </div>

                      {/* Visual UI Simulation Container */}
                      <div className="p-6 bg-gradient-to-br from-[#0B0F19] via-[#111827] to-[#0A1020] min-h-[260px] flex flex-col justify-between">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-3">
                          <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5" />
                            Algorithm Sandbox: Dijkstra & A*
                          </span>
                          <span className="text-emerald-400">FPS: 60 | Status: Solved</span>
                        </div>

                        {/* Interactive-looking Pathfinding Grid Simulation */}
                        <div className="grid grid-cols-10 gap-1.5 my-4 p-2 bg-slate-950/80 rounded-xl border border-slate-800">
                          {Array.from({ length: 40 }).map((_, i) => {
                            const isStart = i === 2;
                            const isEnd = i === 37;
                            const isPath = [12, 13, 14, 24, 25, 26, 36].includes(i);
                            const isWall = [3, 4, 15, 23, 33].includes(i);

                            return (
                              <div
                                key={i}
                                className={`h-4 sm:h-5 rounded-sm transition-all duration-300 ${
                                  isStart
                                    ? 'bg-emerald-500 ring-2 ring-emerald-400 animate-pulse'
                                    : isEnd
                                    ? 'bg-rose-500 ring-2 ring-rose-400'
                                    : isPath
                                    ? 'bg-cyan-400 shadow-sm shadow-cyan-400/50'
                                    : isWall
                                    ? 'bg-slate-700'
                                    : 'bg-slate-800/40 hover:bg-slate-700/60'
                                }`}
                              />
                            );
                          })}
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span className="text-slate-300">● Start: (0, 2)</span>
                          <span className="text-cyan-300">■ Optimal Path: 7 steps</span>
                          <span className="text-rose-400">◆ Target: (3, 7)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project Meta & CTAs */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/20">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{featuredProject.badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                      {featuredProject.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {featuredProject.shortDescription}
                    </p>

                    {/* Key Highlights list */}
                    <div className="space-y-2 pt-1">
                      {featuredProject.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons: GitHub & Live Demo */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters for Project Grid */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              More Projects & Code Repositories
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select a category to filter through student projects, software systems, and web tools.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover group rounded-2xl border border-slate-200 dark:border-slate-800/90 overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              {/* Card Header Preview Window */}
              <div className="p-5 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/20 font-medium">
                    {project.badge}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Highlights & Tech Stack */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  {project.highlights && project.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: GitHub and Live Demo */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-sm hover:opacity-95 transition-opacity"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
