import React, { useCallback, useState } from 'react';
import {
  FolderGit2,
  Play,
  CodeXml,
  ExternalLink,
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project } from '../types/portfolio';
import { ProjectVideoModal } from './ProjectVideoModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null);
  const closeVideoModal = useCallback(() => setActiveVideoProject(null), []);

  const categories = [
    { id: 'all', label: 'Tous les projets', count: projectsData.length },
    {
      id: 'fullstack',
      label: 'Full Stack Web',
      count: projectsData.filter((p) => p.category === 'fullstack').length,
    },
    {
      id: 'mobile',
      label: 'Mobile',
      count: projectsData.filter((p) => p.category === 'mobile').length,
    },
    {
      id: 'cybersecurity',
      label: 'Cybersécurité',
      count: projectsData.filter((p) => p.category === 'cybersecurity').length,
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projets" className="py-20 relative">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projets & Réalisations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Applications web complètes, projets mobiles et outils d'audit de cybersécurité
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-3xl bg-[#0d121f]/70 border border-white/10 hover:border-cyan-500/35 overflow-hidden transition-all duration-300 shadow-xl backdrop-blur-md hover:shadow-cyan-500/10"
            >
              {/* Project image opens its video in the details dialog */}
              <button
                type="button"
                aria-label={`Voir l’image et la vidéo du projet ${project.title}`}
                className="group/media relative aspect-video w-full overflow-hidden bg-slate-900 text-left"
                onClick={() => setActiveVideoProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/media:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover/media:bg-black/40">
                  <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-xl shadow-cyan-500/30 transition-transform group-hover/media:scale-105">
                    <Play className="h-4 w-4 fill-slate-950" />
                    Voir la vidéo
                  </span>
                </span>
                <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-md">
                  {project.categoryLabel}
                </span>
              </button>

              {/* Content Block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Feature preview */}
                  {project.features && (
                    <div className="mb-4 pt-3 border-t border-white/5 space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Points forts :
                      </span>
                      {project.features.slice(0, 2).map((feat) => (
                        <div key={feat} className="text-xs text-slate-300 flex items-start gap-1.5">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setActiveVideoProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Détails du projet</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                          title="Code source GitHub"
                        >
                          <CodeXml className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                          title="Accès au projet"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <ProjectVideoModal
        project={activeVideoProject}
        onClose={closeVideoModal}
      />
    </section>
  );
};
