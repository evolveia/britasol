import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory leads storage for demo & verification
interface LeadData {
  id: string;
  nome: string;
  empresa?: string;
  email: string;
  whatsapp: string;
  objetivo?: string;
  origem: string;
  mensagem?: string;
  createdAt: string;
}

const storedLeads: LeadData[] = [];

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "BRITASOL Corporate Server" });
});

// Lead capture endpoint
app.post("/api/lead", (req, res) => {
  const { nome, empresa, email, whatsapp, objetivo, origem, mensagem } = req.body;

  if (!nome || !whatsapp) {
    return res.status(400).json({ error: "Nome e WhatsApp são obrigatórios." });
  }

  const newLead: LeadData = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    nome,
    empresa: empresa || "",
    email: email || "",
    whatsapp,
    objetivo: objetivo || "Cotação Britasol Geral",
    origem: origem || "Portal Britasol",
    mensagem: mensagem || "",
    createdAt: new Date().toISOString(),
  };

  storedLeads.push(newLead);
  console.log("Novo lead corporativo cadastrado na BRITASOL:", newLead);

  return res.json({
    success: true,
    message: "Solicitação recebida com sucesso! Nosso departamento técnico entrará em contato.",
    leadId: newLead.id,
  });
});

// AI Chatbot endpoint via Gemini API
app.post("/api/chat", async (req, res) => {
  const { message, history, language } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Mensagem inválida." });
  }

  const currentLang = language === "en" ? "en" : language === "fr" ? "fr" : "pt";
  const apiKey = process.env.GEMINI_API_KEY;

  // Fallback response if Gemini key is missing or default
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    const fallbackReply = getFallbackResponse(message, currentLang);
    return res.json({
      reply: fallbackReply,
      source: "rule-based",
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const systemInstruction = `Você é o "Consultor Técnico Britasol", especialista em engenharia de solos, estabilização polimérica e pavimentação sustentável da empresa BRITASOL (Reabilitação Responsável).
Seu tom de voz é profissional, técnico, cortês, seguro e focado em apresentar os benefícios de engenharia e economia.
Você deve responder no mesmo idioma do usuário (Português, Inglês ou Francês). Idioma detectado da interface: ${currentLang.toUpperCase()}.

Conhecimento Base BRITASOL:
1. O QUE É: Solução polimérica líquida inovadora com emulsão de polímeros de alta performance e reforço nanomecânico de Grafeno, tensoativos dispersantes, alcalinizantes, espessantes e biocidas protetivos em veículo aquoso ecológico.
2. FORMATOS: Disponível em galões azuis com rótulo laranja premium de 20 Litros e 50 Litros, e tambores/IBC 1.000L para grandes obras e exportação.
3. BENEFÍCIOS COMPROVADOS:
   - Elimina até 90% da poeira no ar.
   - Reduz em até 60% os custos em comparação com asfalto ou cascalhamento tradicional.
   - Aumenta a durabilidade da via em até 5x e eleva o CBR (Índice de Suporte Califórnia) do solo natural.
   - Libera tráfego leve em poucas horas e tráfego pesado em 24h.
   - 100% ecológico, atóxico, não contamina lençol freático ou lavouras.
4. ONDE APLICAR: Estradas rurais e vicinais, acessos de fazendas e agronegócio, mineração e carretas de 40+ toneladas, pátios industriais e de grãos, taludes contra erosão, estacionamentos de terra e desvios de tráfego.
5. MODO DE APLICAÇÃO:
   Passo 1: Escarificar e nivelar o solo com motoniveladora.
   Passo 2: Diluir o Britasol no tanque de água de compactação do caminhão pipa.
   Passo 3: Pulverizar uniformemente com barra espargidora.
   Passo 4: Homogeneizar e compactar com rolo compactador (pé-de-carneiro e liso).
   Passo 5: Liberação do tráfego após secagem (24 horas).
6. SINERGIA TÉCNICA E ENGENHARIA (Metodologia Dynacal): Atua na estrutura coloidal das argilas e finos do solo, neutralizando a sucção capilar de água e criando uma barreira insolúvel cimentada. Em solos altamente plásticos, atua em sinergia com hidróxido de cálcio (cal).
7. MERCADO E EXPORTAÇÃO: Fornecimento para o Brasil e projetos internacionais de grande escala, especialmente na República Democrática do Congo (RDC / África), com remessas marítimas conteinerizadas (FOB/CIF).

Mantenha as respostas concisas (2 a 4 parágrafos), fornecendo dados técnicos sólidos e sempre convidando a solicitar uma cotação oficial ou falar com um engenheiro no WhatsApp oficial (+55 91 99615-6672).`;

    let promptText = message;
    if (history && Array.isArray(history) && history.length > 0) {
      const recentHistory = history.slice(-6);
      const formattedHistory = recentHistory
        .map((h: { sender: string; text: string }) => `${h.sender === "user" ? "Cliente" : "Consultor"}: ${h.text}`)
        .join("\n");
      promptText = `Histórico:\n${formattedHistory}\n\nNova pergunta: ${message}\n\nConsultor Técnico Britasol:`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: promptText,
      config: {
        systemInstruction,
        temperature: 0.6,
      },
    });

    const reply = response.text || "Como posso ajudar com o dimensionamento ou cotação do Britasol?";

    return res.json({
      reply,
      source: "gemini",
    });
  } catch (error) {
    console.error("Erro na API Gemini no servidor:", error);
    const fallbackReply = getFallbackResponse(message, currentLang);
    return res.json({
      reply: fallbackReply,
      source: "rule-based-fallback",
    });
  }
});

function getFallbackResponse(msg: string, lang: string): string {
  const lower = msg.toLowerCase();

  if (lang === "en") {
    if (lower.includes("price") || lower.includes("cost") || lower.includes("quote")) {
      return "Britasol provides 40% to 60% savings compared to traditional asphalt or gravel. Please use our Dosage Calculator or click 'Request a Quote' for a formal commercial offer.";
    }
    if (lower.includes("export") || lower.includes("congo") || lower.includes("drc")) {
      return "We actively export Britasol to the Democratic Republic of the Congo and international markets in 20L, 50L drums or 1,000L IBC totes in maritime containers (FOB/CIF). Contact export@britasol.com.br.";
    }
    return "Britasol is a concentrated liquid polymer stabilizer with graphene that cuts dust by 90% and elevates road CBR up to 5x. Traffic opens in 24 hours. How can we assist your project?";
  }

  if (lang === "fr") {
    if (lower.includes("prix") || lower.includes("coût") || lower.includes("devis")) {
      return "Le Britasol génère 40% à 60% d’économies par rapport à l’asphalte traditionnel. Utilisez notre Calculateur ou cliquez sur 'Demander un Devis' pour une proposition formelle.";
    }
    if (lower.includes("congo") || lower.includes("rdc") || lower.includes("export")) {
      return "Nous exportons régulièrement le Britasol en République Démocratique du Congo et sur les corridors miniers d’Afrique en bidons de 20L, 50L ou cuves IBC 1.000L. Contactez export@britasol.com.br.";
    }
    return "Le Britasol est un stabilisateur liquide avec graphène réduisant la poussière de 90% et multipliant le CBR du sol par 5. Réouverture au trafic lourd sous 24h. Comment pouvons-nous vous aider?";
  }

  // Portuguese default
  if (lower.includes("preço") || lower.includes("valor") || lower.includes("custo") || lower.includes("cotação")) {
    return "O Britasol proporciona economia de 40% a 60% em relação à pavimentação asfáltica ou cascalhamento tradicional. Para receber a tabela comercial e um estudo de dosagem para sua via, solicite uma cotação no botão acima ou fale no WhatsApp!";
  }
  if (lower.includes("export") || lower.includes("congo") || lower.includes("rdc")) {
    return "A Britasol opera ativamente o corredor de exportação para a República Democrática do Congo e América Latina. Fornecemos em galões de 20L, 50L e IBCs de 1.000L com certificação para transporte marítimo (FOB/CIF). E-mail direto: export@britasol.com.br.";
  }
  if (lower.includes("aplicação") || lower.includes("como aplicar") || lower.includes("pipa")) {
    return "A aplicação é simples e rápida: 1) Escarificar e nivelar a pista; 2) Diluir Britasol no caminhão-pipa; 3) Pulverizar a calda sobre o solo solto; 4) Homogeneizar e compactar com rolo compactador; 5) Liberação do tráfego em 24h!";
  }
  if (lower.includes("cbr") || lower.includes("argila") || lower.includes("dynacal") || lower.includes("grafeno")) {
    return "O Britasol atua diretamente na estrutura coloidal das argilas (princípio similar a tecnologias geotécnicas consolidadas como o Dynacal), cimentando as partículas e bloqueando a sucção capilar. O diferencial do Britasol é o Grafeno, que confere resistência nanomecânica, elevando o CBR de 4-8% para até 60-90%+.";
  }

  return "A BRITASOL é líder em estabilização polimérica de solo com grafeno. Reduz até 90% da poeira, elimina lama e atoleiros e dura até 5x mais. Gostaria de simular a dosagem para sua estrada ou falar no WhatsApp oficial?";
}

// Start Express server and attach Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(` Servidor BRITASOL ativo em http://localhost:${PORT}`);
  });
}

startServer();
