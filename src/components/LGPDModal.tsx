import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { BRITASOL_CONFIG } from '../data/britasolData';

interface LGPDModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LGPDModal: React.FC<LGPDModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0B1320] rounded-3xl border border-[#F95700]/40 p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl text-left">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#070B12] text-[#94A3B8] hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#070B12] border border-[#F95700] flex items-center justify-center text-[#F95700]">
            {isPrivacy ? <ShieldCheck className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-white">
              {isPrivacy ? 'Política de Privacidade e Proteção de Dados (LGPD)' : 'Termos de Uso e Condições'}
            </h3>
            <span className="text-xs text-[#F95700] font-mono">
              BRITASOL • Reabilitação Responsável
            </span>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-[#94A3B8] space-y-4 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                A <strong>BRITASOL</strong> está rigorosamente comprometida com a proteção dos dados de seus clientes, parceiros, órgãos públicos e empresas compradoras, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
              </p>
              <h4 className="font-bold text-white text-sm">1. Coleta de Dados Corporativos</h4>
              <p>
                Coletamos apenas dados fornecidos voluntariamente através dos nossos formulários de cotação e atendimento comercial (Nome, Empresa, E-mail, WhatsApp, Localização da Obra e Especificação Técnica da via).
              </p>
              <h4 className="font-bold text-white text-sm">2. Finalidade e Uso</h4>
              <p>
                Os dados são estritamente utilizados para elaboração de propostas comerciais de fornecimento de estabilizante de solo, estudos de dosagem de engenharia e acompanhamento pós-venda.
              </p>
              <h4 className="font-bold text-white text-sm">3. Segurança e Confidencialidade</h4>
              <p>
                Garantimos que dados técnicos de projetos rodoviários e informações comerciais nunca serão repassados a terceiros sem prévia autorização.
              </p>
            </>
          ) : (
            <>
              <p>
                Ao acessar e utilizar o portal corporativo da <strong>BRITASOL</strong>, você concorda com as diretrizes e termos de uso comercial e técnico vigentes.
              </p>
              <h4 className="font-bold text-white text-sm">1. Propriedade Intelectual</h4>
              <p>
                Marcas, logotipos, formulações com grafeno, imagens de produtos (galões de 20L e 50L) e cadernos técnicos são de propriedade exclusiva da BRITASOL.
              </p>
              <h4 className="font-bold text-white text-sm">2. Recomendações Técnicas</h4>
              <p>
                As taxas de dosagem apresentadas na calculadora são referenciais e devem ser validadas em ensaio preliminar de caracterização granulométrica do solo local por nossa equipe de engenharia.
              </p>
              <h4 className="font-bold text-white text-sm">3. Atendimento e Contato</h4>
              <p>
                Dúvidas podem ser sanadas diretamente com nosso departamento técnico e de exportação pelo e-mail <strong>contato@britasol.com.br</strong>.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl btn-brita-orange text-xs font-bold uppercase tracking-wider"
          >
            Entendido e Aceito
          </button>
        </div>

      </div>
    </div>
  );
};
