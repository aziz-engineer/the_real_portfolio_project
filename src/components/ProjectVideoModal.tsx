import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  CodeXml,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectVideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectVideoModal: React.FC<ProjectVideoModalProps> = ({
  project,
  onClose,
}) => {
  const [videoError, setVideoError] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), video[controls]',
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (dialog?.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose, project]);

  useEffect(() => {
    setVideoError(false);
  }, [project]);

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      className="fixed inset-0 z-50 m-0 flex h-full w-full max-h-none max-w-none items-center justify-center border-0 bg-transparent p-4 text-left backdrop:bg-black/85 backdrop:backdrop-blur-md sm:p-6"
    >
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={onClose}
        aria-label="Fermer la fenêtre de démonstration"
        tabIndex={-1}
      />
      <div
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        className="relative z-10 w-full max-w-4xl bg-[#0c101a] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-left animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080b12]/90">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
              {project.categoryLabel}
            </span>
            <h3 id="project-modal-title" className="text-base sm:text-lg font-bold text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Video Player Container */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group">
            {!videoError && project.videoUrl ? (
              <video
                src={project.videoUrl}
                poster={project.image}
                controls
                muted
                playsInline
                preload="metadata"
                onError={() => setVideoError(true)}
                className={`w-full h-full ${
                  project.category === 'mobile' ? 'object-contain' : 'object-cover'
                }`}
              >
                {project.captionsUrl && (
                  <track
                    kind="captions"
                    src={project.captionsUrl}
                    srcLang="fr"
                    label="Français"
                    default
                  />
                )}
              </video>
            ) : null}

            {(videoError || !project.videoUrl) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <img
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-slate-950/70" />
                <output className="relative z-10 max-w-lg text-sm text-slate-200">
                  {videoError
                    ? 'La vidéo de démonstration ne peut pas être lue pour le moment.'
                    : 'La vidéo de démonstration n’est pas encore disponible.'}
                </output>
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ouvrir la vidéo
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Description & Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
            <p className="text-sm text-cyan-300/90 font-medium mb-3">{project.subtitle}</p>
            <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Features List */}
          {project.features && project.features.length > 0 && (
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Fonctionnalités & Spécifications Clés
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Stack Technologique & Outils
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
              >
                <CodeXml className="w-4 h-4" />
                <span>Code Source GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all shadow-md shadow-cyan-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Accéder à la démo en ligne</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};
