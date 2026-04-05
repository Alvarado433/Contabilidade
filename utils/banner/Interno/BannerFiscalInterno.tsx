'use client';

import Icone from "@/utils/Icones/icone";

type Props = {
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
}: Props) {
  return (
    <>
      <section className="banner">
        <div
          className="banner-card"
          style={{
            background:
              gradiente ||
              "linear-gradient(135deg, #0b2a5c 0%, #1e63db 100%)",
          }}
        >
          <div className="overlay" />

          <div className="content">
            {badge && <span className="badge">{badge}</span>}

            <div className="titulo">
              {icone && (
                <div className="icone">
                  <Icone nome={icone} />
                </div>
              )}

              <h1>{titulo}</h1>
            </div>

            {subtitulo && <h2>{subtitulo}</h2>}

            <p>{descricao}</p>

            {destaque && <div className="destaque">{destaque}</div>}
          </div>
        </div>
      </section>

      <style jsx>{`
        .banner {
          padding: 20px 16px 16px;
          background: linear-gradient(180deg, #f5f8ff 0%, #eef3fb 100%);
        }

        .banner-card {
          max-width: 1100px;
          margin: 0 auto;
          border-radius: 20px;
          padding: 28px 24px; /* 🔥 menor */
          position: relative;
          overflow: hidden;
          color: #fff;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.15), transparent 30%),
            radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 25%);
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          user-select: none;
        }

        .badge {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.2);
          margin-bottom: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .titulo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .icone {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        h1 {
          font-size: 1.9rem; /* 🔥 menor */
          margin: 0;
          font-weight: 800;
        }

        h2 {
          font-size: 0.95rem;
          margin: 0 0 10px;
          font-weight: 400;
          color: rgba(255,255,255,0.9);
        }

        p {
          max-width: 620px;
          margin: 0 auto;
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.9);
        }

        .destaque {
          margin-top: 14px;
          padding: 8px 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.12);
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* 📱 RESPONSIVO */
        @media (max-width: 768px) {
          .banner-card {
            padding: 22px 16px;
          }

          h1 {
            font-size: 1.5rem;
          }

          p {
            font-size: 0.85rem;
          }

          .icone {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </>
  );
}