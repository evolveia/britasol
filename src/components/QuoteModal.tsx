import React, { useState, useEffect } from 'react';
import {
  X,
  FileSpreadsheet,
  CheckCircle2,
  PhoneCall,
  Loader2,
  Send,
  Building2,
  MapPin,
  Mail,
  User
} from 'lucide-react';
import { BRITASOL_CONFIG, Language } from '../data/britasolData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillContext?: string;
  currentLang: Language;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefillContext,
  currentLang,
}) => {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [paisOuEstado, setPaisOuEstado] = useState('');
  const [tipoProjeto, setTipoProjeto] = useState('Estradas Rurais / Vicinais');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillContext) {
      setMensagem((prev) => (prev ? `${prev}\n\n[Contexto]: ${prefillContext}` : `[Contexto Técnico]: ${prefillContext}`));
    }
  }, [prefillContext]);

  // Handle ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          whatsapp,
          objetivo: `Cotação Britasol - ${tipoProjeto} (${empresa ? `Empresa: ${empresa}, ` : ''}${paisOuEstado})`,
          origem: 'Modal de Cotação Corporativa',
          mensagem,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Erro ao enviar lead:', err);
      // Still set submitted to allow WhatsApp fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenWhatsApp = () => {
    const msg = encodeURIComponent(
      `Olá! Me chamo *${nome}*${empresa ? ` da empresa *${empresa}*` : ''} (${paisOuEstado}). Tenho interesse no *Britasol* para o projeto *${tipoProjeto}*.\n\nDetalhes: ${mensagem || 'Gostaria de uma cotação e ficha técnica oficial.'}`
    );
    window.open(`https://wa.me/${BRITASOL_CONFIG.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0B1320] border-2 border-[#F95700]/50 shadow-2xl p-6 sm:p-8 text-left overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors focus:outline-none"
          aria-label="Fechar Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131E31] border border-[#F95700]/30 text-[11px] font-bold text-[#F95700] uppercase tracking-wider mb-2">
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#F95700]" />
                <span>Solicitação de Cotação Oficial</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#F8FAFC] font-heading">
                Estabilizante de Solo Britasol
              </h3>
              <p className="text-xs text-[#94A3B8] mt-1">
                Atendimento técnico para obras públicas, agronegócio, mineradoras e exportação.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#E2E8F0] font-semibold mb-1">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Ex: Carlos Mendes"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#070B12] border border-white/10 text-white placeholder-[#64748B] focus:border-[#F95700] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#E2E8F0] font-semibold mb-1">
                    Empresa / Órgão
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
                    <input
                      type="text"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Ex: Agropecuária / Construtora"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#070B12] border border-white/10 text-white placeholder-[#64748B] focus:border-[#F95700] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#E2E8F0] font-semibold mb-1">
                    Telefone / WhatsApp com DDD *
                  </label>
                  <div className="relative">
                    <PhoneCall className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Ex: (11) 99999-8888"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#070B12] border border-white/10 text-white placeholder-[#64748B] focus:border-[#F95700] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#E2E8F0] font-semibold mb-1">
                    E-mail Corporativo
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nome@empresa.com.br"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#070B12] border border-white/10 text-white placeholder-[#64748B] focus:border-[#F95700] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#E2E8F0] font-semibold mb-1">
                    País / Estado da Obra *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={paisOuEstado}
                      onChange={(e) => setPaisOuEstado(e.target.value)}
                      placeholder="Ex: Mato Grosso / RD Congo"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#070B12] border border-white/10 text-white placeholder-[#64748B] focus:border-[#F95700] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#E2E8F0] font-semibold mb-1">
                    Tipo de Aplicação
                  </label>
                  <select
                    value={tipoProjeto}
                    onChange={(e) => setTipoProjeto(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#070B12] border border-white/10 text-white focus:border-[#F95700] focus:outline-none"
                  >
                    <option value="Estradas Rurais / Vicinais">Estradas Rurais e Vicinais</option>
                    <option value="Acesso de Fazendas / Agronegócio">Acesso de Fazendas e Agronegócio</option>
                    <option value="Mineração / Tráfego Pesado">Mineração e Tráfego Pesado</option>
                    <option value="Pátios Industriais e Logísticos">Pátios Industriais e Logísticos</option>
                    <option value="Contenção de Taludes">Taludes e Áreas de Contenção</option>
                    <option value="Exportação República Democrática do Congo">Exportação RD Congo / África</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#E2E8F0] font-semibold mb-1">
                  Detalhes da Via / Extensão / Tipo de Solo
                </label>
                <textarea
                  rows={3}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Ex: Estrada de terra de 8km de extensão por 6m de largura, solo argiloso avermelhado, tráfego de carretas graneleiras..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B12] border border-white/10 text-white placeholder-[#64748B] focus:border-[#F95700] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl btn-brita-orange text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processando Solicitação...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar e Receber Proposta Técnica</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-[#64748B]">
                Seus dados estão protegidos de acordo com a LGPD e serão utilizados exclusivamente para contato técnico comercial da Britasol.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#00A859]/20 border border-[#00A859]/40 text-[#00A859] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white font-heading">
                Solicitação Enviada com Sucesso!
              </h3>
              <p className="text-xs text-[#94A3B8] max-w-sm mx-auto">
                Obrigado, <strong>{nome}</strong>. Nossos engenheiros de aplicação entrarão em contato em breve com o estudo de dosagem e a proposta comercial.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B12] border border-[#25D366]/30 max-w-sm mx-auto space-y-3">
              <span className="block text-xs font-semibold text-white">
                Deseja acelerar seu atendimento agora?
              </span>
              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Conversar no WhatsApp Oficial</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-[#94A3B8] hover:text-white transition-colors"
            >
              Fechar Janela
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
