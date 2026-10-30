import React, { useState } from 'react';
import { Save, Check, Mail, MapPin } from 'lucide-react';
import { Github, Linkedin } from '../../common/BrandIcons';

const ContactTab = ({ personalData, onSave }) => {
  const [formData, setFormData] = useState({ ...personalData });
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {showSavedToast && (
        <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-xl flex items-center gap-2 text-sm font-medium animate-in fade-in">
          <Check className="w-4 h-4" />
          <span>Contact details and social links updated successfully in live site!</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            Direct Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            placeholder="codewithabir@gmail.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            Location & City
          </label>
          <input
            type="text"
            name="location"
            value={formData.location || ''}
            onChange={handleChange}
            placeholder="Dhaka, Bangladesh"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          Availability Status Badge
        </label>
        <input
          type="text"
          name="status"
          value={formData.status || ''}
          onChange={handleChange}
          placeholder="Open to Collaborations & Learning Opportunities"
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-emerald-400 text-sm focus:border-emerald-500 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
            <Github className="w-3.5 h-3.5 text-slate-300" />
            GitHub Profile URL
          </label>
          <input
            type="url"
            name="githubUrl"
            value={formData.githubUrl || ''}
            onChange={handleChange}
            placeholder="https://github.com/codewithabir"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            LinkedIn Profile URL
          </label>
          <input
            type="url"
            name="linkedinUrl"
            value={formData.linkedinUrl || ''}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/codewithabir"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          GitHub Username (For GitHub Section stats)
        </label>
        <input
          type="text"
          name="githubUsername"
          value={formData.githubUsername || ''}
          onChange={handleChange}
          placeholder="codewithabir"
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none font-mono"
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-4 border-t border-slate-800">
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold text-sm hover:from-emerald-400 hover:to-cyan-400 shadow-md shadow-emerald-500/20 flex items-center gap-2 cursor-pointer transition-all"
        >
          <Save className="w-4 h-4" />
          Save Contact Details
        </button>
      </div>
    </form>
  );
};

export default ContactTab;
