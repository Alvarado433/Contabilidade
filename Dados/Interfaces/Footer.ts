export interface FooterLink {
  titulo?: string;
  icone: string;
  url: string;
}

export interface FooterData {
  empresa: {
    logo: string;
    descricao: string;
    endereco: string;
    telefone: string;
    email: string;
  };
  institucional: {
    titulo: string;
    links: FooterLink[];
  };
  atendimento: {
    titulo: string;
    links: FooterLink[];
  };
  social: {
    titulo: string;
    descricao: string;
    links: FooterLink[];
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
}

export interface FooterProps {
  data: FooterData;
}