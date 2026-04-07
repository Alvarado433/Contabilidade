export type ItemMenu = {
  titulo: string;
  url: string;
  icone?: string;
  filhos?: ItemMenu[];
};

export type LogoProps = {
  nome: string;
  subtitulo: string;
  url: string;
};

export type BotaoDireitoProps = {
  titulo: string;
  url: string;
  icone?: string;
};

export type SocialItem = {
  url: string;
};

export type NavbarProps = {
  logo: LogoProps;
  itens: ItemMenu[];
  botaoDireito: BotaoDireitoProps;
  social: SocialItem[];
};