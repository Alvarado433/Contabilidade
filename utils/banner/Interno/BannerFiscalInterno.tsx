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
              "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
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

            {destaque && <div className="banner-fiscal-destaque">{destaque}</div>}
          </div>
        </div>
      </section>

      <style jsx>{`
        .banner-fiscal-wrapper {
          width: 100%;
          padding: 30px 20px 24px;
          background: linear-gradient(180deg, #f8fbff 0%, #eef4fb 100%);
        }

        .banner-fiscal-card {
          max-width: 1180px;
          margin: 0 auto;
          border-radius: 24px;
          padding: 42px 34px;
          position: relative;
          overflow: hidden;
          color: #ffffff;
          box-shadow: 0 20px 45px rgba(0, 55, 145, 0.15);
        }

        .banner-fiscal-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.15), transparent 28%),
            radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 24%);
          pointer-events: none;
        }

        .banner-fiscal-content {
          position: relative;
          z-index: 2;
          text-align: center;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        .banner-fiscal-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 16px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.2px;
        }

        .banner-fiscal-titulo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .banner-fiscal-icone {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(4px);
        }

        .icone-svg {
          font-size: 1.45rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .banner-fiscal-content h1 {
          margin: 0;
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.12;
        }

        .banner-fiscal-content h2 {
          margin: 0 0 14px;
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.94);
        }

        .banner-fiscal-content p {
          max-width: 760px;
          margin: 0 auto;
          font-size: 0.98rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
        }

        .banner-fiscal-destaque {
          margin: 20px auto 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 0.92rem;
          font-weight: 700;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .banner-fiscal-wrapper {
            padding: 22px 16px 20px;
          }

          .banner-fiscal-card {
            padding: 30px 20px;
            border-radius: 20px;
          }

          .banner-fiscal-content h1 {
            font-size: 1.8rem;
          }

          .banner-fiscal-content h2 {
            font-size: 0.95rem;
          }

          .banner-fiscal-content p {
            font-size: 0.9rem;
            line-height: 1.7;
          }

          .banner-fiscal-icone {
            width: 46px;
            height: 46px;
          }

          .icone-svg {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}