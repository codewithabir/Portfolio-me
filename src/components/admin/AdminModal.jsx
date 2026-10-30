import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  Unlock, 
  Terminal, 
  User, 
  Layers, 
  GraduationCap, 
  Award, 
  Mail, 
  Database,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import HeroTab from './tabs/HeroTab';
import SkillsTab from './tabs/SkillsTab';
import EducationTab from './tabs/EducationTab';
import ActivitiesTab from './tabs/ActivitiesTab';
import ContactTab from './tabs/ContactTab';
import BackupTab from './tabs/BackupTab';

const AdminModal = ({ isOpen, onClose }) => {
  const { 
    personalData, 
    skillsData, 
    educationData, 
    activitiesData, 
    allData,
    updatePersonalData, 
    updateSkillsData, 
    updateEducationData, 
    updateActivitiesData, 
    resetAllData,
    importAllData,
    updatePasscode,
    verifyPasscode 
  } = usePortfolioData();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcodeInput, setPasscodeInput] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (verifyPasscode(passcodeInput)) {
      setIsAuthenticated(true);
      setPasscodeError(false);
      setPasscodeInput('');
    } else {
      setPasscodeError(true);
      setPasscodeInput('');
    }
  };

  const handleLockSession = () => {
    setIsAuthenticated(false);
  };

  const tabs = [
    { id: 'hero', label: 'Hero & Bio', icon: User },
    { id: 'skills', label: 'Skills', icon: Layers },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'activities', label: 'Activities', icon: Award },
    { id: 'contact', label: 'Contact & Links', icon: Mail },
    { id: 'backup', label: 'Sync & Backup', icon: Database },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-sm sm:text-base text-white tracking-tight">
                  Portfolio Admin Control Terminal
                </h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {isAuthenticated ? 'Authenticated' : 'Locked'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Live Section Controller · Shortcut: Ctrl+Shift+A
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLockSession}
                className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors cursor-pointer"
                title="Lock session"
              >
                <Unlock className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {!isAuthenticated ? (
          /* Passcode Gate Screen */
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-6 my-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
              <Lock className="w-8 h-8" />
            </div>

            <div className="max-w-md space-y-2">
              <h4 className="text-xl font-bold text-white tracking-tight">
                Admin Authentication Required
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enter your administrative passcode to unlock live control over your portfolio's hero, skills, education, activities, and contact details.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-3">
              <div className="relative">
                <input
                  type="password"
                  value={passcodeInput}
                  onChange={(e) => {
                    setPasscodeInput(e.target.value);
                    if (passcodeError) setPasscodeError(false);
                  }}
                  placeholder="Enter passcode (Default: abir2026)"
                  autoFocus
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-center text-sm font-mono tracking-widest focus:outline-none transition-colors ${
                    passcodeError
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-slate-700 focus:border-emerald-500'
                  }`}
                />
              </div>

              {passcodeError && (
                <p className="text-xs text-red-400 font-medium flex items-center justify-center gap-1 animate-shake">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Incorrect passcode. Try again.
                </p>
              )}

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:from-emerald-400 hover:to-cyan-400 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                <span>Unlock Terminal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-500 font-mono">
              Default passcode: <span className="text-emerald-400">abir2026</span>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard Screen */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar Navigation Tabs */}
            <div className="w-full md:w-56 p-3 bg-slate-950/60 border-b md:border-b-0 md:border-r border-slate-800 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all text-left whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-xs'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Content Area */}
            <div className="flex-1 p-5 sm:p-6 overflow-y-auto max-h-[75vh]">
              {activeTab === 'hero' && (
                <HeroTab 
                  personalData={personalData} 
                  onSave={updatePersonalData} 
                />
              )}
              {activeTab === 'skills' && (
                <SkillsTab 
                  skillsData={skillsData} 
                  onSave={updateSkillsData} 
                />
              )}
              {activeTab === 'education' && (
                <EducationTab 
                  educationData={educationData} 
                  onSave={updateEducationData} 
                />
              )}
              {activeTab === 'activities' && (
                <ActivitiesTab 
                  activitiesData={activitiesData} 
                  onSave={updateActivitiesData} 
                />
              )}
              {activeTab === 'contact' && (
                <ContactTab 
                  personalData={personalData} 
                  onSave={updatePersonalData} 
                />
              )}
              {activeTab === 'backup' && (
                <BackupTab 
                  allData={allData} 
                  onReset={resetAllData} 
                  onImport={importAllData} 
                  onUpdatePasscode={updatePasscode} 
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminModal;
