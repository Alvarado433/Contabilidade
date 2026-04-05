'use client';

import bannerData from "@/Dados/Banner/banner";
import { BannerEmpresaData } from "@/Dados/Interfaces/banner";



export default function BannerInterno() {
  const banner = bannerData.bannerEmpresa as BannerEmpresaData;

  return (
    <>
      <section className="banner-wrapper">
        <div
          className="banner-card"
          style={{
            background:
              banner.cores?.gradiente ||
              "linear-gradient(135deg, #004aad 0%, #007bff 100%)",
          }}
        >
          <span className="banner-tag">
            {banner.tag || "Serviços Empresariais"}
          </span>

          <h1>{banner.titulo}</h1>
          <h2>{banner.subtitulo}</h2>
          <p>{banner.descricao}</p>

          <div className="banner-acoes">
            <a
              href={banner.botoes?.principal?.url || "/contato"}
              className="botao-primario"
              style={{
                background: banner.cores?.botao || "#004aad",
              }}
            >
              {banner.botoes?.principal?.texto || "Solicitar atendimento"}
            </a>

            <a
              href={banner.botoes?.secundario?.url || "#conteudo"}
              className="botao-secundario"
            >
              {banner.botoes?.secundario?.texto || "Ver detalhes"}
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        
      `}</style>
    </>
  );
}