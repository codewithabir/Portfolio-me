import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { navLinks } from '../../data/portfolioData';
import { Sun, Moon, Menu, X, Terminal, FileText } from 'lucide-react';

const Navbar = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // References for sliding capsule animation
  const navContainerRef = useRef(null);
  const itemRefs = useRef({});
  const [pillStyle, setPillStyle] = useState({ left: 0, top: 6, width: 0, height: 0, opacity: 0 });

  // Ref to track if smooth scrolling was initiated by a user click
  const isClickScrolling = useRef(false);
  const scrollLockTimer = useRef(null);

  // Update sliding pill position based on active section
  const updatePillPosition = () => {
    const activeEl = itemRefs.current[activeSection];
    const container = navContainerRef.current;
    if (activeEl && container) {
      setPillStyle({
        left: activeEl.offsetLeft,
        top: activeEl.offsetTop,
        width: activeEl.offsetWidth,
        height: activeEl.offsetHeight,
        opacity: 1
      });
    }
  };

  useEffect(() => {
    updatePillPosition();
    // Delay slightly to ensure fonts and layout dimensions have settled
    const timer = setTimeout(updatePillPosition, 100);
    window.addEventListener('resize', updatePillPosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePillPosition);
    };
  }, [activeSection]);

  // Monitor scroll for glass effect and active section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // If user clicked a nav link, do NOT let intermediate scroll events override activeSection
      if (isClickScrolling.current) return;

      // When near bottom of page, directly activate the last section ('contact')
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // User manual wheel/touch cancels any programmatic lock immediately
    const handleUserInteraction = () => {
      if (isClickScrolling.current) {
        isClickScrolling.current = false;
        if (scrollLockTimer.current) {
          clearTimeout(scrollLockTimer.current);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      if (scrollLockTimer.current) {
        clearTimeout(scrollLockTimer.current);
      }
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.substring(1);

    // Lock scroll-spy updates so it doesn't step through intermediate sections
    isClickScrolling.current = true;
    if (scrollLockTimer.current) {
      clearTimeout(scrollLockTimer.current);
    }

    // Set active section immediately so the pill smoothly glides directly to the target
    setActiveSection(sectionId);

    const target = document.querySelector(href);
    if (target) {
      const navOffset = 75;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Release lock once smooth scrolling has concluded
    scrollLockTimer.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);

    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Cyber / Smart Terminal Look */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-indigo-500 to-cyan-400 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-emerald-400 group-hover:text-cyan-400 group-hover:rotate-12 transition-all duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight">
                Abir<span className="text-emerald-500 dark:text-cyan-400 font-mono">.dev</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Hardware-Accelerated Sliding Clear Shade */}
          <nav
            ref={navContainerRef}
            className="relative hidden lg:flex items-center p-1.5 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg shadow-black/5"
          >
            {/* The Clear Transparent Button Shade that smoothly slides from button to button */}
            <div
              style={{
                transform: `translateX(${pillStyle.left}px)`,
                top: `${pillStyle.top}px`,
                width: `${pillStyle.width}px`,
                height: `${pillStyle.height}px`,
                opacity: pillStyle.opacity,
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), width 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
                willChange: 'transform, width'
              }}
              className="absolute left-0 rounded-xl bg-slate-900/5 dark:bg-emerald-500/15 border border-slate-900/10 dark:border-emerald-400/35 shadow-xs backdrop-blur-md pointer-events-none z-0 overflow-hidden"
            >
              {/* Subtle cyber gradient sheen inside the sliding capsule */}
              <div className="w-full h-full rounded-xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 opacity-80"></div>
            </div>

            {/* Individual Navigation Buttons */}
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  ref={(el) => (itemRefs.current[sectionId] = el)}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative z-10 px-4 py-2 rounded-xl text-xs xl:text-sm font-medium transition-colors duration-200 select-none flex items-center justify-center cursor-pointer ${
                    isActive
                      ? 'text-emerald-600 dark:text-cyan-300 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Theme Toggle & Resume */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-cyan-400 hover:border-emerald-400/40 dark:hover:border-cyan-500/50 shadow-sm transition-all duration-200 cursor-pointer"
              aria-label="Toggle Dark/Light Mode"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-emerald-600 via-indigo-600 to-cyan-600 text-white shadow-md hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-emerald-500" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-card border-b border-slate-200 dark:border-slate-800/80 px-4 pt-3 pb-6 mt-2 mx-3 rounded-2xl shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-cyan-400 font-semibold border border-emerald-400/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-md cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
