'use client';

import Icone from "@/utils/Icones/icone";

type Indicador = {
  numero: string;
  texto: string;
};

type BannerFolhaData = {
  badge?: string;
  titulo: string;
  subtitulo?: string;
  descricao: string;
  fraseDestaque?: string;
  beneficios?: string[];
  destaques?: string[];
  indicadores?: Indicador[];
  icone?: string;
  imagem?: {
    src: string;
    alt: string;
  };
  estilo?: {
    gradiente?: string;
    destaque?: string;
    texto?: string;
    textoSuave?: string;
    card?: string;
  };
};

type Props = {
  data: BannerFolhaData;
};

export default function BannerFolhaInterno({ data }: Props) {
  const {
    badge,
    titulo,
    subtitulo,
    descricao,
    fraseDestaque,
    beneficios = [],
    destaques = [],
    indicadores = [],
    icone,
    imagem,
    estilo,
  } = data;

  const gradiente =
    estilo?.gradiente || "linear-gradient(135deg, #0d3f86 0%, #1e88ff 100%)";
  const destaque = estilo?.destaque || "#00c853";
  const texto = estilo?.texto || "#ffffff";
  const textoSuave = estilo?.textoSuave || "rgba(255,255,255,0.88)";
  const card = estilo?.card || "rgba(255,255,255,0.10)";

  return (
    <>
      <section className="folha-banner-wrapper">
        <div
          className="folha-banner-card"
          style={{
            background: gradiente,
            color: texto,
          }}
        >
          <div className="folha-bg-shape folha-bg-shape-1"></div>
          <div className="folha-bg-shape folha-bg-shape-2"></div>

          <div className="folha-banner-grid">
            <div className="folha-banner-conteudo">
              {badge && <span className="folha-badge">{badge}</span>}

              <div className="folha-titulo-wrap">
                {icone && (
                  <div className="folha-icone">
                    <Icone nome={icone} className="folha-icone-svg" />
                  </div>
                )}

                <h1>{titulo}</h1>
              </div>

              {subtitulo && <h2>{subtitulo}</h2>}

              <p className="folha-descricao">{descricao}</p>

              {fraseDestaque && (
                <div className="folha-frase" style={{ borderLeftColor: destaque }}>
                  {fraseDestaque}
                </div>
              )}

              {beneficios.length > 0 && (
                <div className="folha-beneficios">
                  {beneficios.map((item, index) => (
                    <div key={index} className="folha-beneficio-item">
                      <span
                        className="folha-check"
                        style={{ background: destaque }}
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {destaques.length > 0 && (
                <div className="folha-destaques">
                  {destaques.map((item, index) => (
                    <span
                      key={index}
                      className="folha-chip"
                      style={{ background: card }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="folha-banner-lateral">
              {imagem?.src ? (
                <div className="folha-imagem-box" style={{ background: card }}>
                  <img src={imagem.src} alt={imagem.alt} className="folha-imagem" />
                </div>
              ) : (
                <div className="folha-imagem-box folha-imagem-placeholder" style={{ background: card }}>
                  {icone && (
                    <div className="folha-placeholder-icone">
                      <Icone nome={icone} className="folha-placeholder-icone-svg" />
                    </div>
                  )}
                </div>
              )}

              {indicadores.length > 0 && (
                <div className="folha-indicadores">
                  {indicadores.map((item, index) => (
                    <div
                      key={index}
                      className="folha-indicador-card"
                      style={{ background: card }}
                    >
                      <strong>{item.numero}</strong>
                      <span>{item.texto}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .folha-banner-wrapper {
          width: 100%;
          padding: 34px 20px 30px;
          background: linear-gradient(180deg, #f8fbff 0%, #eef4fb 100%);
        }

        .folha-banner-card {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          border-radius: 28px;
          padding: 48px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 50px rgba(0, 55, 145, 0.18);
        }

        .folha-bg-shape {
          position: absolute;
          pointer-events: none;
        }

        .folha-bg-shape-1 {
          width: 260px;
          height: 260px;
          border-radius: 50%;
          top: -100px;
          right: -70px;
          background: rgba(255, 255, 255, 0.08);
          filter: blur(6px);
        }

        .folha-bg-shape-2 {
          width: 180px;
          height: 180px;
          bottom: -60px;
          right: 90px;
          transform: rotate(35deg);
          background: rgba(255, 255, 255, 0.08);
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
        }

        .folha-banner-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 34px;
          align-items: center;
        }

        .folha-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 18px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.2px;
        }

        .folha-titulo-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 14px;
          margin-bottom: 14px;
        }

        .folha-icone {
          width: 54px;
          height: 54px;
          min-width: 54px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(4px);
        }

        .folha-icone-svg {
          font-size: 1.45rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .folha-banner-conteudo h1 {
          margin: 0;
          font-size: 2.65rem;
          line-height: 1.12;
          font-weight: 800;
        }

        .folha-banner-conteudo h2 {
          margin: 0 0 16px;
          font-size: 1.12rem;
          font-weight: 500;
          line-height: 1.65;
          color: ${textoSuave};
        }

        .folha-descricao {
          margin: 0;
          font-size: 1rem;
          line-height: 1.85;
          color: ${textoSuave};
          max-width: 700px;
        }

        .folha-frase {
          margin-top: 22px;
          padding: 12px 14px 12px 16px;
          border-left: 4px solid;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #ffffff;
        }

        .folha-beneficios {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 24px;
        }

        .folha-beneficio-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.95rem;
          line-height: 1.65;
          color: ${textoSuave};
          background: rgba(255, 255, 255, 0.08);
          padding: 12px 14px;
          border-radius: 14px;
        }

        .folha-check {
          width: 22px;
          height: 22px;
          min-width: 22px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 700;
          margin-top: 1px;
        }

        .folha-destaques {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .folha-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 36px;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .folha-banner-lateral {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .folha-imagem-box {
          border-radius: 22px;
          min-height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .folha-imagem {
          width: 100%;
          max-width: 280px;
          height: auto;
          object-fit: contain;
          display: block;
        }

        .folha-imagem-placeholder {
          min-height: 260px;
        }

        .folha-placeholder-icone {
          width: 88px;
          height: 88px;
          border-radius: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.12);
        }

        .folha-placeholder-icone-svg {
          font-size: 2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .folha-indicadores {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .folha-indicador-card {
          border-radius: 18px;
          padding: 16px 14px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .folha-indicador-card strong {
          display: block;
          font-size: 1.3rem;
          line-height: 1.2;
          margin-bottom: 6px;
          color: #ffffff;
        }

        .folha-indicador-card span {
          display: block;
          font-size: 0.84rem;
          line-height: 1.5;
          color: ${textoSuave};
        }

        @media (max-width: 1024px) {
          .folha-banner-card {
            padding: 38px 28px;
          }

          .folha-banner-grid {
            grid-template-columns: 1fr;
          }

          .folha-banner-conteudo h1 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .folha-banner-wrapper {
            padding: 24px 16px 22px;
          }

          .folha-banner-card {
            padding: 30px 20px;
            border-radius: 22px;
          }

          .folha-titulo-wrap {
            gap: 12px;
          }

          .folha-icone {
            width: 48px;
            height: 48px;
            min-width: 48px;
          }

          .folha-icone-svg {
            font-size: 1.25rem;
          }

          .folha-banner-conteudo h1 {
            font-size: 1.95rem;
          }

          .folha-banner-conteudo h2 {
            font-size: 0.98rem;
          }

          .folha-descricao {
            font-size: 0.93rem;
            line-height: 1.75;
          }

          .folha-beneficios {
            grid-template-columns: 1fr;
          }

          .folha-indicadores {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .folha-banner-card {
            padding: 26px 16px;
          }

          .folha-titulo-wrap {
            flex-direction: column;
            align-items: flex-start;
          }

          .folha-banner-conteudo h1 {
            font-size: 1.7rem;
          }

          .folha-banner-conteudo h2 {
            font-size: 0.93rem;
            line-height: 1.6;
          }

          .folha-beneficio-item {
            font-size: 0.9rem;
          }

          .folha-chip {
            font-size: 0.82rem;
          }

          .folha-imagem-box,
          .folha-imagem-placeholder {
            min-height: 210px;
          }
        }
      `}</style>
    </>
  );
}