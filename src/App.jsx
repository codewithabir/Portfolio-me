import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioDataProvider } from './context/PortfolioDataContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Activities from './components/sections/Activities';
import GithubSection from './components/sections/GithubSection';
import Contact from './components/sections/Contact';
import ResumeModal from './components/common/ResumeModal';
import AdminModal from './components/admin/AdminModal';

function PortfolioContent() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  const handleOpenAdmin = () => {
    setIsAdminModalOpen(true);
  };

  const handleCloseAdmin = () => {
    setIsAdminModalOpen(false);
  };

  // Keyboard shortcut listener: Ctrl+Shift+A (or Cmd+Shift+A) to open Admin Portal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070B14] text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={handleOpenResume} />

        {/* About Section */}
        <About onOpenResume={handleOpenResume} />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Activities and Experience Section */}
        <Activities />

        {/* Dedicated GitHub Section */}
        <GithubSection />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenAdmin={handleOpenAdmin} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />

      {/* Admin Panel Modal */}
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={handleCloseAdmin}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioDataProvider>
        <PortfolioContent />
      </PortfolioDataProvider>
    </ThemeProvider>
  );
}
