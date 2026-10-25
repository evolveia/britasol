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

// Crisp inline SVG flags: Brasil (PT), EUA (EN), França (FR)
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
    // USA 🇺🇸 (EUA para inglês)
    return (
      <svg
        className={`${className} inline-block rounded-[2px] shadow-[0_0_1px_rgba(0,0,0,0.5)] flex-shrink-0`}
        viewBox="0 0 20 14"
        fill="none"
      >
        <rect width="20" height="14" fill="#B22234" />
        <path
          d="M0 1.077h20v1.077H0zM0 3.23h20v1.077H0zM0 5.385h20v1.077H0zM0 7.538h20v1.077H0zM0 9.692h20v1.077H0zM0 11.846h20v1.077H0z"
          fill="#FFFFFF"
        />
        <rect width="8" height="7.538" fill="#3C3B6E" />
        <circle cx="1.6" cy="1.5" r="0.45" fill="#FFFFFF" />
        <circle cx="3.8" cy="1.5" r="0.45" fill="#FFFFFF" />
        <circle cx="6.0" cy="1.5" r="0.45" fill="#FFFFFF" />
        <circle cx="2.7" cy="2.8" r="0.45" fill="#FFFFFF" />
        <circle cx="4.9" cy="2.8" r="0.45" fill="#FFFFFF" />
        <circle cx="1.6" cy="4.1" r="0.45" fill="#FFFFFF" />
        <circle cx="3.8" cy="4.1" r="0.45" fill="#FFFFFF" />
        <circle cx="6.0" cy="4.1" r="0.45" fill="#FFFFFF" />
        <circle cx="2.7" cy="5.4" r="0.45" fill="#FFFFFF" />
        <circle cx="4.9" cy="5.4" r="0.45" fill="#FFFFFF" />
        <circle cx="1.6" cy="6.6" r="0.45" fill="#FFFFFF" />
        <circle cx="3.8" cy="6.6" r="0.45" fill="#FFFFFF" />
        <circle cx="6.0" cy="6.6" r="0.45" fill="#FFFFFF" />
      </svg>
    );
  }
  // France 🇫🇷 (França para francês)
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

  // Language options: Brasil (PT), EUA (EN), França (FR)
  const languageOptions: { code: Language; country: string; langName: string }[] = [
    { code: 'pt', country: 'Brasil', langName: 'Português' },
    { code: 'en', country: 'EUA', langName: 'English' },
    { code: 'fr', country: 'França', langName: 'Français' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-slate-200'
          : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-2.5 sm:py-3'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-2.5 sm:px-4 lg:px-4 xl:px-6">
        <div className="flex items-center justify-between gap-1.5 lg:gap-2 xl:gap-3">
          
          {/* Logo with Orange Background (Exact orange of the logo, NO text beside it) */}
          <a
            href="#"
            className="flex-shrink-0 group focus:outline-none"
            aria-label="BRITASOL Home"
          >
            <div className="h-9 sm:h-10 px-2 py-1 rounded-xl bg-[#F95700] flex items-center justify-center shadow-md group-hover:brightness-105 transition-all">
              <img
                src="/assets/aistudio/logo_2389f1d9.jpeg"
                alt="BRITASOL"
                className="h-full w-auto object-contain rounded"
              />
            </div>
          </a>

          {/* Single-line Responsive Horizontal Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-1 lg:gap-1.5 xl:gap-2.5 2xl:gap-4 text-[11px] xl:text-[12px] 2xl:text-[13px] font-semibold whitespace-nowrap flex-shrink min-w-0">
            <a
              href="#quem-somos"
              className={`transition-colors px-1 py-1 rounded hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm'
              }`}
            >
              {t.nav.about}
            </a>
            <a
              href="#produtos"
              className={`transition-colors px-1 py-1 rounded hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm'
              }`}
            >
              {t.nav.products}
            </a>
            <a
              href="#antes-depois"
              className={`transition-colors px-1 py-1 rounded hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm'
              }`}
            >
              {t.nav.beforeAfter}
            </a>
            <a
              href="#onde-aplicar"
              className={`transition-colors px-1 py-1 rounded hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm'
              }`}
            >
              {t.nav.applications}
            </a>
            <a
              href="#modo-aplicacao"
              className={`transition-colors px-1 py-1 rounded hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm'
              }`}
            >
              {t.nav.method}
            </a>
            <a
              href="#dados-tecnicos"
              className={`transition-colors px-1 py-1 rounded hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm'
              }`}
            >
              {t.nav.engineering}
            </a>
            <a
              href="#calculadora"
              className={`transition-colors px-1 py-1 rounded hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm'
              }`}
            >
              {t.nav.calculator}
            </a>
            <a
              href="#exportacao"
              className={`transition-colors px-1 py-1 rounded hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm'
              }`}
            >
              {t.nav.export}
            </a>
            <a
              href="#contato"
              className={`transition-colors px-1 py-1 rounded hover:text-[#F95700] ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm'
              }`}
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Right Action Cluster: Language Flag Dropdown + "Cotação" Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-2.5 flex-shrink-0">
            
            {/* Language Selector: Globe Icon + Country Flag + Chevron (Compact & Hoverable) */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-xs font-bold transition-all focus:outline-none border-2 flex-shrink-0 ${
                  isScrolled
                    ? 'border-[#0B1E36] bg-white text-[#0B1E36] shadow-sm hover:bg-slate-50'
                    : 'border-white/60 bg-black/40 text-white backdrop-blur-sm hover:border-white'
                }`}
                aria-haspopup="true"
                aria-expanded={langDropdownOpen}
                aria-label="Selecionar Idioma"
              >
                <Globe className="w-3.5 h-3.5 text-[#F95700] flex-shrink-0" />
                <FlagIcon code={currentLang} className="w-4 h-3 flex-shrink-0" />
                <span className="uppercase text-[11px] font-bold tracking-wider hidden sm:inline">
                  {currentLang.toUpperCase()}
                </span>
                {langDropdownOpen ? (
                  <ChevronUp className="w-3 h-3 stroke-[2.5] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-3 h-3 stroke-[2.5] flex-shrink-0" />
                )}
              </button>

              {/* Dropdown Menu: Country Flags for Brasil, EUA, França */}
              {langDropdownOpen && (
                <div className="absolute right-0 top-full pt-1.5 w-48 sm:w-52 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-2 text-slate-800">
                    
                    {/* Header with Globe */}
                    <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-100 mb-1 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#F95700]" />
                      <span>IDIOMA / LANGUAGE</span>
                    </div>

                    {/* Country Options: Brasil 🇧🇷, EUA 🇺🇸, França 🇫🇷 */}
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
                              <div className="flex flex-col text-left">
                                <span className="leading-tight text-slate-900 font-bold text-xs">
                                  {opt.country}
                                </span>
                                <span className="text-[10px] text-slate-500 font-normal">
                                  {opt.langName}
                                </span>
                              </div>
                            </div>

                            {/* Dot indicator for active item */}
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-[#F95700] flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* "Cotação" Button - Always fully visible, whitespace-nowrap, never truncated */}
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl btn-brita-orange text-xs font-bold uppercase tracking-wider focus:outline-none shadow-md flex-shrink-0 whitespace-nowrap"
              title="Solicitar Cotação"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{t.nav.quoteButton}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`lg:hidden p-2 rounded-xl border focus:outline-none flex-shrink-0 ${
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
            <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#F95700]" />
              Idioma:
            </span>
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
                  <span>{opt.country}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
