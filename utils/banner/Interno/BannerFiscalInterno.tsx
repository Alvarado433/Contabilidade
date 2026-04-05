'use client';

import Icone from "@/utils/Icones/icone";

type BannerFiscalInternoProps = {
  badge?: string;
  titulo: string;
  subtitulo?: string;
  descricao: string;
  destaque?: string;
  icone?: string;
  gradiente?: string;
};

export default function BannerFiscalInterno({
  badge,
  titulo,
  subtitulo,
  descricao,
  destaque,
  icone,
  gradiente,
}: BannerFiscalInternoProps) {
  return (
    <>
      <section className="banner-fiscal-wrapper">
        <div
          className="banner-fiscal-card"
          style={{
            background:
              gradiente ||
              "linear-gradient(135deg, #0d3f86 0%, #1e88ff 100%)",
          }}
        >
          <div className="banner-fiscal-overlay" />

          <div className="banner-fiscal-content">
            {badge && <span className="banner-fiscal-badge">{badge}</span>}

            <div className="banner-fiscal-titulo">
              {icone && (
                <div className="banner-fiscal-icone">
                  <Icone nome={icone} className="icone-svg" />
                </div>
              )}

              <h1>{titulo}</h1>
            </div>

            {subtitulo && <h2>{subtitulo}</h2>}

            <p>{descricao}</p>

            {destaque && (
              <div className="banner-fiscal-destaque">{destaque}</div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .banner-fiscal-wrapper {
          width: 100%;
          padding: 20px 16px 16px;
          background: linear-gradient(180deg, #f8fbff 0%, #eef4fb 100%);
        }

        .banner-fiscal-card {
          max-width: 1100px;
          margin: 0 auto;
          border-radius: 20px;
          padding: 28px 22px; /* 🔥 DIMINUI */
          position: relative;
          overflow: hidden;
          color: #ffffff;
          box-shadow: 0 12px 30px rgba(0, 55, 145, 0.12);
        }

        .banner-fiscal-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.15), transparent 30%),
            radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 25%);
        }

        .banner-fiscal-content {
          position: relative;
          z-index: 2;
          text-align: center;
          user-select: none;
        }

        .banner-fiscal-badge {
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.15);
          font-size: 0.7rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .banner-fiscal-titulo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .banner-fiscal-icone {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icone-svg {
          font-size: 1.1rem;
        }

        .banner-fiscal-content h1 {
          font-size: 1.9rem; /* 🔥 menor */
          font-weight: 800;
          margin: 0;
        }

        .banner-fiscal-content h2 {
          font-size: 0.9rem;
          margin: 6px 0 10px;
          color: rgba(255, 255, 255, 0.9);
        }

        .banner-fiscal-content p {
          font-size: 0.85rem;
          max-width: 620px;
          margin: auto;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.88);
        }

        .banner-fiscal-destaque {
          margin-top: 12px;
          padding: 8px 12px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.12);
          font-size: 0.8rem;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .banner-fiscal-card {
            padding: 22px 16px;
          }

          .banner-fiscal-content h1 {
            font-size: 1.5rem;
          }

          .banner-fiscal-content p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}