import React from 'react';
import {
  Shield,
  Layers,
  GraduationCap,
  CheckCircle2,
  Smartphone,
  Compass,
} from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: 'Vision Full Stack End-to-End',
      description:
        'Maîtrise du frontend réactif et du backend robuste. Capacité à architecturer une application complète du schéma de données jusqu’à l’interface utilisateur.',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL','MongoDB', 'APIs'],
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: 'Cybersécurité & Web Pentest',
      description:
        'Approche proactive intégrant la sécurité dès la conception (Secure by Design) et tests d’intrusion web selon les standards OWASP Top 10.',
      tags: ['OWASP', 'Burp Suite', 'Web Pentest', 'Audit'],
    },
    {
      icon: <Smartphone className="w-5 h-5 text-blue-400" />,
      title: 'Développement Mobile Hybride',
      description:
        'Conception d’expériences mobiles performantes et ergonomiques pour iOS et Android, avec synchronisation de données et mode hors-ligne.',
      tags: ['React Native', 'Mobile UI', 'SQLite', 'Offline-First'],
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
      title: 'Formation d’Excellence à l’ISLAI',
      description:
        'Étudiant en 2ème année Génie Logiciel et Sciences Informatiques à Béja. Bases théoriques solides en algorithmique, modélisation et réseaux.',
      tags: ['ISLAI Béja', 'Génie Logiciel', 'Stage PFA', 'Sciences Info'],
    },
  ];

  return (
    <section id="a-propos" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Présentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            À propos de moi
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Central Quote Card with the Exact User Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0f172a]/80 to-[#080d1a]/80 border border-cyan-500/20 shadow-2xl backdrop-blur-xl">
            {/* Top decorative badge */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Développeur Full Stack & Passionné du web penetration testing</span>
              </div>
              <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                ISLAI Béja
              </span>
            </div>

            {/* Exact French text required by the user */}
            <blockquote className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              "{profileData.aboutText}"
            </blockquote>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-slate-200">Mohamed Aziz Omrani</span>
                <span>•</span>
                <span className="text-cyan-400">2ème année Génie Logiciel</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Disponible</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Thematic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-cyan-500/10"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
