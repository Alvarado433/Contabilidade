"use client";

import { useEffect, useMemo, useState } from "react";
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
  const [itensPorVez, setItensPorVez] = useState(3);

  useEffect(() => {
    const atualizarItensPorVez = () => {
      if (window.innerWidth <= 767) {
        setItensPorVez(1);
      } else if (window.innerWidth <= 1100) {
        setItensPorVez(2);
      } else {
        setItensPorVez(3);
      }
    };

    atualizarItensPorVez();
    window.addEventListener("resize", atualizarItensPorVez);

    return () => window.removeEventListener("resize", atualizarItensPorVez);
  }, []);

  useEffect(() => {
    const maxInicio = Math.max(cards.length - itensPorVez, 0);
    if (inicio > maxInicio) {
      setInicio(maxInicio);
    }
  }, [itensPorVez, cards.length, inicio]);

  const maxInicio = Math.max(cards.length - itensPorVez, 0);
  const podeVoltar = inicio > 0;
  const podeAvancar = inicio < maxInicio;

  const proximo = () => {
    if (podeAvancar) {
      setInicio((prev) => prev + 1);
    }
  };

  const anterior = () => {
    if (podeVoltar) {
      setInicio((prev) => prev - 1);
    }
  };

  const larguraItem = 100 / itensPorVez;

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
              <div
                key={`${linha.titulo}-${index}`}
                className="card-carousel__linha"
              >
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
            disabled={!podeVoltar}
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            type="button"
            className="card-carousel__arrow"
            onClick={proximo}
            disabled={!podeAvancar}
            aria-label="Próximo"
          >
            ›
          </button>
        </div>
      </div>

      <div className="card-carousel__viewport">
        <div
          className="card-carousel__track"
          style={{
            transform: `translateX(-${inicio * larguraItem}%)`,
          }}
        >
          {cards.map((item) => (
            <article
              key={item.id}
              className="card-carousel__slide"
              style={{ flex: `0 0 ${larguraItem}%`, maxWidth: `${larguraItem}%` }}
            >
              <div className="card-carousel__card">
                {item.tag ? (
                  <span className="card-carousel__miniTag">{item.tag}</span>
                ) : null}

                <h3 className="card-carousel__cardTitulo">{item.titulo}</h3>

                <p className="card-carousel__cardDescricao">{item.descricao}</p>

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
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card-carousel {
          padding: 88px 20px;
          background: #ffffff;
        }

        .card-carousel__topo {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto 34px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 24px;
        }

        .card-carousel__tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #eef4ff;
          color: #0f5fe0;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .card-carousel__titulo {
          margin: 0 0 12px;
          color: #162235;
          font-size: clamp(2rem, 4vw, 2.9rem);
          line-height: 1.08;
          font-weight: 900;
        }

        .card-carousel__descricao {
          max-width: 720px;
          margin: 0;
          color: #667085;
          font-size: 1rem;
          line-height: 1.8;
        }

        .card-carousel__controles {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .card-carousel__arrow {
          width: 46px;
          height: 46px;
          border: 1px solid #d9e4f2;
          border-radius: 50%;
          background: #ffffff;
          color: #0f5fe0;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 10px 20px rgba(15, 95, 224, 0.08);
        }

        .card-carousel__arrow:hover:not(:disabled) {
          background: #0f5fe0;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .card-carousel__arrow:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          box-shadow: none;
        }

        .card-carousel__viewport {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          overflow: hidden;
        }

        .card-carousel__track {
          display: flex;
          transition: transform 0.35s ease;
          will-change: transform;
        }

        .card-carousel__slide {
          box-sizing: border-box;
          padding: 0 11px;
        }

        .card-carousel__card {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 26px 22px;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid #e7eef8;
          box-shadow: 0 18px 38px rgba(15, 23, 42, 0.08);
          transition:
            transform 0.28s ease,
            box-shadow 0.28s ease,
            border-color 0.28s ease;
        }

        .card-carousel__card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 46px rgba(15, 23, 42, 0.12);
          border-color: #cfe0ff;
        }

        .card-carousel__miniTag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          margin-bottom: 14px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #f8fafc;
          color: #0f5fe0;
          font-size: 0.76rem;
          font-weight: 700;
          border: 1px solid #e2e8f0;
        }

        .card-carousel__cardTitulo {
          margin: 0 0 10px;
          color: #162235;
          font-size: 1.28rem;
          font-weight: 800;
          line-height: 1.25;
        }

        .card-carousel__cardDescricao {
          margin: 0 0 18px;
          color: #667085;
          font-size: 0.96rem;
          line-height: 1.75;
        }

        .card-carousel__badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          margin-bottom: 16px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #fff7d6;
          color: #b88900;
          font-size: 0.74rem;
          font-weight: 800;
        }

        .card-carousel__especialista {
          margin-bottom: 18px;
        }

        .card-carousel__fotoWrap {
          width: 120px;
          height: 120px;
          margin: 0 auto 16px;
          border-radius: 50%;
          overflow: hidden;
          background: #f1f5f9;
          box-shadow: inset 0 0 0 4px #eef4ff;
        }

        .card-carousel__foto {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-carousel__info {
          padding: 16px;
          border-radius: 18px;
          background: #f8fbff;
          text-align: center;
          border: 1px solid #e6eef8;
        }

        .card-carousel__info h4 {
          margin: 0;
          color: #162235;
          font-size: 1rem;
          font-weight: 800;
        }

        .card-carousel__info p {
          margin: 6px 0 0;
          color: #667085;
          font-size: 0.9rem;
        }

        .card-carousel__bloco {
          margin-bottom: 18px;
        }

        .card-carousel__lista,
        .card-carousel__tabela {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .card-carousel__item,
        .card-carousel__linha {
          padding: 14px 14px;
          border-radius: 16px;
          background: #f8fbff;
          border: 1px solid #e7eef8;
        }

        .card-carousel__item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #334155;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .card-carousel__itemIcon {
          color: #0f5fe0;
          font-size: 1.1rem;
          line-height: 1;
        }

        .card-carousel__linha h5 {
          margin: 0 0 5px;
          color: #162235;
          font-size: 0.95rem;
          font-weight: 800;
        }

        .card-carousel__linha p {
          margin: 0;
          color: #667085;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .card-carousel__botao {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 50px;
          padding: 13px 20px;
          border-radius: 999px;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          color: #ffffff;
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 800;
          box-shadow: 0 12px 24px rgba(15, 95, 224, 0.18);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            filter 0.25s ease;
        }

        .card-carousel__botao:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 30px rgba(15, 95, 224, 0.22);
          filter: brightness(1.03);
        }

        .card-carousel__botaoIcone {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        @media (max-width: 1100px) {
          .card-carousel {
            padding: 72px 16px;
          }

          .card-carousel__topo {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 767px) {
          .card-carousel {
            padding: 56px 14px;
          }

          .card-carousel__titulo {
            font-size: 1.8rem;
          }

          .card-carousel__descricao {
            font-size: 0.95rem;
            line-height: 1.7;
          }

          .card-carousel__slide {
            padding: 0 6px;
          }

          .card-carousel__card {
            padding: 22px 18px;
            border-radius: 20px;
          }

          .card-carousel__botao {
            width: 100%;
          }

          .card-carousel__controles {
            width: 100%;
            justify-content: space-between;
          }

          .card-carousel__arrow {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </section>
  );
}