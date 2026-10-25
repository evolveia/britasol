import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ShieldCheck,
  Send
} from 'lucide-react';
import { Language, TRANSLATIONS, BRITASOL_CONFIG } from '../data/britasolData';

interface FooterProps {
  currentLang: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenPrivacy, onOpenTerms }) => {
  const t = TRANSLATIONS[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A101D] text-slate-400 border-t border-slate-800 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Slogan (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Orange background container matching logo color, no text beside logo */}
            <div className="inline-flex items-center justify-center p-2 rounded-xl bg-[#F95700] shadow-md">
              <img
                src="/assets/aistudio/logo_2389f1d9.jpeg"
                alt="BRITASOL"
                className="h-10 sm:h-12 w-auto object-contain rounded-lg"
              />
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-md">
              {t.footer.tagline}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300">
              <span className="text-[11px] text-[#00A859] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Qualidade Tecnológica • Diretrizes e Normas DNIT
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#quem-somos" className="hover:text-[#F95700] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#F95700] transition-colors">
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a href="#antes-depois" className="hover:text-[#F95700] transition-colors">
                  {t.nav.beforeAfter}
                </a>
              </li>
              <li>
                <a href="#onde-aplicar" className="hover:text-[#F95700] transition-colors">
                  {t.nav.applications}
                </a>
              </li>
              <li>
                <a href="#modo-aplicacao" className="hover:text-[#F95700] transition-colors">
                  {t.nav.method}
                </a>
              </li>
              <li>
                <a href="#dados-tecnicos" className="hover:text-[#F95700] transition-colors">
                  {t.nav.engineering}
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#F95700] transition-colors font-semibold text-[#F95700]">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Official Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F95700] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">E-mail:</span>
                  <a
                    href={`mailto:${BRITASOL_CONFIG.email}`}
                    className="font-semibold text-slate-200 hover:text-[#F95700] transition-colors break-all"
                  >
                    {BRITASOL_CONFIG.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00A859] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Telefone / WhatsApp:</span>
                  <a
                    href={`https://wa.me/${BRITASOL_CONFIG.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-200 hover:text-[#00A859] transition-colors"
                  >
                    {BRITASOL_CONFIG.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Endereço:</span>
                  <span className="font-semibold text-slate-200 leading-relaxed block">
                    {BRITASOL_CONFIG.address}
                  </span>
                </div>
              </li>

              <li className="pt-2 flex items-center gap-3">
                <a
                  href={`https://wa.me/${BRITASOL_CONFIG.whatsappNumber}?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+Britasol`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20bd5a] transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>WhatsApp Oficial</span>
                </a>

                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:text-[#F95700] hover:border-[#F95700] transition-colors"
                  title="Voltar ao topo"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Topo</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {BRITASOL_CONFIG.companyName} • {BRITASOL_CONFIG.slogan}. {t.footer.rights}
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors focus:outline-none"
            >
              Política de Privacidade & LGPD
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors focus:outline-none"
            >
              Termos de Uso
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
