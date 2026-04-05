export type EmpresaCompletaData = {
  guia: {
    badge: string;
    titulo: string;
    descricao: string;
    topicos: string[];
  };
  documentos: {
    badge: string;
    titulo: string;
    descricao: string;
    itemPrefixo: string;
    icone?: string;
    lista: string[];
  };
  regimes: {
    badge: string;
    titulo: string;
    descricao: string;
    opcaoPrefixo: string;
    labels: {
      ideal: string;
      vantagens: string;
      cuidado: string;
    };
    tabela: Array<{
      regime: string;
      ideal: string;
      vantagens: string;
      cuidado: string;
    }>;
  };
  simulador: {
    badge: string;
    titulo: string;
    descricao: string;
    custos: Array<{
      item: string;
      valor: string;
    }>;
    mensalidade: {
      titulo: string;
      valor: string;
      obs: string;
    };
  };
  erros: {
    badge: string;
    titulo: string;
    descricao: string;
    lista: string[];
  };
  faq: {
    badge: string;
    titulo: string;
    descricao: string;
    questoes: Array<{
      q: string;
      a: string;
    }>;
  };
  cta: {
    badge: string;
    titulo: string;
    descricao: string;
    botao: {
      texto: string;
      url: string;
    };
  };
};