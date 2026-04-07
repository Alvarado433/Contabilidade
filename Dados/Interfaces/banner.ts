export type BannerContabilidadeData = {
  titulo: string;
  subtitulo: string;
  descricao: string;
  beneficios: string[];
  destaques: string[];
  imagem: string;
};

export type BannerEmpresaData = {
  tag?: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  cores?: {
    gradiente?: string;
    botao?: string;
  };
  botoes?: {
    principal?: {
      texto?: string;
      url?: string;
    };
    secundario?: {
      texto?: string;
      url?: string;
    };
  };
};



export type ContabilidadeBannerProps = {
  banner: BannerContabilidadeData;
};

export type BannerButton = {
  texto: string;
  icone: string;
  url: string;
  classe?: string;
};

export type BannerData = {
  titulo: string;
  descricao: string;
  botoes: BannerButton[];
  imagem: {
    src: string;
    alt: string;
  };
};

export type BannerProps = {
  banner: BannerData;
};