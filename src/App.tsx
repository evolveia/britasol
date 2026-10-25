import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductCatalog } from './components/ProductCatalog';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { MethodSection } from './components/MethodSection';
import { EngineeringDynacalSection } from './components/EngineeringDynacalSection';
import { DosageCalculator } from './components/DosageCalculator';
import { ExportSection } from './components/ExportSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { QuoteModal } from './components/QuoteModal';
import { LGPDModal } from './components/LGPDModal';
import { Language } from './data/britasolData';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<string | undefined>(undefined);
  const [lgpdModalType, setLgpdModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenQuote = (context?: string) => {
    setQuotePrefill(context);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Inter',sans-serif] selection:bg-[#F95700] selection:text-[#FFFFFF] relative">
      {/* 0. Preloader with Britasol Logo */}
      <Preloader />

      {/* 1. Header with Reference-Accurate Language Selector (FR, EN, PT) */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenQuoteModal={() => handleOpenQuote()}
      />

      {/* Main Content Sections with alternating branded rhythm */}
      <main>
        {/* 2. Hero Banner & Carousel Dynacal Slides */}
        <Hero
          currentLang={currentLang}
          onOpenQuoteModal={() => handleOpenQuote()}
        />

        {/* 3. Quem Somos: Perfil Institucional & Reabilitação Responsável (Fundo Branco) */}
        <AboutSection
          currentLang={currentLang}
          onOpenQuoteModal={() => handleOpenQuote('Institucional')}
        />

        {/* 4. Catálogo de Produtos 20L e 50L (Fundo Cor da Logo: Azul Marinho Corporativo) */}
        <ProductCatalog
          currentLang={currentLang}
          onOpenQuoteModal={(productName) => handleOpenQuote(`Produto: ${productName || 'Catálogo'}`)}
        />

        {/* 5. Resultados Comprovados em Campo: Antes vs Depois (Fundo Branco) */}
        <BeforeAfterSection
          currentLang={currentLang}
          onOpenQuoteModal={() => handleOpenQuote('Interesse pós Antes/Depois')}
        />

        {/* 6. Versatilidade de Aplicação: Onde Aplicar (Fundo Cor da Logo: Azul Marinho) */}
        <ApplicationsSection
          currentLang={currentLang}
        />

        {/* 7. Execução Rápida: Modo de Aplicação Passo a Passo (Imagem de Fundo Pavimentação) */}
        <MethodSection
          currentLang={currentLang}
        />

        {/* 8. Fundamentos Técnicos & Geotécnicos: CBR e Comparativos (Fundo Branco) */}
        <EngineeringDynacalSection
          currentLang={currentLang}
        />

        {/* 9. Simulador Online: Calculadora de Dosagem (Fundo Cor da Logo: Azul Marinho) */}
        <DosageCalculator
          currentLang={currentLang}
          onOpenQuoteModal={(params) => handleOpenQuote(params)}
        />

        {/* 10. Comércio Exterior & Logística Global (Imagem de Fundo Logística e Transporte) */}
        <ExportSection
          currentLang={currentLang}
        />

        {/* 11. Perguntas Frequentes: Dúvidas Técnicas e Comerciais (Fundo Cor da Logo: Azul Marinho) */}
        <FAQSection
          currentLang={currentLang}
        />

        {/* 12. Fale Conosco: Formulário com Envio WhatsApp e Dados Oficiais (Fundo Branco) */}
        <ContactSection
          currentLang={currentLang}
        />
      </main>

      {/* 13. Rodapé Corporativo com Logo em fundo Laranja e Contatos Oficiais */}
      <Footer
        currentLang={currentLang}
        onOpenPrivacy={() => setLgpdModalType('privacy')}
        onOpenTerms={() => setLgpdModalType('terms')}
      />

      {/* 14. Floating AI Technical Consultant (Multilingual PT/EN/FR) */}
      <Chatbot currentLang={currentLang} />

      {/* 15. Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefillContext={quotePrefill}
        currentLang={currentLang}
      />

      <LGPDModal
        type={lgpdModalType}
        onClose={() => setLgpdModalType(null)}
      />
    </div>
  );
}
