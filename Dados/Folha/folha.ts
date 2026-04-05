const folhaData = {
  folhaPagamento: {
    badge: "Departamento Pessoal",

    titulo: "Folha de Pagamento",

    subtitulo:
      "Mais segurança, organização e conformidade para a gestão trabalhista da sua empresa.",

    descricao:
      "Gestão completa da folha de pagamento com tecnologia, precisão e conformidade. Cuidamos de cálculos salariais, encargos, benefícios e obrigações trabalhistas para que sua empresa tenha mais tranquilidade, produtividade e segurança jurídica.",

    fraseDestaque:
      "Reduza erros operacionais e mantenha sua empresa sempre em dia com as exigências legais.",

    beneficios: [
      "Processamento completo da folha mensal",
      "Cálculo de férias, 13º salário e rescisões",
      "Gestão de encargos e obrigações acessórias",
      "Mais controle, agilidade e segurança trabalhista",
    ],

    destaques: [
      "Atendimento especializado",
      "Rotinas trabalhistas organizadas",
      "Conformidade com a legislação",
    ],

    indicadoresResumo: [
      {
        numero: "185.0",
        texto: "Empresas Atendidas",
      },
      {
        numero: "12.3",
        texto: "Milhões em Folha Gerida",
      },
      {
        numero: "98.0",
        texto: "% Obrigações no Prazo",
      },
      {
        numero: "5",
        texto: "Média de Dias por Fechamento",
      },
    ],

    indicadoresGraficos: {
      faturamentoMensal: [
        { mes: "Jan", valor: 70 },
        { mes: "Fev", valor: 82 },
        { mes: "Mar", valor: 95 },
        { mes: "Abr", valor: 110 },
        { mes: "Mai", valor: 128 },
        { mes: "Jun", valor: 150 },
      ],

      distribuicaoCustos: [
        { nome: "Folha", valor: 42 },
        { nome: "Impostos", valor: 26 },
        { nome: "Serviços", valor: 20 },
        { nome: "Outros", valor: 12 },
      ],

      evolucaoFolha: [
        { ano: "2020", valor: 220 },
        { ano: "2021", valor: 255 },
        { ano: "2022", valor: 290 },
        { ano: "2023", valor: 340 },
        { ano: "2024", valor: 395 },
      ],

      desempenhoSetor: [
        { nome: "Financeiro", valor: 92 },
        { nome: "DP", valor: 86 },
        { nome: "Fiscal", valor: 96 },
        { nome: "RH", valor: 88 },
        { nome: "Tecnologia", valor: 82 },
      ],
    },

    solucoesPremium: {
      titulo: "Soluções Contábeis Premium",
      itens: [
        {
          icone: "fa-solid fa-file-invoice-dollar",
          titulo: "Gestão Completa da Folha",
          descricao:
            "Automação total do processamento, com integração bancária e relatórios estratégicos.",
        },
        {
          icone: "fa-solid fa-scale-balanced",
          titulo: "Compliance e Obrigações",
          descricao:
            "eSocial, INSS, FGTS, DCTFWeb, envio seguro e atualização no prazo.",
        },
        {
          icone: "fa-solid fa-briefcase-medical",
          titulo: "Benefícios e Saúde",
          descricao:
            "Gestão de planos, auxílios e benefícios com inteligência para o sistema.",
        },
        {
          icone: "fa-solid fa-user-tie",
          titulo: "Consultoria Fiscal Estratégica",
          descricao:
            "Planejamento tributário personalizado com redução de custos e maior lucratividade.",
        },
      ],
    },

    motivos: {
      titulo: "Por que escolher a Visacont?",
      itens: [
        {
          icone: "fa-solid fa-cloud",
          titulo: "100% Digital",
          descricao:
            "Documentos, folha e holerites em nuvem, acessíveis 24h/dia.",
        },
        {
          icone: "fa-solid fa-lock",
          titulo: "Segurança de Dados",
          descricao:
            "Criptografia corporativa e backup automatizado diário.",
        },
        {
          icone: "fa-solid fa-robot",
          titulo: "Automação Inteligente",
          descricao:
            "Redução de erros, agilidade operacional e apoio contábil.",
        },
        {
          icone: "fa-solid fa-headset",
          titulo: "Suporte Humanizado",
          descricao:
            "Equipe especializada pronta para atender sua empresa.",
        },
      ],
    },

    icone: "fa-solid fa-users-gear",

    imagem: {
      src: "/assets/img/servicos/folha-banner.svg",
      alt: "Serviço de folha de pagamento",
    },

    estilo: {
      gradiente: "linear-gradient(135deg, #0d3f86 0%, #1e88ff 100%)",
      destaque: "#16c784",
      texto: "#ffffff",
      textoSuave: "rgba(255,255,255,0.88)",
      card: "#ffffff",
      fundo: "#eef3fb",
      tituloSecao: "#1450c8",
      sombra: "0 18px 40px rgba(44, 83, 160, 0.12)",
    },
  },
};

export default folhaData;