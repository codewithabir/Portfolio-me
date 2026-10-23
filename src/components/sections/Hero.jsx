import React, { useEffect, useRef, useState } from 'react';
import { personalData } from '../../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  Terminal, 
  Code2, 
  ChevronDown, 
  GraduationCap, 
  MapPin, 
  Flame, 
  Laptop, 
  CheckCircle2, 
  Camera 
} from 'lucide-react';
import { Github, Linkedin } from '../common/BrandIcons';

const Hero = ({ onOpenResume }) => {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  
  // List of candidate images to try in order
  const candidateImages = [
    personalData.profileImage,
    '/profile.png',
    '/profile.jpg',
    '/profile.jpeg',
    '/profile.webp'
  ].filter(Boolean);

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [hasAllFailed, setHasAllFailed] = useState(false);
  const [isEarthquakeGlitch, setIsEarthquakeGlitch] = useState(false);

  // Dynamic Typewriter Effect for Roles
  const roles = personalData.dynamicRoles || [
    "CSE Student @ NITER",
    "Aspiring Software Developer",
    "Fullstack Web Developer",
    "Problem Solver & Tech Enthusiast",
    "Junior Office Secretary @ NCC"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // 3D Tilt state for the photo card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      // Switch to next word
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(100);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1);
        setDisplayText(nextText);
        setTypingSpeed(isDeleting ? 40 : 80);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  // Canvas Greenish Cyber Glitch Effect (Fires every 4-5 seconds)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Offscreen canvas for generating authentic Old TV phosphor static noise grains
    const noiseCanvas = document.createElement('canvas');
    noiseCanvas.width = 180;
    noiseCanvas.height = 180;
    const noiseCtx = noiseCanvas.getContext('2d');

    const updateTvGrains = () => {
      const imgData = noiseCtx.createImageData(180, 180);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() * 255;
        // Greenish phosphor Old TV Static Grain
        data[i] = val * 0.15;                          // R
        data[i + 1] = val;                             // G (bright green phosphor)
        data[i + 2] = val * 0.35;                      // B
        data[i + 3] = Math.random() < 0.45 ? Math.floor(Math.random() * 110 + 40) : 0; // Alpha
      }
      noiseCtx.putImageData(imgData, 0, 0);
    };

    // Timing parameters: every 4 to 5 seconds (4000ms - 5000ms)
    let lastGlitchTime = Date.now();
    let nextGlitchDelay = 4200; // Between 4000ms and 5000ms
    let isGlitching = false;
    let glitchStartTime = 0;
    const glitchDuration = 320; // 320ms duration of active glitch burst
    let glitchSlices = [];

    // Generate random horizontal slice bands for Old TV sync tear
    const generateGlitchBurst = () => {
      glitchSlices = [];
      const numSlices = Math.floor(Math.random() * 6 + 5); // 5 to 11 slices
      for (let i = 0; i < numSlices; i++) {
        glitchSlices.push({
          y: Math.random() * height,
          height: Math.random() * 28 + 6,
          offsetX: (Math.random() - 0.5) * 70, // Horizontal sync tear
          width: Math.random() > 0.3 ? width : width * (Math.random() * 0.5 + 0.5),
          startX: Math.random() > 0.5 ? Math.random() * (width * 0.3) : 0,
          color: Math.random() > 0.4 ? 'rgba(16, 185, 129, ' : (Math.random() > 0.5 ? 'rgba(0, 255, 136, ' : 'rgba(6, 182, 212, '),
          alpha: Math.random() * 0.28 + 0.15,
          hasBorder: Math.random() > 0.4
        });
      }
    };

    const triggerGlitch = () => {
      isGlitching = true;
      setIsEarthquakeGlitch(true);
      glitchStartTime = Date.now();
      generateGlitchBurst();
    };

    // Canvas click to trigger glitch interactively
    const handleCanvasClick = () => {
      triggerGlitch();
    };
    canvas.addEventListener('click', handleCanvasClick);

    const render = () => {
      const now = Date.now();

      // Check if it's time for the scheduled 4-5 second glitch burst
      if (!isGlitching && now - lastGlitchTime >= nextGlitchDelay) {
        triggerGlitch();
      }

      // Check if current glitch burst should end
      if (isGlitching && now - glitchStartTime >= glitchDuration) {
        isGlitching = false;
        setIsEarthquakeGlitch(false);
        lastGlitchTime = now;
        // Schedule next glitch around 4-5 seconds from now
        nextGlitchDelay = 4000 + Math.random() * 1000;
        ctx.clearRect(0, 0, width, height);
      }

      ctx.clearRect(0, 0, width, height);

      // Render Old TV Glitch only during active glitch burst
      if (isGlitching) {
        const elapsed = now - glitchStartTime;
        const progress = elapsed / glitchDuration;
        const glitchFade = Math.sin(progress * Math.PI); // Smooth peak & fade

        // Every frame during glitch, generate fresh animated TV grains
        updateTvGrains();
        const grainPattern = ctx.createPattern(noiseCanvas, 'repeat');
        if (grainPattern) {
          ctx.fillStyle = grainPattern;
          ctx.globalAlpha = 0.65 * glitchFade;
          ctx.fillRect(0, 0, width, height);
          ctx.globalAlpha = 1.0;
        }

        // 1. Dense Old TV CRT Phosphor Scanlines
        ctx.fillStyle = `rgba(0, 255, 136, ${0.14 * glitchFade})`;
        for (let y = 0; y < height; y += 4) {
          ctx.fillRect(0, y, width, 1.2);
        }

        // 2. Rolling V-Hold / VHS Tracking Distortion Bar
        const trackingY = ((progress * 1.6) * height) % height;
        const barHeight = Math.random() * 35 + 45;
        ctx.fillStyle = `rgba(16, 185, 129, ${0.28 * glitchFade})`;
        ctx.fillRect(0, trackingY, width, barHeight);
        ctx.strokeStyle = `rgba(0, 255, 136, ${0.75 * glitchFade})`;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(0, trackingY, width, barHeight);

        // 3. Horizontal Sync Tear Slices
        if (Math.random() > 0.35) {
          generateGlitchBurst();
        }

        for (let i = 0; i < glitchSlices.length; i++) {
          const slice = glitchSlices[i];
          const currentAlpha = slice.alpha * glitchFade;

          ctx.fillStyle = `${slice.color}${currentAlpha})`;
          ctx.fillRect(slice.startX + slice.offsetX, slice.y, slice.width, slice.height);

          if (slice.hasBorder) {
            ctx.strokeStyle = `rgba(0, 255, 136, ${currentAlpha * 1.5})`;
            ctx.lineWidth = 1;
            ctx.strokeRect(slice.startX + slice.offsetX, slice.y, slice.width, slice.height);
          }
        }

        // 4. Old TV Phosphor On-Screen Display (OSD)
        ctx.font = 'bold 12px "Fira Code", monospace';
        ctx.fillStyle = `rgba(0, 255, 136, ${0.85 * glitchFade})`;
        ctx.shadowColor = '#00ff88';
        ctx.shadowBlur = 8;
        ctx.fillText('▶ PLAY  00:04:26 [V-HOLD]', 24, 40);
        ctx.fillText('CH 03 · NO SIGNAL', width - 180, 40);
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, []);

  // Handle 3D tilt on card hover
  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Gracefully fallback to next image in candidate list if one fails
  const handleImageError = () => {
    if (currentImgIndex < candidateImages.length - 1) {
      setCurrentImgIndex(prev => prev + 1);
    } else {
      setHasAllFailed(true);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Layer with Earthquake Tremor */}
      <div className={`absolute inset-0 z-0 pointer-events-none transition-transform duration-75 ${isEarthquakeGlitch ? 'glitch-earthquake' : ''}`}>
        {/* Interactive Canvas Background */}
        <canvas ref={canvasRef} className="w-full h-full opacity-85 dark:opacity-95" />

        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl"></div>
      </div>

      {/* Stacked Slice Ghost Overlay (Active during glitch tremor) */}
      {isEarthquakeGlitch && (
        <div className="absolute inset-0 z-0 pointer-events-none glitch-stack-ghost overflow-hidden mix-blend-screen">
          <div className="w-full h-full bg-gradient-to-b from-emerald-500/10 via-transparent to-cyan-500/10"></div>
          {/* Stacked horizontal green slice cuts */}
          <div className="absolute top-1/4 left-0 right-0 h-10 bg-emerald-400/20 -translate-x-8 border-y border-emerald-400/50 shadow-lg shadow-emerald-500/30"></div>
          <div className="absolute top-2/3 left-0 right-0 h-14 bg-cyan-400/15 translate-x-10 border-y border-cyan-400/40 shadow-lg shadow-cyan-500/30"></div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* TWO-PART GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ======================================================== */}
          {/* PART 1: LEFT CONTENT & DYNAMIC INTRODUCTION */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Availability Pill & Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 backdrop-blur-sm shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personalData.status}</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-indigo-500/20 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>NITER CSE · 2023–2024</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-mono font-medium text-indigo-600 dark:text-cyan-400 tracking-wide flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Hello world, I'm</span>
              </p>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Md. Abir{' '}
                <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Hossan
                </span>
              </h1>
            </div>

            {/* Dynamic Typewriter Role */}
            <div className="h-10 sm:h-12 flex items-center">
              <div className="inline-flex items-center text-lg sm:text-2xl font-bold font-mono text-slate-800 dark:text-slate-200">
                <span className="text-slate-400 dark:text-slate-500 mr-2 font-normal">&gt;</span>
                <span className="text-cyan-600 dark:text-cyan-300">{displayText}</span>
                <span className="w-2.5 h-6 ml-1 bg-indigo-500 dark:bg-cyan-400 animate-pulse inline-block"></span>
              </div>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personalData.heroIntro}
            </p>

            {/* 3 CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Button 1: View My Projects */}
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: Download Resume */}
              <button
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 hover:border-indigo-500 dark:hover:border-cyan-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-[1.02] active:scale-[0.98] shadow-xs backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* Button 3: Contact Me */}
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-transparent bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Media Links & Quick Info */}
            <div className="pt-3 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2.5">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/50 hover:scale-105 shadow-xs transition-all duration-200 flex items-center justify-center group"
                  aria-label="GitHub Profile"
                  title="GitHub: codewithabir"
                >
                  <Github className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                </a>

                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/50 hover:scale-105 shadow-xs transition-all duration-200 flex items-center justify-center group"
                  aria-label="LinkedIn Profile"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                </a>

                <a
                  href={`mailto:${personalData.email}`}
                  className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/50 hover:scale-105 shadow-xs transition-all duration-200 flex items-center justify-center group"
                  aria-label="Send an Email"
                  title={`Email: ${personalData.email}`}
                >
                  <Mail className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                </a>
              </div>

              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

              {/* Quick Tech Snapshot Pills */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                  C++ / Java
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                  React / JS
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                  DSA
                </span>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* PART 2: RIGHT SIDE - DYNAMIC PHOTO SHOWCASE */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Outer Rotating Glowing Ambient Ring */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-indigo-600/30 via-cyan-500/20 to-purple-600/30 blur-2xl animate-pulse-subtle pointer-events-none -z-10"></div>
            
            {/* Interactive 3D Tilt Card Frame */}
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative w-full max-w-[340px] sm:max-w-[400px] group"
            >
              {/* Outer Neon Gradient Border */}
              <div className="p-1.5 rounded-[32px] bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-600 shadow-2xl shadow-indigo-500/20 group-hover:shadow-indigo-500/35 transition-all duration-300">
                
                {/* Inner Card Container */}
                <div className="relative rounded-[26px] bg-slate-950 overflow-hidden border border-white/10">
                  
                  {/* Photo Top Mini Bar */}
                  <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    </div>
                    <span className="text-[11px] text-cyan-400 font-semibold flex items-center gap-1">
                      <Terminal className="w-3 h-3" />
                      abir_portrait.dev
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  </div>

                  {/* The Image Element */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950">
                    {!hasAllFailed ? (
                      <img
                        key={candidateImages[currentImgIndex]}
                        src={candidateImages[currentImgIndex]}
                        alt="Md. Abir Hossan"
                        onError={handleImageError}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900">
                        <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 mb-3">
                          <Terminal className="w-10 h-10" />
                        </div>
                        <div className="font-heading font-bold text-lg text-white">Md. Abir Hossan</div>
                        <div className="text-xs font-mono text-cyan-400 mt-1">@codewithabir</div>
                      </div>
                    )}

                    {/* Subtle gradient vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>

                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="font-heading font-bold text-sm text-white">
                          Md. Abir Hossan
                        </div>
                        <div className="text-[11px] font-mono text-cyan-400">
                          @codewithabir
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-medium">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ======================================================== */}
              {/* DYNAMIC FLOATING BADGES ANCHORED TO PHOTO */}
              {/* ======================================================== */}

              {/* Badge 1: Top-Right (NITER CSE) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float pointer-events-none">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    NITER CSE
                  </div>
                  <div className="text-[10px] font-mono text-indigo-600 dark:text-cyan-400">
                    Session 2023–2024
                  </div>
                </div>
              </div>

              {/* Badge 2: Bottom-Left (GitHub Activity) */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float-reverse pointer-events-none">
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 border border-slate-700 shadow-sm">
                  <Github className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    codewithabir
                  </div>
                  <div className="text-[10px] font-mono text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    450+ Commits
                  </div>
                </div>
              </div>

              {/* Badge 3: Top-Left (Leadership) */}
              <div className="hidden sm:flex absolute top-1/2 -left-8 -translate-y-1/2 bg-white dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 py-2 px-3 rounded-xl shadow-lg items-center gap-2 animate-float-delayed pointer-events-none">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300">
                  NCC Secretary
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 sm:pt-16 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors group focus:outline-none cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono uppercase tracking-wider">Explore Portfolio</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
