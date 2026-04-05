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