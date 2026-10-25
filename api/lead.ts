import type { Request, Response } from 'express';

interface LeadData {
  id: string;
  nome: string;
  email: string;
  whatsapp: string;
  objetivo?: string;
  origem: string;
  createdAt: string;
}

export default function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  const { nome, email, whatsapp, objetivo, origem } = req.body || {};

  if (!nome || !whatsapp) {
    return res.status(400).json({ error: 'Nome e WhatsApp são obrigatórios.' });
  }

  const newLead: LeadData = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    nome,
    email: email || '',
    whatsapp,
    objetivo: objetivo || 'Geral',
    origem: origem || 'Landing Page',
    createdAt: new Date().toISOString(),
  };

  console.log('Novo lead cadastrado (Vercel):', newLead);

  return res.json({
    success: true,
    message: 'Lead cadastrado com sucesso! Nosso consultor entrará em contato em breve.',
    leadId: newLead.id,
  });
}
