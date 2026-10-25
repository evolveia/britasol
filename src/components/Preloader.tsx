import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(45), 250);
    const timer2 = setTimeout(() => setProgress(80), 600);
    const timer3 = setTimeout(() => setProgress(100), 950);
    const timer4 = setTimeout(() => setLoading(false), 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070B12] text-[#F8FAFC] transition-opacity duration-500">
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Logo Container */}
        <div className="relative mb-6">
          <div className="w-48 h-auto overflow-hidden rounded-xl shadow-2xl border border-[#F95700]/30 p-2 bg-[#0B1320]">
            <img
              src="/assets/aistudio/logo_2389f1d9.jpeg"
              alt="BRITASOL Reabilitação Responsável"
              className="w-full h-auto object-contain rounded"
            />
          </div>
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#F95700]/20 via-[#0284C7]/20 to-[#00A859]/20 blur-xl -z-10 animate-pulse" />
        </div>

        {/* Brand Text */}
        <h2 className="text-sm font-bold tracking-widest uppercase text-[#F95700] font-heading mb-1">
          Reabilitação Responsável
        </h2>
        <p className="text-xs text-[#94A3B8] font-medium mb-6">
          Soluções Poliméricas para Estabilização de Solo
        </p>

        {/* Progress Bar */}
        <div className="w-56 h-1.5 bg-[#131E31] rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#F95700] via-[#FF7729] to-[#0284C7] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[10px] text-[#94A3B8] mt-2 font-mono">
          {progress}% • Carregando Engenharia & Dados Técnicos...
        </span>
      </div>
    </div>
  );
};
