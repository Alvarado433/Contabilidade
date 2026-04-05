const bannerCarrossel = [
  {
    id: 1,
    tag: "Abertura de Empresa",
    titulo: "Abra sua empresa sem burocracia e com segurança",
    destaque: "sem burocracia",
    descricao:
      "Cuidamos de toda a abertura e regularização do seu negócio com agilidade, atendimento especializado e processo 100% digital.",

    botao: {
      texto: "Começar agora",
      icone: "fa-solid fa-building",
      url: "/contato",
    },

    visual: {
      gradiente: "linear-gradient(135deg, #0a3d91 0%, #0f5fe0 100%)",
      corDestaque: "#ffce32",
      corTexto: "#ffffff",
      corTextoSuave: "#dbe7f7",
    },

    card: {
      tipo: "especialista",
      nome: "Atendimento Especializado",
      cargo: "Abertura e Legalização",
      foto: "/img/especialista/abertura.png",
      alt: "Especialista em abertura de empresa",
      badge: "Processo digital",
    },
  },

  {
    id: 2,
    tag: "Planejamento Tributário",
    titulo: "Reduza seus impostos de forma legal e inteligente",
    destaque: "legal e inteligente",
    descricao:
      "Analisamos o enquadramento ideal da sua empresa para reduzir custos tributários com segurança, estratégia e conformidade fiscal.",

    botao: {
      texto: "Quero economizar",
      icone: "fa-solid fa-calculator",
      url: "/servicos",
    },

    visual: {
      gradiente: "linear-gradient(135deg, #082e70 0%, #0d4fc2 100%)",
      corDestaque: "#ffce32",
      corTexto: "#ffffff",
      corTextoSuave: "#dbe7f7",
    },

    card: {
      tipo: "metricas",
      badge: "Economia com estratégia",
      metricas: [
        "+ eficiência tributária",
        "análise personalizada",
        "atendimento consultivo",
      ],
    },
  },

  {
    id: 3,
    tag: "Contabilidade Empresarial",
    titulo: "Tenha controle financeiro e contábil para crescer",
    destaque: "crescer",
    descricao:
      "Organização contábil, relatórios e suporte especializado para sua empresa evoluir com mais clareza, segurança e gestão profissional.",

    botao: {
      texto: "Ver soluções",
      icone: "fa-solid fa-chart-line",
      url: "/servicos",
    },

    visual: {
      gradiente: "linear-gradient(135deg, #06307d 0%, #1467f5 100%)",
      corDestaque: "#ffce32",
      corTexto: "#ffffff",
      corTextoSuave: "#dbe7f7",
    },

    card: {
      tipo: "tabela",
      badge: "Soluções empresariais",
      tabela: [
        {
          titulo: "Fiscal",
          descricao: "Apuração e controle de impostos",
        },
        {
          titulo: "Contábil",
          descricao: "Relatórios e organização financeira",
        },
        {
          titulo: "Consultivo",
          descricao: "Suporte estratégico para decisões",
        },
      ],
    },
  },
];

export default bannerCarrossel;