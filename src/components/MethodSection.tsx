import React from 'react';
import {
  Wrench,
  Droplets,
  Truck,
  RotateCcw,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/britasolData';

interface MethodSectionProps {
  currentLang: Language;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Wrench className="w-5 h-5 text-[#F95700]" />;
      case 1:
        return <Droplets className="w-5 h-5 text-[#38BDF8]" />;
      case 2:
        return <Truck className="w-5 h-5 text-[#F95700]" />;
      case 3:
        return <RotateCcw className="w-5 h-5 text-[#00A859]" />;
      case 4:
        return <Clock className="w-5 h-5 text-[#F95700]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#F95700]" />;
    }
  };

  return (
    <section
      id="modo-aplicacao"
      className="py-20 sm:py-24 relative overflow-hidden text-white bg-slate-950"
    >
      {/* Background Image clearly visible with elegant dark gradient overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://dynacal.com.br/wp-content/uploads/2026/04/pavimentacao.jpg"
          alt="Pavimentação e Aplicação de Britasol"
          className="w-full h-full object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/85 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F95700]/40 text-xs font-bold text-[#F95700] uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Wrench className="w-4 h-4 text-[#F95700]" />
            <span>{t.method.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
            {t.method.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
            {t.method.subtitle}
          </p>
        </div>

        {/* 5 Step Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.method.steps.map((step, idx) => (
            <div
              key={step.step}
              className="p-6 rounded-3xl bg-slate-900/85 border border-white/20 hover:border-[#F95700] transition-all duration-300 relative flex flex-col justify-between shadow-2xl group text-left hover:-translate-y-1 backdrop-blur-md"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#F95700] font-heading">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-inner">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white font-heading mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Machinery & Duration Footnote */}
              <div className="pt-3 border-t border-white/10 space-y-1 text-[11px]">
                <div className="text-[#38BDF8] font-semibold flex items-center gap-1.5">
                  <span>🚜 {step.machinery}</span>
                </div>
                <div className="text-[#00A859] font-bold flex items-center gap-1.5">
                  <span>⏱️ {step.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
