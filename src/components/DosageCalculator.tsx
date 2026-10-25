import React, { useState, useId } from 'react';
import {
  Calculator,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/britasolData';

interface DosageCalculatorProps {
  currentLang: Language;
  onOpenQuoteModal: (paramsStr?: string) => void;
}

export const DosageCalculator: React.FC<DosageCalculatorProps> = ({
  currentLang,
  onOpenQuoteModal,
}) => {
  const t = TRANSLATIONS[currentLang];

  const widthId = useId();
  const lengthId = useId();

  const [width, setWidth] = useState<number>(6.0);
  const [lengthKm, setLengthKm] = useState<number>(2.5);
  const [traffic, setTraffic] = useState<'light' | 'medium' | 'heavy'>('medium');

  const totalAreaM2 = width * (lengthKm * 1000);
  const dosagePerM2 = traffic === 'light' ? 0.8 : traffic === 'medium' ? 1.2 : 1.6;
  const totalLiters = Math.round(totalAreaM2 * dosagePerM2);

  const canisters20L = Math.ceil(totalLiters / 20);
  const canisters50L = Math.ceil(totalLiters / 50);

  const estimatedWaterM3 = Math.round((totalLiters * 80) / 1000);
  const truckTrips = Math.ceil(estimatedWaterM3 / 10);

  const costTraditionalBRL = Math.round(totalAreaM2 * 180);
  const costBritasolBRL = Math.round(totalAreaM2 * 75);
  const savingsBRL = costTraditionalBRL - costBritasolBRL;
  const savingsUSD = Math.round(savingsBRL / 5.5);

  const co2AvoidedTons = Math.round(lengthKm * 42);

  const handleSimulateQuote = () => {
    const summary = `Cálculo de Pista: ${width}m de largura x ${lengthKm}km de extensão (${totalAreaM2.toLocaleString()} m²) | Tráfego: ${traffic.toUpperCase()} | Demanda Estimada: ${totalLiters.toLocaleString()} L de Britasol (${canisters50L} galões de 50L)`;
    onOpenQuoteModal(summary);
  };

  return (
    <section id="calculadora" className="py-20 sm:py-24 bg-[#0B1E36] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0077C8]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F95700]/40 text-xs font-bold text-[#F95700] uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Calculator className="w-4 h-4 text-[#F95700]" />
            <span>{t.calculator.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
            {t.calculator.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* 2-Column Interactive Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders & Parameter Inputs */}
          <div className="lg:col-span-6 rounded-3xl bg-[#10243E] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6 text-left">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F95700] block mb-1">
                Etapa 1: Dimensões da Via
              </span>
              <h3 className="text-lg font-black text-white font-heading">
                Parâmetros Geométricos da Pista
              </h3>
            </div>

            {/* Slider 1: Width */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor={widthId} className="font-bold text-slate-200">
                  {t.calculator.widthLabel}
                </label>
                <span className="font-mono font-bold text-white bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                  {width} metros
                </span>
              </div>
              <input
                id={widthId}
                type="range"
                min="3.0"
                max="14.0"
                step="0.5"
                value={width}
                onChange={(e) => setWidth(parseFloat(e.target.value))}
                className="w-full accent-[#F95700] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>3m (Acesso Rural)</span>
                <span>7m (Padrão DER/DNIT)</span>
                <span>14m (Pátio / Dupla)</span>
              </div>
            </div>

            {/* Slider 2: Length */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor={lengthId} className="font-bold text-slate-200">
                  {t.calculator.lengthLabel}
                </label>
                <span className="font-mono font-bold text-white bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                  {lengthKm} km ({Math.round(lengthKm * 1000)} metros)
                </span>
              </div>
              <input
                id={lengthId}
                type="range"
                min="0.5"
                max="50.0"
                step="0.5"
                value={lengthKm}
                onChange={(e) => setLengthKm(parseFloat(e.target.value))}
                className="w-full accent-[#F95700] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>500 m</span>
                <span>10 km</span>
                <span>50 km</span>
              </div>
            </div>

            {/* Step 2: Traffic Intensity */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F95700] block">
                {t.calculator.trafficIntensity}
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  onClick={() => setTraffic('light')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    traffic === 'light'
                      ? 'bg-[#F95700] text-white border-[#F95700] shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="block text-xs font-bold">{t.calculator.lightTraffic}</span>
                  <span className="block text-[10px] opacity-80 mt-0.5">Leve • 0.8 L/m²</span>
                </button>

                <button
                  onClick={() => setTraffic('medium')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    traffic === 'medium'
                      ? 'bg-[#F95700] text-white border-[#F95700] shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="block text-xs font-bold">{t.calculator.mediumTraffic}</span>
                  <span className="block text-[10px] opacity-80 mt-0.5">Médio • 1.2 L/m²</span>
                </button>

                <button
                  onClick={() => setTraffic('heavy')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    traffic === 'heavy'
                      ? 'bg-[#F95700] text-white border-[#F95700] shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="block text-xs font-bold">{t.calculator.heavyTraffic}</span>
                  <span className="block text-[10px] opacity-80 mt-0.5">Pesado • 1.6 L/m²</span>
                </button>
              </div>
            </div>

            {/* Total Treated Area Preview */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-slate-300 font-semibold">{t.calculator.totalArea}</span>
              </div>
              <span className="font-mono font-black text-white text-sm">
                {totalAreaM2.toLocaleString('pt-BR')} m²
              </span>
            </div>
          </div>

          {/* Right Column: Output Metrics & Estimated Savings */}
          <div className="lg:col-span-6 rounded-3xl bg-[#10243E] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6 text-left">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A859] block mb-1">
                Resultado do Dimensionamento
              </span>
              <h3 className="text-lg font-black text-white font-heading">
                Demanda de Britasol & Economia Prevista
              </h3>
            </div>

            {/* Highlight Metric: Total Volume */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Volume Total de Britasol Concentrado</span>
                <span className="text-2xl sm:text-3xl font-black text-[#F95700] font-heading">
                  {totalLiters.toLocaleString('pt-BR')} Litros
                </span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[11px] text-[#38BDF8] font-bold block">
                  ≈ {canisters50L.toLocaleString('pt-BR')} galões de 50L
                </span>
                <span className="text-[10px] text-slate-400 block">
                  ou {canisters20L.toLocaleString('pt-BR')} galões de 20L
                </span>
              </div>
            </div>

            {/* Secondary Technical Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block text-[11px] mb-1">Água para Diluição (~1:80)</span>
                <span className="font-bold text-white text-sm">
                  {estimatedWaterM3.toLocaleString('pt-BR')} m³ ({truckTrips} caminhões-pipa)
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block text-[11px] mb-1">Emissões de CO₂ Evitadas</span>
                <span className="font-bold text-[#00A859] text-sm">
                  ~{co2AvoidedTons.toLocaleString('pt-BR')} toneladas
                </span>
              </div>
            </div>

            {/* Financial Savings Box */}
            <div className="p-5 rounded-2xl bg-[#00A859]/10 border border-[#00A859]/30">
              <span className="text-[11px] font-bold uppercase text-[#00A859] tracking-wider block mb-1">
                {t.calculator.estimatedSavings}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <span className="text-2xl sm:text-3xl font-black text-white font-heading">
                  R$ {savingsBRL.toLocaleString('pt-BR')}
                </span>
                <span className="text-xs font-bold text-[#38BDF8]">
                  ≈ US$ {savingsUSD.toLocaleString('en-US')}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                {t.calculator.savingsFootnote}
              </p>
            </div>

            {/* Action Button: Transform Calculation into Quote */}
            <button
              onClick={handleSimulateQuote}
              className="w-full py-4 rounded-2xl btn-brita-orange text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg focus:outline-none"
            >
              <span>{t.calculator.requestSimulatedQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
