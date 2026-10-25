import React, { useState } from 'react';
import {
  Package,
  CheckCircle2,
  ArrowRight,
  Atom,
  ShieldCheck
} from 'lucide-react';
import { Language, TRANSLATIONS, PRODUCTS, ProductItem } from '../data/britasolData';

interface ProductCatalogProps {
  currentLang: Language;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  currentLang,
  onOpenQuoteModal,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(PRODUCTS[1]); // Default 50L
  const [activeTab, setActiveTab] = useState<'overview' | 'composition' | 'specs'>('overview');

  return (
    <section id="produtos" className="py-20 sm:py-24 bg-[#0B1E36] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0077C8]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F95700]/40 text-xs font-bold text-[#F95700] uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Package className="w-4 h-4 text-[#F95700]" />
            <span>{t.catalog.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
            {t.catalog.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Product Cards Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {PRODUCTS.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden border-2 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#122744] border-[#F95700] shadow-2xl scale-[1.01]'
                    : 'bg-[#0E213B] border-white/10 hover:border-[#F95700]/60 shadow-lg'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full ${
                      isSelected
                        ? 'bg-[#F95700] text-white shadow-md'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    {prod.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#38BDF8] bg-[#0077C8]/20 px-2.5 py-0.5 rounded-full border border-[#0077C8]/40">
                    {prod.capacity}
                  </span>
                </div>

                {/* Image and Titles */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-4">
                  <div className="sm:col-span-5 h-48 sm:h-56 rounded-2xl overflow-hidden bg-[#071324] border border-white/10 relative p-2 flex items-center justify-center">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-2 text-left">
                    <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-[#F95700] font-bold">
                      {prod.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {prod.description}
                    </p>
                  </div>
                </div>

                {/* Key Bullet Highlights */}
                <ul className="space-y-1.5 my-4 pt-3 border-t border-white/10 text-xs text-slate-200 text-left">
                  {prod.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Select / Active Indicator */}
                <div className="pt-3 flex items-center justify-between text-xs font-bold text-[#F95700]">
                  <span>{isSelected ? '✓ Produto Selecionado para Detalhes' : 'Clique para ver Ficha Completa'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Tabs Box for the Selected Product */}
        <div className="rounded-3xl bg-[#10243E] border border-white/15 p-6 sm:p-10 shadow-2xl mb-12 text-left">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-4 mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'overview'
                  ? 'bg-[#F95700] text-white shadow-md'
                  : 'bg-white/10 text-slate-300 hover:text-white'
              }`}
            >
              Visão Geral & Aplicações
            </button>
            <button
              onClick={() => setActiveTab('composition')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'composition'
                  ? 'bg-[#F95700] text-white shadow-md'
                  : 'bg-white/10 text-slate-300 hover:text-white'
              }`}
            >
              Composição com Grafeno
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'specs'
                  ? 'bg-[#F95700] text-white shadow-md'
                  : 'bg-white/10 text-slate-300 hover:text-white'
              }`}
            >
              Ficha Técnica & Parâmetros
            </button>

            <button
              onClick={() => onOpenQuoteModal(selectedProduct.name)}
              className="ml-auto px-5 py-2.5 rounded-xl btn-brita-orange text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <span>{t.catalog.requestQuote}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xl font-black text-white font-heading">
                  {selectedProduct.name} - {selectedProduct.capacity}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="pt-2">
                  <h5 className="text-xs font-bold uppercase text-[#F95700] tracking-wider mb-3">
                    Recomendado para:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProduct.idealFor.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 bg-[#071324] p-4 text-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-contain rounded-xl mb-3 shadow-md"
                />
                <span className="block text-xs text-slate-400">
                  Embalagem original em galão PEAD com rótulo laranja premium de alta visibilidade.
                </span>
              </div>
            </div>
          )}

          {/* Tab 2: Composition */}
          {activeTab === 'composition' && (
            <div>
              <div className="mb-6">
                <h4 className="text-xl font-black text-white font-heading">
                  {t.catalog.compositionTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {t.catalog.compositionSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.catalog.compositionItems.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F95700]/50 transition-colors shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-2 text-[#F95700]">
                      <Atom className="w-4 h-4" />
                      <h5 className="text-sm font-bold text-white font-heading">
                        {comp.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Specs */}
          {activeTab === 'specs' && (
            <div>
              <div className="mb-6">
                <h4 className="text-xl font-black text-white font-heading">
                  Especificações Físico-Químicas & Manuseio
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Dados laboratoriais para dimensionamento em projetos de engenharia viária.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Tipo de Embalagem</span>
                  <span className="text-xs font-bold text-white">{selectedProduct.specs.packaging}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Densidade Aparente</span>
                  <span className="text-xs font-bold text-white">{selectedProduct.specs.density}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Potencial Hidrogeniônico (pH)</span>
                  <span className="text-xs font-bold text-white">{selectedProduct.specs.ph}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Taxa de Diluição Técnica</span>
                  <span className="text-xs font-bold text-[#F95700]">{selectedProduct.specs.dilution}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Aspecto Visual</span>
                  <span className="text-xs font-bold text-white">{selectedProduct.specs.appearance}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Solubilidade em Água</span>
                  <span className="text-xs font-bold text-[#00A859]">{selectedProduct.specs.solubility}</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-[#F95700]/10 border border-[#F95700]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#F95700] flex-shrink-0" />
                  <span className="text-xs text-slate-200">
                    Laudos laboratoriais de CBR, difratometria e ensaios Proctor disponíveis sob demanda.
                  </span>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('Laudos e Ficha Técnica')}
                  className="px-4 py-2 rounded-xl bg-[#F95700] text-white hover:bg-[#e04e00] transition-colors text-xs font-bold whitespace-nowrap shadow-sm"
                >
                  Solicitar FISPQ / Ficha Técnica
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
