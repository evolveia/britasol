import React from 'react';
import {
  ShieldCheck,
  Globe2,
  Target,
  Eye,
  Award
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/britasolData';

interface AboutSectionProps {
  currentLang: Language;
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onOpenQuoteModal }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="quem-somos" className="py-20 sm:py-24 bg-white text-slate-800 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-[#F95700]/30 text-xs font-bold text-[#F95700] uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#F95700]" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {t.about.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative & Institutional Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left: Brand Identity Card with Orange Container Logo */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200 shadow-xl relative overflow-hidden text-left">
              <div className="w-full mb-6 bg-[#F95700] p-4 rounded-2xl shadow-md flex items-center justify-center">
                <img
                  src="/assets/aistudio/logo_2389f1d9.jpeg"
                  alt="BRITASOL"
                  className="w-full max-h-32 object-contain rounded"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-black text-slate-900 font-heading">
                  Reabilitação Responsável
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Não é apenas um slogan corporativo. É o nosso compromisso diário de projetar e viabilizar infraestruturas rodoviárias com máxima economia, preservação do lençol freático e aceleração do progresso econômico no Brasil e no exterior.
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-bold text-[#F95700]">
                  <span className="flex items-center gap-1.5">
                    <Globe2 className="w-4 h-4 text-[#0284C7]" /> Mercado Nacional & Exportação Global
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Paragraphs + Mission & Vision */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p className="border-l-4 border-[#F95700] pl-4 py-2 bg-orange-50/50 rounded-r-xl">
                {t.about.p1}
              </p>
              <p className="text-slate-600">
                {t.about.p2}
              </p>
            </div>

            {/* Mission / Vision / Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-[#F95700]/50 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-[#F95700] mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1">
                  {t.about.missionTitle}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-[#0284C7]/50 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-[#0284C7] mb-3">
                  <Eye className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1">
                  {t.about.visionTitle}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-[#00A859]/50 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-[#00A859] mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1">
                  {t.about.valuesTitle}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.valuesText}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Responsible Rehabilitation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {t.about.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#F95700] transition-all hover:-translate-y-1 shadow-sm"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F95700]/15 flex items-center justify-center text-[#F95700] mb-4 font-black font-heading text-sm">
                0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-slate-900 font-heading mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
