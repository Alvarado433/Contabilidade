export type Botao = {
  texto: string;
  icone?: string;
  url: string;
};

export type CardEspecialista = {
  tipo: "especialista";
  nome: string;
  cargo: string;
  foto: string;
  alt?: string;
  badge?: string;
};

export type CardMetricas = {
  tipo: "metricas";
  badge?: string;
  metricas: string[];
};

export type CardTabela = {
  tipo: "tabela";
  badge?: string;
  tabela: {
    titulo: string;
    descricao: string;
  }[];
};

export type Card = CardEspecialista | CardMetricas | CardTabela;

export type Slide = {
  id: number;
  tag?: string;
  titulo: string;
  destaque?: string;
  descricao: string;
  botao: Botao;
  card: Card;
};
