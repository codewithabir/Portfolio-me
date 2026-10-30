import React, { useEffect } from 'react';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import { X, Download, Printer, ExternalLink, Mail, MapPin, GraduationCap, Briefcase, Award, Check } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const ResumeModal = ({ isOpen, onClose }) => {
  const { personalData, educationData, skillsData, activitiesData, projectsData } = usePortfolioData();
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const edu = educationData[0];
  const leadership = activitiesData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0C101B] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions Bar */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-[#0C101B]/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <a
              href={`mailto:${personalData.email}?subject=Requesting Official Resume Copy`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-sm hover:opacity-95 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Direct Inquire</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="p-6 sm:p-10 space-y-8 text-slate-800 dark:text-slate-200">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
              {personalData.name}
            </h1>
            <p className="text-base font-semibold text-indigo-600 dark:text-cyan-400 font-mono mb-4">
              {personalData.role}
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-5 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                {personalData.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                {personalData.email}
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-indigo-500" />
                github.com/{personalData.githubUsername}
              </span>
            </div>
          </div>

          {/* Professional Objective */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-2">
              Career Objective
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Motivated Computer Science and Engineering student at NITER with strong foundational competencies in C++, Java, JavaScript, Data Structures & Algorithms, and modern web application development. Seeking challenging opportunities to apply algorithmic problem-solving skills and grow as an impactful software engineer.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Session: {edu.session} · Duration: {edu.duration}
                </span>
              </div>
              <div className="text-sm font-medium text-indigo-600 dark:text-cyan-400 mt-0.5">
                {edu.institution}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {edu.location}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {edu.coreCourses.slice(0, 5).map((course, idx) => (
                  <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-3">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">Programming Languages:</strong>
                <span className="text-slate-600 dark:text-slate-400">C, C++, Java, JavaScript (ES6+)</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">Web Development:</strong>
                <span className="text-slate-600 dark:text-slate-400">HTML5, CSS3, JavaScript, React.js, Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">Core CS Disciplines:</strong>
                <span className="text-slate-600 dark:text-slate-400">Data Structures & Algorithms, OOP, Database Systems</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">Tools & Platforms:</strong>
                <span className="text-slate-600 dark:text-slate-400">Git, GitHub, VS Code, Linux Shell</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-3">
              Key Projects
            </h2>
            <div className="space-y-3">
              {projectsData.slice(0, 3).map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{p.title}</h4>
                    <span className="text-[11px] font-mono text-slate-500">{p.category}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {p.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {p.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities & Leadership */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Leadership & Extracurricular Activities</span>
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  {leadership.title}
                </h3>
                <span className="text-xs font-mono text-indigo-600 dark:text-cyan-400 font-semibold">
                  {leadership.role}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                {leadership.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
