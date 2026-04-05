const fiscalData = {
  fiscal: {
    badge: "Gestão Fiscal Inteligente",

    titulo: "Precisão tributária com tecnologia e automação",

    subtitulo:
      "Controle fiscal completo, redução de custos e conformidade com as legislações atuais.",

    descricao:
      "Oferecemos gestão fiscal completa com automação, análise inteligente e total conformidade com SPED, garantindo segurança, economia e eficiência para sua empresa.",

    destaque:
      "↓ 22% custos fiscais • 32% + rápido no fechamento • Auditoria 24/7",

    icone: "fa-solid fa-chart-pie",

    estilo: {
      fundo: "#f4f7fb",
      gradiente: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
      destaque: "#00c853",
      tituloSecao: "#0d3f86",
      sombra: "0 15px 40px rgba(0,0,0,0.08)",
    },

    // 🔥 SETORES
    setores: [
      {
        nome: "Indústria",
        descricao:
          "Gestão de créditos ICMS/IPI, controle de insumos e SPED Fiscal multi-filiais.",
      },
      {
        nome: "Comércio",
        descricao:
          "Conciliação de notas, PIS/COFINS e relatórios de margem.",
      },
      {
        nome: "Serviços",
        descricao:
          "ISS por município, retenções e integração com contratos.",
      },
      {
        nome: "Tecnologia",
        descricao:
          "Lei do Bem, SaaS e monitoramento fiscal em múltiplas regiões.",
      },
      {
        nome: "Saúde",
        descricao:
          "Faturamento SUS/particular, glosas e compliance completo.",
      },
    ],

    // 🔥 FUNCIONALIDADES
    funcionalidades: [
      "Apuração automatizada (federal, estadual e municipal)",
      "Planejamento tributário com simulação de cenários",
      "Conciliação automática de notas fiscais",
      "Integração com eSocial, DCTFWeb e EFD-Reinf",
      "Relatórios e dashboards em tempo real",
      "Alertas de vencimentos e auditoria preventiva",
    ],

    // 🔥 GRÁFICOS (você pode reutilizar sua lógica)
    indicadoresGraficos: {
      distribuicaoTributos: [
        { nome: "ICMS", valor: 40 },
        { nome: "PIS/COFINS", valor: 25 },
        { nome: "ISS", valor: 20 },
        { nome: "Outros", valor: 15 },
      ],

      economiaMensal: [
        { mes: "Jul", valor: 3.3 },
        { mes: "Ago", valor: 3.7 },
        { mes: "Set", valor: 5.7 },
        { mes: "Out", valor: 6.4 },
        { mes: "Nov", valor: 7.9 },
      ],
    },

    // 🔥 RELATÓRIO (TABELA)
    relatorios: [
      {
        mes: "Julho",
        tributos: "R$ 121.200",
        pagos: "R$ 117.100",
        economia: "3,3%",
        obs: "Automação de guias",
      },
      {
        mes: "Agosto",
        tributos: "R$ 124.500",
        pagos: "R$ 119.800",
        economia: "3,7%",
        obs: "Conciliação NF-e",
      },
      {
        mes: "Setembro",
        tributos: "R$ 127.900",
        pagos: "R$ 120.600",
        economia: "5,7%",
        obs: "Créditos mapeados",
      },
      {
        mes: "Outubro",
        tributos: "R$ 132.400",
        pagos: "R$ 123.900",
        economia: "6,4%",
        obs: "Revisão de regime",
      },
      {
        mes: "Novembro",
        tributos: "R$ 136.200",
        pagos: "R$ 125.400",
        economia: "7,9%",
        obs: "Auditoria completa",
      },
    ],

    // 🔥 REGIMES
    regimes: [
      {
        nome: "Simples Nacional",
        indicado: "ME/EPP",
        vantagem: "Menos burocracia",
        atencao: "Limites de faturamento",
      },
      {
        nome: "Lucro Presumido",
        indicado: "Serviços",
        vantagem: "Cálculo simplificado",
        atencao: "Créditos limitados",
      },
      {
        nome: "Lucro Real",
        indicado: "Grandes empresas",
        vantagem: "Maior economia tributária",
        atencao: "Mais complexo",
      },
    ],

    // 🔥 TECNOLOGIA
    tecnologia: [
      "Criptografia AES-256 e MFA",
      "LGPD + auditoria completa",
      "Integração com ERPs e bancos",
      "Backups automáticos",
      "Monitoramento 24/7",
      "Assinatura digital",
    ],

    // 🔥 NOVO (substitui depoimentos)
    resultados: [
      {
        titulo: "Redução de Custos",
        valor: "↓ 22%",
        descricao: "Economia média após otimização fiscal",
      },
      {
        titulo: "Agilidade",
        valor: "+32%",
        descricao: "Fechamento mais rápido",
      },
      {
        titulo: "Conformidade",
        valor: "100%",
        descricao: "Aderente às obrigações legais",
      },
    ],

    // 🔥 CTA
    cta: {
      titulo: "Pronto para evoluir sua gestão fiscal?",
      descricao:
        "Automatize processos, reduza custos e tenha total controle tributário.",
      botao: {
        texto: "Agendar Consultoria Gratuita",
        url: "/contato",
      },
    },
  },
};

export default fiscalData;