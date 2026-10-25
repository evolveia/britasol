import React from 'react';
import {
  Atom,
  TrendingUp,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/britasolData';

interface EngineeringSectionProps {
  currentLang: Language;
}

export const EngineeringDynacalSection: React.FC<EngineeringSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const comparisonList = t.engineering?.comparison || [];
  const tableHeaders = t.engineering?.tableHeaders || {
    parameter: 'Parâmetro Técnico',
    traditional: 'Pavimentação / Cascalho Convencional',
    britasol: 'Solo Estabilizado com Britasol',
    gain: 'Vantagem Britasol'
  };

  const tableTitle = currentLang === 'pt'
    ? 'Matriz Comparativa de Desempenho em Campo'
    : currentLang === 'en'
    ? 'Field Performance Comparative Matrix'
    : 'Matrice Comparative de Performance sur le Terrain';

  const tableSubtitle = currentLang === 'pt'
    ? 'Soluções convencionais vs. Tecnologia Polimérica Britasol'
    : currentLang === 'en'
    ? 'Conventional road methods vs. Britasol Polymer Technology'
    : 'Méthodes conventionnelles vs Technologie Polymère Britasol';

  const footerBadge1 = currentLang === 'pt'
    ? 'Bloqueio definitivo de ascensão capilar de água'
    : currentLang === 'en'
    ? 'Definitive blocking of capillary water rise'
    : 'Blocage définitif de la remontée capillaire';

  const footerBadge2 = currentLang === 'pt'
    ? 'Multiplicação de capacidade de suporte de carga'
    : currentLang === 'en'
    ? 'Multiplying load bearing capacity'
    : 'Multiplication de la capacité portante';

  const footerBadge3 = currentLang === 'pt'
    ? 'Reforço molecular contra fadiga e trincas'
    : currentLang === 'en'
    ? 'Molecular reinforcement against fatigue & cracking'
    : 'Renforcement moléculaire contre fatigue et fissures';

  return (
    <section id="dados-tecnicos" className="py-20 sm:py-24 bg-white text-slate-800 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-4 shadow-sm">
            <Atom className="w-4 h-4 text-[#0284C7]" />
            <span>{t.engineering.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {t.engineering.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.engineering.subtitle}
          </p>
        </div>

        {/* 3 Technical Deep-Dive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 text-left">
          
          {/* Card 1: Physicochemical Action (Dynacal Principles) */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#F95700] transition-all shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-[#F95700] mb-6">
              <Atom className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 font-heading mb-3">
              {t.engineering.dynacalSynergyTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.engineering.dynacalSynergyText}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-[#00A859] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{footerBadge1}</span>
            </div>
          </div>

          {/* Card 2: CBR Elevation */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#0284C7] transition-all shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-[#0284C7] mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 font-heading mb-3">
              {t.engineering.cbrTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.engineering.cbrText}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-[#0284C7] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{footerBadge2}</span>
            </div>
          </div>

          {/* Card 3: Nanomechanical Graphene Reinforcement & Mineral Synergy */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#00A859] transition-all shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-[#00A859] mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 font-heading mb-3">
              {t.engineering.reagentTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.engineering.reagentText}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-[#00A859] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{footerBadge3}</span>
            </div>
          </div>

        </div>

        {/* Technical Comparison Table */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-lg text-left">
          <div className="p-6 border-b border-slate-200 bg-white">
            <h3 className="text-lg font-black text-slate-900 font-heading">
              {tableTitle}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {tableSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase text-[11px]">
                <tr>
                  <th className="p-4 sm:p-5">{tableHeaders.parameter}</th>
                  <th className="p-4 sm:p-5">{tableHeaders.traditional}</th>
                  <th className="p-4 sm:p-5 text-[#F95700]">{tableHeaders.britasol}</th>
                  <th className="p-4 sm:p-5 text-[#00A859]">{tableHeaders.gain}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonList.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{feat.metric}</td>
                    <td className="p-4 sm:p-5 text-slate-600">{feat.traditional}</td>
                    <td className="p-4 sm:p-5 font-bold text-slate-900 bg-orange-50/50">{feat.britasol}</td>
                    <td className="p-4 sm:p-5 font-bold text-[#00A859]">{feat.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
