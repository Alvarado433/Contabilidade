const menu = {
  logo: {
    nome: "Visacont",
    subtitulo: "Contabilidade Empresarial",
    url: "/",
  },

  itens: [
    {
      titulo: "Início",
      url: "/",
      icone: "fa-solid fa-house",
    },
    {
      titulo: "Serviços",
      url: "#",
      icone: "fa-solid fa-briefcase",
      filhos: [
        {
          titulo: "Abertura de Empresa",
          url: "/servicos/abertura",
          icone: "fa-solid fa-building",
        },
        {
          titulo: "Contabilidade Mensal",
          url: "/servicos/mensal",
          icone: "fa-solid fa-calculator",
        },
        {
          titulo: "Imposto de Renda",
          url: "/servicos/imposto",
          icone: "fa-solid fa-file-invoice-dollar",
        },
        {
          titulo: "Assessoria Fiscal",
          url: "/servicos/fiscal",
          icone: "fa-solid fa-chart-line",
        },
      ],
    },
    {
      titulo: "Ações Sociais",
      url: "#",
      icone: "fa-solid fa-users",
      filhos: [
        {
          titulo: "Projetos Comunitários",
          url: "/acoes-sociais/projetos",
          icone: "fa-solid fa-users",
        },
        {
          titulo: "Campanhas de Doação",
          url: "/acoes-sociais/doacoes",
          icone: "fa-solid fa-handshake",
        },
        {
          titulo: "Voluntariado",
          url: "/acoes-sociais/voluntariado",
          icone: "fa-solid fa-user-group",
        },
        {
          titulo: "Relatórios de Impacto",
          url: "/acoes-sociais/relatorios",
          icone: "fa-solid fa-blog",
        },
      ],
    },
    {
      titulo: "Sobre Nós",
      url: "/sobre",
      icone: "fa-solid fa-circle-info",
    },
    {
      titulo: "Blog",
      url: "/blog",
      icone: "fa-solid fa-blog",
    },
    {
      titulo: "Contato",
      url: "/contato",
      icone: "fa-solid fa-envelope",
    },
  ],

  botaoDireito: {
    titulo: "Consultoria",
    url: "/consultoria",
    icone: "fa-solid fa-handshake",
  },

  social: [
    { url: "https://wa.me/5511999990000" },
    { url: "https://facebook.com" },
    { url: "https://instagram.com" },
    { url: "https://linkedin.com" },
  ],
};

export default menu;