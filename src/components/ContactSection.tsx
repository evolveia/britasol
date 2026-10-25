import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Clock,
  PhoneCall
} from 'lucide-react';
import { Language, TRANSLATIONS, BRITASOL_CONFIG } from '../data/britasolData';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Sync lead to backend
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome,
        whatsapp: telefone,
        email,
        objetivo: assunto || 'Contato via Site',
        origem: 'Seção Fale Conosco',
        mensagem,
      }),
    }).catch((err) => console.log('Lead sync error:', err));

    // 2. Open WhatsApp directly with the formatted message
    const cleanPhone = BRITASOL_CONFIG.whatsappNumber; // 5591996156672
    const whatsappText = encodeURIComponent(
      `*Contato Britasol - Fale Conosco*\n\n` +
      `👤 *Nome:* ${nome}\n` +
      `📱 *Telefone:* ${telefone}\n` +
      `✉️ *E-mail:* ${email || 'Não informado'}\n` +
      `📌 *Assunto:* ${assunto || 'Interesse Comercial'}\n\n` +
      `📝 *Mensagem:* ${mensagem || 'Gostaria de mais informações sobre o produto e cotações.'}`
    );

    window.open(`https://wa.me/${cleanPhone}?text=${whatsappText}`, '_blank');
    setEnviado(true);
  };

  return (
    <section id="contato" className="py-20 sm:py-24 bg-white text-slate-800 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-[#F95700]/30 text-xs font-bold text-[#F95700] uppercase tracking-wider mb-4 shadow-sm">
            <MessageSquare className="w-4 h-4 text-[#F95700]" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Form + Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto text-left">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
            {!enviado ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">
                    {t.contact.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome completo ou da empresa"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#F95700] focus:outline-none shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1.5">
                      {t.contact.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      placeholder="+55 (99) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#F95700] focus:outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1.5">
                      {t.contact.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@empresa.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#F95700] focus:outline-none shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">
                    {t.contact.subjectLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    placeholder="Ex: Cotação para 10km de estrada rural"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#F95700] focus:outline-none shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">
                    {t.contact.messageLabel} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Descreva detalhes da sua necessidade, extensão da via, localização ou solicitação técnica..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#F95700] focus:outline-none shadow-sm resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl btn-brita-orange text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg focus:outline-none"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.submitButton}</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  Sua mensagem será encaminhada com prioridade diretamente para o WhatsApp oficial <strong>{BRITASOL_CONFIG.whatsappFormatted}</strong>.
                </p>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A859] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 font-heading">
                  Mensagem Encaminhada!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Obrigado, <strong>{nome}</strong>. Sua conversa com nosso departamento técnico foi aberta no WhatsApp.
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-300 transition-colors"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Official Corporate Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#F95700] block mb-1">
                  Atendimento Comercial & Engenharia
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading">
                  Fale Conosco
                </h3>
              </div>

              <div className="space-y-5 text-xs sm:text-sm">
                
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F95700] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">E-mail:</span>
                    <a
                      href={`mailto:${BRITASOL_CONFIG.email}`}
                      className="font-bold text-white hover:text-[#F95700] transition-colors break-all"
                    >
                      {BRITASOL_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00A859] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Telefone / WhatsApp:</span>
                    <a
                      href={`https://wa.me/${BRITASOL_CONFIG.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white hover:text-[#00A859] transition-colors"
                    >
                      {BRITASOL_CONFIG.whatsappFormatted}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#0284C7] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Endereço:</span>
                    <span className="font-semibold text-slate-200">
                      {BRITASOL_CONFIG.address}
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${BRITASOL_CONFIG.whatsappNumber}?text=Ol%C3%A1%2C+gostaria+de+falar+com+o+atendimento+da+Britasol`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Chamar no WhatsApp Agora</span>
                </a>
              </div>
            </div>

            {/* Timetable / Response Guarantee Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex items-center gap-4 text-left shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#F95700] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-600">
                <strong className="text-slate-900 block text-xs">Atendimento em Horário Comercial</strong>
                Segunda a Sexta: 08:00 às 18:00. Mensagens enviadas fora do horário comercial são respondidas no primeiro horário útil.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
