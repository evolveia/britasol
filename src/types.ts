export type Language = 'pt' | 'en' | 'fr';

export interface LeadFormData {
  nome: string;
  empresa?: string;
  email: string;
  whatsapp: string;
  paisOuEstado: string;
  tipoProjeto: string;
  volumeEstimado?: string;
  mensagem?: string;
  lgpdConsent: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface CalculatorState {
  widthMeters: number;
  lengthKm: number;
  trafficType: 'light' | 'medium' | 'heavy';
}

export interface CalculatorResult {
  productLiters: number;
  productCanisters20L: number;
  productCanisters50L: number;
  waterTruckVolumeM3: number;
  estimatedSavingsBRL: number;
  estimatedSavingsUSD: number;
  co2SavedTons: number;
}
