import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Download,
} from 'lucide-react';
import { profileData } from '../data/profile';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Proposition de stage PFA / Contact',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setCopyError(null);
      setTimeout(() => setCopiedType(null), 2500);
    } catch {
      setCopiedType(null);
      setCopyError('Impossible de copier dans le presse-papier. Vérifiez les autorisations du navigateur.');
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setSubmitError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError('L’envoi direct n’est pas encore configuré. Réessayez plus tard ou contactez-moi par email.');
      return;
    }

    setSubmitting(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: profileData.email,
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey },
      );
      setSubmitted(true);
      setFormData((current) => ({
        ...current,
        name: '',
        email: '',
        message: '',
      }));
    } catch (error) {
      console.error('EmailJS failed to send the contact message:', error);
      setSubmitError('Le message n’a pas pu être envoyé. Vérifiez votre connexion et réessayez.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Prendre Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contactez-moi
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Disponible pour un stage PFA ou un projet stimulant. Réponse rapide assurée.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#0c101a]/80 border border-white/10 hover:border-cyan-500/30 transition-all shadow-lg backdrop-blur-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Adresse Email</span>
                    <h4 className="text-sm sm:text-base font-bold text-white break-all">
                      {profileData.email}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => void copyToClipboard(profileData.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copier l'adresse email"
                >
                  {copiedType === 'email' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Envoyer un mail direct</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                {copiedType === 'email' && (
                  <span className="text-emerald-400 text-[11px] font-semibold animate-pulse">
                    Email copié dans le presse-papier !
                  </span>
                )}
                {copyError && (
                  <span role="status" className="text-amber-300 text-[11px]">
                    {copyError}
                  </span>
                )}
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#0c101a]/80 border border-white/10 hover:border-cyan-500/30 transition-all shadow-lg backdrop-blur-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Téléphone / WhatsApp</span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      +216 {profileData.phone}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => void copyToClipboard(profileData.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copier le numéro de téléphone"
                >
                  {copiedType === 'phone' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Appeler directement</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                {copiedType === 'phone' && (
                  <span className="text-emerald-400 text-[11px] font-semibold animate-pulse">
                    Numéro copié !
                  </span>
                )}
                {copyError && (
                  <span role="status" className="text-amber-300 text-[11px]">
                    {copyError}
                  </span>
                )}
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#0c101a]/80 border border-white/10 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Localisation</span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {profileData.location}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Disponible sur place, en mobilité ou en télétravail
                  </p>
                </div>
              </div>
            </div>

            {/* Resume Download Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 shadow-lg">
              <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Curriculum Vitae officiel
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Retrouvez l'ensemble de mes compétences, formations et projets au format PDF.
              </p>
              <a
                href={profileData.cvUrl}
                download="CV_Mohamed_Aziz_Omrani.pdf"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-md shadow-cyan-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger mon CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c101a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">Envoyez-moi un message</h3>
                </div>
                <span className="text-xs text-slate-400">Envoi direct par formulaire</span>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Votre message a été envoyé. Merci !</span>
                </div>
              )}

              {submitError && (
                <div role="alert" className="mb-6 rounded-2xl border border-rose-500/25 bg-rose-500/10 p-4 text-xs text-rose-300">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Votre Nom & Prénom
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-xs placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Votre Adresse Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="nom@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-xs placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Objet de votre message
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="Proposition de stage PFA / Opportunité professionnelle"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-xs placeholder:text-slate-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Votre Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Bonjour Mohamed Aziz, nous souhaitons vous proposer un entretien pour notre offre de stage PFA..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-xs placeholder:text-slate-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 disabled:cursor-wait disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Envoi en cours…' : 'Envoyer mon message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
