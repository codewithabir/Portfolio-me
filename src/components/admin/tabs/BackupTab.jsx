import React, { useState } from 'react';
import { Copy, Download, Upload, RotateCcw, Key, Check, AlertTriangle, ShieldCheck } from 'lucide-react';

const BackupTab = ({ allData, onReset, onImport, onUpdatePasscode }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [pinMessage, setPinMessage] = useState('');
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  // Generate clean exportable JS code for src/data/portfolioData.js
  const handleCopyCode = () => {
    const formattedCode = `/**
 * Portfolio Data for Md. Abir Hossan
 * Generated from Admin Panel on ${new Date().toLocaleDateString()}
 */

export const personalData = ${JSON.stringify(allData.personalData, null, 2)};

export const skillsData = ${JSON.stringify(allData.skillsData, null, 2)};

export const projectsData = ${JSON.stringify(allData.projectsData, null, 2)};

export const educationData = ${JSON.stringify(allData.educationData, null, 2)};

export const activitiesData = ${JSON.stringify(allData.activitiesData, null, 2)};

export const githubData = ${JSON.stringify(allData.githubData, null, 2)};

export const navLinks = ${JSON.stringify(allData.navLinks, null, 2)};
`;

    navigator.clipboard.writeText(formattedCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(allData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `abir_portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        onImport(parsed);
        alert('Portfolio data successfully restored from backup file!');
      } catch (err) {
        alert('Invalid JSON file format. Please upload a valid portfolio backup.');
      }
    };
    reader.readAsText(file);
  };

  const handleSavePin = (e) => {
    e.preventDefault();
    if (!newPin.trim() || newPin.trim().length < 4) {
      setPinMessage('PIN must be at least 4 characters long.');
      return;
    }
    try {
      onUpdatePasscode(newPin.trim());
      setPinMessage('PIN updated successfully!');
      setNewPin('');
      setTimeout(() => setPinMessage(''), 3000);
    } catch (err) {
      setPinMessage(err.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* Git Sync & Code Export Card */}
      <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 space-y-3">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>Deploy Updates to GitHub Pages (Permanent Sync)</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Edits made in this admin panel save to your local browser automatically. To push these changes permanently for all visitors worldwide on GitHub, copy the updated JavaScript code below and paste it into <code className="text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded">src/data/portfolioData.js</code>, then run <code className="text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded">npm run deploy</code>!
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <button
            type="button"
            onClick={handleCopyCode}
            className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-semibold text-xs flex items-center gap-2 cursor-pointer shadow-sm transition-all"
          >
            {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copiedCode ? 'Copied to Clipboard!' : 'Copy Code for portfolioData.js'}
          </button>

          <button
            type="button"
            onClick={handleDownloadJSON}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white font-medium text-xs flex items-center gap-2 cursor-pointer transition-all"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            Download Backup (.json)
          </button>
        </div>
      </div>

      {/* Restore from File */}
      <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-3">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block flex items-center gap-2">
          <Upload className="w-4 h-4 text-cyan-400" />
          Import Backup File
        </label>
        <p className="text-xs text-slate-400">
          Upload a previously downloaded JSON backup file to instantly restore your data.
        </p>
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className="text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-cyan-500/20 file:text-cyan-300 hover:file:bg-cyan-500/30 cursor-pointer"
        />
      </div>

      {/* Security: Change Admin PIN */}
      <form onSubmit={handleSavePin} className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-3">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block flex items-center gap-2">
          <Key className="w-4 h-4 text-amber-400" />
          Change Admin Passcode (Default: abir2026)
        </label>
        <div className="flex items-center gap-2">
          <input
            type="password"
            value={newPin}
            onChange={(e) => setNewPin(e.target.value)}
            placeholder="Enter new 4+ character passcode"
            className="flex-1 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:border-amber-400 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-medium hover:bg-amber-500/30 cursor-pointer"
          >
            Update Passcode
          </button>
        </div>
        {pinMessage && (
          <p className="text-xs font-medium text-amber-400">{pinMessage}</p>
        )}
      </form>

      {/* Dangerous: Reset to Original Defaults */}
      <div className="p-4 rounded-xl border border-red-500/20 bg-red-950/10 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              Reset All Data to Defaults
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Discard all custom edits made in the browser and revert back to default <code className="text-red-300">portfolioData.js</code>.
            </p>
          </div>

          {!showConfirmReset ? (
            <button
              type="button"
              onClick={() => setShowConfirmReset(true)}
              className="px-3.5 py-2 rounded-lg border border-red-500/40 text-red-400 hover:bg-red-500/15 text-xs font-medium cursor-pointer"
            >
              Reset Data
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  onReset();
                  setShowConfirmReset(false);
                }}
                className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-semibold hover:bg-red-500 cursor-pointer"
              >
                Yes, Revert!
              </button>
              <button
                type="button"
                onClick={() => setShowConfirmReset(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackupTab;
