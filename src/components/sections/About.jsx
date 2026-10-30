import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import { 
  Terminal, 
  GraduationCap, 
  Code, 
  Lightbulb, 
  Target, 
  Sparkles, 
  Copy, 
  Check, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Users 
} from 'lucide-react';

const About = ({ onOpenResume }) => {
  const { personalData } = usePortfolioData();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('bio.json');

  const jsonSnippet = JSON.stringify(
    {
      name: personalData.name,
      education: {
        degree: "B.Sc in Computer Science & Engineering",
        institution: "NITER",
        session: "2023–2024",
        duration: "4 Years"
      },
      status: "Active Student & Aspiring Software Developer",
      currentFocus: [
        "Data Structures & Algorithms",
        "Fullstack Web Development",
        "Java & C++ OOP",
        "System Design Fundamentals"
      ],
      leadership: "Junior Office Secretary @ NITER Computer Club",
      mission: "To engineer robust, user-centric software solutions."
    },
    null,
    2
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          pill="About Me"
          title="Engineering My Future,"
          highlightedTitle="One Line at a Time"
          subtitle="Discover my academic roots at NITER, my technical passions, and my drive to build digital solutions that matter."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Developer Terminal Profile Card */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="terminal-window shadow-2xl transition-all duration-300 hover:border-indigo-500/30">
              {/* Terminal Titlebar */}
              <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-950/70 px-2 py-0.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-400">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>abir_developer_profile.json</span>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Copy JSON representation"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto bg-[#070B12]">
                <pre className="text-slate-300">
                  <code>
                    <span className="text-purple-400">&#123;</span>
                    {'\n'}  <span className="text-cyan-400">"developer"</span>: <span className="text-amber-300">"{personalData.name}"</span>,
                    {'\n'}  <span className="text-cyan-400">"role"</span>: <span className="text-emerald-300">"Aspiring Software Developer"</span>,
                    {'\n'}  <span className="text-cyan-400">"university"</span>: &#123;
                    {'\n'}    <span className="text-indigo-400">"name"</span>: <span className="text-amber-300">"NITER"</span>,
                    {'\n'}    <span className="text-indigo-400">"department"</span>: <span className="text-amber-300">"Computer Science & Engineering"</span>,
                    {'\n'}    <span className="text-indigo-400">"session"</span>: <span className="text-emerald-400">"2023–2024"</span>,
                    {'\n'}    <span className="text-indigo-400">"duration"</span>: <span className="text-emerald-400">"4 Years"</span>
                    {'\n'}  &#125;,
                    {'\n'}  <span className="text-cyan-400">"currentlyLearning"</span>: [
                    {'\n'}    <span className="text-emerald-300">"Data Structures & Algorithms"</span>,
                    {'\n'}    <span className="text-emerald-300">"Web Development (React / Tailwind)"</span>,
                    {'\n'}    <span className="text-emerald-300">"Java & C++ Object-Oriented Programming"</span>,
                    {'\n'}    <span className="text-emerald-300">"Software Architecture Concepts"</span>
                    {'\n'}  ],
                    {'\n'}  <span className="text-cyan-400">"leadership"</span>: <span className="text-amber-300">"Junior Office Secretary, NITER Computer Club"</span>,
                    {'\n'}  <span className="text-cyan-400">"github"</span>: <span className="text-cyan-300">"github.com/{personalData.githubUsername}"</span>,
                    {'\n'}  <span className="text-cyan-400">"openForWork"</span>: <span className="text-emerald-400">true</span>
                    {'\n'}<span className="text-purple-400">&#125;</span>
                  </code>
                </pre>
              </div>

              {/* Terminal Footer status */}
              <div className="bg-slate-900/90 border-t border-slate-800/80 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Process: Continuous Learning
                </span>
                <span>UTF-8 · JSON · node v24</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio narrative and quick stats */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Who I Am & What Drives Me
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                I am <strong className="text-slate-900 dark:text-white">Md. Abir Hossan</strong>, a Computer Science and Engineering (CSE) student at the 
                <strong className="text-indigo-600 dark:text-cyan-400"> National Institute of Textile Engineering and Research (NITER)</strong> (Session 2023–2024).
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                My passion lies at the intersection of programming, web development, software engineering, and technology. I am continuously exploring how clean code and logical algorithms solve real-world complexities.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                Every day, I invest dedicated hours into mastering <span className="text-indigo-600 dark:text-cyan-400 font-medium">Data Structures and Algorithms (DSA)</span>, 
                <span className="text-indigo-600 dark:text-cyan-400 font-medium"> Object-Oriented Programming (Java / C++)</span>, and <span className="text-indigo-600 dark:text-cyan-400 font-medium">Modern Web Development</span>.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                My ultimate goal is to become an accomplished, innovative Software Engineer who crafts high-impact, reliable digital solutions that enrich lives and empower communities.
              </p>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5 mb-1 text-indigo-600 dark:text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase font-semibold">Undergrad</span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-base">NITER CSE</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Session 2023–2024 (4 Yrs)</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5 mb-1 text-indigo-600 dark:text-cyan-400">
                  <Users className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase font-semibold">Leadership</span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-base">NCC Secretary</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Junior Office Secretary</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5 mb-1 text-indigo-600 dark:text-cyan-400">
                  <Code className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase font-semibold">Core Focus</span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-base">Software Dev</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">DSA & Web Technologies</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5 mb-1 text-indigo-600 dark:text-cyan-400">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase font-semibold">Location</span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-base">Dhaka</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Bangladesh</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-indigo-600 dark:hover:bg-cyan-400 transition-colors shadow-sm"
              >
                <span>Download My Full Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
