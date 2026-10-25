import React, { useState } from 'react';
import {
  Sliders,
  CheckCircle2,
  XCircle,
  Columns
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/britasolData';

interface BeforeAfterSectionProps {
  currentLang: Language;
  onOpenQuoteModal: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  currentLang,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [sliderPos, setSliderPos] = useState(50);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  const antesImage = 'https://raw.githubusercontent.com/evolveia/britasol/refs/heads/main/public/assets/aistudio/antes01.jpg';
  const depoisImage = 'https://raw.githubusercontent.com/evolveia/britasol/refs/heads/main/public/assets/aistudio/depois01.jpg';

  return (
    <section id="antes-depois" className="py-20 sm:py-24 bg-white text-slate-800 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-[#F95700]/30 text-xs font-bold text-[#F95700] uppercase tracking-wider mb-4 shadow-sm">
            <Sliders className="w-4 h-4 text-[#F95700]" />
            <span>{t.beforeAfter.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {t.beforeAfter.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.beforeAfter.subtitle}
          </p>

          {/* Interactive Mode Switcher: Slider or Side-by-Side (Infográfico removed) */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-sm flex-wrap justify-center gap-1">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                viewMode === 'slider'
                  ? 'bg-[#F95700] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Comparador Interativo (Slider)</span>
            </button>

            <button
              onClick={() => setViewMode('side-by-side')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                viewMode === 'side-by-side'
                  ? 'bg-[#F95700] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Columns className="w-4 h-4" />
              <span>Duas Imagens (Antes e Depois)</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Real Interactive Before / After Slider */}
        {viewMode === 'slider' && (
          <div className="space-y-6">
            <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border-2 border-[#F95700]/40 shadow-2xl bg-slate-950">
              <div className="relative h-[340px] sm:h-[460px] md:h-[540px] select-none overflow-hidden">
                
                {/* Background Layer: DEPOIS (After) Image */}
                <img
                  src={depoisImage}
                  alt="Depois - Solo Estabilizado com Britasol"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />

                {/* Floating "DEPOIS" Badge */}
                <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-xl bg-black/80 border border-[#00A859] text-[#00A859] text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-md pointer-events-none">
                  {t.beforeAfter.afterLabel}
                </div>

                {/* Foreground Layer: ANTES (Before) Image clipped by sliderPos */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <img
                    src={antesImage}
                    alt="Antes - Solo Instável com buracos e erosão"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    draggable={false}
                  />

                  {/* Floating "ANTES" Badge */}
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-xl bg-black/80 border border-red-500 text-red-400 text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-md">
                    {t.beforeAfter.beforeLabel}
                  </div>
                </div>

                {/* Vertical Divider Bar */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-[#F95700] z-20 pointer-events-none shadow-[0_0_16px_rgba(249,87,0,0.9)]"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#F95700] border-2 border-white flex items-center justify-center text-white shadow-2xl">
                    <Sliders className="w-4 h-4" />
                  </div>
                </div>

                {/* Range Input controller */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Controle deslizante de Antes e Depois"
                />
              </div>

              {/* Bottom Control Bar */}
              <div className="p-4 bg-slate-900 text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-slate-800">
                <span className="font-semibold text-[#F95700] flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{t.beforeAfter.dragHint}</span>
                </span>
                <span className="font-mono text-slate-400 text-[11px] sm:text-xs text-center sm:text-right">
                  {t.beforeAfter.summary}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Mode 2: Distinct Two Images Side by Side */}
        {viewMode === 'side-by-side' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* O ANTES Image Card */}
              <div className="rounded-3xl overflow-hidden bg-slate-50 border-2 border-red-300 shadow-lg text-left flex flex-col justify-between">
                <div>
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                    <img
                      src={antesImage}
                      alt="Antes - Solo Instável com buracos e erosão"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
                      {t.beforeAfter.beforeLabel}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black text-slate-900 font-heading mb-3 flex items-center gap-2 text-red-600">
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Solo Instável & Sem Tratamento</span>
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {t.beforeAfter.beforePoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-red-50 border-t border-red-100 text-xs font-semibold text-red-700">
                  Prejuízos constantes com patrolamento e desgaste de suspensões.
                </div>
              </div>

              {/* O DEPOIS Image Card */}
              <div className="rounded-3xl overflow-hidden bg-slate-50 border-2 border-emerald-400 shadow-lg text-left flex flex-col justify-between">
                <div>
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                    <img
                      src={depoisImage}
                      alt="Depois - Solo Estabilizado com Britasol"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-[#00A859] text-white text-xs font-black uppercase tracking-wider shadow-md">
                      {t.beforeAfter.afterLabel}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black text-slate-900 font-heading mb-3 flex items-center gap-2 text-[#00A859]">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Solo Compactado e Cimentado com Britasol</span>
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {t.beforeAfter.afterPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#00A859] flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 border-t border-emerald-100 text-xs font-bold text-emerald-800">
                  Economia de até 60% e trafegabilidade segura 365 dias por ano.
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
