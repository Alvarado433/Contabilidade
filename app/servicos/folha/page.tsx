'use client';

import dados from "@/Dados/site";
import footerData from "@/Dados/Footer/footerdata";
import folhaData from "@/Dados/Folha/folha";

import Navbar from "@/Home/navbar/navbar";
import Topo from "@/Home/Topbar/topo";
import Footer from "@/Home/footer/footer";
import BannerFolhaInterno from "@/utils/banner/Interno/BannerFolhaInterno";
import Icone from "@/utils/Icones/icone";
import { getFolhaChartData } from "@/Dados/functions/folha";

export default function FolhaPage() {
  const folha = folhaData.folhaPagamento;

  const {
    donutColors,
    donutStops,
    maxFaturamento,
    linePoints,
    lineCircles,
    radarPoints,
  } = getFolhaChartData(folha);

  return (
    <>
      <Topo {...dados.topo} />

      <Navbar
        logo={dados.menu.logo}
        itens={dados.menu.itens}
        botaoDireito={dados.menu.botaoDireito}
        social={dados.rodape.social}
      />

      <main style={{ background: folha.estilo.fundo }}>
        <BannerFolhaInterno
          titulo={folha.titulo}
          descricao={folha.descricao}
          icone={folha.icone}
          gradiente={folha.estilo.gradiente}
        />

        {/* 🔥 BENEFÍCIOS */}
        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">Benefícios</h2>

            <div className="lista-beneficios">
              {folha.beneficios.map((item, index) => (
                <div key={index} className="beneficio">
                  <Icone nome="fa-solid fa-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔥 SERVIÇOS INCLUSOS */}
        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">Serviços Inclusos</h2>

            <div className="cards-grid">
              {folha.servicosInclusos.map((item, index) => (
                <div className="info-card" key={index}>
                  <Icone nome={item.icone} />
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔥 GRÁFICOS */}
        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">Indicadores</h2>

            <div className="graficos-grid">
              <div className="grafico-card">
                <h3>Faturamento</h3>
                <div className="bars-chart">
                  {folha.indicadoresGraficos.faturamentoMensal.map((item, i) => (
                    <div key={i} className="bar-col">
                      <div
                        className="bar"
                        style={{
                          height: `${(item.valor / maxFaturamento) * 120}px`,
                        }}
                      />
                      <span>{item.mes}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grafico-card">
                <h3>Custos</h3>
                <div
                  className="donut-chart"
                  style={{ background: `conic-gradient(${donutStops})` }}
                />
              </div>

              <div className="grafico-card">
                <h3>Evolução</h3>
                <svg viewBox="0 0 260 160">
                  <polyline
                    fill="none"
                    stroke="#16c784"
                    strokeWidth="4"
                    points={linePoints}
                  />
                </svg>
              </div>

              <div className="grafico-card">
                <h3>Setores</h3>
                <svg viewBox="0 0 220 220">
                  <polygon
                    points={radarPoints}
                    fill="rgba(30,99,219,0.2)"
                    stroke="#1e63db"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 DIFERENCIAIS */}
        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">Diferenciais</h2>

            <div className="cards-grid">
              {folha.diferenciais.map((item, index) => (
                <div className="info-card" key={index}>
                  <Icone nome={item.icone} />
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔥 CTA FINAL */}
        <section className="cta">
          <h2>{folha.cta.titulo}</h2>
          <p>{folha.cta.descricao}</p>
          <a href={folha.cta.botao.url}>
            {folha.cta.botao.texto}
          </a>
        </section>
      </main>

      <Footer data={footerData} />

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }

        .secao {
          padding: 40px 0;
        }

        .secao-titulo {
          text-align: center;
          margin-bottom: 20px;
          font-size: 1.8rem;
        }

        .lista-beneficios {
          display: grid;
          gap: 10px;
        }

        .beneficio {
          display: flex;
          gap: 10px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .info-card {
          padding: 20px;
          background: #fff;
          border-radius: 12px;
          text-align: center;
        }

        .graficos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .grafico-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
        }

        .bar {
          width: 20px;
          background: blue;
        }

        .cta {
          text-align: center;
          padding: 50px;
          background: #0d3f86;
          color: white;
        }

        .cta a {
          background: #00c853;
          padding: 12px 20px;
          border-radius: 8px;
          display: inline-block;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}