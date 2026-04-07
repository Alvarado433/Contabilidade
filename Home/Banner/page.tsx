"use client";

import { BannerProps } from "@/Dados/Interfaces/banner";
import Icone from "@/utils/Icones/icone";

export default function Banner({ banner }: BannerProps) {
  const { titulo, descricao, botoes, imagem } = banner;

  return (
    <>
      <section className="banner">
        <div className="banner-overlay"></div>

        <div className="banner-container">
          <div className="banner-conteudo">
            <span className="banner-badge">Contabilidade empresarial</span>

            <h1 className="banner-titulo">{titulo}</h1>

            <div className="banner-linha"></div>

            <p className="banner-descricao">{descricao}</p>

            <div className="banner-botoes">
              {botoes.map((botao, index) => (
                <a
                  key={index}
                  href={botao.url}
                  className={`banner-btn ${
                    index === 0 ? "banner-btn-primary" : "banner-btn-secondary"
                  }`}
                >
                  {botao.icone ? (
                    <span className="banner-btn-icon">
                      <Icone nome={botao.icone} />
                    </span>
                  ) : null}

                  <span>{botao.texto}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="banner-imagem">
            <div className="banner-imagem-box">
              <img src={imagem.src} alt={imagem.alt} />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .banner {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #1f3f7a 0%, #274b8f 45%, #1d3563 100%);
          padding: 90px 20px;
        }

        .banner-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 28%),
            radial-gradient(circle at 80% 20%, rgba(255, 204, 77, 0.08), transparent 20%);
          pointer-events: none;
        }

        .banner-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        .banner-conteudo {
          flex: 1;
          max-width: 560px;
          color: #ffffff;
        }

        .banner-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #dbe7ff;
          font-size: 0.86rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          margin-bottom: 20px;
          backdrop-filter: blur(8px);
        }

        .banner-titulo {
          margin: 0;
          font-size: 3.2rem;
          line-height: 1.12;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .banner-linha {
          width: 72px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ffcc4d, #ffd76f);
          margin: 22px 0 22px;
          box-shadow: 0 4px 12px rgba(255, 204, 77, 0.25);
        }

        .banner-descricao {
          margin: 0 0 32px;
          font-size: 1.08rem;
          line-height: 1.9;
          color: #d9e5ff;
          max-width: 520px;
        }

        .banner-botoes {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .banner-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.96rem;
          transition: all 0.28s ease;
          min-width: 190px;
          text-align: center;
        }

        .banner-btn-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          line-height: 1;
          flex-shrink: 0;
        }

        .banner-btn-primary {
          background: linear-gradient(135deg, #ffcc4d, #ffb800);
          color: #10213f;
          box-shadow: 0 14px 28px rgba(255, 184, 0, 0.22);
        }

        .banner-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 32px rgba(255, 184, 0, 0.3);
          filter: brightness(1.02);
        }

        .banner-btn-secondary {
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(8px);
        }

        .banner-btn-secondary:hover {
          transform: translateY(-3px);
          background: #ffffff;
          color: #274b8f;
          border-color: #ffffff;
          box-shadow: 0 16px 28px rgba(0, 0, 0, 0.18);
        }

        .banner-imagem {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .banner-imagem-box {
          position: relative;
          width: 100%;
          max-width: 540px;
          border-radius: 22px;
          padding: 8px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.35),
            rgba(255, 255, 255, 0.08)
          );
          box-shadow:
            0 24px 50px rgba(0, 0, 0, 0.22),
            0 0 0 1px rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
        }

        .banner-imagem-box::before {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 28px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.08),
            transparent 60%
          );
          z-index: -1;
        }

        .banner-imagem img {
          display: block;
          width: 100%;
          height: 360px;
          object-fit: cover;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 1024px) {
          .banner {
            padding: 72px 20px;
          }

          .banner-container {
            gap: 40px;
          }

          .banner-titulo {
            font-size: 2.7rem;
          }

          .banner-imagem img {
            height: 320px;
          }
        }

        @media (max-width: 900px) {
          .banner {
            padding: 64px 18px;
          }

          .banner-container {
            flex-direction: column;
            text-align: center;
            gap: 34px;
          }

          .banner-conteudo {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .banner-descricao {
            max-width: 100%;
          }

          .banner-botoes {
            justify-content: center;
          }

          .banner-linha {
            margin-left: auto;
            margin-right: auto;
          }

          .banner-imagem {
            width: 100%;
          }

          .banner-imagem-box {
            max-width: 680px;
          }
        }

        @media (max-width: 600px) {
          .banner {
            padding: 52px 14px;
          }

          .banner-container {
            gap: 26px;
          }

          .banner-badge {
            font-size: 0.76rem;
            padding: 7px 12px;
            margin-bottom: 14px;
          }

          .banner-titulo {
            font-size: 1.95rem;
            line-height: 1.18;
            letter-spacing: -0.01em;
          }

          .banner-linha {
            width: 58px;
            margin: 18px auto;
          }

          .banner-descricao {
            font-size: 0.95rem;
            line-height: 1.75;
            margin-bottom: 22px;
          }

          .banner-botoes {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .banner-btn {
            width: 100%;
            min-width: unset;
            padding: 13px 14px;
            font-size: 0.88rem;
            gap: 8px;
          }

          .banner-btn-icon {
            font-size: 0.9rem;
          }

          .banner-imagem-box {
            border-radius: 16px;
            padding: 5px;
          }

          .banner-imagem img {
            height: 220px;
            border-radius: 12px;
          }
        }

        @media (max-width: 420px) {
          .banner {
            padding: 46px 12px;
          }

          .banner-titulo {
            font-size: 1.72rem;
          }

          .banner-descricao {
            font-size: 0.92rem;
            line-height: 1.7;
          }

          .banner-botoes {
            gap: 10px;
          }

          .banner-btn {
            padding: 12px 10px;
            font-size: 0.8rem;
            border-radius: 16px;
          }

          .banner-btn span:last-child {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .banner-imagem img {
            height: 190px;
          }
        }
      `}</style>
    </>
  );
}