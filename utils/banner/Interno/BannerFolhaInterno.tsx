'use client';

import Icone from "@/utils/Icones/icone";

type Props = {
  titulo: string;
  descricao: string;
  icone?: string;
  gradiente?: string;
};

export default function BannerFolhaInterno({
  titulo,
  descricao,
  icone,
  gradiente,
}: Props) {
  return (
    <>
      <section className="folha-banner">
        <div
          className="folha-card"
          style={{
            background:
              gradiente ||
              "linear-gradient(135deg, #0d3f86 0%, #1e88ff 100%)",
          }}
        >
          <div className="folha-conteudo">
            {icone && (
              <div className="folha-icone">
                <Icone nome={icone} />
              </div>
            )}

            <h1>{titulo}</h1>
            <p>{descricao}</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .folha-banner {
          padding: 28px 20px;
          display: flex;
          justify-content: center;
          background: #f4f8ff;

          /* 🚫 BLOQUEIA SELEÇÃO */
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        .folha-card {
          width: 100%;
          max-width: 900px;
          border-radius: 20px;
          padding: 40px 28px;
          text-align: center;
          color: white;
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.18);
          position: relative;
          overflow: hidden;
        }

        .folha-card::after {
          content: "";
          position: absolute;
          right: -60px;
          bottom: -60px;
          width: 160px;
          height: 160px;
          background: rgba(255, 255, 255, 0.1);
          transform: rotate(45deg);
        }

        .folha-conteudo {
          position: relative;
          z-index: 2;
        }

        .folha-icone {
          font-size: 28px;
          margin-bottom: 12px;
          opacity: 0.9;
        }

        h1 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 12px;
        }

        p {
          font-size: 0.95rem;
          line-height: 1.7;
          max-width: 500px;
          margin: 0 auto;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .folha-card {
            padding: 30px 20px;
          }

          h1 {
            font-size: 1.5rem;
          }

          p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}