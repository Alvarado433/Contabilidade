export type ServicoItem = {
  icone: string;
  titulo: string;
  texto: string;
  lista?: string[];
  url: string;
};

export type ServicosData = {
  titulo: string;
  descricao: string;
  itens: ServicoItem[];
};

export type RenderServicosProps = {
  servicos: ServicosData;
};