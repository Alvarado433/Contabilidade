'use client';

type Props = {
  titulo: string;
  descricao: string;
  gradiente?: string;
};

export default function BannerFolhaInterno({
  titulo,
  descricao,
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
          <h1>{titulo}</h1>
          <p>{descricao}</p>
        </div>
      </section>

      <style jsx>{`
        .folha-banner {
          padding: 40px 20px;
          display: flex;
          justify-content: center;
          background: #f4f8ff;
        }

        .folha-card {
          width: 100%;
          max-width: 900px;
          border-radius: 20px;
          padding: 60px 40px;
          text-align: center;
          color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
        }

        .folha-card::after {
          content: "";
          position: absolute;
          right: -80px;
          bottom: -80px;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          transform: rotate(45deg);
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .folha-card {
            padding: 40px 20px;
          }

          h1 {
            font-size: 1.8rem;
          }

          p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
}