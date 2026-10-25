import React from 'react';
import {
  Tractor,
  Pickaxe,
  Factory,
  ShieldAlert,
  Plane,
  Building,
  CheckCircle2,
  Layers,
  Package
} from 'lucide-react';
import { Language, TRANSLATIONS, MARKET_SEGMENTS } from '../data/britasolData';

interface ApplicationsSectionProps {
  currentLang: Language;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const segments = MARKET_SEGMENTS[currentLang];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Tractor':
        return <Tractor className="w-5 h-5 text-[#F95700]" />;
      case 'Pickaxe':
        return <Pickaxe className="w-5 h-5 text-[#F95700]" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-[#38BDF8]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#00A859]" />;
      case 'Plane':
        return <Plane className="w-5 h-5 text-[#38BDF8]" />;
      case 'Building':
        return <Building className="w-5 h-5 text-[#F95700]" />;
      default:
        return <Layers className="w-5 h-5 text-[#F95700]" />;
    }
  };

  return (
    <section id="onde-aplicar" className="py-20 sm:py-24 bg-[#0B1E36] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Subtle Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0077C8]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F95700]/40 text-xs font-bold text-[#F95700] uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Layers className="w-4 h-4 text-[#F95700]" />
            <span>{t.applications.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
            {t.applications.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.applications.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards with Dynacal Images & Enriched Product Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className="rounded-3xl overflow-hidden bg-[#10243E] border border-white/15 hover:border-[#F95700] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl group text-left"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#071324]">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating CBR badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/85 border border-[#F95700]/50 backdrop-blur-md shadow-sm">
                    <span className="text-[11px] font-black uppercase text-[#F95700] tracking-wider">
                      {segment.cbrGain}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                      {getIcon(segment.iconName)}
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white font-heading leading-tight">
                      {segment.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {segment.description}
                  </p>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 font-semibold">{segment.highlight}</span>
                    </div>
                    <div className="flex items-start gap-2 pt-1 border-t border-white/5">
                      <Package className="w-3.5 h-3.5 text-[#F95700] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-400 text-[11px] leading-tight">
                        <strong>Uso do Britasol:</strong> {segment.productUsage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
