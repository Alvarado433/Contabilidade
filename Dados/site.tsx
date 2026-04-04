const dados = {
  configuracao: {
    titulo: "Visacont",
    descricao: "Desenvolvido por AlvaradoTech",
    idioma: "pt-br",
  },

  topo: {
    email: "contato@visacont.com.br",
    telefone: "(11) 99999-9999",
    whatsapp: "5511999999999",
  },

  menu: {
    logo: {
      nome: "Visacont",
      subtitulo: "Contabilidade Empresarial",
      url: "/",
    },

    itens: [
      {
        titulo: "Início",
        url: "/",
      },
      {
        titulo: "Serviços",
        url: "#",
        filhos: [
          { titulo: "Abertura de Empresa", url: "/servicos/abertura" },
          { titulo: "Contabilidade Mensal", url: "/servicos/mensal" },
          { titulo: "Imposto de Renda", url: "/servicos/imposto" },
          { titulo: "Assessoria Fiscal", url: "/servicos/fiscal" },
        ],
      },
      {
        titulo: "Ações Sociais",
        url: "#",
        filhos: [
          { titulo: "Projetos Comunitários", url: "/acoes-sociais/projetos" },
          { titulo: "Campanhas de Doação", url: "/acoes-sociais/doacoes" },
          { titulo: "Voluntariado", url: "/acoes-sociais/voluntariado" },
          { titulo: "Relatórios de Impacto", url: "/acoes-sociais/relatorios" },
        ],
      },
      {
        titulo: "Sobre Nós",
        url: "/sobre",
      },
      {
        titulo: "Blog",
        url: "/blog",
      },
      {
        titulo: "Contato",
        url: "/contato",
      },
    ],

    botaoDireito: {
      titulo: "Consultoria",
      url: "/consultoria",
    },
  },

  banner: {
    titulo: "Soluções Contábeis para o Seu Negócio",
    descricao:
      "Oferecemos serviços contábeis completos para empresas de todos os tamanhos, com qualidade, agilidade e transparência.",
    botoes: [
      {
        texto: "Abrir Empresa",
        icone: "fa-solid fa-building",
        url: "/abrir-empresa",
        classe: "btn btn-warning btn-lg px-4 py-2 rounded-pill fw-semibold",
      },
      {
        texto: "Fale Conosco",
        icone: "fa-solid fa-envelope",
        url: "/contato",
        classe: "btn btn-outline-light btn-lg px-4 py-2 rounded-pill",
      },
    ],
    imagem: {
      src: "https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2562325_1280.jpg",
      alt: "Profissional de contabilidade",
    },
  },

  bannerEmpresa: {
    tag: "Serviços Empresariais",
    titulo: "Abertura de Empresa",
    subtitulo:
      "Transforme sua ideia em um negócio de sucesso com segurança e agilidade.",
    descricao:
      "Na Visacont Contabilidade oferecemos assessoria completa para abertura e legalização da sua empresa. Processo 100% digital, rápido e transparente — ideal para quem quer empreender sem complicações.",

    cores: {
      gradiente: "linear-gradient(135deg, #004aad, #007bff)",
      icone: "#007bff",
      botao: "#004aad",
    },

    botoes: {
      principal: {
        texto: "Solicitar atendimento",
        url: "/contato",
      },
      secundario: {
        texto: "Ver detalhes",
        url: "#conteudo",
      },
    },
  },

  renderServicos: {
    titulo: "Nossos Serviços",
    descricao:
      "Soluções contábeis completas para empresas que buscam agilidade, segurança e eficiência.",
    itens: [
      {
        icone: "fa-solid fa-building",
        titulo: "Abertura de Empresa",
        texto:
          "Assessoria completa para abertura e legalização da sua empresa — sem burocracia e com agilidade.",
        lista: [
          "Documentação rápida",
          "Consultoria personalizada",
          "Suporte total",
        ],
        url: "/servicos/abertura",
      },
      {
        icone: "fa-solid fa-calculator",
        titulo: "Contabilidade",
        texto:
          "Gestão contábil moderna e estratégica para manter sua empresa em conformidade e rentável.",
        lista: [
          "Análises detalhadas",
          "Relatórios periódicos",
          "Planejamento tributário",
        ],
        url: "/servicos/contabilidade",
      },
      {
        icone: "fa-solid fa-users-gear",
        titulo: "Folha de Pagamento",
        texto:
          "Processamento completo da folha, com segurança e conformidade legal.",
        lista: [
          "Cálculos corretos",
          "Gestão de benefícios",
          "Suporte aos funcionários",
        ],
        url: "/servicos/folha",
      },
      {
        icone: "fa-solid fa-file-invoice-dollar",
        titulo: "Departamento Fiscal",
        texto:
          "Controle e apuração fiscal com organização e transparência total.",
        lista: [
          "Apuração de impostos",
          "Declarações fiscais",
          "Orientação tributária",
        ],
        url: "/servicos/fiscal",
      },
    ],
  },

  empresaCompleta: {
    guia: {
      badge: "Abertura e Legalização",
      titulo: "Guia Completo de Abertura de Empresa",
      descricao:
        "Tudo o que você precisa saber para abrir sua empresa da forma correta: documentos, regras, prazos, custos e passos detalhados.",
      topicos: [
        "Tipos de empresa (MEI, ME, EPP, SLU, LTDA)",
        "Documentos necessários",
        "Custos e prazos médios",
        "Regimes tributários e diferenças",
        "Checklist de abertura",
        "Erros comuns que atrapalham a legalização",
      ],
    },

    documentos: {
      badge: "Documentação",
      titulo: "Checklist de Documentos Necessários",
      descricao:
        "Antes de iniciar o processo, certifique-se de ter toda a documentação em mãos.",
      itemPrefixo: "Documento",
      icone: "✓",
      lista: [
        "RG e CPF (dos sócios)",
        "Comprovante de endereço",
        "Título da empresa (nome fantasia)",
        "Atividade principal (CNAE)",
        "Participação societária (em caso de LTDA)",
        "Endereço fiscal ou comercial",
      ],
    },

    regimes: {
      badge: "Tributação",
      titulo: "Qual é o melhor regime tributário?",
      descricao:
        "Compare os regimes mais comuns e entenda qual opção pode fazer mais sentido para o seu negócio.",
      opcaoPrefixo: "Opção",
      labels: {
        ideal: "Ideal para",
        vantagens: "Vantagens",
        cuidado: "Atenção",
      },
      tabela: [
        {
          regime: "Simples Nacional",
          ideal: "Micro e pequenas empresas",
          vantagens: "Unificação de tributos, menos burocracia",
          cuidado: "Tabela varia por anexo e receita",
        },
        {
          regime: "Lucro Presumido",
          ideal: "Empresas com margens elevadas",
          vantagens: "Cálculo simplificado",
          cuidado: "Não aproveita créditos",
        },
        {
          regime: "Lucro Real",
          ideal: "Empresas grandes ou tributação alta",
          vantagens: "Créditos fiscais",
          cuidado: "Alta complexidade",
        },
      ],
    },

    simulador: {
      badge: "Custos Iniciais",
      titulo: "Simulação de Custos Iniciais",
      descricao:
        "Valores estimados para abrir sua empresa (podem variar por estado).",
      custos: [
        {
          item: "Registro na Junta Comercial",
          valor: "R$ 180 – R$ 450",
        },
        {
          item: "Emissão de Certificado Digital",
          valor: "R$ 150 – R$ 250",
        },
        {
          item: "Contrato Social",
          valor: "R$ 0 – R$ 800 (dependendo do tipo)",
        },
        {
          item: "Legalização e Alvarás",
          valor: "R$ 0 – R$ 400",
        },
      ],
      mensalidade: {
        titulo: "Custo Mensal Após Abrir a Empresa",
        valor: "R$ 150 – R$ 600",
        obs: "Depende da atividade e quantidade de funcionários.",
      },
    },

    erros: {
      badge: "Atenção",
      titulo: "Erros Comuns ao Abrir uma Empresa",
      descricao:
        "Evite retrabalho, atrasos e custos desnecessários durante a legalização da empresa.",
      lista: [
        "Escolher o CNAE errado e pagar impostos mais altos",
        "Abrir no regime errado e ter prejuízos sem necessidade",
        "Não registrar endereço fiscal corretamente",
        "Falta de contrato societário bem definido",
        "Não prever crescimento do negócio",
        "Esquecer obrigações após o CNPJ ativo",
      ],
    },

    faq: {
      badge: "Perguntas Frequentes",
      titulo: "Perguntas Frequentes",
      descricao:
        "Respostas rápidas para as dúvidas mais comuns de quem está começando.",
      questoes: [
        {
          q: "Quanto tempo leva para abrir uma empresa?",
          a: "Entre 24h e 5 dias úteis, dependendo da Junta Comercial.",
        },
        {
          q: "Posso abrir empresa sozinho?",
          a: "Sim. Modelos SLU e MEI permitem 1 único sócio.",
        },
        {
          q: "Preciso de contador?",
          a: "Sim, exceto MEI. Para empresas maiores, é obrigatório.",
        },
        {
          q: "Posso usar meu endereço residencial?",
          a: "Depende da sua prefeitura e do tipo de atividade.",
        },
      ],
    },

    cta: {
      badge: "Próximo passo",
      titulo: "Pronto para abrir sua empresa de forma correta?",
      descricao:
        "Nossa equipe cuida de 100% do processo para você empreender com segurança desde o primeiro dia.",
      botao: {
        texto: "Começar Agora",
        url: "/contato",
      },
    },
  },

  rodape: {
    contato: {
      email: "contato@visacont.com.br",
      telefone: "(11) 99999-0000",
    },

    social: [
      {
        url: "https://wa.me/5511999990000",
      },
      {
        url: "https://facebook.com",
      },
      {
        url: "https://instagram.com",
      },
      {
        url: "https://linkedin.com",
      },
    ],
  },

  footer: {
    empresa: {
      logo: "/assets/img/Visacont.png",
      descricao:
        "A <strong>Visacont Contabilidade</strong> oferece serviços contábeis inteligentes e confiáveis, ajudando empresas a crescer com segurança e transparência.",
      endereco: "Rua das Empresas, 123 - São Paulo/SP",
      telefone: "(11) 99999-9999",
      email: "contato@visacont.com.br",
    },

    institucional: {
      titulo: "Institucional",
      links: [
        {
          titulo: "Início",
          icone: "fa-solid fa-house",
          url: "/",
        },
        {
          titulo: "Sobre Nós",
          icone: "fa-solid fa-users",
          url: "/sobre",
        },
        {
          titulo: "Serviços",
          icone: "fa-solid fa-briefcase",
          url: "/servicos",
        },
        {
          titulo: "Política de Privacidade",
          icone: "fa-solid fa-shield-halved",
          url: "/politica",
        },
      ],
    },

    atendimento: {
      titulo: "Atendimento",
      links: [
        {
          titulo: "Equipe",
          icone: "fa-solid fa-user-group",
          url: "/equipe",
        },
        {
          titulo: "Fale Conosco",
          icone: "fa-solid fa-envelope",
          url: "/contato",
        },
        {
          titulo: "Trabalhe Conosco",
          icone: "fa-solid fa-briefcase",
          url: "/trabalhe-conosco",
        },
      ],
    },

    social: {
      titulo: "Conecte-se Conosco",
      descricao:
        "Acompanhe nossas novidades e conteúdos exclusivos nas redes sociais.",
      links: [
        {
          icone: "fa-brands fa-facebook-f",
          url: "https://facebook.com/visacont",
        },
        {
          icone: "fa-brands fa-instagram",
          url: "https://instagram.com/visacont",
        },
        {
          icone: "fa-brands fa-linkedin-in",
          url: "https://linkedin.com/company/visacont",
        },
      ],
    },

    rodape: {
      texto:
        "© 2026 <strong>Visacont Contabilidade</strong> — Todos os direitos reservados.",
      politicaLabel: "Política de Privacidade",
      politicaUrl: "/politica",
      assinatura: "Desenvolvido por <strong>AlvaradoTech</strong>",
    },

    botoes: {
      topo: {
        icone: "fa-solid fa-arrow-up",
        ariaLabel: "Voltar ao topo",
      },
    },


  },

  bannerContabilidade: {
    titulo: "Contabilidade Empresarial",

    subtitulo:
      "Gestão contábil moderna para empresas que buscam segurança e crescimento.",

    descricao:
      "Na <strong>Visacont Contabilidade</strong>, oferecemos suporte completo para organização financeira, cumprimento fiscal e planejamento estratégico do seu negócio.",

    beneficios: [
      "Planejamento tributário estratégico",
      "Relatórios financeiros claros",
      "Atendimento com contador dedicado",
    ],

    destaques: [
      "15+ anos de experiência",
      "500+ empresas atendidas",
      "Atendimento 100% digital",
    ],

    imagem: "/assets/img/servicos/contabilidade-banner.svg",
  },
};

export default dados;