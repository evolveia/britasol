import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  FileSpreadsheet
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/britasolData';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuoteModal: () => void;
}

// Crisp inline SVG flags matching user's reference exactly
export const FlagIcon: React.FC<{ code: Language; className?: string }> = ({
  code,
  className = 'w-5 h-3.5',
}) => {
  if (code === 'pt') {
    // Brazil 🇧🇷
    return (
      <svg
        className={`${className} inline-block rounded-[2px] shadow-[0_0_1px_rgba(0,0,0,0.5)] flex-shrink-0`}
        viewBox="0 0 20 14"
        fill="none"
      >
        <rect width="20" height="14" fill="#009C3B" />
        <polygon points="10,1.8 18.2,7 10,12.2 1.8,7" fill="#FFDF00" />
        <circle cx="10" cy="7" r="3.2" fill="#002776" />
        <path
          d="M7.4 7.6 C8.4 6.3 11.6 6.3 12.6 7.6"
          stroke="#FFFFFF"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (code === 'en') {
    // United Kingdom / English (EN) 🇬🇧
    return (
      <svg
        className={`${className} inline-block rounded-[2px] shadow-[0_0_1px_rgba(0,0,0,0.5)] flex-shrink-0`}
        viewBox="0 0 20 14"
        fill="none"
      >
        <clipPath id="ukHeaderClip">
          <rect width="20" height="14" rx="1" />
        </clipPath>
        <g clipPath="url(#ukHeaderClip)">
          <rect width="20" height="14" fill="#012169" />
          <path d="M0 0 L20 14 M20 0 L0 14" stroke="#FFFFFF" strokeWidth="3" />
          <path d="M0 0 L20 14 M20 0 L0 14" stroke="#C8102E" strokeWidth="1.5" />
          <path d="M10 0 V14 M0 7 H20" stroke="#FFFFFF" strokeWidth="4.5" />
          <path d="M10 0 V14 M0 7 H20" stroke="#C8102E" strokeWidth="2.7" />
        </g>
      </svg>
    );
  }
  // France 🇫🇷
  return (
    <svg
      className={`${className} inline-block rounded-[2px] shadow-[0_0_1px_rgba(0,0,0,0.5)] flex-shrink-0`}
      viewBox="0 0 20 14"
      fill="none"
    >
      <rect width="6.66" height="14" x="0" fill="#002395" />
      <rect width="6.66" height="14" x="6.66" fill="#FFFFFF" />
      <rect width="6.68" height="14" x="13.32" fill="#ED2939" />
    </svg>
  );
};

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Language options ordered as in reference screenshot (Français, English, Português - Spanish removed)
  const languageOptions: { code: Language; name: string; labelCode: string }[] = [
    { code: 'fr', name: 'Français', labelCode: 'FR' },
    { code: 'en', name: 'English', labelCode: 'EN' },
    { code: 'pt', name: 'Português', labelCode: 'PT' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-3.5'
      }`}
    >
      <div className="w-full max-w-[1700px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          
          {/* Logo with Orange Background (Exact orange of the logo, NO text beside it) */}
          <a
            href="#"
            className="flex-shrink-0 group focus:outline-none"
            aria-label="BRITASOL Home"
          >
            <div className="h-10 sm:h-11 px-2.5 py-1 rounded-xl bg-[#F95700] flex items-center justify-center shadow-md group-hover:brightness-105 transition-all">
              <img
                src="/assets/aistudio/logo_2389f1d9.jpeg"
                alt="BRITASOL"
                className="h-full w-auto object-contain rounded"
              />
            </div>
          </a>

          {/* Single-line Horizontal Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-3.5 xl:gap-5 text-xs xl:text-sm font-semibold whitespace-nowrap">
            <a
              href="#quem-somos"
              className={`transition-colors py-1 hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
              }`}
            >
              {t.nav.about}
            </a>
            <a
              href="#produtos"
              className={`transition-colors py-1 hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
              }`}
            >
              {t.nav.products}
            </a>
            <a
              href="#antes-depois"
              className={`transition-colors py-1 hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
              }`}
            >
              {t.nav.beforeAfter}
            </a>
            <a
              href="#onde-aplicar"
              className={`transition-colors py-1 hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
              }`}
            >
              {t.nav.applications}
            </a>
            <a
              href="#modo-aplicacao"
              className={`transition-colors py-1 hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
              }`}
            >
              {t.nav.method}
            </a>
            <a
              href="#dados-tecnicos"
              className={`transition-colors py-1 hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
              }`}
            >
              {t.nav.engineering}
            </a>
            <a
              href="#calculadora"
              className={`transition-colors py-1 hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
              }`}
            >
              {t.nav.calculator}
            </a>
            <a
              href="#exportacao"
              className={`transition-colors py-1 hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
              }`}
            >
              {t.nav.export}
            </a>
            <a
              href="#contato"
              className={`transition-colors py-1 hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
              }`}
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Right Action Cluster: Language Flag Dropdown + "Cotação" Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Language Selector matching screenshot UI */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all focus:outline-none border-2 ${
                  isScrolled
                    ? 'border-[#0B1E36] bg-white text-[#0B1E36] shadow-sm hover:bg-slate-50'
                    : 'border-white/60 bg-black/40 text-white backdrop-blur-sm hover:border-white'
                }`}
                aria-haspopup="true"
                aria-expanded={langDropdownOpen}
                aria-label="Selecionar Idioma"
              >
                <FlagIcon code={currentLang} className="w-5 h-3.5" />
                <span className="tracking-wider uppercase text-xs">
                  {currentLang.toUpperCase()}
                </span>
                {langDropdownOpen ? (
                  <ChevronUp className="w-3.5 h-3.5 stroke-[2.5]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                )}
              </button>

              {/* Dropdown Menu matching user reference screenshot */}
              {langDropdownOpen && (
                <div className="absolute right-0 top-full pt-1.5 w-52 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-2 text-slate-800">
                    
                    {/* Header */}
                    <div className="px-3 py-2 text-[11px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-100 mb-1 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-slate-400" />
                      <span>LANGUE / LANGUAGE</span>
                    </div>

                    {/* Options: FR, EN, PT (Spanish removed) */}
                    <div className="space-y-0.5">
                      {languageOptions.map((opt) => {
                        const isSelected = opt.code === currentLang;
                        return (
                          <button
                            key={opt.code}
                            onClick={() => {
                              onLanguageChange(opt.code);
                              setLangDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                              isSelected
                                ? 'bg-[#EEF2F6] text-[#0B1E36] font-bold'
                                : 'hover:bg-slate-50 text-slate-700 font-medium'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <FlagIcon code={opt.code} className="w-5 h-3.5" />
                              <span className="leading-tight text-slate-800">
                                {opt.name}
                              </span>
                              <span className="text-[11px] text-slate-400 font-normal">
                                ({opt.labelCode})
                              </span>
                            </div>

                            {/* Dot indicator for active item matching screenshot */}
                            {isSelected && (
                              <span className="w-2.5 h-2.5 rounded-full bg-[#0B1E36] flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* "Cotação" Button */}
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl btn-brita-orange text-xs sm:text-sm font-bold uppercase tracking-wider focus:outline-none shadow-md"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>{t.nav.quoteButton}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`lg:hidden p-2 rounded-xl border focus:outline-none ${
                isScrolled
                  ? 'bg-slate-100 text-slate-800 border-slate-200'
                  : 'bg-black/40 text-white border-white/20'
              }`}
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-6 mt-2 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 text-slate-800">
          <nav className="flex flex-col space-y-1 text-sm font-semibold">
            <a
              href="#quem-somos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#F95700]"
            >
              {t.nav.about}
            </a>
            <a
              href="#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#F95700]"
            >
              {t.nav.products}
            </a>
            <a
              href="#antes-depois"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#F95700]"
            >
              {t.nav.beforeAfter}
            </a>
            <a
              href="#onde-aplicar"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#F95700]"
            >
              {t.nav.applications}
            </a>
            <a
              href="#modo-aplicacao"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#F95700]"
            >
              {t.nav.method}
            </a>
            <a
              href="#dados-tecnicos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#F95700]"
            >
              {t.nav.engineering}
            </a>
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#F95700]"
            >
              {t.nav.calculator}
            </a>
            <a
              href="#exportacao"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#F95700]"
            >
              {t.nav.export}
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#F95700] text-[#F95700]"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Idioma:</span>
            <div className="flex gap-2">
              {languageOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => {
                    onLanguageChange(opt.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${
                    currentLang === opt.code
                      ? 'bg-[#0B1E36] text-white border-[#0B1E36]'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <FlagIcon code={opt.code} className="w-4 h-3" />
                  <span>{opt.labelCode}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
