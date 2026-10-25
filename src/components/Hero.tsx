import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  Sparkles,
  ArrowRight,
  CheckCircle,
  FileSpreadsheet,
  Package
} from 'lucide-react';
import { Language, TRANSLATIONS, HERO_SLIDES } from '../data/britasolData';

interface HeroProps {
  currentLang: Language;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenQuoteModal }) => {
  const t = TRANSLATIONS[currentLang];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const scrollToNextSection = () => {
    const elem = document.getElementById('quem-somos');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* Background Images with Fade Transitions */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-[0.75]"
          />
          {/* Subtle gradient vignette to guarantee card readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
        </div>
      ))}

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center min-h-[85vh]">
        
        {/* Left Floating Glassmorphic Card (Matches previous design screenshot) */}
        <div className="w-full max-w-2xl text-left">
          <div className="rounded-3xl p-6 sm:p-10 bg-slate-950/80 border border-[#F95700]/40 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden animate-in fade-in slide-in-from-left-4 duration-700">
            
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F95700]/50 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#F95700] animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Bold Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight leading-[1.12]">
              {t.hero.titleStart}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F95700] via-[#FF7729] to-[#0EA5E9]">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleEnd}
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-3.5 rounded-xl btn-brita-orange text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl focus:outline-none"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>{t.hero.ctaSecondary}</span>
              </button>

              <a
                href="#produtos"
                className="px-7 py-3.5 rounded-xl btn-outline-white text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
              >
                <Package className="w-4 h-4" />
                <span>{t.hero.ctaPrimary}</span>
              </a>
            </div>

            {/* Card Bottom Footnote */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00A859] flex-shrink-0" />
                <span className="font-semibold text-white">100% Ecológico & Atóxico</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F95700] font-bold">•</span>
                <span>Economia de 40% a 60%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#0EA5E9] font-bold">•</span>
                <span>Liberação em 24h</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Slide Navigation Controls */}
      
      {/* Left Arrow Button */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#F95700] text-white border border-white/20 hover:border-[#F95700] items-center justify-center backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#F95700] text-white border border-white/20 hover:border-[#F95700] items-center justify-center backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Right Edge Slide Numbers (Matches previous design) */}
      <div className="hidden lg:flex flex-col gap-2.5 absolute right-6 top-1/2 -translate-y-1/2 z-30 text-[11px] font-mono text-white/50">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`flex items-center gap-2 focus:outline-none transition-all ${
              idx === currentSlide ? 'text-[#F95700] font-bold scale-110' : 'hover:text-white'
            }`}
          >
            <span>0{idx + 1}</span>
            <span
              className={`h-0.5 rounded transition-all ${
                idx === currentSlide ? 'w-6 bg-[#F95700]' : 'w-2 bg-white/30'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Bottom Right Slide Dots Indicator */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all focus:outline-none ${
              idx === currentSlide ? 'w-7 bg-[#F95700]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom Center Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center text-[10px] font-mono uppercase tracking-widest text-white/70 hover:text-[#F95700] transition-colors focus:outline-none"
        >
          <span className="mb-1">ROLAR</span>
          <div className="w-7 h-7 rounded-full border border-white/30 group-hover:border-[#F95700] flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>

    </section>
  );
};
