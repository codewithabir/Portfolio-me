import React, { useState } from 'react';
import { Plus, Trash2, Save, Check, Award, ChevronDown, ChevronUp } from 'lucide-react';

const ActivitiesTab = ({ activitiesData, onSave }) => {
  const [activities, setActivities] = useState([...activitiesData]);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleFieldChange = (index, field, value) => {
    setActivities(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleAddResponsibility = (actIndex, text) => {
    if (!text.trim()) return;
    setActivities(prev => {
      const updated = [...prev];
      const list = [...(updated[actIndex].keyResponsibilities || []), text.trim()];
      updated[actIndex] = { ...updated[actIndex], keyResponsibilities: list };
      return updated;
    });
  };

  const handleRemoveResponsibility = (actIndex, respIndex) => {
    setActivities(prev => {
      const updated = [...prev];
      const list = updated[actIndex].keyResponsibilities.filter((_, i) => i !== respIndex);
      updated[actIndex] = { ...updated[actIndex], keyResponsibilities: list };
      return updated;
    });
  };

  const handleAddNewActivity = () => {
    const newEntry = {
      title: "New Achievement or Club Role",
      role: "Member / Contributor",
      badge: "Achievement 2026",
      period: "2026",
      description: "Brief summary of the role, event, or certification.",
      keyResponsibilities: [
        "Key initiative or milestone achieved.",
        "Collaboration or leadership impact."
      ],
      impact: "Demonstrated growth and technical contribution."
    };
    setActivities(prev => [...prev, newEntry]);
    setExpandedIndex(activities.length);
  };

  const handleDeleteActivity = (index) => {
    if (activities.length <= 1) return;
    setActivities(prev => prev.filter((_, i) => i !== index));
    if (expandedIndex >= index) {
      setExpandedIndex(Math.max(0, expandedIndex - 1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(activities);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2500);
  };

  return (
    <div className="space-y-6">
      {showSavedToast && (
        <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-xl flex items-center gap-2 text-sm font-medium animate-in fade-in">
          <Check className="w-4 h-4" />
          <span>Activities and Achievements updated successfully in live site!</span>
        </div>
      )}

      {/* Activities Accordion List */}
      <div className="space-y-3">
        {activities.map((act, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-950/40 overflow-hidden transition-all"
            >
              {/* Accordion Header */}
              <div
                className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-slate-900/60 transition-colors"
                onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {act.title || 'Untitled Activity'}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {act.role} · <span className="text-emerald-400">{act.badge}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteActivity(idx);
                    }}
                    disabled={activities.length <= 1}
                    className="p-1.5 text-slate-500 hover:text-red-400 disabled:opacity-30 rounded-lg"
                    title="Delete activity"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </div>
              </div>

              {/* Accordion Body */}
              {isExpanded && (
                <div className="p-4 border-t border-slate-800/80 space-y-4 bg-slate-900/30">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                        Activity / Club / Event Title
                      </label>
                      <input
                        type="text"
                        value={act.title || ''}
                        onChange={(e) => handleFieldChange(idx, 'title', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                        Your Role / Position
                      </label>
                      <input
                        type="text"
                        value={act.role || ''}
                        onChange={(e) => handleFieldChange(idx, 'role', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                        Badge Pill
                      </label>
                      <input
                        type="text"
                        value={act.badge || ''}
                        onChange={(e) => handleFieldChange(idx, 'badge', e.target.value)}
                        placeholder="e.g. Executive Leadership"
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-400 text-xs focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                        Period / Timeline
                      </label>
                      <input
                        type="text"
                        value={act.period || ''}
                        onChange={(e) => handleFieldChange(idx, 'period', e.target.value)}
                        placeholder="e.g. Active Tenure / 2024-Present"
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                      Summary Description
                    </label>
                    <textarea
                      rows={2}
                      value={act.description || ''}
                      onChange={(e) => handleFieldChange(idx, 'description', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                      Impact Statement
                    </label>
                    <input
                      type="text"
                      value={act.impact || ''}
                      onChange={(e) => handleFieldChange(idx, 'impact', e.target.value)}
                      placeholder="e.g. Impacted 300+ students through technical workshops..."
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  {/* Key Responsibilities list */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <label className="block text-xs font-semibold uppercase text-slate-400">
                      Key Responsibilities & Bullet Points
                    </label>
                    <div className="space-y-2">
                      {act.keyResponsibilities?.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2">
                          <span className="text-emerald-400 text-xs">•</span>
                          <input
                            type="text"
                            value={resp}
                            onChange={(e) => {
                              const updated = [...act.keyResponsibilities];
                              updated[rIdx] = e.target.value;
                              handleFieldChange(idx, 'keyResponsibilities', updated);
                            }}
                            className="flex-1 px-3 py-1 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveResponsibility(idx, rIdx)}
                            className="p-1 text-slate-500 hover:text-red-400"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-1">
                      <input
                        type="text"
                        id={`new-resp-${idx}`}
                        placeholder="Add new responsibility bullet..."
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddResponsibility(idx, e.target.value);
                            e.target.value = '';
                          }
                        }}
                        className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-dashed border-slate-700 text-white text-xs focus:border-emerald-400 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById(`new-resp-${idx}`);
                          if (el) {
                            handleAddResponsibility(idx, el.value);
                            el.value = '';
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-medium hover:bg-emerald-600/50 flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Add Point
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Add New Activity Button */}
      <button
        type="button"
        onClick={handleAddNewActivity}
        className="w-full py-2.5 rounded-xl border border-dashed border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 text-xs font-medium flex items-center justify-center gap-1.5 bg-slate-900/30 transition-colors cursor-pointer"
      >
        <Plus className="w-4 h-4" />
        Add New Activity / Achievement Card
      </button>

      {/* Save Button */}
      <div className="flex justify-end pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={handleSubmit}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold text-sm hover:from-emerald-400 hover:to-cyan-400 shadow-md shadow-emerald-500/20 flex items-center gap-2 cursor-pointer transition-all"
        >
          <Save className="w-4 h-4" />
          Save Activities Changes
        </button>
      </div>
    </div>
  );
};

export default ActivitiesTab;
