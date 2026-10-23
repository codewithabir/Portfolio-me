import React from 'react';

const SectionHeader = ({ pill, title, highlightedTitle, subtitle, align = "center" }) => {
  const isCenter = align === "center";
  
  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'}`}>
      {pill && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
          {pill}
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
        {title}{' '}
        {highlightedTitle && (
          <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {highlightedTitle}
          </span>
        )}
      </h2>
      
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
