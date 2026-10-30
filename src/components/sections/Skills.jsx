import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import { 
  Code2, 
  Cpu, 
  Coffee, 
  FileCode, 
  FileCode2, 
  Layout, 
  Palette, 
  Atom, 
  Sparkles, 
  Network, 
  Layers, 
  Terminal, 
  Workflow, 
  GitBranch, 
  Code, 
  TerminalSquare,
  CheckCircle2
} from 'lucide-react';
import { Github } from '../common/BrandIcons';

// Icon mapper helper
const getSkillIcon = (iconName) => {
  const iconProps = { className: "w-5 h-5 transition-transform duration-300 group-hover:scale-110" };
  switch (iconName) {
    case 'Code2': return <Code2 {...iconProps} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'Coffee': return <Coffee {...iconProps} />;
    case 'FileCode2': return <FileCode2 {...iconProps} />;
    case 'FileCode': return <FileCode {...iconProps} />;
    case 'Layout': return <Layout {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'Atom': return <Atom {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'Network': return <Network {...iconProps} />;
    case 'Layers': return <Layers {...iconProps} />;
    case 'Terminal': return <Terminal {...iconProps} />;
    case 'Workflow': return <Workflow {...iconProps} />;
    case 'GitBranch': return <GitBranch {...iconProps} />;
    case 'Github': return <Github {...iconProps} />;
    case 'Code': return <Code {...iconProps} />;
    case 'TerminalSquare': return <TerminalSquare {...iconProps} />;
    default: return <Code2 {...iconProps} />;
  }
};

const Skills = () => {
  const { skillsData } = usePortfolioData();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = skillsData.categories || [];
  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          pill="Technical Stack"
          title="Skills, Frameworks &"
          highlightedTitle="Tooling Ecosystem"
          subtitle="A comprehensive inventory of programming languages, web technologies, CS fundamentals, and development tools I work with daily."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-400'
            }`}
          >
            All Disciplines
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-400'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {category.skills.length} Items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card glass-card-hover group p-5 rounded-2xl border border-slate-200 dark:border-slate-800/90 relative overflow-hidden transition-all duration-300"
                  >
                    {/* Top gradient accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center text-indigo-600 dark:text-cyan-400 group-hover:border-cyan-500/50 transition-colors shadow-sm">
                        {getSkillIcon(skill.icon)}
                      </div>

                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 font-medium">
                        {skill.level}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {skill.tag}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Actively Practiced</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
