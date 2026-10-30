import React, { useState } from 'react';
import { Plus, Trash2, Save, Sparkles, Check } from 'lucide-react';

const HeroTab = ({ personalData, onSave }) => {
  const [formData, setFormData] = useState({ ...personalData });
  const [newRole, setNewRole] = useState('');
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddRole = () => {
    if (!newRole.trim()) return;
    setFormData(prev => ({
      ...prev,
      dynamicRoles: [...(prev.dynamicRoles || []), newRole.trim()]
    }));
    setNewRole('');
  };

  const handleRemoveRole = (index) => {
    setFormData(prev => ({
      ...prev,
      dynamicRoles: prev.dynamicRoles.filter((_, i) => i !== index)
    }));
  };

  const handleRoleChange = (index, value) => {
    setFormData(prev => {
      const updated = [...prev.dynamicRoles];
      updated[index] = value;
      return { ...prev, dynamicRoles: updated };
    });
  };

  const handleStatChange = (index, field, value) => {
    setFormData(prev => {
      const updated = [...prev.quickStats];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, quickStats: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Save Toast notification */}
      {showSavedToast && (
        <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-xl flex items-center gap-2 text-sm font-medium animate-in fade-in">
          <Check className="w-4 h-4" />
          <span>Hero section details successfully updated in live site!</span>
        </div>
      )}

      {/* Basic Identity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Preferred / Short Name
          </label>
          <input
            type="text"
            name="preferredName"
            value={formData.preferredName || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Main Tagline & Subtitle */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          Headline Role / Subtitle
        </label>
        <input
          type="text"
          name="role"
          value={formData.role || ''}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Main Tagline
          </label>
          <input
            type="text"
            name="tagline"
            value={formData.tagline || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Profile Photo Path or URL
          </label>
          <input
            type="text"
            name="profileImage"
            value={formData.profileImage || ''}
            onChange={handleChange}
            placeholder="/profile.png"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Dynamic Typewriter Roles */}
      <div className="p-4 rounded-xl border border-slate-700/60 bg-slate-950/40 space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Dynamic Roles (Animated Typewriter in Hero)
          </label>
          <span className="text-xs text-slate-400">{formData.dynamicRoles?.length || 0} active</span>
        </div>

        <div className="space-y-2">
          {formData.dynamicRoles?.map((r, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <input
                type="text"
                value={r}
                onChange={(e) => handleRoleChange(idx, e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleRemoveRole(idx)}
                className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                title="Remove role"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Add new role */}
        <div className="flex items-center gap-2 pt-2">
          <input
            type="text"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddRole(); } }}
            placeholder="e.g. Next.js Enthusiast, AI Explorer..."
            className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-dashed border-slate-600 text-white text-xs font-mono focus:border-emerald-400 focus:outline-none placeholder:text-slate-500"
          />
          <button
            type="button"
            onClick={handleAddRole}
            className="px-3 py-1.5 rounded-lg bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-medium hover:bg-emerald-600/40 flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Role
          </button>
        </div>
      </div>

      {/* Hero Intro */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          Hero Paragraph Introduction
        </label>
        <textarea
          name="heroIntro"
          rows={3}
          value={formData.heroIntro || ''}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none resize-none"
        />
      </div>

      {/* Quick Stats Grid */}
      <div className="space-y-3">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Hero Quick Stats & Highlights
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {formData.quickStats?.map((stat, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950/40 border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Card {idx + 1}</span>
              </div>
              <input
                type="text"
                value={stat.label || ''}
                onChange={(e) => handleStatChange(idx, 'label', e.target.value)}
                placeholder="Label"
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 focus:border-emerald-500 focus:outline-none"
              />
              <input
                type="text"
                value={stat.value || ''}
                onChange={(e) => handleStatChange(idx, 'value', e.target.value)}
                placeholder="Value"
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-emerald-400 focus:border-emerald-500 focus:outline-none"
              />
              <input
                type="text"
                value={stat.subtext || ''}
                onChange={(e) => handleStatChange(idx, 'subtext', e.target.value)}
                placeholder="Subtext"
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-400 focus:border-emerald-500 focus:outline-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-4 border-t border-slate-800">
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold text-sm hover:from-emerald-400 hover:to-cyan-400 shadow-md shadow-emerald-500/20 flex items-center gap-2 cursor-pointer transition-all"
        >
          <Save className="w-4 h-4" />
          Save Hero Changes
        </button>
      </div>
    </form>
  );
};

export default HeroTab;
