const bannerData = {
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

  bannerContabilidade: {
    titulo: "Contabilidade Empresarial",
    subtitulo: "Gestão contábil moderna para empresas.",
    descricao:
      "Na Visacont Contabilidade oferecemos suporte completo para seu negócio.",
    
    // 🔥 CORRIGIDO (evita erro do TypeScript)
    beneficios: [
      "Planejamento tributário estratégico",
      "Relatórios financeiros detalhados",
      "Atendimento com contador dedicado",
    ],

    destaques: [
      "Mais de 10 anos de experiência",
      "Atendimento 100% digital",
      "Equipe especializada",
    ],

    imagem: "/assets/img/servicos/contabilidade-banner.svg",
  },
};

export default bannerData;