import React from 'react';
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  ShieldCheck,
  Cpu,
  Terminal,
} from 'lucide-react';
import { skillsData } from '../data/skills';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-red-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="competences" className="py-20 relative">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Expertise Technique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Compétences & Outils
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Technologies maîtrisées pour le développement web, mobile, les bases de données et l'audit de sécurité
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* 4 Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#0c101a]/80 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl backdrop-blur-md flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">
                        {category.skills.length} compétences clés
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skills Cards List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-slate-100 truncate">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                            skill.level === 'Avancé'
                              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                              : 'bg-slate-500/10 text-slate-300 border border-slate-500/20'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {skill.tags && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] text-slate-400 font-mono bg-black/40 px-1.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag note */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Configurable dans <code className="text-cyan-300 font-mono">src/data/skills.ts</code></span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
