import React, { useState } from 'react';
import { Plus, Trash2, Save, Check, Layers } from 'lucide-react';

const SkillsTab = ({ skillsData, onSave }) => {
  const [data, setData] = useState({ ...skillsData });
  const [activeCatIndex, setActiveCatIndex] = useState(0);
  const [showSavedToast, setShowSavedToast] = useState(false);

  // New skill draft state
  const [newSkill, setNewSkill] = useState({
    name: '',
    level: 'Proficient',
    tag: '',
    icon: 'Code2',
    color: 'from-blue-500 to-indigo-500'
  });

  const activeCategory = data.categories?.[activeCatIndex] || data.categories?.[0];

  const handleCategoryFieldChange = (field, value) => {
    setData(prev => {
      const categories = [...prev.categories];
      categories[activeCatIndex] = {
        ...categories[activeCatIndex],
        [field]: value
      };
      return { ...prev, categories };
    });
  };

  const handleSkillChange = (skillIndex, field, value) => {
    setData(prev => {
      const categories = [...prev.categories];
      const category = { ...categories[activeCatIndex] };
      const skills = [...category.skills];
      skills[skillIndex] = { ...skills[skillIndex], [field]: value };
      category.skills = skills;
      categories[activeCatIndex] = category;
      return { ...prev, categories };
    });
  };

  const handleDeleteSkill = (skillIndex) => {
    setData(prev => {
      const categories = [...prev.categories];
      const category = { ...categories[activeCatIndex] };
      category.skills = category.skills.filter((_, i) => i !== skillIndex);
      categories[activeCatIndex] = category;
      return { ...prev, categories };
    });
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkill.name.trim()) return;

    setData(prev => {
      const categories = [...prev.categories];
      const category = { ...categories[activeCatIndex] };
      category.skills = [...category.skills, { ...newSkill }];
      categories[activeCatIndex] = category;
      return { ...prev, categories };
    });

    setNewSkill({
      name: '',
      level: 'Proficient',
      tag: '',
      icon: 'Code2',
      color: 'from-emerald-500 to-cyan-500'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(data);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2500);
  };

  return (
    <div className="space-y-6">
      {showSavedToast && (
        <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-xl flex items-center gap-2 text-sm font-medium animate-in fade-in">
          <Check className="w-4 h-4" />
          <span>Skills updated successfully in live site!</span>
        </div>
      )}

      {/* Category Pills Selector */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {data.categories?.map((cat, idx) => (
          <button
            key={cat.id || idx}
            type="button"
            onClick={() => setActiveCatIndex(idx)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeCatIndex === idx
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-xs'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat.title} ({cat.skills?.length || 0})
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className="space-y-4">
          {/* Active Category Title & Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                Category Title
              </label>
              <input
                type="text"
                value={activeCategory.title || ''}
                onChange={(e) => handleCategoryFieldChange('title', e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                Category Description
              </label>
              <input
                type="text"
                value={activeCategory.description || ''}
                onChange={(e) => handleCategoryFieldChange('description', e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* List of Skills in this Category */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase text-slate-400">
              Skills ({activeCategory.skills?.length || 0})
            </label>
            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {activeCategory.skills?.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1 w-full">
                    <input
                      type="text"
                      value={skill.name || ''}
                      onChange={(e) => handleSkillChange(sIdx, 'name', e.target.value)}
                      placeholder="Skill name"
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-semibold focus:border-cyan-400 focus:outline-none"
                    />
                    <select
                      value={skill.level || 'Proficient'}
                      onChange={(e) => handleSkillChange(sIdx, 'level', e.target.value)}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-emerald-400 text-xs focus:border-emerald-400 focus:outline-none"
                    >
                      <option value="Advanced">Advanced</option>
                      <option value="Proficient">Proficient</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Familiar">Familiar</option>
                    </select>
                    <input
                      type="text"
                      value={skill.tag || ''}
                      onChange={(e) => handleSkillChange(sIdx, 'tag', e.target.value)}
                      placeholder="Tag / Subtitle"
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-slate-300 text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteSkill(sIdx)}
                    className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer self-end sm:self-center"
                    title="Delete skill"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Add New Skill Form */}
          <div className="p-3.5 rounded-xl border border-dashed border-slate-700 bg-slate-950/30 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase text-emerald-400">
              <Plus className="w-3.5 h-3.5" />
              Add New Skill to {activeCategory.title}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                value={newSkill.name}
                onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Skill name (e.g. Next.js)"
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
              />
              <select
                value={newSkill.level}
                onChange={(e) => setNewSkill(prev => ({ ...prev, level: e.target.value }))}
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-400 text-xs focus:border-emerald-500 focus:outline-none"
              >
                <option value="Advanced">Advanced</option>
                <option value="Proficient">Proficient</option>
                <option value="Intermediate">Intermediate</option>
                <option value="In Progress">In Progress</option>
                <option value="Familiar">Familiar</option>
              </select>
              <input
                type="text"
                value={newSkill.tag}
                onChange={(e) => setNewSkill(prev => ({ ...prev, tag: e.target.value }))}
                placeholder="Subtext tag (e.g. SSR, App Router)"
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-3 py-1.5 rounded-lg bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-medium hover:bg-emerald-600/50 flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Skill
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Save Button */}
      <div className="flex justify-end pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={handleSubmit}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold text-sm hover:from-emerald-400 hover:to-cyan-400 shadow-md shadow-emerald-500/20 flex items-center gap-2 cursor-pointer transition-all"
        >
          <Save className="w-4 h-4" />
          Save Skills Changes
        </button>
      </div>
    </div>
  );
};

export default SkillsTab;
