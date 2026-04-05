const folhaData = {
  folhaPagamento: {
    badge: "Departamento Pessoal",

    titulo: "Gestão de Folha de Pagamento",

    subtitulo:
      "Mais controle, segurança e conformidade para sua empresa crescer sem riscos trabalhistas.",

    descricao:
      "Gerenciamos toda a folha de pagamento da sua empresa com precisão, tecnologia e conformidade com a legislação. Garantimos cálculos corretos, envio de obrigações e total segurança jurídica.",

    fraseDestaque:
      "Reduza erros, evite multas e tenha total controle da sua operação trabalhista.",

    icone: "fa-solid fa-users-gear",

    imagem: {
      src: "/assets/img/servicos/folha-banner.svg",
      alt: "Gestão de folha de pagamento",
    },

    estilo: {
      fundo: "#f4f7fb",
      gradiente: "linear-gradient(135deg, #0d3f86 0%, #1e88ff 100%)",
      tituloSecao: "#0d3f86",
      destaque: "#00c853",
      sombra: "0 15px 40px rgba(0,0,0,0.08)",
    },

    // 🔥 RESUMO RÁPIDO (cards)
    indicadoresResumo: [
      { numero: "100%", texto: "conformidade com legislação trabalhista" },
      { numero: "24h", texto: "prazo médio de suporte" },
      { numero: "Zero erros", texto: "nos cálculos automatizados" },
      { numero: "Alta", texto: "segurança nos dados" },
    ],

    // 🔥 GRÁFICOS
    indicadoresGraficos: {
      faturamentoMensal: [
        { mes: "Jan", valor: 42000 },
        { mes: "Fev", valor: 48000 },
        { mes: "Mar", valor: 52000 },
        { mes: "Abr", valor: 61000 },
        { mes: "Mai", valor: 68000 },
      ],

      distribuicaoCustos: [
        { nome: "Salários", valor: 50 },
        { nome: "Encargos", valor: 25 },
        { nome: "Benefícios", valor: 15 },
        { nome: "Outros", valor: 10 },
      ],

      evolucaoFolha: [
        { ano: "2021", valor: 30000 },
        { ano: "2022", valor: 45000 },
        { ano: "2023", valor: 60000 },
        { ano: "2024", valor: 75000 },
      ],

      desempenhoSetor: [
        { nome: "RH", valor: 85 },
        { nome: "Financeiro", valor: 78 },
        { nome: "Operacional", valor: 90 },
        { nome: "Fiscal", valor: 82 },
      ],
    },

    // 🔥 BENEFÍCIOS
    beneficios: [
      "Processamento completo da folha mensal",
      "Cálculo de férias, 13º salário e rescisões",
      "Gestão de encargos (INSS, FGTS, IR)",
      "Envio de obrigações como eSocial e SEFIP",
      "Redução de erros e retrabalho",
      "Mais segurança jurídica para sua empresa",
    ],

    // 🔥 SERVIÇOS DETALHADOS
    servicosInclusos: [
      {
        titulo: "Admissão de Funcionários",
        descricao:
          "Cadastro completo de novos colaboradores com envio automático ao eSocial.",
        icone: "fa-solid fa-user-plus",
      },
      {
        titulo: "Rescisões Trabalhistas",
        descricao:
          "Cálculo completo e correto de rescisões com todos os encargos legais.",
        icone: "fa-solid fa-file-invoice",
      },
      {
        titulo: "Gestão de Benefícios",
        descricao:
          "Controle de vale transporte, alimentação e outros benefícios.",
        icone: "fa-solid fa-gift",
      },
      {
        titulo: "Encargos e Obrigações",
        descricao:
          "Cálculo e envio de FGTS, INSS, IR e demais obrigações.",
        icone: "fa-solid fa-file-invoice-dollar",
      },
    ],

    // 🔥 DIFERENCIAIS
    diferenciais: [
      {
        titulo: "Automação Inteligente",
        descricao: "Processos automatizados para reduzir erros humanos.",
        icone: "fa-solid fa-robot",
      },
      {
        titulo: "Conformidade Total",
        descricao: "Sempre atualizado com a legislação trabalhista.",
        icone: "fa-solid fa-scale-balanced",
      },
      {
        titulo: "Atendimento Especializado",
        descricao: "Equipe pronta para resolver qualquer demanda.",
        icone: "fa-solid fa-headset",
      },
      {
        titulo: "Segurança de Dados",
        descricao: "Proteção avançada das informações da sua empresa.",
        icone: "fa-solid fa-lock",
      },
    ],

    // 🔥 MOTIVOS (já usado no seu layout)
    motivos: {
      titulo: "Por que escolher nossa gestão de folha?",
      itens: [
        {
          titulo: "Redução de Custos",
          descricao: "Evite multas e gastos desnecessários.",
          icone: "fa-solid fa-chart-line",
        },
        {
          titulo: "Agilidade",
          descricao: "Processos rápidos e eficientes.",
          icone: "fa-solid fa-bolt",
        },
        {
          titulo: "Segurança",
          descricao: "Dados protegidos e confiáveis.",
          icone: "fa-solid fa-shield-halved",
        },
        {
          titulo: "Escalabilidade",
          descricao: "Acompanhe o crescimento da sua empresa.",
          icone: "fa-solid fa-arrow-trend-up",
        },
      ],
    },

    // 🔥 CALL TO ACTION (novo 🔥)
    cta: {
      titulo: "Quer simplificar sua folha de pagamento?",
      descricao:
        "Fale com nossos especialistas e descubra como podemos ajudar sua empresa a crescer com segurança.",
      botao: {
        texto: "Solicitar Consultoria",
        url: "/contato",
      },
    },
  },
};

export default folhaData;