"use client";

import Icone from "@/utils/Icones/icone";

type BotaoProps = {
  texto: string;
  icone?: string;
  url: string;
};

type EspecialistaProps = {
  nome: string;
  cargo: string;
  foto: string;
  alt?: string;
  badge?: string;
};

type VisualProps = {
  gradiente?: string;
  corDestaque?: string;
  corTexto?: string;
  corTextoSuave?: string;
  brilho?: boolean;
  glass?: boolean;
};

type BannerDestaqueProps = {
  tag?: string;
  titulo: string;
  destaque?: string;
  descricao: string;
  botao: BotaoProps;
  especialista: EspecialistaProps;
  visual?: VisualProps;
};

type Props = {
  banner: BannerDestaqueProps;
};

export default function EspecialistaDestaque({ banner }: Props) {
  const partesTitulo = banner.destaque
    ? banner.titulo.split(banner.destaque)
    : [banner.titulo];

  return (
    <section
      className="especialista-destaque"
      style={{
        background:
          banner.visual?.gradiente ||
          "linear-gradient(135deg, #0a3d91 0%, #0f5fe0 100%)",
      }}
    >
      <div className="especialista-destaque__container">
        <div className="especialista-destaque__card">
          {banner.especialista.badge ? (
            <span className="especialista-destaque__badge">
              {banner.especialista.badge}
            </span>
          ) : null}

          <div className="especialista-destaque__foto-wrap">
            <img
              src={banner.especialista.foto}
              alt={
                banner.especialista.alt || `Foto de ${banner.especialista.nome}`
              }
              className="especialista-destaque__foto"
            />
          </div>

          <div className="especialista-destaque__info">
            <h3>{banner.especialista.nome}</h3>
            <p>{banner.especialista.cargo}</p>
          </div>
        </div>

        <div className="especialista-destaque__conteudo">
          {banner.tag ? (
            <span className="especialista-destaque__tag">{banner.tag}</span>
          ) : null}

          <h2 className="especialista-destaque__titulo">
            {partesTitulo[0]}
            {banner.destaque ? (
              <span className="especialista-destaque__titulo-destaque">
                {banner.destaque}
              </span>
            ) : null}
            {partesTitulo[1] ?? ""}
          </h2>

          <p className="especialista-destaque__descricao">
            {banner.descricao}
          </p>

          <a
            href={banner.botao.url}
            className="especialista-destaque__botao"
          >
            {banner.botao.icone ? (
              <Icone
                nome={banner.botao.icone}
                className="especialista-destaque__botao-icone"
              />
            ) : null}
            <span>{banner.botao.texto}</span>
          </a>
        </div>
      </div>
    </section>
  );
}