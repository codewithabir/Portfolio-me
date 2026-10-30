import React, { useState } from 'react';
import { Plus, Trash2, Save, Check, GraduationCap } from 'lucide-react';

const EducationTab = ({ educationData, onSave }) => {
  // educationData is an array of education items
  const [items, setItems] = useState([...educationData]);
  const [showSavedToast, setShowSavedToast] = useState(false);
  const [newCourse, setNewCourse] = useState('');
  const [newHighlight, setNewHighlight] = useState('');

  const currentItem = items[0] || {};

  const handleFieldChange = (field, value) => {
    setItems(prev => {
      const updated = [...prev];
      updated[0] = { ...updated[0], [field]: value };
      return updated;
    });
  };

  const handleAddCourse = () => {
    if (!newCourse.trim()) return;
    setItems(prev => {
      const updated = [...prev];
      const courses = [...(updated[0].coreCourses || []), newCourse.trim()];
      updated[0] = { ...updated[0], coreCourses: courses };
      return updated;
    });
    setNewCourse('');
  };

  const handleRemoveCourse = (index) => {
    setItems(prev => {
      const updated = [...prev];
      const courses = updated[0].coreCourses.filter((_, i) => i !== index);
      updated[0] = { ...updated[0], coreCourses: courses };
      return updated;
    });
  };

  const handleAddHighlight = () => {
    if (!newHighlight.trim()) return;
    setItems(prev => {
      const updated = [...prev];
      const highlights = [...(updated[0].highlights || []), newHighlight.trim()];
      updated[0] = { ...updated[0], highlights };
      return updated;
    });
    setNewHighlight('');
  };

  const handleRemoveHighlight = (index) => {
    setItems(prev => {
      const updated = [...prev];
      const highlights = updated[0].highlights.filter((_, i) => i !== index);
      updated[0] = { ...updated[0], highlights };
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(items);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {showSavedToast && (
        <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-xl flex items-center gap-2 text-sm font-medium animate-in fade-in">
          <Check className="w-4 h-4" />
          <span>Education details updated successfully in live site!</span>
        </div>
      )}

      {/* Main Degree & Institution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Degree Title
          </label>
          <input
            type="text"
            value={currentItem.degree || ''}
            onChange={(e) => handleFieldChange('degree', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Institution Name
          </label>
          <input
            type="text"
            value={currentItem.institution || ''}
            onChange={(e) => handleFieldChange('institution', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Affiliation
          </label>
          <input
            type="text"
            value={currentItem.affiliation || ''}
            onChange={(e) => handleFieldChange('affiliation', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Session
          </label>
          <input
            type="text"
            value={currentItem.session || ''}
            onChange={(e) => handleFieldChange('session', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Status
          </label>
          <input
            type="text"
            value={currentItem.status || ''}
            onChange={(e) => handleFieldChange('status', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Duration
          </label>
          <input
            type="text"
            value={currentItem.duration || ''}
            onChange={(e) => handleFieldChange('duration', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Location
          </label>
          <input
            type="text"
            value={currentItem.location || ''}
            onChange={(e) => handleFieldChange('location', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Overview */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          Academic Overview
        </label>
        <textarea
          rows={3}
          value={currentItem.overview || ''}
          onChange={(e) => handleFieldChange('overview', e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none resize-none"
        />
      </div>

      {/* Core Courses List */}
      <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-3">
        <label className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block">
          Core Courses & Curriculum Tags ({currentItem.coreCourses?.length || 0})
        </label>
        <div className="flex flex-wrap gap-2">
          {currentItem.coreCourses?.map((course, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200"
            >
              {course}
              <button
                type="button"
                onClick={() => handleRemoveCourse(idx)}
                className="text-slate-400 hover:text-red-400"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 pt-2">
          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddCourse(); } }}
            placeholder="Add new course (e.g. Operating Systems)..."
            className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-dashed border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleAddCourse}
            className="px-3 py-1.5 rounded-lg bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 text-xs font-medium hover:bg-cyan-600/50 flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Course
          </button>
        </div>
      </div>

      {/* Academic Highlights List */}
      <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-3">
        <label className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
          Key Academic Highlights & Achievements
        </label>
        <div className="space-y-2">
          {currentItem.highlights?.map((h, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-emerald-400 text-xs">✦</span>
              <input
                type="text"
                value={h}
                onChange={(e) => {
                  const updated = [...currentItem.highlights];
                  updated[idx] = e.target.value;
                  handleFieldChange('highlights', updated);
                }}
                className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleRemoveHighlight(idx)}
                className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 pt-2">
          <input
            type="text"
            value={newHighlight}
            onChange={(e) => setNewHighlight(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddHighlight(); } }}
            placeholder="Add new highlight point..."
            className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-dashed border-slate-700 text-white text-xs focus:border-emerald-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleAddHighlight}
            className="px-3 py-1.5 rounded-lg bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-medium hover:bg-emerald-600/50 flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Point
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-4 border-t border-slate-800">
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold text-sm hover:from-emerald-400 hover:to-cyan-400 shadow-md shadow-emerald-500/20 flex items-center gap-2 cursor-pointer transition-all"
        >
          <Save className="w-4 h-4" />
          Save Education Changes
        </button>
      </div>
    </form>
  );
};

export default EducationTab;
