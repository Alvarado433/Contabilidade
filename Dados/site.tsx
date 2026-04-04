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
      "Na Visacont Contabilidade oferecemos assessoria completa para abertura e legalização da sua empresa.",
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
      titulo: "Guia Completo de Abertura de Empresa",
      descricao:
        "Tudo o que você precisa saber para abrir sua empresa da forma correta.",
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

  bannerContabilidade: {
    titulo: "Contabilidade Empresarial",
    subtitulo: "Gestão contábil moderna para empresas.",
    descricao:
      "Na Visacont Contabilidade oferecemos suporte completo para seu negócio.",
    imagem: "/assets/img/servicos/contabilidade-banner.svg",
  },
};

export default dados;