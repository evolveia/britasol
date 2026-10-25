import React from 'react';
import {
  Globe2,
  Ship,
  FileCheck2,
  ShieldCheck,
  Anchor
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/britasolData';

interface ExportSectionProps {
  currentLang: Language;
}

export const ExportSection: React.FC<ExportSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section
      id="exportacao"
      className="py-20 sm:py-24 relative overflow-hidden text-white border-b border-white/10 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('https://dynacal.com.br/wp-content/uploads/2026/04/destaque-222.jpg')`,
      }}
    >
      {/* High-Contrast Gradient Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070E1A]/95 via-[#0A1628]/90 to-[#070E1A]/95 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F95700]/40 text-xs font-bold text-[#F95700] uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Globe2 className="w-4 h-4 text-[#F95700]" />
            <span>{t.export.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
            {t.export.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.export.subtitle}
          </p>
          <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#F95700] backdrop-blur-sm">
            {t.export.countries}
          </div>
        </div>

        {/* 3 Pillars of Export & International Trade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Card 1: Worldwide Supply to Any Country */}
          <div className="p-8 rounded-3xl bg-[#10243E]/85 border border-white/15 hover:border-[#F95700] transition-all shadow-2xl flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F95700]/20 border border-[#F95700]/30 flex items-center justify-center text-[#F95700] mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white font-heading mb-3">
                {t.export.card1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.export.card1Text}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#F95700] font-bold flex items-center gap-2">
              <span>🌎 Américas • África • Europa • Ásia</span>
            </div>
          </div>

          {/* Card 2: Packaging & Ocean Containers */}
          <div className="p-8 rounded-3xl bg-[#10243E]/85 border border-white/15 hover:border-[#38BDF8] transition-all shadow-2xl flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0077C8]/20 border border-[#0077C8]/30 flex items-center justify-center text-[#38BDF8] mb-6">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white font-heading mb-3">
                {t.export.card2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.export.card2Text}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#38BDF8] font-bold flex items-center gap-2">
              <Anchor className="w-3.5 h-3.5" />
              <span>Incoterms: FOB (Portos do Brasil) e CIF (Destino Global)</span>
            </div>
          </div>

          {/* Card 3: Multilingual Engineering & Lab Testing */}
          <div className="p-8 rounded-3xl bg-[#10243E]/85 border border-white/15 hover:border-[#00A859] transition-all shadow-2xl flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00A859]/20 border border-[#00A859]/30 flex items-center justify-center text-[#00A859] mb-6">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white font-heading mb-3">
                {t.export.card3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.export.card3Text}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#00A859] font-bold flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Documentação em Português, Inglês e Francês</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
