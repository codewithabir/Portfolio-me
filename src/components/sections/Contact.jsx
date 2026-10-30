import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  MapPin, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { Github, Linkedin } from '../common/BrandIcons';

const Contact = () => {
  const { personalData } = usePortfolioData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully if canvas is blocked
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 8000);
    }, 1000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          pill="Get In Touch"
          title="Let's Connect & Build"
          highlightedTitle="Something Great"
          subtitle="Whether you're a recruiter, fellow developer, tech collaborator, or university peer, my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Let's Start a Conversation
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                I am eager to hear about internship opportunities, open-source projects, programming events, and innovative engineering ideas.
              </p>
            </div>

            {/* Direct Information Cards */}
            <div className="space-y-4">
              {/* Email Card with 1-Click Copy */}
              <div className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 flex items-center justify-center border border-indigo-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 group hover:border-indigo-500/40 transition-all block"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center border border-slate-200 dark:border-slate-700 shrink-0">
                  <Github className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">GitHub Profile</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    github.com/{personalData.githubUsername}
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 group hover:border-indigo-500/40 transition-all block"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                  <Linkedin className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Professional LinkedIn</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    Md. Abir Hossan on LinkedIn
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Academic Campus & Location</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    NITER · Nayarhat, Savar, Dhaka, Bangladesh
                  </div>
                </div>
              </div>
            </div>

            {/* Response Promise */}
            <div className="p-4 rounded-xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
              <Clock className="w-4 h-4 text-indigo-500 dark:text-cyan-400 shrink-0" />
              <span>Prompt communication: Typically respond within 24–48 hours.</span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-xl relative">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 font-mono">
                Fill out the form below and I will get back to you promptly.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Your message has been captured. I appreciate you taking the time to write to me and will follow up shortly!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900/90 border transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-200 dark:border-slate-700/80 focus:border-indigo-500 dark:focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-rose-500 mt-1 font-mono">{errors.name}</p>}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900/90 border transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-200 dark:border-slate-700/80 focus:border-indigo-500 dark:focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-rose-500 mt-1 font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Opportunity / Project Collaboration"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900/90 border transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                        errors.subject
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-200 dark:border-slate-700/80 focus:border-indigo-500 dark:focus:border-cyan-400'
                      }`}
                    />
                    {errors.subject && <p className="text-xs text-rose-500 mt-1 font-mono">{errors.subject}</p>}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here... I would love to hear from you."
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900/90 border transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-200 dark:border-slate-700/80 focus:border-indigo-500 dark:focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-rose-500 mt-1 font-mono">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
