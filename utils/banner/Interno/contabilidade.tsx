'use client';

import { FaCheckCircle } from "react-icons/fa";

type BannerContabilidade = {
  titulo: string;
  subtitulo: string;
  descricao: string;
  beneficios: string[];
};

type ContabilidadeBannerProps = {
  banner: BannerContabilidade;
};

export default function ContabilidadeBanner({
  banner,
}: ContabilidadeBannerProps) {
  return (
    <>
      <section className="contabilidade-section">

        <div className="contabilidade-card">

          <div className="overlay"></div>

          <div className="contabilidade-conteudo">

            <span className="contabilidade-badge">
              Serviço especializado
            </span>

            <h1 className="contabilidade-titulo">
              {banner.titulo}
            </h1>

            <h2 className="contabilidade-subtitulo">
              {banner.subtitulo}
            </h2>

            <p
              className="contabilidade-descricao"
              dangerouslySetInnerHTML={{ __html: banner.descricao }}
            />

            <ul className="contabilidade-beneficios">
              {banner.beneficios.map((beneficio, index) => (
                <li key={index}>
                  <FaCheckCircle className="beneficio-icone" />
                  {beneficio}
                </li>
              ))}
            </ul>

          </div>

        </div>

      </section>

      <style jsx>{`

        .contabilidade-section{
          display:flex;
          justify-content:center;
          padding:60px 20px;
          background:#f4f7ff;
        }

        .contabilidade-card{
          position:relative;
          max-width:850px;
          width:100%;
          border-radius:20px;
          padding:50px 40px;
          text-align:center;
          background:linear-gradient(135deg,#004aad,#007bff);
          color:white;
          overflow:hidden;
        }

        /* pelicula */

        .overlay{
          position:absolute;
          inset:0;
          background:rgba(0,0,0,0.15);
          backdrop-filter:blur(2px);
        }

        .contabilidade-conteudo{
          position:relative;
          z-index:2;
        }

        .contabilidade-badge{
          background:rgba(255,255,255,0.15);
          padding:6px 14px;
          border-radius:20px;
          font-size:13px;
          display:inline-block;
          margin-bottom:15px;
        }

        .contabilidade-titulo{
          font-size:32px;
          font-weight:800;
          margin-bottom:10px;
        }

        .contabilidade-subtitulo{
          font-size:18px;
          opacity:.9;
          margin-bottom:18px;
        }

        .contabilidade-descricao{
          max-width:600px;
          margin:auto;
          line-height:1.7;
          margin-bottom:25px;
          opacity:.95;
        }

        .contabilidade-beneficios{
          list-style:none;
          padding:0;
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          gap:12px;
        }

        .contabilidade-beneficios li{
          background:rgba(255,255,255,0.15);
          padding:8px 14px;
          border-radius:20px;
          display:flex;
          align-items:center;
          gap:6px;
          font-size:14px;
        }

        .beneficio-icone{
          color:#fff;
        }

        @media(max-width:768px){

          .contabilidade-card{
            padding:35px 25px;
          }

          .contabilidade-titulo{
            font-size:26px;
          }

          .contabilidade-subtitulo{
            font-size:16px;
          }

          .contabilidade-beneficios{
            flex-direction:column;
            align-items:center;
          }

        }

      `}</style>
    </>
  );
}