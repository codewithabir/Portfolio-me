import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  personalData as defaultPersonalData, 
  skillsData as defaultSkillsData, 
  projectsData as defaultProjectsData, 
  educationData as defaultEducationData, 
  activitiesData as defaultActivitiesData, 
  githubData as defaultGithubData,
  navLinks as defaultNavLinks
} from '../data/portfolioData';

const PortfolioDataContext = createContext();

const STORAGE_KEY = 'abir_portfolio_data_v1';
const PASSCODE_STORAGE_KEY = 'abir_admin_passcode';
const DEFAULT_PASSCODE = 'abir2026';

export const PortfolioDataProvider = ({ children }) => {
  // Load saved portfolio data from localStorage or fallback to defaults
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          personalData: parsed.personalData || defaultPersonalData,
          skillsData: parsed.skillsData || defaultSkillsData,
          projectsData: parsed.projectsData || defaultProjectsData,
          educationData: parsed.educationData || defaultEducationData,
          activitiesData: parsed.activitiesData || defaultActivitiesData,
          githubData: parsed.githubData || defaultGithubData,
          navLinks: parsed.navLinks || defaultNavLinks
        };
      }
    } catch (e) {
      console.warn('Failed to parse saved portfolio data from localStorage:', e);
    }
    return {
      personalData: defaultPersonalData,
      skillsData: defaultSkillsData,
      projectsData: defaultProjectsData,
      educationData: defaultEducationData,
      activitiesData: defaultActivitiesData,
      githubData: defaultGithubData,
      navLinks: defaultNavLinks
    };
  });

  // Admin passcode
  const [passcode, setPasscode] = useState(() => {
    return localStorage.getItem(PASSCODE_STORAGE_KEY) || DEFAULT_PASSCODE;
  });

  // Persist portfolio data whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save portfolio data to localStorage:', e);
    }
  }, [data]);

  // Section updater helpers
  const updatePersonalData = (updater) => {
    setData(prev => ({
      ...prev,
      personalData: typeof updater === 'function' ? updater(prev.personalData) : { ...prev.personalData, ...updater }
    }));
  };

  const updateSkillsData = (updater) => {
    setData(prev => ({
      ...prev,
      skillsData: typeof updater === 'function' ? updater(prev.skillsData) : updater
    }));
  };

  const updateEducationData = (updater) => {
    setData(prev => ({
      ...prev,
      educationData: typeof updater === 'function' ? updater(prev.educationData) : updater
    }));
  };

  const updateActivitiesData = (updater) => {
    setData(prev => ({
      ...prev,
      activitiesData: typeof updater === 'function' ? updater(prev.activitiesData) : updater
    }));
  };

  const updateProjectsData = (updater) => {
    setData(prev => ({
      ...prev,
      projectsData: typeof updater === 'function' ? updater(prev.projectsData) : updater
    }));
  };

  const updateGithubData = (updater) => {
    setData(prev => ({
      ...prev,
      githubData: typeof updater === 'function' ? updater(prev.githubData) : { ...prev.githubData, ...updater }
    }));
  };

  // Reset to original static portfolioData.js
  const resetAllData = () => {
    const defaults = {
      personalData: defaultPersonalData,
      skillsData: defaultSkillsData,
      projectsData: defaultProjectsData,
      educationData: defaultEducationData,
      activitiesData: defaultActivitiesData,
      githubData: defaultGithubData,
      navLinks: defaultNavLinks
    };
    setData(defaults);
    localStorage.removeItem(STORAGE_KEY);
  };

  // Import custom JSON
  const importAllData = (importedData) => {
    if (!importedData || typeof importedData !== 'object') {
      throw new Error('Invalid data format');
    }
    setData(prev => ({
      ...prev,
      ...importedData
    }));
  };

  // Update passcode
  const updatePasscode = (newPasscode) => {
    if (!newPasscode || newPasscode.trim().length < 4) {
      throw new Error('Passcode must be at least 4 characters');
    }
    const clean = newPasscode.trim();
    setPasscode(clean);
    localStorage.setItem(PASSCODE_STORAGE_KEY, clean);
  };

  const verifyPasscode = (inputCode) => {
    return inputCode === passcode;
  };

  return (
    <PortfolioDataContext.Provider
      value={{
        personalData: data.personalData,
        skillsData: data.skillsData,
        projectsData: data.projectsData,
        educationData: data.educationData,
        activitiesData: data.activitiesData,
        githubData: data.githubData,
        navLinks: data.navLinks,
        allData: data,
        updatePersonalData,
        updateSkillsData,
        updateEducationData,
        updateActivitiesData,
        updateProjectsData,
        updateGithubData,
        resetAllData,
        importAllData,
        passcode,
        updatePasscode,
        verifyPasscode
      }}
    >
      {children}
    </PortfolioDataContext.Provider>
  );
};

export const usePortfolioData = () => {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error('usePortfolioData must be used within a PortfolioDataProvider');
  }
  return context;
};
