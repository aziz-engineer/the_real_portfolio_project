import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { internshipsData, trainingsData, educationData } from '../data/experience';
import { ExperienceItem } from '../types/portfolio';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'stage' | 'formation' | 'education'>('all');

  const allItems: ExperienceItem[] = [
    ...internshipsData,
    ...trainingsData,
    ...educationData,
  ];

  const filteredItems = filter === 'all' ? allItems : allItems.filter((i) => i.type === filter);

  const getIconForType = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'stage':
        return <Briefcase className="w-4 h-4 text-cyan-400" />;
      case 'formation':
        return <Award className="w-4 h-4 text-violet-400" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-amber-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Parcours Professionnel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Expériences & Formations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Stages en entreprise, certifications techniques spécialisées et formation académique
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            Tous ({allItems.length})
          </button>
          <button
            onClick={() => setFilter('stage')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
              filter === 'stage'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Stages en entreprise ({internshipsData.length})</span>
          </button>
          <button
            onClick={() => setFilter('formation')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
              filter === 'formation'
                ? 'bg-violet-500 text-slate-950 font-bold shadow-md shadow-violet-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Formations & Certifications ({trainingsData.length})</span>
          </button>
          <button
            onClick={() => setFilter('education')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
              filter === 'education'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Formation Académique ({educationData.length})</span>
          </button>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg backdrop-blur-md"
            >
              {/* Top Row: Type Pill, Duration, Period */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    {getIconForType(item.type)}
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
                      item.badgeColor || 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
                    }`}
                  >
                    {item.typeLabel}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.duration}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period}</span>
                  </span>
                </div>
              </div>

              {/* Title & Organization */}
              <div className="mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-cyan-400/90 font-medium mt-1">
                  <span>{item.company}</span>
                  {item.location && (
                    <>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlights List */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="mb-5 bg-black/20 rounded-xl p-4 border border-white/5">
                  <div className="text-xs font-semibold text-slate-300 mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Points clés & Réalisations :</span>
                  </div>
                  <ul className="space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="text-xs text-slate-300 flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
                <span className="text-xs text-slate-500 font-medium">Technologies :</span>
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10 group-hover:border-cyan-500/20 transition-colors"
                  >
                    {skill}
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
