'use client';

import React from "react";
import {
  FaBuilding,
  FaCalculator,
  FaUsersCog,
  FaFileInvoiceDollar,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

type ServicoItem = {
  icone: string;
  titulo: string;
  texto: string;
  lista?: string[];
  url: string;
};

type ServicosData = {
  titulo: string;
  descricao: string;
  itens: ServicoItem[];
};

type RenderServicosProps = {
  servicos: ServicosData;
};

const iconMap: Record<string, React.ReactNode> = {
  "fa-solid fa-building": <FaBuilding />,
  "fa-solid fa-calculator": <FaCalculator />,
  "fa-solid fa-users-gear": <FaUsersCog />,
  "fa-solid fa-file-invoice-dollar": <FaFileInvoiceDollar />,
};

function renderIcon(iconName?: string) {
  if (!iconName) return <FaBuilding />;
  return iconMap[iconName] ?? <FaBuilding />;
}

export default function RenderServicos({
  servicos,
}: RenderServicosProps) {
  const { titulo, descricao, itens } = servicos;

  return (
    <>
      <section className="servicos-section">
        <div className="servicos-bg-shape servicos-bg-shape-1"></div>
        <div className="servicos-bg-shape servicos-bg-shape-2"></div>

        <div className="servicos-container">
          <div className="servicos-topo">
            <span className="servicos-badge">Soluções empresariais</span>
            <h2 className="servicos-titulo-principal">{titulo}</h2>
            <p className="servicos-descricao">{descricao}</p>
          </div>

          <div className="servicos-grid">
            {itens.map((item, index) => (
              <article className="servico-card" key={index}>
                <div className="servico-card-topo">
                  <div className="servico-icone">
                    {renderIcon(item.icone)}
                  </div>

                  <h3 className="servico-titulo">{item.titulo}</h3>
                </div>

                <p className="servico-texto">{item.texto}</p>

                {item.lista && item.lista.length > 0 && (
                  <ul className="servico-lista">
                    {item.lista.map((listaItem, i) => (
                      <li key={i}>
                        <span className="check-icon">
                          <FaCheck />
                        </span>
                        <span>{listaItem}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <a href={item.url} className="servico-botao">
                  <span>Saiba mais</span>
                  <FaArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .servicos-section {
          position: relative;
          padding: 96px 20px;
          background:
            radial-gradient(circle at top left, rgba(30, 136, 255, 0.07), transparent 24%),
            radial-gradient(circle at 90% 20%, rgba(255, 204, 77, 0.08), transparent 18%),
            linear-gradient(180deg, #f8fbff 0%, #eef4fb 100%);
          overflow: hidden;
        }

        .servicos-bg-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.35;
          pointer-events: none;
        }

        .servicos-bg-shape-1 {
          width: 260px;
          height: 260px;
          background: rgba(30, 136, 255, 0.12);
          top: -80px;
          left: -70px;
        }

        .servicos-bg-shape-2 {
          width: 220px;
          height: 220px;
          background: rgba(255, 204, 77, 0.12);
          bottom: -70px;
          right: -60px;
        }

        .servicos-container {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
        }

        .servicos-topo {
          text-align: center;
          max-width: 840px;
          margin: 0 auto 54px;
        }

        .servicos-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 15px;
          border-radius: 999px;
          background: rgba(30, 136, 255, 0.08);
          color: #1f61cb;
          border: 1px solid rgba(30, 136, 255, 0.12);
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.2px;
          margin-bottom: 16px;
        }

        .servicos-titulo-principal {
          margin: 0;
          font-size: 2.55rem;
          line-height: 1.15;
          font-weight: 800;
          color: #10213f;
          letter-spacing: -0.02em;
        }

        .servicos-titulo-principal::after {
          content: "";
          display: block;
          width: 82px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, #1e88ff, #ffcc4d);
          margin: 18px auto 0;
        }

        .servicos-descricao {
          margin: 18px auto 0;
          max-width: 730px;
          font-size: 1rem;
          line-height: 1.85;
          color: #667799;
        }

        .servicos-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .servico-card {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          border-radius: 26px;
          padding: 28px 22px 22px;
          box-shadow:
            0 18px 44px rgba(18, 44, 86, 0.08),
            0 4px 14px rgba(18, 44, 86, 0.04);
          border: 1px solid rgba(19, 72, 154, 0.08);
          display: flex;
          flex-direction: column;
          min-height: 100%;
          overflow: hidden;
          transition:
            transform 0.32s ease,
            box-shadow 0.32s ease,
            border-color 0.32s ease;
        }

        .servico-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #1e88ff, #62b0ff, #ffcc4d);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .servico-card:hover {
          transform: translateY(-10px);
          box-shadow:
            0 28px 54px rgba(18, 44, 86, 0.12),
            0 10px 24px rgba(18, 44, 86, 0.08);
          border-color: rgba(30, 136, 255, 0.16);
        }

        .servico-card:hover::before {
          opacity: 1;
        }

        .servico-card-topo {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .servico-icone {
          width: 72px;
          height: 72px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #2a7df0 0%, #0d3f86 100%);
          color: #ffffff;
          font-size: 1.45rem;
          box-shadow: 0 16px 28px rgba(30, 91, 190, 0.22);
          margin: 0 auto 20px;
          flex-shrink: 0;
        }

        .servico-titulo {
          margin: 0 0 14px;
          text-align: center;
          font-size: 1.28rem;
          line-height: 1.3;
          font-weight: 800;
          color: #10213f;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .servico-texto {
          margin: 0 0 20px;
          text-align: center;
          color: #667799;
          font-size: 0.97rem;
          line-height: 1.85;
          min-height: 118px;
        }

        .servico-lista {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .servico-lista li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #40516f;
          font-size: 0.94rem;
          line-height: 1.65;
        }

        .check-icon {
          width: 20px;
          height: 20px;
          min-width: 20px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(30, 136, 255, 0.1);
          color: #1e88ff;
          font-size: 0.72rem;
          margin-top: 2px;
        }

        .servico-botao {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px 18px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #1e88ff 0%, #2d6cdf 100%);
          box-shadow: 0 14px 24px rgba(30, 136, 255, 0.2);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            filter 0.25s ease;
        }

        .servico-botao:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 30px rgba(30, 136, 255, 0.26);
          filter: brightness(1.03);
        }

        .servico-botao :global(svg) {
          font-size: 0.82rem;
        }

        @media (max-width: 1100px) {
          .servicos-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .servicos-section {
            padding: 74px 16px;
          }

          .servicos-topo {
            margin-bottom: 36px;
          }

          .servicos-titulo-principal {
            font-size: 2rem;
            line-height: 1.2;
          }

          .servicos-descricao {
            font-size: 0.97rem;
            line-height: 1.8;
          }

          .servicos-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .servico-card {
            padding: 22px 18px 18px;
            border-radius: 22px;
          }

          .servico-card:hover {
            transform: translateY(-4px);
          }

          .servico-icone {
            width: 66px;
            height: 66px;
            border-radius: 20px;
            font-size: 1.3rem;
            margin-bottom: 18px;
          }

          .servico-titulo {
            font-size: 1.15rem;
            min-height: auto;
            margin-bottom: 12px;
          }

          .servico-texto {
            min-height: auto;
            font-size: 0.95rem;
            line-height: 1.75;
            margin-bottom: 18px;
          }

          .servico-lista {
            gap: 9px;
            margin-bottom: 20px;
          }

          .servico-lista li {
            font-size: 0.92rem;
            line-height: 1.55;
          }

          .servico-botao {
            padding: 13px 16px;
            font-size: 0.93rem;
          }
        }

        @media (max-width: 520px) {
          .servicos-section {
            padding: 64px 14px;
          }

          .servicos-badge {
            font-size: 0.78rem;
            padding: 7px 12px;
            margin-bottom: 14px;
          }

          .servicos-titulo-principal {
            font-size: 1.72rem;
          }

          .servicos-titulo-principal::after {
            width: 68px;
            margin-top: 16px;
          }

          .servicos-descricao {
            font-size: 0.93rem;
            line-height: 1.75;
          }

          .servicos-grid {
            gap: 16px;
          }

          .servico-card {
            padding: 18px 15px 16px;
            border-radius: 18px;
          }

          .servico-icone {
            width: 60px;
            height: 60px;
            border-radius: 18px;
            font-size: 1.18rem;
            margin-bottom: 16px;
            box-shadow: 0 12px 22px rgba(30, 91, 190, 0.2);
          }

          .servico-titulo {
            font-size: 1.05rem;
            line-height: 1.3;
          }

          .servico-texto {
            font-size: 0.9rem;
            line-height: 1.7;
          }

          .servico-lista li {
            gap: 8px;
            font-size: 0.88rem;
          }

          .check-icon {
            width: 18px;
            height: 18px;
            min-width: 18px;
            font-size: 0.64rem;
          }

          .servico-botao {
            padding: 12px 14px;
            font-size: 0.9rem;
            gap: 8px;
          }
        }

        @media (max-width: 380px) {
          .servicos-section {
            padding: 56px 12px;
          }

          .servicos-titulo-principal {
            font-size: 1.55rem;
          }

          .servico-card {
            padding: 16px 13px 14px;
          }

          .servico-icone {
            width: 56px;
            height: 56px;
            font-size: 1.08rem;
          }

          .servico-texto {
            font-size: 0.88rem;
          }

          .servico-lista li {
            font-size: 0.85rem;
          }

          .servico-botao {
            font-size: 0.86rem;
          }
        }
      `}</style>
    </>
  );
}