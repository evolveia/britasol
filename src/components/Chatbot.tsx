import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
  PhoneCall,
  RefreshCw,
  Atom
} from 'lucide-react';
import { ChatMessage } from '../types';
import { BRITASOL_CONFIG, Language } from '../data/britasolData';

interface ChatbotProps {
  currentLang: Language;
}

type LeadStep = 'idle' | 'name' | 'phone' | 'project' | 'completed';

export const Chatbot: React.FC<ChatbotProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<LeadStep>('idle');
  
  const [leadData, setLeadData] = useState({
    nome: '',
    phone: '',
    project: '',
  });

  const welcomeText = {
    pt: 'Olá! Sou o Consultor Técnico Britasol ⚙️. Como posso ajudar?',
    en: 'Hello! I am the Britasol Technical Specialist ⚙️. How can I help you?',
    fr: 'Bonjour! Je suis le Conseiller Technique Britasol ⚙️. Comment puis-je vous aider?',
  }[currentLang];

  const quickOptions = {
    pt: [
      { icon: '🧪', label: 'Composição & Grafeno', query: 'Qual a composição técnica e vantagens do Britasol com grafeno?' },
      { icon: '🚜', label: 'Modo de Aplicação', query: 'Como funciona o passo a passo de aplicação com caminhão pipa?' },
      { icon: '🌍', label: 'Exportação', query: 'Como funciona a logística e suporte de exportação do Britasol para outros países?' },
    ],
    en: [
      { icon: '🧪', label: 'Composition & Graphene', query: 'What is the technical composition and benefits of Britasol with graphene?' },
      { icon: '🚜', label: 'Application Method', query: 'How does the application method with a water truck work?' },
      { icon: '🌍', label: 'Export', query: 'How does the international export logistics work?' },
    ],
    fr: [
      { icon: '🧪', label: 'Composition & Graphène', query: 'Quelle est la composition technique et les avantages du Britasol avec graphène?' },
      { icon: '🚜', label: 'Mode d’Application', query: 'Comment fonctionne la mise en œuvre avec camion-citerne?' },
      { icon: '🌍', label: 'Exportation', query: 'Comment s’organisent la logistique et l’exportation du Britasol?' },
    ],
  }[currentLang];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: welcomeText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Update welcome message when language changes if no interaction yet
  useEffect(() => {
    if (messages.length === 1 && messages[0].id === 'welcome-1') {
      setMessages([
        {
          id: 'welcome-1',
          sender: 'assistant',
          text: welcomeText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [currentLang, welcomeText]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const startLeadFlow = () => {
    setStep('name');
    const promptMsg: ChatMessage = {
      id: `lead_start_${Date.now()}`,
      sender: 'assistant',
      text: currentLang === 'en'
        ? 'Great! Let us connect you with an engineering consultant. First, please enter your Full Name:'
        : currentLang === 'fr'
        ? 'Parfait! Pour organiser un suivi technique, veuillez indiquer votre Nom Complet:'
        : 'Excelente! Vamos preparar sua cotação técnica. Para começar, por favor informe o seu Nome Completo:',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, promptMsg]);
  };

  const resetChat = () => {
    setStep('idle');
    setLeadData({ nome: '', phone: '', project: '' });
    setMessages([
      {
        id: `welcome_${Date.now()}`,
        sender: 'assistant',
        text: welcomeText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleSend = async (textToSend?: string) => {
    const messageText = (textToSend || input).trim();
    if (!messageText) return;

    const userMsg: ChatMessage = {
      id: `msg_user_${Date.now()}`,
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Lead step progression
    if (step === 'name') {
      const nome = messageText;
      setLeadData((prev) => ({ ...prev, nome }));
      setStep('phone');

      setTimeout(() => {
        const nextMsg: ChatMessage = {
          id: `step_phone_${Date.now()}`,
          sender: 'assistant',
          text: currentLang === 'en'
            ? `Thank you, **${nome}**! What is your WhatsApp / Phone number with country/area code?`
            : currentLang === 'fr'
            ? `Merci **${nome}**! Quel est votre numéro WhatsApp ou Téléphone avec l’indicatif?`
            : `Prazer, **${nome}**! Qual é o seu Telefone / WhatsApp com DDD para contato?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, nextMsg]);
      }, 400);
      return;
    }

    if (step === 'phone') {
      const phone = messageText;
      setLeadData((prev) => ({ ...prev, phone }));
      setStep('project');

      setTimeout(() => {
        const nextMsg: ChatMessage = {
          id: `step_proj_${Date.now()}`,
          sender: 'assistant',
          text: currentLang === 'en'
            ? `Got it! What is the project location, extension, or soil type? (e.g. 5km road in Brazil or mining access)`
            : currentLang === 'fr'
            ? `Parfait! Quel est le type de projet, sa localisation ou la longueur? (ex: 5km de piste ou accès minier)`
            : `Perfeito! Onde fica a sua obra e qual a extensão aproximada da via ou pátio? (ex: 8 km no MT, ou pátio industrial)`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, nextMsg]);
      }, 400);
      return;
    }

    if (step === 'project') {
      const project = messageText;
      const finalName = leadData.nome || 'Cliente';
      const finalPhone = leadData.phone || 'Informado';
      setLeadData((prev) => ({ ...prev, project }));
      setStep('completed');

      // Save lead to backend
      try {
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: finalName,
            whatsapp: finalPhone,
            objetivo: `Consultor Britasol AI (${project})`,
            origem: 'Chatbot Consultor Britasol',
          }),
        }).catch((e) => console.log('Lead sync error:', e));
      } catch (e) {
        console.log('Lead sync:', e);
      }

      setTimeout(() => {
        const completedMsg: ChatMessage = {
          id: `step_complete_${Date.now()}`,
          sender: 'assistant',
          text: currentLang === 'en'
            ? `🎉 **Inquiry recorded successfully!**\n\n👤 **Name:** ${finalName}\n📱 **WhatsApp:** ${finalPhone}\n📍 **Project:** ${project}\n\nClick the button below to forward your inquiry directly to our technical desk via WhatsApp!`
            : currentLang === 'fr'
            ? `🎉 **Informations enregistrées avec succès!**\n\n👤 **Nom:** ${finalName}\n📱 **WhatsApp:** ${finalPhone}\n📍 **Projet:** ${project}\n\nCliquez sur le bouton ci-dessous pour transmettre votre demande directement sur notre WhatsApp officiel!`
            : `🎉 **Informações registradas com sucesso!**\n\n👤 **Nome:** ${finalName}\n📱 **WhatsApp:** ${finalPhone}\n📍 **Projeto:** ${project}\n\nClique no botão abaixo para falar agora mesmo com o engenheiro de plantão pelo WhatsApp oficial **${BRITASOL_CONFIG.whatsappFormatted}**!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, completedMsg]);
      }, 400);
      return;
    }

    // Default AI Chat interaction via /api/chat
    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          language: currentLang,
          history: messages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: `msg_assistant_${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Como posso te ajudar com o estabilizante de solo Britasol?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Erro na conversa:', err);
      const fallbackMsg: ChatMessage = {
        id: `msg_assistant_${Date.now()}`,
        sender: 'assistant',
        text: 'O Britasol é um estabilizante polimérico líquido com grafeno que reduz até 90% da poeira e gera até 60% de economia vs asfalto. Para atendimento técnico imediato, clique no botão do WhatsApp!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenWhatsAppFinal = () => {
    const cleanPhone = BRITASOL_CONFIG.whatsappNumber;
    const msg = encodeURIComponent(
      `Olá! Sou *${leadData.nome || 'Cliente'}*, telefone *${leadData.phone || ''}*. Tenho interesse em uma cotação técnica do *Britasol* para o projeto *${leadData.project || 'Estrada / Pátio'}*.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-full bg-[#0B1320] border-2 border-[#F95700] text-[#F8FAFC] shadow-2xl hover:scale-105 transition-all focus:outline-none"
            aria-label="Abrir Consultor Britasol"
          >
            <div className="w-8 h-8 rounded-full bg-[#F95700] flex items-center justify-center text-white flex-shrink-0">
              <Atom className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </div>
            <div className="text-left hidden sm:block">
              <span className="block text-xs font-black font-heading uppercase text-[#F8FAFC] tracking-wider leading-none">
                Consultor Britasol
              </span>
              <span className="block text-[10px] text-[#0EA5E9] font-semibold leading-tight">
                Engenharia & Cotações
              </span>
            </div>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#F95700] rounded-full border-2 border-[#0B1320] animate-ping" />
          </button>
        )}
      </div>

      {/* Floating Chat Modal Panel: Perfectly Sized & Responsive, Never Cut Off */}
      {isOpen && (
        <div className="fixed bottom-2 right-2 sm:bottom-5 sm:right-5 w-[calc(100vw-16px)] sm:w-[380px] md:w-[400px] h-[520px] max-h-[calc(100dvh-24px)] z-50 flex flex-col bg-[#070B12] border border-[#F95700]/50 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header - Always Visible at the Top */}
          <div className="bg-[#0B1320] px-4 py-3 border-b border-white/10 flex items-center justify-between text-[#F8FAFC] flex-shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative w-9 h-9 rounded-full bg-[#070B12] border border-[#F95700] flex items-center justify-center text-[#F95700] flex-shrink-0">
                <Atom className="w-4 h-4" />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#00A859] border border-[#0B1320]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-black text-xs sm:text-sm text-[#F8FAFC] flex items-center gap-1.5 truncate">
                  <span className="truncate">Consultor Técnico Britasol</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#F95700] flex-shrink-0" />
                </h3>
                <span className="text-[10px] text-[#0EA5E9] uppercase tracking-wider font-semibold block truncate">
                  Online • Reabilitação Responsável
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
              <button
                onClick={resetChat}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-[#F95700] transition-colors focus:outline-none"
                title="Reiniciar conversa"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-[#F95700] text-slate-300 hover:text-white transition-colors focus:outline-none"
                aria-label="Fechar Chat"
                title="Fechar Chat [ESC]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area - Scrollable */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#070B12]/95 min-h-0">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#0B1320] border border-[#F95700]/30 flex items-center justify-center text-[#F95700] flex-shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed shadow-md ${
                    m.sender === 'user'
                      ? 'bg-[#F95700] text-white font-semibold rounded-br-none'
                      : 'bg-[#0B1320] text-[#E2E8F0] border border-white/10 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      m.sender === 'user' ? 'text-white/70' : 'text-[#94A3B8]'
                    }`}
                  >
                    {m.timestamp}
                  </span>
                </div>

                {m.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-[#F95700] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-[#0EA5E9] p-2 bg-[#0B1320] rounded-xl w-fit">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#F95700]" />
                <span>Consultor Técnico analisando dados...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Actions / WhatsApp Button when completed, OR Structured Visible Cards */}
          {step === 'completed' ? (
            <div className="p-2.5 bg-[#0B1320] border-t border-white/10 text-center flex-shrink-0">
              <button
                onClick={handleOpenWhatsAppFinal}
                className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:bg-[#20bd5a] transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>ENVIAR DIRETAMENTE NO WHATSAPP</span>
              </button>
            </div>
          ) : (
            <div className="p-2 bg-[#070B12] border-t border-white/10 flex-shrink-0">
              <div className="grid grid-cols-2 gap-1.5">
                {step === 'idle' && (
                  <button
                    onClick={startLeadFlow}
                    className="col-span-2 py-1.5 px-2.5 rounded-lg bg-gradient-to-r from-[#F95700] to-[#E04E00] text-white text-[11px] font-bold hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>📲</span>
                    <span>{currentLang === 'pt' ? 'Solicitar Cotação' : currentLang === 'en' ? 'Request Quote' : 'Demander un Devis'}</span>
                  </button>
                )}
                
                {/* Card 1: 🧪 Composição & Grafeno */}
                <button
                  onClick={() => handleSend(quickOptions[0].query)}
                  className="p-1.5 sm:p-2 rounded-lg bg-[#0B1320] border border-white/15 hover:border-[#F95700] text-[10px] sm:text-[11px] font-semibold text-[#E2E8F0] hover:text-[#F95700] transition-all flex items-center gap-1.5 text-left justify-start"
                >
                  <span className="text-xs">{quickOptions[0].icon}</span>
                  <span className="leading-tight truncate">{quickOptions[0].label}</span>
                </button>

                {/* Card 2: 🚜 Modo de Aplicação */}
                <button
                  onClick={() => handleSend(quickOptions[1].query)}
                  className="p-1.5 sm:p-2 rounded-lg bg-[#0B1320] border border-white/15 hover:border-[#F95700] text-[10px] sm:text-[11px] font-semibold text-[#E2E8F0] hover:text-[#F95700] transition-all flex items-center gap-1.5 text-left justify-start"
                >
                  <span className="text-xs">{quickOptions[1].icon}</span>
                  <span className="leading-tight truncate">{quickOptions[1].label}</span>
                </button>

                {/* Card 3: 🌍 Exportação (Col-span-2 for full visibility) */}
                <button
                  onClick={() => handleSend(quickOptions[2].query)}
                  className="col-span-2 p-1.5 sm:p-2 rounded-lg bg-[#0B1320] border border-white/15 hover:border-[#F95700] text-[10px] sm:text-[11px] font-semibold text-[#E2E8F0] hover:text-[#F95700] transition-all flex items-center gap-1.5 text-left justify-start"
                >
                  <span className="text-xs">{quickOptions[2].icon}</span>
                  <span className="leading-tight truncate">{quickOptions[2].label}</span>
                </button>
              </div>
            </div>
          )}

          {/* Input Bar */}
          <div className="p-2.5 bg-[#0B1320] border-t border-white/10 flex items-center gap-1.5 flex-shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={
                step === 'name'
                  ? 'Digite seu Nome Completo...'
                  : step === 'phone'
                  ? 'Digite seu WhatsApp com DDD...'
                  : step === 'project'
                  ? 'Digite detalhes da sua obra ou via...'
                  : 'Digite sua dúvida técnica ou de dosagem...'
              }
              className="flex-1 bg-[#070B12] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#F95700]"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F95700] text-white flex items-center justify-center hover:bg-[#e04e00] transition-colors disabled:opacity-40 focus:outline-none flex-shrink-0"
              aria-label="Enviar mensagem"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
