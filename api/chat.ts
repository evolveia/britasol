import type { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';

function getFallbackResponse(msg: string, lang: string): string {
  const lower = msg.toLowerCase();

  if (lang === 'en') {
    if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) {
      return 'Britasol provides 40% to 60% savings compared to traditional asphalt or gravel. Please use our Dosage Calculator or request a formal commercial quote.';
    }
    if (lower.includes('export') || lower.includes('congo') || lower.includes('drc')) {
      return 'We export Britasol to the Democratic Republic of the Congo and international markets in 20L, 50L drums or 1,000L IBC totes in ocean containers (FOB/CIF).';
    }
    return 'Britasol is a concentrated liquid polymer stabilizer with graphene that cuts dust by 90% and elevates road CBR up to 5x. Traffic opens in 24 hours.';
  }

  if (lang === 'fr') {
    if (lower.includes('prix') || lower.includes('coût') || lower.includes('devis')) {
      return 'Le Britasol génère 40% à 60% d’économies par rapport à l’asphalte traditionnel. Demandez une offre formelle via notre formulaire de devis.';
    }
    if (lower.includes('congo') || lower.includes('rdc') || lower.includes('export')) {
      return 'Nous exportons le Britasol en République Démocratique du Congo et sur les corridors miniers d’Afrique en bidons de 20L, 50L ou cuves IBC 1.000L.';
    }
    return 'Le Britasol est un stabilisateur liquide avec graphène réduisant la poussière de 90% et multipliant le CBR du sol par 5. Réouverture au trafic sous 24h.';
  }

  if (lower.includes('preço') || lower.includes('valor') || lower.includes('custo') || lower.includes('cotação')) {
    return 'O Britasol proporciona economia de 40% a 60% em relação à pavimentação asfáltica ou cascalhamento tradicional. Solicite uma cotação oficial no portal!';
  }
  if (lower.includes('export') || lower.includes('congo') || lower.includes('rdc')) {
    return 'A Britasol opera ativamente o corredor de exportação para a República Democrática do Congo e América Latina. Fornecemos em galões de 20L, 50L e IBCs de 1.000L (FOB/CIF).';
  }
  if (lower.includes('cbr') || lower.includes('argila') || lower.includes('dynacal') || lower.includes('grafeno')) {
    return 'O Britasol atua diretamente na estrutura coloidal das argilas (metodologia similar ao Dynacal), cimentando as partículas e bloqueando a sucção capilar. Seu diferencial é o Grafeno, que eleva o CBR para 60-90%+.';
  }

  return 'A BRITASOL é líder em estabilização polimérica de solo com grafeno. Reduz até 90% da poeira, elimina lama e atoleiros e dura até 5x mais. Como podemos ajudar?';
}

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  const { message, history, language } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Mensagem inválida.' });
  }

  const currentLang = language === 'en' ? 'en' : language === 'fr' ? 'fr' : 'pt';
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    const fallbackReply = getFallbackResponse(message, currentLang);
    return res.json({
      reply: fallbackReply,
      source: 'rule-based',
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const systemInstruction = `Você é o "Consultor Técnico Britasol", especialista em engenharia de solos e estabilização polimérica com grafeno da empresa BRITASOL (Reabilitação Responsável).
Responda no idioma solicitado: ${currentLang.toUpperCase()}.
Produtos: Galões de 20L e 50L com rótulo laranja premium de alta visibilidade.
Benefícios: Até 90% menos poeira, 40-60% economia, CBR aumentado em até 5x, bloqueia lama e chuvas, tráfego liberado em 24h, 100% ecológico.
Engenharia e Dynacal: Princípio de alteração coloidal das argilas, retenção de água nula, sinergia com hidróxido de cálcio para solos muito plásticos.
Exportação: Brasil e República Democrática do Congo (RDC).`;

    let promptText = message;
    if (history && Array.isArray(history) && history.length > 0) {
      const recentHistory = history.slice(-6);
      const formattedHistory = recentHistory
        .map((h: { sender: string; text: string }) => `${h.sender === 'user' ? 'Cliente' : 'Consultor'}: ${h.text}`)
        .join('\n');
      promptText = `Histórico:\n${formattedHistory}\n\nNova pergunta: ${message}\n\nConsultor:`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: promptText,
      config: {
        systemInstruction,
        temperature: 0.6,
      },
    });

    const reply = response.text || 'Como posso ajudar com o Britasol?';

    return res.json({
      reply,
      source: 'gemini',
    });
  } catch (error) {
    console.error('Erro na API Gemini:', error);
    const fallbackReply = getFallbackResponse(message, currentLang);
    return res.json({
      reply: fallbackReply,
      source: 'rule-based-fallback',
    });
  }
}
