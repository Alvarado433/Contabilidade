"use client";

import { useEffect, useMemo, useState } from "react";
import Icone from "@/utils/Icones/icone";
import bannerCarrossel from "@/Dados/Banner/bannercarrossel";

type Botao = {
  texto: string;
  icone?: string;
  url: string;
};

type Visual = {
  gradiente?: string;
  corDestaque?: string;
  corTexto?: string;
  corTextoSuave?: string;
};

type CardEspecialista = {
  tipo: "especialista";
  nome: string;
  cargo: string;
  foto: string;
  alt?: string;
  badge?: string;
};

type CardMetricas = {
  tipo: "metricas";
  badge?: string;
  metricas: string[];
};

type CardTabela = {
  tipo: "tabela";
  badge?: string;
  tabela: {
    titulo: string;
    descricao: string;
  }[];
};

type Card = CardEspecialista | CardMetricas | CardTabela;

type Slide = {
  id: number;
  tag?: string;
  titulo: string;
  destaque?: string;
  descricao: string;
  botao: Botao;
  visual?: Visual;
  card: Card;
};

export default function Carrossel() {
  const slides = useMemo(() => bannerCarrossel as Slide[], []);
  const [ativo, setAtivo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAtivo((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[ativo];

  const partesTitulo = slide.destaque
    ? slide.titulo.split(slide.destaque)
    : [slide.titulo];

  const proximo = () => {
    setAtivo((prev) => (prev + 1) % slides.length);
  };

  const anterior = () => {
    setAtivo((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="banner-carrossel"
      style={{
        background:
          slide.visual?.gradiente ||
          "linear-gradient(135deg, #0a3d91 0%, #0f5fe0 100%)",
      }}
    >
      <div className="banner-carrossel__container">
        <div className="banner-carrossel__conteudo">
          {slide.tag ? (
            <span className="banner-carrossel__tag">{slide.tag}</span>
          ) : null}

          <h2 className="banner-carrossel__titulo">
            {partesTitulo[0]}
            {slide.destaque ? (
              <span className="banner-carrossel__titulo-destaque">
                {slide.destaque}
              </span>
            ) : null}
            {partesTitulo[1] ?? ""}
          </h2>

          <p className="banner-carrossel__descricao">{slide.descricao}</p>

          <a href={slide.botao.url} className="banner-carrossel__botao">
            {slide.botao.icone ? (
              <Icone
                nome={slide.botao.icone}
                className="banner-carrossel__botao-icone"
              />
            ) : null}
            <span>{slide.botao.texto}</span>
          </a>

          <div className="banner-carrossel__controles">
            <button
              type="button"
              className="banner-carrossel__arrow"
              onClick={anterior}
              aria-label="Slide anterior"
            >
              ‹
            </button>

            <div className="banner-carrossel__dots">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`banner-carrossel__dot ${
                    index === ativo ? "is-active" : ""
                  }`}
                  onClick={() => setAtivo(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="banner-carrossel__arrow"
              onClick={proximo}
              aria-label="Próximo slide"
            >
              ›
            </button>
          </div>
        </div>

        <div className="banner-carrossel__card-area">
          {slide.card.tipo === "especialista" ? (
            <div className="banner-carrossel__card banner-carrossel__card--especialista">
              {slide.card.badge ? (
                <span className="banner-carrossel__badge">
                  {slide.card.badge}
                </span>
              ) : null}

              <div className="banner-carrossel__foto-wrap">
                <img
                  src={slide.card.foto}
                  alt={slide.card.alt || slide.card.nome}
                  className="banner-carrossel__foto"
                />
              </div>

              <div className="banner-carrossel__info">
                <h3>{slide.card.nome}</h3>
                <p>{slide.card.cargo}</p>
              </div>
            </div>
          ) : null}

          {slide.card.tipo === "metricas" ? (
            <div className="banner-carrossel__card banner-carrossel__card--metricas">
              {slide.card.badge ? (
                <span className="banner-carrossel__badge">
                  {slide.card.badge}
                </span>
              ) : null}

              <div className="banner-carrossel__metricas">
                {slide.card.metricas.map((metrica, index) => (
                  <div key={`${metrica}-${index}`} className="banner-carrossel__metrica-item">
                    <span className="banner-carrossel__metrica-icon">•</span>
                    <span>{metrica}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {slide.card.tipo === "tabela" ? (
            <div className="banner-carrossel__card banner-carrossel__card--tabela">
              {slide.card.badge ? (
                <span className="banner-carrossel__badge">
                  {slide.card.badge}
                </span>
              ) : null}

              <div className="banner-carrossel__tabela">
                {slide.card.tabela.map((item, index) => (
                  <div key={`${item.titulo}-${index}`} className="banner-carrossel__linha">
                    <h4>{item.titulo}</h4>
                    <p>{item.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}