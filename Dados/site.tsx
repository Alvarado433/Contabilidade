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
      { titulo: "Início", url: "/" },
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
      { titulo: "Sobre Nós", url: "/sobre" },
      { titulo: "Blog", url: "/blog" },
      { titulo: "Contato", url: "/contato" },
    ],

    botaoDireito: {
      titulo: "Consultoria",
      url: "/consultoria",
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
        texto: "Assessoria completa para abertura da sua empresa.",
        url: "/servicos/abertura",
      },
      {
        icone: "fa-solid fa-calculator",
        titulo: "Contabilidade",
        texto: "Gestão contábil moderna e estratégica.",
        url: "/servicos/contabilidade",
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
      { url: "https://wa.me/5511999990000" },
      { url: "https://facebook.com" },
      { url: "https://instagram.com" },
      { url: "https://linkedin.com" },
    ],
  },
};

export default dados;