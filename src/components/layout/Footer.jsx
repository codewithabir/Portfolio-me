import React from 'react';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import { navLinks } from '../../data/portfolioData';
import { Mail, ArrowUp, Terminal, Heart, Code2, Lock } from 'lucide-react';
import { Github, Linkedin } from '../common/BrandIcons';

const Footer = ({ onOpenAdmin }) => {
  const { personalData } = usePortfolioData();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/80 transition-colors duration-300">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
                {personalData.name}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              "{personalData.footerTagline}"
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-500 font-mono">
              CSE Department · {personalData.university} · Session 2023–2024
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500 transition-all duration-200"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic & Community */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4 font-mono">
              Sections
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#github"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-150"
                >
                  GitHub Showcase
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Md. Abir Hossan. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1">
              Crafted with React, Tailwind & Passion
            </span>

            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all text-xs cursor-pointer shadow-xs"
              title="Admin Control Terminal (Ctrl+Shift+A)"
            >
              <Lock className="w-3 h-3 text-emerald-500" />
              <span>Admin</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-400 dark:hover:border-cyan-500/50 transition-all duration-200 cursor-pointer shadow-xs"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
