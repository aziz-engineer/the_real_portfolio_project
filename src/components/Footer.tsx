import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#06080d] pt-16 pb-12 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Logo & Bio */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a href="#accueil" className="group flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors">
                  <span className="font-extrabold text-cyan-400 group-hover:text-white transition-colors">
                    {profileData.initials}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-tight">
                  {profileData.name}
                </span>
                <span className="text-[11px] font-medium text-cyan-400">
                  Développeur Full Stack Web & Mobile
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed mb-6">
              Étudiant en 2ème année Génie Logiciel à l'ISLAI Béja. 
              Conception d'applications web et mobiles robustes et sécurisées contre les vulnérabilités OWASP.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{profileData.statusLabel}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Navigation Rapide
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#accueil" className="hover:text-cyan-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-cyan-400 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  Expériences & Formations
                </a>
              </li>
              <li>
                <a href="#projets" className="hover:text-cyan-400 transition-colors">
                  Projets & Démo Vidéo
                </a>
              </li>
              <li>
                <a href="#competences" className="hover:text-cyan-400 transition-colors">
                  Compétences Techniques
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Resume */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Coordonnées
            </h4>
            <div className="space-y-2 text-xs text-slate-400 mb-4">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${profileData.email}`} className="hover:text-white transition-colors">
                  {profileData.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`tel:${profileData.phone}`} className="hover:text-white transition-colors">
                  +216 {profileData.phone}
                </a>
              </p>
              <p className="text-slate-400">
                {profileData.location}
              </p>
            </div>

            <a
              href={profileData.cvUrl}
              download="CV_Mohamed_Aziz_Omrani.pdf"
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              <span>Télécharger mon CV (PDF)</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar without any "Edit with" badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-300 font-medium">{profileData.name}</strong>. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">ISLAI Béja • Génie Logiciel</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              title="Retour en haut"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">Haut de page</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
