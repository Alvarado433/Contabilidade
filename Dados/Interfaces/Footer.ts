export type LinkItem = {
  titulo: string;
  icone: string;
  url: string;
};

export type SocialItem = {
  icone: string;
  url: string;
};

export type FooterProps = {
  empresa: {
    logo: string;
    descricao: string;
    endereco: string;
    telefone: string;
    email: string;
  };
  institucional: {
    titulo: string;
    links: LinkItem[];
  };
  atendimento: {
    titulo: string;
    links: LinkItem[];
  };
  social: {
    titulo: string;
    descricao: string;
    links: SocialItem[];
  };
  rodape: {
    texto: string;
    politicaLabel: string;
    politicaUrl: string;
    assinatura: string;
  };
  botoes?: {
    topo?: {
      icone?: string;
      ariaLabel?: string;
    };
  };
};