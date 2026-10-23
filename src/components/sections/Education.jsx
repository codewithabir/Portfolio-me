import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { educationData } from '../../data/portfolioData';
import { GraduationCap, Calendar, Clock, MapPin, BookOpen, Award, CheckCircle2 } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          pill="Academic Foundation"
          title="Education &"
          highlightedTitle="Academic Journey"
          subtitle="Formal computer science and engineering coursework, foundational studies, and academic milestones at NITER."
        />

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 border-l-2 border-indigo-500/30 dark:border-indigo-500/40 pb-6 last:pb-0">
              {/* Timeline Illuminated Node Marker */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-600 dark:text-cyan-400 shadow-md">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Education Content Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden transition-all duration-300 hover:border-indigo-500/40">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {item.status}
                  </span>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                      Session: {item.session}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Degree Title & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.degree}
                </h3>

                <div className="text-base font-semibold text-indigo-600 dark:text-cyan-400 mb-1">
                  {item.institution}
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location} ({item.affiliation})</span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.overview}
                </p>

                {/* Core Courses Grid */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3 font-mono flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                    <span>Key Computer Science Coursework</span>
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {item.coreCourses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 shadow-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
