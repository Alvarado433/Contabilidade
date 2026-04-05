"use client";

import { useMemo, useState } from "react";
import Icone from "@/utils/Icones/icone";
import bannerCarrossel from "@/Dados/Banner/bannercarrossel";

type Botao = {
  texto: string;
  icone?: string;
  url: string;
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
  card: Card;
};

export default function Carrossel() {
  const cards = useMemo(() => bannerCarrossel as Slide[], []);
  const [inicio, setInicio] = useState(0);

  const itensPorVez = 3;

  const proximo = () => {
    if (inicio + itensPorVez < cards.length) {
      setInicio((prev) => prev + 1);
    }
  };

  const anterior = () => {
    if (inicio > 0) {
      setInicio((prev) => prev - 1);
    }
  };

  const cardsVisiveis = cards.slice(inicio, inicio + itensPorVez);

  const renderConteudoCard = (item: Slide) => {
    if (item.card.tipo === "especialista") {
      return (
        <div className="card-carousel__especialista">
          {item.card.badge ? (
            <span className="card-carousel__badge">{item.card.badge}</span>
          ) : null}

          <div className="card-carousel__fotoWrap">
            <img
              src={item.card.foto}
              alt={item.card.alt || item.card.nome}
              className="card-carousel__foto"
            />
          </div>

          <div className="card-carousel__info">
            <h4>{item.card.nome}</h4>
            <p>{item.card.cargo}</p>
          </div>
        </div>
      );
    }

    if (item.card.tipo === "metricas") {
      return (
        <div className="card-carousel__bloco">
          {item.card.badge ? (
            <span className="card-carousel__badge">{item.card.badge}</span>
          ) : null}

          <div className="card-carousel__lista">
            {item.card.metricas.map((metrica, index) => (
              <div key={`${metrica}-${index}`} className="card-carousel__item">
                <span className="card-carousel__itemIcon">•</span>
                <span>{metrica}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (item.card.tipo === "tabela") {
      return (
        <div className="card-carousel__bloco">
          {item.card.badge ? (
            <span className="card-carousel__badge">{item.card.badge}</span>
          ) : null}

          <div className="card-carousel__tabela">
            {item.card.tabela.map((linha, index) => (
              <div key={`${linha.titulo}-${index}`} className="card-carousel__linha">
                <h5>{linha.titulo}</h5>
                <p>{linha.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="card-carousel">
      <div className="card-carousel__topo">
        <div>
          <span className="card-carousel__tag">Soluções em destaque</span>
          <h2 className="card-carousel__titulo">
            Conheça nossos principais serviços
          </h2>
          <p className="card-carousel__descricao">
            Um carrossel de cards deixa a navegação mais moderna, organizada e
            mais profissional para o site de contabilidade.
          </p>
        </div>

        <div className="card-carousel__controles">
          <button
            type="button"
            className="card-carousel__arrow"
            onClick={anterior}
            disabled={inicio === 0}
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            type="button"
            className="card-carousel__arrow"
            onClick={proximo}
            disabled={inicio + itensPorVez >= cards.length}
            aria-label="Próximo"
          >
            ›
          </button>
        </div>
      </div>

      <div className="card-carousel__grid">
        {cardsVisiveis.map((item) => (
          <article key={item.id} className="card-carousel__card">
            {item.tag ? <span className="card-carousel__miniTag">{item.tag}</span> : null}

            <h3 className="card-carousel__cardTitulo">
              {item.titulo}
            </h3>

            <p className="card-carousel__cardDescricao">
              {item.descricao}
            </p>

            {renderConteudoCard(item)}

            <a href={item.botao.url} className="card-carousel__botao">
              {item.botao.icone ? (
                <Icone
                  nome={item.botao.icone}
                  className="card-carousel__botaoIcone"
                />
              ) : null}
              <span>{item.botao.texto}</span>
            </a>
          </article>
        ))}
      </div>

      <style jsx>{`
        
      `}</style>
    </section>
  );
}