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
};

export default dados;