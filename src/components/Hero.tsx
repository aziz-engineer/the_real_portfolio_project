import React from 'react';
import {
  Download,
  MapPin,
  Shield,
  Code2,
  Terminal,
  ArrowRight,
} from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 left-10 w-[280px] h-[280px] bg-violet-600/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400 mb-6 shadow-sm shadow-emerald-950/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{profileData.statusLabel}</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500/50 mx-1"></span>
              <span className="text-emerald-300/80 font-normal">ISLAI Béja</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Bonjour, je suis <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>

            {/* Role & Subtitle */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-medium text-slate-300 mb-6 flex-wrap">
              <span className="text-cyan-300 font-semibold">Développeur Full Stack Web & Mobile</span>
              <span className="text-slate-600">|</span>
              <span className="text-indigo-300 inline-flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                Passionné de cybersécurité
              </span>
            </div>

            {/* Short Tagline */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              Étudiant en 2ème année <strong className="text-slate-200 font-semibold">Génie Logiciel</strong> à l’ISLAI Béja. 
              Je conçois et audite des solutions web et mobiles de bout en bout, en alliant ergonomie frontend, 
              robustesse backend et sécurisation proactive du code.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <span>Me contacter</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profileData.cvUrl}
                download="CV_Mohamed_Aziz_Omrani.pdf"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/10 hover:border-cyan-500/30 transition-all duration-200 backdrop-blur-sm"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Télécharger mon CV</span>
              </a>
            </div>

            {/* Quick stats / Highlights bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full pt-6 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-white">Full Stack & Mobile</span>
                  <span className="text-slate-500 text-[11px]">Web, APIs, Apps</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-white">Cybersécurité</span>
                  <span className="text-slate-500 text-[11px]">Web Pen Testing & OWASP</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 text-xs text-slate-300">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-white">{profileData.location}</span>
                  <span className="text-slate-500 text-[11px]">Mobile / Hybride</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual / Avatar Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>

              {/* Card Container */}
              <div className="relative rounded-3xl bg-[#0c101a]/90 border border-white/10 p-4 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Photo frame */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
                  <img
                    src={profileData.avatarUrl || '/avatar.jpg'}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Corner tag inside image */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-cyan-300 flex items-center gap-1.5 shadow-sm">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>DevSecOps Mindset</span>
                  </div>
                </div>

                {/* Badges strip below avatar */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="font-semibold text-slate-200">ISLAI Béja (2ème Année)</span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 font-mono">
                    Génie Logiciel
                  </span>
                </div>

                {/* Floating pill: Full Stack */}
                <div className="absolute -left-4 bottom-24 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0f172a]/95 border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-xl backdrop-blur-md animate-bounce [animation-duration:4s]">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Full Stack Web & Mobile</span>
                </div>

                {/* Floating pill: Cybersecurity */}
                <div className="absolute -right-3 top-16 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0f172a]/95 border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-xl backdrop-blur-md animate-bounce [animation-duration:5s]">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Web Pen Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
