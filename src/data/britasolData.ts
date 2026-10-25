export type Language = 'pt' | 'en' | 'fr';

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  image: string;
  badge: string;
  description: string;
  idealFor: string[];
  specs: {
    packaging: string;
    density: string;
    ph: string;
    dilution: string;
    appearance: string;
    solubility: string;
  };
  features: string[];
}

export interface ApplicationStep {
  step: string;
  title: string;
  description: string;
  machinery: string;
  duration: string;
}

export interface MarketSegment {
  id: string;
  title: string;
  description: string;
  iconName: string;
  cbrGain: string;
  highlight: string;
  image: string;
  productUsage: string;
}

export interface TechnicalFeature {
  metric: string;
  traditional: string;
  britasol: string;
  benefit: string;
}

export interface TranslationData {
  nav: {
    about: string;
    products: string;
    beforeAfter: string;
    applications: string;
    method: string;
    engineering: string;
    calculator: string;
    export: string;
    contact: string;
    quoteButton: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    footnote: string;
    stats: {
      dustReduction: string;
      dustLabel: string;
      costSavings: string;
      costLabel: string;
      durability: string;
      durabilityLabel: string;
      trafficRelease: string;
      trafficLabel: string;
      ecoFriendly: string;
      ecoLabel: string;
    };
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    valuesTitle: string;
    valuesText: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  catalog: {
    badge: string;
    title: string;
    subtitle: string;
    compositionTitle: string;
    compositionSubtitle: string;
    compositionItems: {
      title: string;
      desc: string;
    }[];
    viewSpecs: string;
    requestQuote: string;
    downloadCatalog: string;
  };
  beforeAfter: {
    badge: string;
    title: string;
    subtitle: string;
    dragHint: string;
    beforeLabel: string;
    afterLabel: string;
    beforePoints: string[];
    afterPoints: string[];
    summary: string;
  };
  applications: {
    badge: string;
    title: string;
    subtitle: string;
  };
  method: {
    badge: string;
    title: string;
    subtitle: string;
    steps: ApplicationStep[];
  };
  engineering: {
    badge: string;
    title: string;
    subtitle: string;
    dynacalSynergyTitle: string;
    dynacalSynergyText: string;
    cbrTitle: string;
    cbrText: string;
    reagentTitle: string;
    reagentText: string;
    tableHeaders: {
      parameter: string;
      traditional: string;
      britasol: string;
      gain: string;
    };
    comparison: TechnicalFeature[];
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    roadWidth: string;
    roadLength: string;
    trafficType: string;
    trafficOptions: {
      light: string;
      medium: string;
      heavy: string;
    };
    results: {
      estimatedProduct: string;
      estimatedWater: string;
      estimatedSavings: string;
      co2Reduction: string;
      timeToTraffic: string;
    };
    simulateCta: string;
  };
  export: {
    badge: string;
    title: string;
    subtitle: string;
    countries: string;
    card1Title: string;
    card1Text: string;
    card2Title: string;
    card2Text: string;
    card3Title: string;
    card3Text: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitButton: string;
    infoTitle: string;
    addressLabel: string;
    emailContactLabel: string;
    phoneContactLabel: string;
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    whatsappButton: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    technicalDocs: string;
    contactUs: string;
    rights: string;
  };
}

export const BRITASOL_CONFIG = {
  companyName: 'BRITASOL',
  slogan: 'Reabilitação Responsável',
  phone: '+55 (91) 99615-6672',
  whatsappNumber: '5591996156672',
  whatsappFormatted: '+55 (91) 99615-6672',
  email: 'evolve.eco.br@gmail.com',
  secondaryEmail: 'contato@britasol.com.br',
  website: 'www.britasol.com.br',
  address: 'Avenida Governador Jose Malcher 153 , Belem - PA, Brasil',
};

export const HERO_SLIDES = [
  {
    image: 'https://dynacal.com.br/wp-content/uploads/2026/04/bg-home-novo-webp.webp',
    title: 'Pavimentação Sustentável com Estabilizante Polimérico',
    tag: 'TECNOLOGIA EM ESTABILIZAÇÃO • BRASIL & EXPORTAÇÃO',
  },
  {
    image: 'https://dynacal.com.br/wp-content/uploads/2026/04/bg-home-2-webp.webp',
    title: 'Superfícies Firmes e Duráveis para Tráfego Pesado',
    tag: 'ALTA COESÃO & RESISTÊNCIA MECÂNICA',
  },
  {
    image: 'https://dynacal.com.br/wp-content/uploads/2026/04/destaque-222.jpg',
    title: 'Soluções Avançadas para Mineração e Agronegócio',
    tag: 'SUPRESSÃO DE POEIRA & ZERO LAMA',
  },
  {
    image: 'https://dynacal.com.br/wp-content/uploads/2026/04/pavimentacao.jpg',
    title: 'Economia de até 60% vs Pavimentação Tradicional',
    tag: 'REABILITAÇÃO RESPONSÁVEL',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'britasol-20l',
    name: 'BritaSol 20 Litros',
    subtitle: 'Estabilizante Polimérico de Solo com Grafeno',
    capacity: '20 Litros',
    image: '/assets/aistudio/04_d8cac31c.jpeg',
    badge: 'Formato Rápido & Manutenção',
    description:
      'Formulação polimérica líquida com grafeno e tensoativos dispersantes de alta viscosidade, pronta para diluição em caminhão-pipa. Embalagem ergonômica de 20L com rótulo laranja premium de alta visibilidade.',
    idealFor: [
      'Acessos de fazendas e propriedades rurais',
      'Estradas vicinais e desvios de obras',
      'Pátios de armazenagem e pequenos estacionamentos',
      'Reparos rápidos e contenção imediata de erosão',
    ],
    specs: {
      packaging: 'Galão PEAD de 20 Litros com alça reforçada',
      density: '1,02 a 1,06 g/cm³',
      ph: '8,0 a 10,5 (levemente alcalino)',
      dilution: '1:50 até 1:200 dependendo da fração argilosa',
      appearance: 'Emulsão fluida homogênea de fácil dispersão',
      solubility: '100% dispersível em água corrente',
    },
    features: [
      'Contém Grafeno para reforço de resistência nanomecânica',
      'Biocidas ecológicos para preservação de estoque',
      'Não inflamável e atóxico (seguro para o operador)',
      'Dispensa aquecimento prévio ou solventes voláteis',
    ],
  },
  {
    id: 'britasol-50l',
    name: 'BritaSol 50 Litros',
    subtitle: 'Estabilizante Polimérico Industrial & Agro-Infra',
    capacity: '50 Litros',
    image: '/assets/aistudio/05_4c438007.jpeg',
    badge: 'Industrial & Grandes Obras',
    description:
      'Volume de alto rendimento especialmente dimensionado para frentes de pavimentação contínua, grandes usinas, cooperativas agrícolas, frotas pesadas e mineradoras. Reduz fretes e agiliza a preparação de tanques de grande porte.',
    idealFor: [
      'Rodovias estaduais e vicinais de tráfego pesado',
      'Corredores de escoamento de grãos e cana-de-açúcar',
      'Pátios de mineração e circulação de caminhões fora-de-estrada',
      'Plataformas logísticas e aeródromos não pavimentados',
    ],
    specs: {
      packaging: 'Bombona industrial PEAD de 50 Litros (alta densidade)',
      density: '1,03 a 1,07 g/cm³',
      ph: '8,5 a 10,8',
      dilution: 'Calculada via ensaio de solo (1L trata até 20 a 50m²)',
      appearance: 'Líquido de alta tecnologia com matriz polimérica ligante',
      solubility: 'Totalmente solúvel em água de hidratação do solo',
    },
    features: [
      'Maior rendimento volumétrico por quilômetro tratado',
      'Reforço de coesão das partículas finas e argilas do solo',
      'Suporta tráfego pesado de 40+ toneladas após cura de 24h',
      'Resistente a ciclos severos de chuva e estiagem',
    ],
  },
];

export const TRANSLATIONS: Record<Language, TranslationData> = {
  pt: {
    nav: {
      about: 'Quem Somos',
      products: 'Produtos',
      beforeAfter: 'Antes e Depois',
      applications: 'Onde Aplicar',
      method: 'Modo de Aplicação',
      engineering: 'Dados Técnicos',
      calculator: 'Calculadora',
      export: 'Exportação',
      contact: 'Contato',
      quoteButton: 'Cotação',
    },
    hero: {
      badge: '📍 TECNOLOGIA EM ESTABILIZAÇÃO • BRASIL & EXPORTAÇÃO',
      titleStart: 'Soluções Poliméricas para',
      titleHighlight: 'Estabilização de Solo',
      titleEnd: 'com Grafeno.',
      subtitle:
        'Desenvolvido com polímeros em emulsão e reforço nanomecânico de grafeno. Elimina até 90% da poeira, bloqueia a lama e reduz em até 60% os custos de pavimentação para o Mercado Brasileiro e Exportação.',
      ctaPrimary: 'Ver Produtos',
      ctaSecondary: 'Cotação',
      footnote: '100% Ecológico • Economia de 40 a 60% • Liberação em 24h',
      stats: {
        dustReduction: 'Até 90%',
        dustLabel: 'Menos Poeira no Ambiente',
        costSavings: '40% a 60%',
        costLabel: 'Economia vs Pavimentação Tradicional',
        durability: 'Até 5x',
        durabilityLabel: 'Mais Durabilidade do Solo',
        trafficRelease: '24 Horas',
        trafficLabel: 'Liberação Rápida do Tráfego',
        ecoFriendly: '100% Ecológico',
        ecoLabel: 'Não Contamina Lençol Freático',
      },
    },
    about: {
      badge: 'Perfil Institucional Britasol',
      title: 'QUEM SOMOS: Engenharia e Inovação para Reabilitação Responsável',
      subtitle:
        'Nossa missão é transformar solos instáveis e vias precárias em superfícies resistentes, gerando economia para obras públicas e privadas com proteção ao meio ambiente.',
      p1: 'A BRITASOL é uma empresa especializada em Soluções Poliméricas para Estabilização de Solo. Atuamos com tecnologia inovadora para transformar estradas de terra, solos instáveis e áreas degradadas em superfícies firmes, duráveis e sustentáveis.',
      p2: 'Nossa missão é oferecer reabilitação responsável: mais econômica, mais rápida e com menor impacto ambiental que os métodos tradicionais de cascalhamento ou asfalto.',
      missionTitle: 'Missão',
      missionText: 'Fornecer soluções poliméricas sustentáveis e economicamente inteligentes que revolucionem a infraestrutura viária e rural.',
      visionTitle: 'Visão',
      visionText: 'Ser a principal referência internacional em estabilização de solo sustentável para o Brasil e mercado global.',
      valuesTitle: 'Valores',
      valuesText: 'Reabilitação responsável, integridade técnica, respeito ao meio ambiente e compromisso socioeconômico.',
      pillars: [
        {
          title: 'Economia Real',
          desc: 'Economize até 60% comparado a métodos convencionais, reduzindo manutenção periódica e custos de maquinário.',
        },
        {
          title: 'Alta Tecnologia com Grafeno',
          desc: 'Nanotecnologia que sela microporos, conferindo altíssima resistência mecânica e impermeabilização contra chuvas.',
        },
        {
          title: 'Sustentabilidade Comprovada',
          desc: 'Produto atóxico e biodegradável, sem derivados pesados de petróleo que agridem o solo e a água.',
        },
        {
          title: 'Atendimento Global',
          desc: 'Logística ágil e preparada para atender projetos no Brasil e em qualquer país com remessas marítimas seguras.',
        },
      ],
    },
    catalog: {
      badge: 'Catálogo de Produtos Britasol',
      title: 'BRITASOL - ESTABILIZANTE DE SOLO EM GALÕES DE 20L E 50L',
      subtitle:
        'Líquido concentrado, pronto para diluição, formulado com polímeros em emulsão, grafeno, tensoativos dispersantes e agentes biocidas.',
      compositionTitle: 'Composição Técnica Avançada',
      compositionSubtitle: 'Fórmula proprietária rigorosamente controlada para máxima eficiência mecânica:',
      compositionItems: [
        {
          title: 'Polímeros em Emulsão de Alta Performance',
          desc: 'Criam uma matriz ligante elástica que cimenta as partículas finas do solo, impedindo a desagregação.',
        },
        {
          title: 'Grafeno para Reforço Estrutural',
          desc: 'Aumenta exponencialmente a resistência à tração e compressão, conferindo durabilidade prolongada à pista.',
        },
        {
          title: 'Tensoativos Dispersantes',
          desc: 'Garantem penetração capilar profunda e distribuição homogênea do produto na umidade de compactação.',
        },
        {
          title: 'Alcalinizantes e Espessantes',
          desc: 'Equilibram a reatividade química do solo, catalisando ligações estáveis com minerais argilosos.',
        },
        {
          title: 'Biocidas de Proteção',
          desc: 'Garantem longa vida útil de armazenamento sem degradação bacteriana das cadeias poliméricas.',
        },
        {
          title: 'Veículo Aquoso Ecológico',
          desc: 'Zero solventes agressivos. Solúvel em água doce para fácil manuseio com caminhão-pipa.',
        },
      ],
      viewSpecs: 'Ver Especificações Técnicas',
      requestQuote: 'Solicitar Orçamento',
      downloadCatalog: 'Baixar Catálogo Técnico (PDF)',
    },
    beforeAfter: {
      badge: 'Resultados Comprovados em Campo',
      title: 'O PODER DA ESTABILIZAÇÃO: ANTES vs DEPOIS',
      subtitle:
        'Compare a realidade de estradas não tratadas com a transformação duradoura proporcionada pelo Britasol.',
      dragHint: 'Arraste a linha central ou alterne os modos para ver o Antes e o Depois',
      beforeLabel: 'O ANTES (Solo Instável)',
      afterLabel: 'DEPOIS (Com Britasol)',
      beforePoints: [
        'Estrada irregular com buracos e erosão severa',
        'Lama e atoleiros intransitáveis em períodos de chuva',
        'Nuvens espessas de poeira na estiagem',
        'Alto custo de manutenção com patrolas frequentes',
        'Desgaste acelerado de frotas, caminhões e tratores',
      ],
      afterPoints: [
        'Superfície lisa, firme, compactada e estável',
        'Livre de poeira, lamaçal e formação de trilhos de roda',
        'Impermeabilização superior que escoa a água da chuva',
        'Resistência duradoura que suporta tráfego pesado',
        'Tráfego seguro em qualquer estação do ano',
      ],
      summary: 'RESULTADO: Superfície estabilizada, firme e sem poeira • + Resistência • - Erosão • - Pó',
    },
    applications: {
      badge: 'Versatilidade de Aplicação',
      title: 'ONDE APLICAR O BRITASOL',
      subtitle:
        'Soluções de estabilização formuladas com Britasol 20L e 50L com reforço de grafeno para todas as frentes de engenharia viária e industrial.',
    },
    method: {
      badge: 'Execução Rápida e Eficiente',
      title: 'MODO DE APLICAÇÃO PASSO A PASSO',
      subtitle:
        'Processo simples executado com maquinário padrão de terraplanagem, sem necessidade de usinas de asfalto caras.',
      steps: [
        {
          step: '01',
          title: 'Preparação e Nivelamento',
          description:
            'Escarificar a camada superficial do solo (10 a 15 cm) com motoniveladora (patrol) e grade de disco para quebrar torrões.',
          machinery: 'Motoniveladora / Grade',
          duration: 'Etapa inicial',
        },
        {
          step: '02',
          title: 'Diluição Técnica',
          description:
            'Adicionar a dosagem recomendada de Britasol no tanque do caminhão-pipa preenchido com água de compactação.',
          machinery: 'Caminhão-Pipa com motobomba',
          duration: '15 a 20 minutos',
        },
        {
          step: '03',
          title: 'Aplicação Homogênea',
          description:
            'Pulverizar a calda sobre o solo solto em passadas uniformes até atingir a umidade ótima de compactação.',
          machinery: 'Barra espargidora do pipa',
          duration: 'Aplicação contínua',
        },
        {
          step: '04',
          title: 'Homogeneização & Compactação',
          description:
            'Misturar levemente e compactar com rolo compactador pé-de-carneiro e acabamento com rolo liso/pneumático.',
          machinery: 'Rolo compactador vibratório',
          duration: 'No mesmo dia',
        },
        {
          step: '05',
          title: 'Cura e Liberação de Tráfego',
          description:
            'Aguardar o início da cura das cadeias poliméricas. A via já suporta tráfego leve em poucas horas e tráfego pesado em 24h.',
          machinery: 'Sem maquinário',
          duration: 'Liberado em 24 horas',
        },
      ],
    },
    engineering: {
      badge: 'Fundamentos Técnicos & Geotécnicos',
      title: 'DADOS TÉCNICOS: CBR, COESÃO E IMPERMEABILIZAÇÃO',
      subtitle:
        'Fundamentos inspirados nas melhores práticas de engenharia rodoviária (como a metodologia técnica de aditivos alcalinos Dynacal) para elevar a capacidade de suporte do solo local.',
      dynacalSynergyTitle: 'Ação Físico-Química sobre Argilas e Partículas Finas',
      dynacalSynergyText:
        'Assim como os princípios consolidados em soluções de engenharia geotécnica avançada (como o Dynacal), o Britasol atua diretamente na estrutura coloidal das partículas de argila do solo local. Ele neutraliza a capacidade de retenção de água livre, forma um gel polimérico insolúvel entre os grãos e impede que a umidade cause perda de sustentação.',
      cbrTitle: 'Elevação Exponencial do CBR (California Bearing Ratio)',
      cbrText:
        'Ensaios comprovam que solos com CBR inicial frágil (de 4% a 10%, típicos de estradas de terra) atingem índices superiores a 40% a 90% após o tratamento e compactação com a matriz polimérica e grafeno do Britasol, permitindo suportar carretas bi-trem e maquinário pesado.',
      reagentTitle: 'Ação Sinérgica com Reagentes Minerais',
      reagentText:
        'Em solos com elevado índice de plasticidade (IP) ou alta umidade, o Britasol pode trabalhar em sinergia com hidróxido de cálcio (cal) ou sulfato de alumínio, acelerando as reações pozolânicas de cimentação e impermeabilização profunda.',
      tableHeaders: {
        parameter: 'Parâmetro Técnico',
        traditional: 'Pavimentação / Cascalho Convencional',
        britasol: 'Solo Estabilizado com Britasol',
        gain: 'Vantagem Britasol',
      },
      comparison: [
        {
          metric: 'Emissão de Poeira (PM10 / PM2.5)',
          traditional: 'Nuvens densas contínuas durante estiagem',
          britasol: 'Supressão de até 90% das partículas em suspensão',
          benefit: 'Saúde comunitária e visibilidade total',
        },
        {
          metric: 'Comportamento na Chuva (Lama)',
          traditional: 'Perda de suporte, atoleiros e sulcos profundos',
          britasol: 'Camada selada impermeável; água escorre sem penetrar',
          benefit: 'Trafegabilidade 365 dias por ano',
        },
        {
          metric: 'Custo de Implantação',
          traditional: 'R$ 1,5M a R$ 3M por km (asfalto) + jazidas caras',
          britasol: 'Aproveita 100% do solo local com aditivação líquida',
          benefit: 'Economia de 40% a 60% por km',
        },
        {
          metric: 'Necessidade de Cascalho / Brita',
          traditional: 'Centenas de caminhões de pedra de jazidas distantes',
          britasol: 'Elimina ou reduz em até 80% o uso de agregados',
          benefit: 'Zero degradação de pedreiras e menos frete',
        },
        {
          metric: 'Tempo de Liberação de Pista',
          traditional: 'Semanas de interdição e maquinário pesado contínuo',
          britasol: 'Tráfego leve em poucas horas; total em 24 horas',
          benefit: 'Mínimo transtorno à comunidade',
        },
      ],
    },
    calculator: {
      badge: 'Simulador Online',
      title: 'CALCULADORA DE DOSAGEM E ESTIMATIVA DE ECONOMIA',
      subtitle:
        'Insira as dimensões da sua via ou pátio para estimar a quantidade necessária de Britasol e a economia esperada.',
      roadWidth: 'Largura da Pista (metros)',
      roadLength: 'Extensão / Comprimento (km)',
      trafficType: 'Intensidade de Tráfego',
      trafficOptions: {
        light: 'Leve (Carros de passeio e utilitários)',
        medium: 'Médio / Agrícola (Tratores, colheitadeiras e caminhões)',
        heavy: 'Pesado / Mineração (Carretas bitrem e caminhões pesados)',
      },
      results: {
        estimatedProduct: 'Volume Estimado de Britasol',
        estimatedWater: 'Volume de Água Estimado',
        estimatedSavings: 'Economia Estimada vs Pavimento Convencional',
        co2Reduction: 'Redução de Emissões de CO2 (Logística de Brita)',
        timeToTraffic: 'Prazo para Liberação de Tráfego',
      },
      simulateCta: 'Solicitar Proposta Formal com Estes Parâmetros',
    },
    export: {
      badge: 'Comércio Exterior & Logística Global',
      title: 'EXPORTAÇÃO: BRASIL E MERCADO INTERNACIONAL',
      subtitle:
        'Levamos a tecnologia brasileira de estabilização de solo para qualquer país das Américas, África, Europa e demais continentes com logística marítima certificada.',
      countries: 'América Latina • África • Europa • Oriente Médio • Ásia',
      card1Title: 'Atendimento Global para Qualquer País',
      card1Text:
        'Estrutura ágil para exportação direta para governos, concessionárias e empreiteiras em qualquer continente, com assessoria documental completa e conformidade alfandegária.',
      card2Title: 'Embalagens e Unitização para Container Marítimo',
      card2Text:
        'Fornecimento em galões de 20L, 50L ou IBCs de 1.000L paletizados e lacrados com certificação para transporte marítimo internacional (Incoterms FOB portos brasileiros ou CIF portos globais).',
      card3Title: 'Assistência Técnica de Engenharia em Solo Local',
      card3Text:
        'Equipe técnica com protocolos internacionais de amostragem de solo, formulação de caldas sob medida e treinamento de operadores locais para execução perfeita da obra.',
    },
    contact: {
      badge: 'Fale Conosco',
      title: 'ENTRE EM CONTATO COM A BRITASOL',
      subtitle:
        'Preencha o formulário abaixo para enviar sua solicitação diretamente ao nosso WhatsApp ou utilize nossos canais oficiais de atendimento.',
      nameLabel: 'Nome Completo',
      phoneLabel: 'Telefone / WhatsApp',
      emailLabel: 'E-mail Corporativo',
      subjectLabel: 'Assunto',
      messageLabel: 'Mensagem / Detalhes do Projeto',
      submitButton: 'Enviar Mensagem no WhatsApp',
      infoTitle: 'Canais Oficiais de Atendimento',
      addressLabel: 'Endereço',
      emailContactLabel: 'E-mail',
      phoneContactLabel: 'Telefone / WhatsApp',
    },
    cta: {
      badge: 'Pronto para Transformar suas Estradas?',
      title: 'REABILITAÇÃO RESPONSÁVEL É CONSTRUIR MAIS GASTANDO MENOS',
      subtitle:
        'Fale com nossos consultores técnicos agora. Atendimento ágil para prefeituras, concessionárias, usinas, fazendas e obras internacionais.',
      button: 'Solicitar Cotação Oficial',
      whatsappButton: 'Falar no WhatsApp Comercial',
    },
    footer: {
      tagline:
        'A BRITASOL é líder em Soluções Poliméricas para Estabilização de Solo. Transformando estradas de terra em pistas firmes, sustentáveis e duráveis no Brasil e no mundo.',
      quickLinks: 'Navegação Rápida',
      technicalDocs: 'Documentação Técnica',
      contactUs: 'Fale Conosco',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      about: 'About Us',
      products: 'Products',
      beforeAfter: 'Before & After',
      applications: 'Applications',
      method: 'Application Method',
      engineering: 'Technical Specs',
      calculator: 'Calculator',
      export: 'Export',
      contact: 'Contact',
      quoteButton: 'Quote',
    },
    hero: {
      badge: '📍 STABILIZATION TECHNOLOGY • BRAZIL & GLOBAL EXPORT',
      titleStart: 'Polymeric Solutions for',
      titleHighlight: 'Soil Stabilization',
      titleEnd: 'with Graphene.',
      subtitle:
        'Engineered with emulsion polymers and structural graphene reinforcement. Eliminates up to 90% of dust, blocks mud, and cuts paving costs by up to 60% for Brazil and Global Export.',
      ctaPrimary: 'Explore Products',
      ctaSecondary: 'Quote',
      footnote: '100% Eco-Safe • 40% to 60% Savings • 24h Reopening',
      stats: {
        dustReduction: 'Up to 90%',
        dustLabel: 'Environmental Dust Reduction',
        costSavings: '40% to 60%',
        costLabel: 'Savings vs Traditional Paving',
        durability: 'Up to 5x',
        durabilityLabel: 'Extended Soil Life',
        trafficRelease: '24 Hours',
        trafficLabel: 'Fast Traffic Reopening',
        ecoFriendly: '100% Eco-Safe',
        ecoLabel: 'Safe for Groundwater & Crops',
      },
    },
    about: {
      badge: 'Britasol Institutional Profile',
      title: 'ABOUT US: Engineering & Innovation for Responsible Rehabilitation',
      subtitle:
        'Our mission is to transform unstable soils and harsh dirt roads into solid, long-lasting surfaces, maximizing budget efficiency while safeguarding the environment.',
      p1: 'BRITASOL specializes in Polymeric Solutions for Soil Stabilization. We use cutting-edge chemical technology to convert gravel roads, unstable terrains, and degraded areas into firm, durable, and sustainable corridors.',
      p2: 'Our mission is Responsible Rehabilitation: more economical, faster to deploy, and with a drastically smaller carbon footprint than traditional gravel or asphalt methods.',
      missionTitle: 'Mission',
      missionText: 'Deliver sustainable, smart chemical solutions that redefine rural, industrial, and highway infrastructure.',
      visionTitle: 'Vision',
      visionText: 'Be the premier reference in sustainable soil stabilization worldwide.',
      valuesTitle: 'Values',
      valuesText: 'Responsible rehabilitation, engineering rigor, environmental stewardship, and shared socio-economic prosperity.',
      pillars: [
        {
          title: 'Direct Cost Savings',
          desc: 'Save 40% to 60% compared to conventional asphalt or gravel replenishment, reducing grader cycles.',
        },
        {
          title: 'Graphene Nanotechnology',
          desc: 'Nanostructured reinforcement that seals soil micropores, delivering superior compressive strength and waterproofing.',
        },
        {
          title: 'Eco-Responsible & Non-Toxic',
          desc: 'Zero harmful petroleum distillates or toxic runoffs. Fully compatible with agriculture and environmental standards.',
        },
        {
          title: 'Global Export Footprint',
          desc: 'Supplying projects throughout Brazil and worldwide with safe containerized ocean shipping.',
        },
      ],
    },
    catalog: {
      badge: 'Britasol Product Line',
      title: 'BRITASOL - SOIL STABILIZER IN 20L AND 50L CANISTERS',
      subtitle:
        'Ready-to-dilute liquid formula with high-performance polymers, graphene, dispersing surfactants, and eco-biocides.',
      compositionTitle: 'Advanced Chemical Composition',
      compositionSubtitle: 'Proprietary formula meticulously engineered for maximum mechanical cohesion:',
      compositionItems: [
        {
          title: 'High-Performance Emulsion Polymers',
          desc: 'Creates a flexible cross-linked matrix that cements soil particles and halts erosion.',
        },
        {
          title: 'Structural Graphene Reinforcement',
          desc: 'Exponentially boosts tensile and compressive capacity, preventing wheel rutting under heavy haul trucks.',
        },
        {
          title: 'Dispersing Surfactants',
          desc: 'Ensures deep capillary penetration and uniform moisture dispersion throughout the treated soil depth.',
        },
        {
          title: 'Alkalinizers & Thickeners',
          desc: 'Optimizes soil pH reactions, accelerating stable bonding with fine clay minerals.',
        },
        {
          title: 'Protective Eco-Biocides',
          desc: 'Guarantees extended shelf-life and stability against bacterial polymer degradation.',
        },
        {
          title: 'Eco-Safe Aqueous Vehicle',
          desc: 'Zero harsh solvents. Completely water-miscible for straightforward water truck spraying.',
        },
      ],
      viewSpecs: 'View Technical Specifications',
      requestQuote: 'Request an Export Quote',
      downloadCatalog: 'Download Technical Catalog (PDF)',
    },
    beforeAfter: {
      badge: 'Proven Field Results',
      title: 'THE POWER OF STABILIZATION: BEFORE vs AFTER',
      subtitle:
        'Compare unpaved road hazards with the long-lasting transformation delivered by Britasol.',
      dragHint: 'Drag the slider or toggle modes to compare Before and After',
      beforeLabel: 'BEFORE (Unstable Soil)',
      afterLabel: 'AFTER (Stabilized with Britasol)',
      beforePoints: [
        'Uneven road riddled with potholes and severe erosion ruts',
        'Impassable mud traps during seasonal rains',
        'Choking dust clouds compromising health and visibility',
        'Exorbitant grading and gravel replenishment maintenance',
        'Premature breakdown of vehicle suspensions and tires',
      ],
      afterPoints: [
        'Smooth, dense, compacted, and durable road surface',
        'Completely dust-free and impervious to rain washouts',
        'Hydrophobic water-shedding crust preventing water ingress',
        'Superior load-bearing capacity for heavy transport fleets',
        'Safe, reliable transit in all weather conditions, 365 days a year',
      ],
      summary: 'PROVEN RESULT: Stabilized, firm, dust-free surface • + Strength • - Erosion • - Dust',
    },
    applications: {
      badge: 'Market Sectors',
      title: 'WHERE TO APPLY BRITASOL',
      subtitle:
        'Formulated with Britasol 20L and 50L with graphene reinforcement for all civil and industrial infrastructure works.',
    },
    method: {
      badge: 'Fast & Streamlined Execution',
      title: 'STEP-BY-STEP APPLICATION METHOD',
      subtitle:
        'Simple earthmoving procedure using standard road machinery without requiring expensive asphalt batching plants.',
      steps: [
        {
          step: '01',
          title: 'Soil Preparation & Scarification',
          description:
            'Scarify the top 10 to 15 cm of soil with a motor grader and disc harrow to break clumps and optimize gradation.',
          machinery: 'Motor Grader / Disc Harrow',
          duration: 'Initial step',
        },
        {
          step: '02',
          title: 'Dosage & Water Dilution',
          description:
            'Add the specified Britasol ratio directly into the water truck tank filled with optimal compaction water.',
          machinery: 'Water Tank Truck with Pump',
          duration: '15 to 20 minutes',
        },
        {
          step: '03',
          title: 'Homogeneous Spraying',
          description:
            'Spray the diluted blend uniformly over the loosened road surface in overlapping passes.',
          machinery: 'Water Truck Spray Bar',
          duration: 'Continuous pass',
        },
        {
          step: '04',
          title: 'Blending & Compaction',
          description:
            'Blade mix and compact with a padfoot (sheepsfoot) roller, finishing with a smooth steel drum or pneumatic roller.',
          machinery: 'Vibratory Compactor Roller',
          duration: 'Same day',
        },
        {
          step: '05',
          title: 'Curing & Traffic Release',
          description:
            'Polymer cross-linking activates swiftly. Light traffic permitted within hours; full heavy freight open in 24 hours.',
          machinery: 'No machinery required',
          duration: 'Full opening in 24h',
        },
      ],
    },
    engineering: {
      badge: 'Geotechnical Engineering & CBR Data',
      title: 'TECHNICAL METRICS: CBR, COHESION & WATERPROOFING',
      subtitle:
        'Engineered in synergy with leading geotechnical principles (such as Dynacal alkaline organo-metallic additives) to elevate local soil bearing capacity.',
      dynacalSynergyTitle: 'Physicochemical Synergy on Soil Clay Particles',
      dynacalSynergyText:
        'Following proven principles found in advanced road additives like Dynacal, Britasol neutralizes capillary water suction across clay platelets. The polymer-graphene matrix locks fine particles into an insoluble waterproof crust, permanently halting shear failure and softening.',
      cbrTitle: 'Exponential CBR (California Bearing Ratio) Gain',
      cbrText:
        'Laboratory and in-situ penetrometer tests show that low CBR soils (4% to 10%, common on unpaved logging and farm roads) surpass 40% to 90%+ CBR values after Britasol compaction, easily carrying 40+ ton road trains.',
      reagentTitle: 'Synergistic Mineral Reagents',
      reagentText:
        'For high-plasticity index (PI) clays or water-saturated subgrades, Britasol can be co-applied with hydrated lime or aluminum sulfate to accelerate pozzolanic cimentation and hydrophobic locking.',
      tableHeaders: {
        parameter: 'Technical Metric',
        traditional: 'Conventional Gravel / Asphalt',
        britasol: 'Soil Stabilized with Britasol',
        gain: 'Britasol Edge',
      },
      comparison: [
        {
          metric: 'Particulate Dust Emission (PM10/2.5)',
          traditional: 'Massive dust plumes during dry season',
          britasol: 'Up to 90% reduction in fugitive airborne dust',
          benefit: 'Protects community health & visibility',
        },
        {
          metric: 'Wet Season Behavior (Mud)',
          traditional: 'Subgrade softens, rutting and impassable bogs',
          britasol: 'Impervious sealed crust; stormwater runs off clean',
          benefit: 'All-weather access 365 days/year',
        },
        {
          metric: 'Capital Cost per Km',
          traditional: '$300K - $600K/km for hot-mix asphalt + base',
          britasol: 'Utilizes 100% existing in-situ soil + polymer liquid',
          benefit: '40% to 60% total project savings',
        },
        {
          metric: 'Quarry Rock / Aggregate Demand',
          traditional: 'Hundreds of haul trips transporting crushed rock',
          britasol: 'Eliminates or drastically slashes aggregate needs',
          benefit: 'Cuts haulage CO2 and quarry depletion',
        },
        {
          metric: 'Pavement Reopening Timeline',
          traditional: 'Weeks of detours and heavy paving trains',
          britasol: 'Light traffic in hours; heavy transport in 24 hours',
          benefit: 'Minimal disruption to logistics',
        },
      ],
    },
    calculator: {
      badge: 'Interactive Estimator',
      title: 'DOSAGE & SAVINGS CALCULATOR',
      subtitle:
        'Input your road dimensions and traffic type to estimate Britasol requirements and cost savings vs conventional gravel/asphalt.',
      roadWidth: 'Road Width (meters)',
      roadLength: 'Road Length (km)',
      trafficType: 'Traffic Loading',
      trafficOptions: {
        light: 'Light (Cars, utility vehicles, rural pick-ups)',
        medium: 'Medium / Ag (Tractors, harvesters, 2-axle trucks)',
        heavy: 'Heavy / Mining (B-trains, ore haulers, heavy rigs)',
      },
      results: {
        estimatedProduct: 'Estimated Britasol Volume',
        estimatedWater: 'Compaction Water Volume',
        estimatedSavings: 'Estimated Savings vs Traditional Paving',
        co2Reduction: 'CO2 Emission Reductions',
        timeToTraffic: 'Traffic Reopening Time',
      },
      simulateCta: 'Request Official Commercial Proposal with These Specs',
    },
    export: {
      badge: 'Global Trade & Maritime Logistics',
      title: 'EXPORT: BRAZIL & GLOBAL INTERNATIONAL MARKETS',
      subtitle:
        'Delivering Brazilian soil polymer technology to any country across the Americas, Africa, Europe, and beyond.',
      countries: 'Latin America • Africa • Europe • Middle East • Asia',
      card1Title: 'Worldwide Supply to Any Country',
      card1Text:
        'Agile export infrastructure serving governments, road concessionaires, and contractors globally with complete documentation and customs compliance.',
      card2Title: 'Ocean Container Unitization & Packaging',
      card2Text:
        'Supplied in 20L, 50L drums or 1,000L IBC totes, palletized, shrink-wrapped, and certified for maritime container shipping (FOB Brazilian ports or CIF global ports).',
      card3Title: 'In-Country Technical Support & Soil Lab Testing',
      card3Text:
        'Dedicated technical team offering soil sample profiling, custom dilution recipes, and on-site field training for local contractors.',
    },
    contact: {
      badge: 'Contact Us',
      title: 'GET IN TOUCH WITH BRITASOL',
      subtitle:
        'Fill out the form below to message directly via WhatsApp or connect through our official corporate channels.',
      nameLabel: 'Full Name',
      phoneLabel: 'Phone / WhatsApp',
      emailLabel: 'Corporate Email',
      subjectLabel: 'Subject',
      messageLabel: 'Message / Project Details',
      submitButton: 'Send Message on WhatsApp',
      infoTitle: 'Official Contact Channels',
      addressLabel: 'Address',
      emailContactLabel: 'Email',
      phoneContactLabel: 'Phone / WhatsApp',
    },
    cta: {
      badge: 'Ready to Upgrade Your Roads?',
      title: 'RESPONSIBLE REHABILITATION: BUILD BETTER, SPEND LESS',
      subtitle:
        'Connect with our specialized geotechnical consultants. Immediate support for municipal agencies, agricultural giants, mining conglomerates, and international contractors.',
      button: 'Request Formal Price Quote',
      whatsappButton: 'Chat on Commercial WhatsApp',
    },
    footer: {
      tagline:
        'BRITASOL is a world-class provider of Polymeric Soil Stabilization Solutions. Converting unstable dirt roads into resilient, durable, and sustainable corridors in Brazil and worldwide.',
      quickLinks: 'Quick Navigation',
      technicalDocs: 'Technical Documents',
      contactUs: 'Contact Us',
      rights: 'All rights reserved.',
    },
  },
  fr: {
    nav: {
      about: 'Qui Sommes-Nous',
      products: 'Produits',
      beforeAfter: 'Avant & Après',
      applications: 'Applications',
      method: 'Mode d’Application',
      engineering: 'Données Techniques',
      calculator: 'Calculateur',
      export: 'Exportation',
      contact: 'Contact',
      quoteButton: 'Devis',
    },
    hero: {
      badge: '📍 TECHNOLOGIE DE STABILISATION • BRÉSIL & EXPORT',
      titleStart: 'Solutions Polymères pour la',
      titleHighlight: 'Stabilisation des Sols',
      titleEnd: 'au Graphène.',
      subtitle:
        'Formulé avec des polymères en émulsion et renfort nanostructuré de graphène. Élimine jusqu’à 90% de la poussière, bloque la boue et réduit jusqu’à 60% les coûts de pavage pour le Brésil et l’Exportation.',
      ctaPrimary: 'Découvrir nos Produits',
      ctaSecondary: 'Devis',
      footnote: '100% Écologique • Économie de 40 à 60% • Prêt en 24h',
      stats: {
        dustReduction: 'Jusqu’à 90%',
        dustLabel: 'Moins de Poussière dans l’Air',
        costSavings: '40% à 60%',
        costLabel: 'Économie vs Pavage Traditionnel',
        durability: 'Jusqu’à 5x',
        durabilityLabel: 'Plus de Durabilité du Sol',
        trafficRelease: '24 Heures',
        trafficLabel: 'Réouverture Rapide du Trafic',
        ecoFriendly: '100% Écologique',
        ecoLabel: 'Sans Risque pour les Nappes Phréatiques',
      },
    },
    about: {
      badge: 'Profil Institutionnel Britasol',
      title: 'QUI SOMMES-NOUS: Ingénierie et Innovation pour une Réhabilitation Responsable',
      subtitle:
        'Notre mission est de convertir les sols instables et les pistes précaires en chaussées solides et étanches, garantissant économie et protection environnementale.',
      p1: 'BRITASOL est une entreprise spécialisée dans les Solutions Polymères pour la Stabilisation des Sols. Nous déployons une technologie chimique innovante pour transformer les routes de terre, sols instables et zones dégradées en surfaces fermes, durables et écologiques.',
      p2: 'Notre mission est d’offrir une réhabilitation responsable: plus économique, plus rapide et avec un impact environnemental bien inférieur aux méthodes traditionnelles d’enrochement ou d’asphalte.',
      missionTitle: 'Mission',
      missionText: 'Offrir des solutions polymères durables et intelligentes pour révolutionner les infrastructures routières, rurales et minières.',
      visionTitle: 'Vision',
      visionText: 'Devenir la référence internationale en stabilisation écologique des sols.',
      valuesTitle: 'Valeurs',
      valuesText: 'Réhabilitation responsable, rigueur technique, respect de l’environnement et engagement pour le développement durable.',
      pillars: [
        {
          title: 'Économie Réelle',
          desc: 'Économisez de 40% à 60% par rapport aux méthodes conventionnelles, en réduisant la maintenance continue.',
        },
        {
          title: 'Nanotechnologie au Graphène',
          desc: 'Scelle les micropores du sol, apportant une très haute résistance à la compression et une imperméabilisation durable.',
        },
        {
          title: 'Éco-Responsable & Atoxique',
          desc: 'Produit sans solvants pétroliers agressifs, biodégradable et respectueux des cours d’eau et cultures.',
        },
        {
          title: 'Présence Internationale',
          desc: 'Opérations au Brésil et expéditions maritimes certifiées vers tout pays partenaire.',
        },
      ],
    },
    catalog: {
      badge: 'Catalogue des Produits Britasol',
      title: 'BRITASOL - STABILISATEUR DE SOL EN BIDONS DE 20L ET 50L',
      subtitle:
        'Formule liquide concentrée prête à diluer, composée de polymères en émulsion, graphène, dispersants et biocides protecteurs.',
      compositionTitle: 'Composition Technique Avancée',
      compositionSubtitle: 'Formule propriétaire brevetée pour une cohésion mécanique maximale:',
      compositionItems: [
        {
          title: 'Polymères en Émulsion Haute Performance',
          desc: 'Créent un réseau liant élastique qui cimente les particules fines du sol pour stopper l’érosion.',
        },
        {
          title: 'Graphène pour Renfort Structurel',
          desc: 'Augmente de façon exponentielle la résistance à la traction et compression sous les essieux lourds.',
        },
        {
          title: 'Tensioactifs Dispersants',
          desc: 'Garantissent une pénétration capillaire profonde et une dispersion homogène dans l’humidité du sol.',
        },
        {
          title: 'Alcalinisants et Épaississants',
          desc: 'Équilibrent la réactivité chimique du sol, stabilisant les liaisons avec les minéraux argileux.',
        },
        {
          title: 'Biocides Protecteurs',
          desc: 'Garantissent une longue durée de stockage sans dégradation bactérienne des polymères.',
        },
        {
          title: 'Véhicule Aqueux Écologique',
          desc: 'Zéro solvant toxique. Totalement miscible à l’eau pour épandage aisé par camion-citerne.',
        },
      ],
      viewSpecs: 'Voir les Fiches Techniques',
      requestQuote: 'Demander un Devis Export',
      downloadCatalog: 'Télécharger le Catalogue (PDF)',
    },
    beforeAfter: {
      badge: 'Résultats Prouvés sur le Terrain',
      title: 'LE POUVOIR DE LA STABILISATION: AVANT vs APRÈS',
      subtitle:
        'Comparez les pistes dégradées avec la métamorphose durable obtenue grâce à Britasol.',
      dragHint: 'Faites glisser la barre pour comparer l’Avant et l’Après',
      beforeLabel: 'L’AVANT (Sol Instable)',
      afterLabel: 'L’APRÈS (Stabilisé avec Britasol)',
      beforePoints: [
        'Piste ravinée, ornières profondes et nids-de-poule',
        'Boue impraticable et embourbements lors des pluies',
        'Poussière étouffante et perte de visibilité en saison sèche',
        'Coûts récurrents exorbitants de reprofilage et rechargement',
        'Usure prématurée des suspensions, pneus et camions',
      ],
      afterPoints: [
        'Surface lisse, compacte, cimentée et pérenne',
        'Exempte de poussière, d’ornières et de boue',
        'Imperméabilisation supérieure favorisant le ruissellement',
        'Résistance renforcée supportant le fret lourd et minier',
        'Trafic fluide et sécurisé 365 jours par an en tout climat',
      ],
      summary: 'RÉSULTAT: Surface stabilisée, ferme et sans poussière • + Résistance • - Érosion • - Poussière',
    },
    applications: {
      badge: 'Secteurs d’Application',
      title: 'OÙ APPLIQUER LE BRITASOL',
      subtitle:
        'Formulé avec Britasol 20L et 50L renforcé au graphène pour toutes les exigences du génie civil et industriel.',
    },
    method: {
      badge: 'Mise en Œuvre Rapide',
      title: 'MODE D’APPLICATION ÉTAPE PAR ÉTAPE',
      subtitle:
        'Processus de terrassement standardisé avec engins de chantier courants, sans centrale d’enrobage coûteuse.',
      steps: [
        {
          step: '01',
          title: 'Préparation et Nivellement',
          description:
            'Scarifier la couche supérieure du sol (10 à 15 cm) à la niveleuse et herse à disques pour aérer les agrégats.',
          machinery: 'Niveleuse / Herse à disques',
          duration: 'Étape initiale',
        },
        {
          step: '02',
          title: 'Dosage et Dilution',
          description:
            'Verser la dose préconisée de Britasol dans la citerne d’eau de compactage.',
          machinery: 'Camion-citerne à eau avec pompe',
          duration: '15 à 20 minutes',
        },
        {
          step: '03',
          title: 'Épandage Homogène',
          description:
            'Pulvériser la solution sur la couche de sol meuble jusqu’à l’humidité optimale Proctor.',
          machinery: 'Rampe d’arrosage du camion',
          duration: 'Passage continu',
        },
        {
          step: '04',
          title: 'Malaxage & Compactage',
          description:
            'Malaxer et compacter au rouleau à pieds dameurs, puis finition au rouleau tandem lisse ou pneumatique.',
          machinery: 'Compacteur vibrant',
          duration: 'Le jour même',
        },
        {
          step: '05',
          title: 'Prise et Ouverture au Trafic',
          description:
            'Polymérisation rapide. Trafic léger autorisé en quelques heures; transport lourd libéré en 24h.',
          machinery: 'Aucun engin requis',
          duration: 'Ouvert sous 24 heures',
        },
      ],
    },
    engineering: {
      badge: 'Données Géotechniques & CBR',
      title: 'DONNÉES TECHNIQUES: CBR, COHÉSION ET ÉTANCHÉITÉ',
      subtitle:
        'Inspiré des meilleures approches géotechniques routières (telles que les additifs organo-métalliques Dynacal) pour décupler la portance du sol naturel.',
      dynacalSynergyTitle: 'Action Physico-Chimique sur les Argiles du Sol',
      dynacalSynergyText:
        'À l’instar des solutions d’ingénierie routière avancées (comme Dynacal), le Britasol modifie la structure des particules d’argile locales en bloquant la succion d’eau et en formant une matrice polymère insoluble qui prévient l’affaissement.',
      cbrTitle: 'Augmentation Exponentielle du CBR (Indice Portant Californien)',
      cbrText:
        'Les essais en laboratoire montrent que des sols naturels de faible portance (CBR de 4% à 10%) dépassent 40% à 90%+ après traitement au Britasol, supportant ainsi les trains routiers et engins lourds.',
      reagentTitle: 'Synergie avec Réactifs Minéraux',
      reagentText:
        'Pour les argiles très plastiques ou gorgées d’eau, Britasol peut être associé à de la chaux hydratée ou du sulfate d’aluminium pour stimuler la cimentation pouzzolanique et l’hydrophobie.',
      tableHeaders: {
        parameter: 'Paramètre Géotechnique',
        traditional: 'Enrochement / Asphalte Conventionnel',
        britasol: 'Sol Stabilisé avec Britasol',
        gain: 'Avantage Britasol',
      },
      comparison: [
        {
          metric: 'Émissions de Poussières (PM10/2.5)',
          traditional: 'Épais nuages permanents en saison sèche',
          britasol: 'Suppression jusqu’à 90% des particules volantes',
          benefit: 'Protection sanitaire & visibilité totale',
        },
        {
          metric: 'Comportement sous la Pluie (Boue)',
          traditional: 'Perte de portance, ornières et enlisements',
          britasol: 'Croûte étanche; l’eau de pluie ruisselle sans s’infiltrer',
          benefit: 'Praticabilité 365 jours par an',
        },
        {
          metric: 'Coût d’Investissement au Km',
          traditional: 'Très lourd (centrale d’asphalte + transport de roches)',
          britasol: 'Valorise 100% du sol local avec additif liquide',
          benefit: 'Économie de 40% à 60% par km',
        },
        {
          metric: 'Besoin en Concassé / Gravier',
          traditional: 'Centaines de rotations de camions bennes de carrières',
          britasol: 'Élimine ou réduit jusqu’à 80% l’apport de cailloux',
          benefit: 'Zéro saccage des carrières & moins de carburant',
        },
        {
          metric: 'Délai d’Ouverture de la Voie',
          traditional: 'Semaines de fermeture et perturbations logistiques',
          britasol: 'Trafic léger en quelques heures; lourd en 24h',
          benefit: 'Impact minimal sur les activités économiques',
        },
      ],
    },
    calculator: {
      badge: 'Simulateur Interactif',
      title: 'CALCULATEUR DE DOSAGE ET D’ÉCONOMIES',
      subtitle:
        'Entrez les dimensions de votre voie pour estimer le volume de Britasol et l’économie par rapport à un pavage classique.',
      roadWidth: 'Largeur de la Piste (mètres)',
      roadLength: 'Longueur / Tracé (km)',
      trafficType: 'Intensité du Trafic',
      trafficOptions: {
        light: 'Léger (Véhicules légers et utilitaires)',
        medium: 'Moyen / Agricole (Tracteurs, moissonneuses, camions 2 essieux)',
        heavy: 'Lourd / Minier (Semi-remorques, bennes minières lourdes)',
      },
      results: {
        estimatedProduct: 'Volume Estimé de Britasol',
        estimatedWater: 'Volume d’Eau de Compactage',
        estimatedSavings: 'Économie Estimée vs Chaussée Classique',
        co2Reduction: 'Réduction des Émissions de CO2',
        timeToTraffic: 'Délai d’Ouverture au Trafic',
      },
      simulateCta: 'Demander une Offre Commerciale avec ces Paramètres',
    },
    export: {
      badge: 'Commerce International & Logistique Maritime',
      title: 'EXPORTATION: BRÉSIL ET MARCHÉ INTERNATIONAL',
      subtitle:
        'Nous exportons la technologie brésilienne de polymères de sol vers tout pays des Amériques, Afrique, Europe et au-delà.',
      countries: 'Amérique Latine • Afrique • Europe • Moyen-Orient • Asie',
      card1Title: 'Fourniture Mondiale vers Tout Pays',
      card1Text:
        'Dispositif d’exportation réactif pour gouvernements, concessionnaires autoroutiers et constructeurs internationaux avec conformité douanière intégrale.',
      card2Title: 'Conditionnement et Expédition Maritime par Conteneurs',
      card2Text:
        'Fourni en bidons de 20L, 50L ou cuves IBC de 1.000L palettisés et filmés, certifiés pour transport maritime (Incoterms FOB ports brésiliens ou CIF ports mondiaux).',
      card3Title: 'Assistance Géotechnique et Essais de Sol In-Situ',
      card3Text:
        'Équipe technique spécialisée assurant l’analyse des sols locaux, la formulation sur mesure et la formation pratique des équipes de chantier locales.',
    },
    contact: {
      badge: 'Contactez-Nous',
      title: 'CONTACTEZ L’ÉQUIPE BRITASOL',
      subtitle:
        'Remplissez le formulaire ci-dessous pour nous envoyer votre demande directement par WhatsApp ou via nos coordonnées officielles.',
      nameLabel: 'Nom Complet',
      phoneLabel: 'Téléphone / WhatsApp',
      emailLabel: 'E-mail Professionnel',
      subjectLabel: 'Objet',
      messageLabel: 'Message / Détails du Projet',
      submitButton: 'Envoyer le Message sur WhatsApp',
      infoTitle: 'Canaux Officiels de Contact',
      addressLabel: 'Adresse',
      emailContactLabel: 'E-mail',
      phoneContactLabel: 'Téléphone / WhatsApp',
    },
    cta: {
      badge: 'Prêt à Transformer vos Voies de Communication?',
      title: 'RÉHABILITATION RESPONSABLE: CONSTRUIRE MIEUX EN DÉPENSANT MOINS',
      subtitle:
        'Contactez dès aujourd’hui nos consultants techniques. Réponse rapide pour ministères, municipalités, exploitants agricoles et miniers.',
      button: 'Demander un Devis Officiel',
      whatsappButton: 'Contacter sur WhatsApp Commercial',
    },
    footer: {
      tagline:
        'BRITASOL est le spécialiste des Solutions Polymères pour la Stabilisation des Sols. Rendre les routes de terre praticables, durables et écologiques au Brésil et à l’international.',
      quickLinks: 'Navigation Rapide',
      technicalDocs: 'Documentation Technique',
      contactUs: 'Contactez-Nous',
      rights: 'Tous droits réservés.',
    },
  },
};

export const MARKET_SEGMENTS: Record<Language, MarketSegment[]> = {
  pt: [
    {
      id: 'rural',
      title: 'Estradas Rurais e Vicinais',
      description:
        'Garante o escoamento contínuo de safras e tráfego seguro de ônibus escolares e veículos leves, acabando com atoleiros no inverno e poeira sufocante no verão. O Britasol 50L em dosagem calculada cimenta o subleito sem necessitar de brita importada.',
      iconName: 'Tractor',
      cbrGain: '+250% CBR',
      highlight: '90% menos poeira e zero atoleiros',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/pavimentacao.jpg',
      productUsage: 'Ideal com Britasol 50L diluído em caminhão-pipa (1L trata até 25m² a 40m²).',
    },
    {
      id: 'industrial',
      title: 'Pátios Industriais e Galpões',
      description:
        'Superfícies cimentadas, lisas e sem desprendimento de pó para manobras de empilhadeiras, carretas pesadas, galpões de armazenagem e centros de distribuição, prevenindo danos a motores e filtros.',
      iconName: 'Factory',
      cbrGain: '+300% CBR',
      highlight: 'Superfície limpa sem danificar máquinas',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/galpao.jpg',
      productUsage: 'Britasol 50L ou IBC 1000L com grafeno para resistência extrema à abrasão.',
    },
    {
      id: 'loteamento',
      title: 'Loteamentos e Vias Urbanas',
      description:
        'Pavimentação ecológica de baixo custo para arruamentos em novos loteamentos residenciais, condomínios fechados e acessos municipais, valorizando o metro quadrado com rápida liberação de tráfego.',
      iconName: 'Building',
      cbrGain: '+280% CBR',
      highlight: 'Valorização estética e custo 50% menor',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/loteamento.jpg',
      productUsage: 'Britasol 20L e 50L pronto para aplicação ágil com equipamento padrão.',
    },
    {
      id: 'aerodromo',
      title: 'Aeródromos e Pistas de Pouso',
      description:
        'Estabilização de pistas de pouso e taxiamento em fazendas e pistas regionais, eliminando o perigo de pedras soltas que possam danificar turbinas, hélices ou fuselagens de aeronaves.',
      iconName: 'Plane',
      cbrGain: '+320% CBR',
      highlight: 'Sem pedras soltas (FOD) e alta coesão',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/aerodromo.jpg',
      productUsage: 'Camada compactada com Britasol 50L selando completamente a pista.',
    },
    {
      id: 'agro-mining',
      title: 'Mineração e Cargas Pesadas',
      description:
        'Suporta o tráfego contínuo de caminhões fora-de-estrada, rodotrens e carretas de 40 a 70 toneladas em acessos de lavras e pátios de britagem, prevenindo paradas na cadeia produtiva.',
      iconName: 'Pickaxe',
      cbrGain: '+380% CBR',
      highlight: 'Resistência extrema a eixos pesados',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/destaque-222.jpg',
      productUsage: 'Matriz polimérica com nanopartículas de grafeno para suporte de carga bruta.',
    },
    {
      id: 'slopes',
      title: 'Taludes e Contenção de Encostas',
      description:
        'Ação impermeabilizante e ligante que sela a superfície de encostas e cortes de estradas, prevenindo deslizamentos, ravinamentos e assoreamento de mananciais hídricos.',
      iconName: 'ShieldAlert',
      cbrGain: 'Proteção Antierosiva',
      highlight: 'Reduz erosão hídrica em 90%',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/bg-home-novo-webp.webp',
      productUsage: 'Aplicação pulverizada com Britasol 20L para hidro-estabilização imediata.',
    },
  ],
  en: [
    {
      id: 'rural',
      title: 'Rural & Haul Roads',
      description:
        'Secures continuous crop hauling and dependable transit for school buses and utility vehicles, ending winter mud pits and summer dust clouds. Uses local soil without costly imported gravel.',
      iconName: 'Tractor',
      cbrGain: '+250% CBR',
      highlight: '90% less dust & zero mud pits',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/pavimentacao.jpg',
      productUsage: 'Formulated with Britasol 50L for water truck spray application.',
    },
    {
      id: 'industrial',
      title: 'Industrial Yards & Warehouses',
      description:
        'Dense, hardened, dust-free pavements for heavy truck turnarounds, bulk storage facilities, logistics terminals, and loading docks without airborne abrasive dust.',
      iconName: 'Factory',
      cbrGain: '+300% CBR',
      highlight: 'Clean surface preventing engine wear',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/galpao.jpg',
      productUsage: 'Britasol 50L or 1000L IBC with structural graphene for abrasion resilience.',
    },
    {
      id: 'loteamento',
      title: 'Housing Developments & Urban Subdivisions',
      description:
        'Cost-effective eco-paving for residential subdivisions, gated developments, and suburban streets, delivering clean streets at half the cost of traditional asphalt.',
      iconName: 'Building',
      cbrGain: '+280% CBR',
      highlight: 'Clean aesthetic & 50% cost savings',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/loteamento.jpg',
      productUsage: 'Britasol 20L and 50L ready for standard motor grader deployment.',
    },
    {
      id: 'aerodromo',
      title: 'Airstrips & Airfields',
      description:
        'Soil stabilization for remote airfield runways and farm landing strips, completely eliminating loose stones and gravel FOD that endanger propellers and aircraft hulls.',
      iconName: 'Plane',
      cbrGain: '+320% CBR',
      highlight: 'Zero loose rocks (FOD) & high cohesion',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/aerodromo.jpg',
      productUsage: 'Compact surface layer sealed with Britasol 50L.',
    },
    {
      id: 'agro-mining',
      title: 'Mining & Heavy Haul Access',
      description:
        'Engineered to withstand unrelenting passes of 40 to 70-ton ore trucks and mining haul fleets, preventing mud sinkholes and chassis suspension fatigue.',
      iconName: 'Pickaxe',
      cbrGain: '+380% CBR',
      highlight: 'Extreme resistance to heavy axles',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/destaque-222.jpg',
      productUsage: 'Polymer matrix with graphene reinforcement for maximum structural bearing.',
    },
    {
      id: 'slopes',
      title: 'Slopes & Soil Retention Pads',
      description:
        'Water-repellent cohesive barrier that coats road cuts and embankments, preventing rain-induced landslides, surface gullying, and watershed siltation.',
      iconName: 'ShieldAlert',
      cbrGain: 'Anti-Erosion Shield',
      highlight: 'Reduces water erosion by 90%',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/bg-home-novo-webp.webp',
      productUsage: 'Spray application with Britasol 20L for immediate slope sealing.',
    },
  ],
  fr: [
    {
      id: 'rural',
      title: 'Pistes Rurales et Agricoles',
      description:
        'Garantit le transport continu des récoltes et des bus, éliminant les ornières en saison des pluies et la poussière en saison sèche sans apporter de concassé coûteux.',
      iconName: 'Tractor',
      cbrGain: '+250% CBR',
      highlight: '90% moins de poussière et zéro boue',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/pavimentacao.jpg',
      productUsage: 'Idéal avec Britasol 50L épandu à la citerne d’arrosage.',
    },
    {
      id: 'industrial',
      title: 'Plateformes Logistiques et Hangars',
      description:
        'Chaussées compactes, lisses et étanches pour la giration des semi-remorques, zones de stockage de fret et entrepôts industriels sans poussière abrasive.',
      iconName: 'Factory',
      cbrGain: '+300% CBR',
      highlight: 'Surface propre préservant les engins',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/galpao.jpg',
      productUsage: 'Britasol 50L ou IBC 1000L renforcé au graphène contre l’usure mécanique.',
    },
    {
      id: 'loteamento',
      title: 'Lotissements et Voiries Urbaines',
      description:
        'Pavage écologique économique pour voiries de lotissements résidentiels et accès communaux, valorisant les parcelles à moindre coût.',
      iconName: 'Building',
      cbrGain: '+280% CBR',
      highlight: 'Esthétique soignée et 50% d’économies',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/loteamento.jpg',
      productUsage: 'Britasol 20L et 50L prêt pour mise en œuvre rapide avec engins classiques.',
    },
    {
      id: 'aerodromo',
      title: 'Aérodromes et Pistes d’Atterrissage',
      description:
        'Stabilisation des pistes d’aviation régionales et agricoles, éliminant les projections de graviers risquant d’endommager hélices et moteurs.',
      iconName: 'Plane',
      cbrGain: '+320% CBR',
      highlight: 'Zéro caillou projeté (FOD) & haute cohésion',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/aerodromo.jpg',
      productUsage: 'Couche traitée au Britasol 50L pour étanchéité parfaite de la piste.',
    },
    {
      id: 'agro-mining',
      title: 'Exploitation Minière & Poids Lourds',
      description:
        'Supporte le passage répété de bennes et camions de 40 à 70 tonnes sur les pistes d’extraction minière sans affaissement du sol.',
      iconName: 'Pickaxe',
      cbrGain: '+380% CBR',
      highlight: 'Résistance extrême aux essieux lourds',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/destaque-222.jpg',
      productUsage: 'Matrice polymère au graphène pour une portance géotechnique maximale.',
    },
    {
      id: 'slopes',
      title: 'Talus et Bassins de Rétention',
      description:
        'Barrière cohésive hydrophobe scellant les talus et découpes de routes contre les éboulements, ravinements et ruissellements.',
      iconName: 'ShieldAlert',
      cbrGain: 'Bouclier Anti-Érosion',
      highlight: 'Réduit l’érosion par l’eau de 90%',
      image: 'https://dynacal.com.br/wp-content/uploads/2026/04/bg-home-novo-webp.webp',
      productUsage: 'Pulvérisation de Britasol 20L pour scellement immédiat des pentes.',
    },
  ],
};

export const FAQS: Record<Language, { q: string; a: string; category: string }[]> = {
  pt: [
    {
      q: 'O que é o Britasol e como ele age no solo?',
      a: 'O Britasol é um aditivo estabilizante líquido formulado com polímeros em emulsão, grafeno nanomecânico e tensoativos dispersantes. Ao ser diluído em água e aplicado com caminhão-pipa no solo escarificado, ele se dispersa e cimenta as partículas finas de argila e silte, expulsando a água livre e formando uma crosta impermeável, densa e de alta resistência mecânica.',
      category: 'Tecnologia',
    },
    {
      q: 'Como o Britasol se compara a soluções como Dynacal e outros estabilizantes?',
      a: 'Assim como as tecnologias consagradas no mercado geotécnico (como a ação sobre argilas estudada em produtos como Dynacal), o Britasol atua diretamente na física e química do solo local, eliminando a dependência de pedras e cascalho de jazidas. Seu grande diferencial é a incorporação de nanopartículas de grafeno, que fornecem reforço estrutural tridimensional superior, elevando o CBR em até 5 vezes e garantindo resistência ao esmagamento por cargas pesadas de caminhões bi-trem.',
      category: 'Engenharia',
    },
    {
      q: 'Qual é a economia real comparada ao asfaltamento ou cascalhamento tradicional?',
      a: 'A economia varia de 40% a 60% no custo direto de implantação, pois o Britasol utiliza 100% do solo da própria pista, sem custo de compra, transporte e espalhamento de centenas de caminhões de brita. Além disso, a manutenção anual cai drasticamente, pois a pista não esburaca a cada chuva.',
      category: 'Economia',
    },
    {
      q: 'Quanto tempo demora para liberar o tráfego após a aplicação?',
      a: 'A liberação de tráfego leve ou operacional da obra pode ocorrer em poucas horas após a compactação final. O tráfego pesado e comercial pleno é liberado com segurança em 24 horas, conforme as cadeias poliméricas concluem o ciclo de cura inicial.',
      category: 'Aplicação',
    },
    {
      q: 'O produto é seguro para o meio ambiente e lençol freático?',
      a: 'Sim, totalmente ecológico e atóxico. A formulação tem veículo aquoso, livre de solventes clorados ou derivados nocivos de petróleo. Não lixivia nem contamina mananciais, poços artesianos ou lavouras lindeiras, sendo ideal para áreas de preservação e agronegócio.',
      category: 'Sustentabilidade',
    },
    {
      q: 'Como funciona o fornecimento para exportação para qualquer país?',
      a: 'Atendemos demandas de comércio exterior para qualquer país com fornecimento em galões de 20L, 50L ou IBCs de 1.000L em containers marítimos (Incoterms FOB portos brasileiros ou CIF portos de destino global). Nossa equipe fornece acompanhamento técnico, análise de solo e instruções em português, inglês e francês.',
      category: 'Exportação',
    },
  ],
  en: [
    {
      q: 'What is Britasol and how does it stabilize soil?',
      a: 'Britasol is a concentrated liquid polymeric stabilizer formulated with specialized cross-linking polymers, structural graphene, and dispersing surfactants. When blended with water and sprayed over scarified road soil, it cements fine clay and silt platelets together, driving out free capillary moisture and forming a dense, durable, and hydrophobic road surface.',
      category: 'Technology',
    },
    {
      q: 'How does Britasol compare to technologies like Dynacal and traditional binders?',
      a: 'Similar to validated geotechnical principles (such as those employed in organo-metallic clay modifiers like Dynacal), Britasol interacts directly with local soil mineralogy to eliminate the need for costly imported quarry gravel. Britasol sets itself apart with graphene nanotechnology reinforcement, delivering an extraordinary boost in California Bearing Ratio (CBR) and supreme fatigue resistance under heavy freight axles.',
      category: 'Engineering',
    },
    {
      q: 'What are the cost savings vs conventional asphalt or gravel paving?',
      a: 'Clients achieve 40% to 60% capital savings because Britasol uses 100% of the in-situ roadbed soil, avoiding quarry haulage and aggregate purchase fees. Ongoing grading and maintenance expenses are also slashed by up to 80% due to superior rain resilience.',
      category: 'Economy',
    },
    {
      q: 'How fast can traffic reopen after compaction?',
      a: 'Light operational vehicles can access the treated section in just a few hours. Full heavy commercial transport and mining rigs are safely permitted within 24 hours of final roller compaction.',
      category: 'Application',
    },
    {
      q: 'Is Britasol environmentally safe and non-toxic?',
      a: 'Yes, 100% eco-friendly and non-toxic. Formulated in a clean water base without harmful chlorinated solvents or petroleum distillates. It will not leach into water tables, rivers, or adjacent crop fields.',
      category: 'Sustainability',
    },
    {
      q: 'How do you handle export orders worldwide?',
      a: 'We manage full international container shipping in 20L, 50L drums or 1,000L IBC totes (FOB Brazilian ports or CIF destination ports globally). We provide multilingual technical manuals, lab soil testing, and on-site engineering advisory in English, French, and Portuguese.',
      category: 'Export',
    },
  ],
  fr: [
    {
      q: 'Qu’est-ce que le Britasol et comment agit-il sur le sol?',
      a: 'Le Britasol est un additif liquide concentré associant des polymères en émulsion, du graphène nanostructuré et des tensioactifs dispersants. Dilué dans l’eau et épandu sur le sol scarifié, il pénètre la fraction argileuse, expulse l’eau capillaire et soude les particules fines en une chaussée imperméable, dure et résistante.',
      category: 'Technologie',
    },
    {
      q: 'Comment Britasol se compare-t-il aux solutions comme Dynacal et aux liants classiques?',
      a: 'Dans la lignée des avancées géotechniques reconnues (comme l’action sur les argiles des additifs de type Dynacal), Britasol valorise directement les sols naturels sans importer d’onéreux concassés de carrière. Son atout exclusif réside dans le renfort au graphène, décuplant la portance CBR et conférant une résistance hors du commun aux camions poids lourds.',
      category: 'Ingénierie',
    },
    {
      q: 'Quelles sont les économies par rapport au goudron ou à l’empierrement?',
      a: 'Une économie directe de 40% à 60% sur le coût global du chantier, car le sol en place est réutilisé à 100%. Les dépenses annuelles de reprofilage et de réapprovisionnement en gravier sont également réduites jusqu’à 80%.',
      category: 'Économie',
    },
    {
      q: 'Quel est le délai de réouverture au trafic après compactage?',
      a: 'Le passage de véhicules légers de chantier est possible en quelques heures. Le trafic lourd et commercial complet est réouvert en toute sécurité sous 24 heures.',
      category: 'Application',
    },
    {
      q: 'Le produit est-il sans danger pour l’environnement et les nappes phréatiques?',
      a: 'Oui, totalement atoxique et écologique. Formulé en base aqueuse sans dérivés pétroliers nocifs. Il ne contamine ni les nappes phréatiques, ni les rivières, ni les plantations voisines.',
      category: 'Durabilité',
    },
    {
      q: 'Comment s’organise l’exportation vers tout pays?',
      a: 'Nous assurons l’expédition maritime en conteneurs de bidons de 20L, 50L ou cuves IBC de 1.000L vers tout port mondial (FOB ports brésiliens ou CIF ports internationaux). Nos experts fournissent l’assistance technique, les analyses géotechniques et la documentation en français, anglais et portugais.',
      category: 'Exportation',
    },
  ],
};
