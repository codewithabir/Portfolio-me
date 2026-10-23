import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { activitiesData } from '../../data/portfolioData';
import { 
  Users, 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  ArrowUpRight, 
  Target, 
  Flame, 
  Cpu 
} from 'lucide-react';

const Activities = () => {
  return (
    <section id="activities" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          pill="Leadership & Community"
          title="Extracurriculars, Club Activities &"
          highlightedTitle="Tech Initiatives"
          subtitle="Active community leadership at the NITER Computer Club, organizing campus programming events, and continuous growth pursuits."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {activitiesData.map((activity, index) => {
            const isLeadership = index === 0;
            return (
              <div
                key={index}
                className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border relative flex flex-col justify-between transition-all duration-300 ${
                  isLeadership
                    ? 'border-indigo-500/40 dark:border-indigo-500/50 shadow-indigo-500/5'
                    : 'border-slate-200 dark:border-slate-800/90'
                }`}
              >
                {/* Top Badge & Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/20">
                      {isLeadership ? <Users className="w-3.5 h-3.5" /> : index === 1 ? <Trophy className="w-3.5 h-3.5" /> : <Target className="w-3.5 h-3.5" />}
                      <span>{activity.badge}</span>
                    </span>

                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {activity.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {activity.title}
                  </h3>

                  <div className="text-sm font-semibold text-indigo-600 dark:text-cyan-400 mb-3 font-mono">
                    {activity.role}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {activity.description}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2.5 mb-6">
                    {activity.keyResponsibilities.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact Box */}
                {activity.impact && (
                  <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="text-xs font-mono text-indigo-600 dark:text-cyan-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{activity.impact}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
