const footerData = {
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
};

export default footerData;