import dados from "@/Dados/site";
import footerData from "@/Dados/Footer/footerdata";
import folhaData from "@/Dados/Folha/folha";

import Navbar from "@/Home/navbar/navbar";
import Topo from "@/Home/Topbar/topo";
import Footer from "@/Home/footer/footer";
import BannerFolhaInterno from "@/utils/banner/Interno/BannerFolhaInterno";
import Icone from "@/utils/Icones/icone";

export default function FolhaPage() {
  const folha = folhaData.folhaPagamento;

  const totalCustos = folha.indicadoresGraficos.distribuicaoCustos.reduce(
    (acc, item) => acc + item.valor,
    0
  );

  const donutStops = (() => {
    let acumulado = 0;
    const cores = ["#1e63db", "#00b894", "#f4b400", "#ea4335"];

    return folha.indicadoresGraficos.distribuicaoCustos
      .map((item, index) => {
        const inicio = acumulado;
        const fatia = (item.valor / totalCustos) * 100;
        acumulado += fatia;
        return `${cores[index]} ${inicio}% ${acumulado}%`;
      })
      .join(", ");
  })();

  const maxFaturamento = Math.max(
    ...folha.indicadoresGraficos.faturamentoMensal.map((item) => item.valor)
  );

  const maxEvolucao = Math.max(
    ...folha.indicadoresGraficos.evolucaoFolha.map((item) => item.valor)
  );

  const radarPoints = (() => {
    const data = folha.indicadoresGraficos.desempenhoSetor;
    const centerX = 110;
    const centerY = 110;
    const radius = 70;

    return data
      .map((item, index) => {
        const angle = (Math.PI * 2 * index) / data.length - Math.PI / 2;
        const r = (item.valor / 100) * radius;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        return `${x},${y}`;
      })
      .join(" ");
  })();

  return (
    <>
      <Topo
        email={dados.topo.email}
        telefone={dados.topo.telefone}
        whatsapp={dados.topo.whatsapp}
      />

      <Navbar
        logo={dados.menu.logo}
        itens={dados.menu.itens}
        botaoDireito={dados.menu.botaoDireito}
        social={dados.rodape.social}
      />

      <main
        className="folha-page"
        style={{ background: folha.estilo.fundo }}
      >
        <BannerFolhaInterno
          titulo={folha.titulo}
          descricao={folha.descricao}
          icone={folha.icone}
          gradiente={folha.estilo.gradiente}
        />

        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">
              <Icone nome="fa-solid fa-building-columns" className="titulo-icone" />
              Panorama Contábil
            </h2>

            <div className="resumo-grid">
              {folha.indicadoresResumo.map((item, index) => (
                <article className="resumo-card" key={index}>
                  <strong>{item.numero}</strong>
                  <span>{item.texto}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">
              <Icone nome="fa-solid fa-chart-line" className="titulo-icone" />
              Indicadores Contábeis Inteligentes
            </h2>

            <div className="graficos-grid">
              <article className="grafico-card">
                <h3>Faturamento Mensal</h3>
                <div className="bars-chart">
                  {folha.indicadoresGraficos.faturamentoMensal.map((item, index) => (
                    <div className="bar-col" key={index}>
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
              </article>

              <article className="grafico-card">
                <h3>Distribuição de Custos</h3>
                <div className="donut-wrap">
                  <div
                    className="donut-chart"
                    style={{
                      background: `conic-gradient(${donutStops})`,
                    }}
                  >
                    <div className="donut-hole" />
                  </div>

                  <div className="legenda">
                    {folha.indicadoresGraficos.distribuicaoCustos.map((item, index) => {
                      const cores = ["#1e63db", "#00b894", "#f4b400", "#ea4335"];
                      return (
                        <div className="legenda-item" key={index}>
                          <span
                            className="legenda-cor"
                            style={{ background: cores[index] }}
                          />
                          <small>{item.nome}</small>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>

              <article className="grafico-card">
                <h3>Evolução da Folha</h3>
                <div className="line-chart">
                  <svg viewBox="0 0 260 160" className="line-svg">
                    <polyline
                      fill="none"
                      stroke="#16c784"
                      strokeWidth="4"
                      points={folha.indicadoresGraficos.evolucaoFolha
                        .map((item, index) => {
                          const x = 20 + index * 55;
                          const y = 140 - (item.valor / maxEvolucao) * 100;
                          return `${x},${y}`;
                        })
                        .join(" ")}
                    />

                    {folha.indicadoresGraficos.evolucaoFolha.map((item, index) => {
                      const x = 20 + index * 55;
                      const y = 140 - (item.valor / maxEvolucao) * 100;
                      return <circle key={index} cx={x} cy={y} r="4" fill="#16c784" />;
                    })}
                  </svg>

                  <div className="line-labels">
                    {folha.indicadoresGraficos.evolucaoFolha.map((item, index) => (
                      <span key={index}>{item.ano}</span>
                    ))}
                  </div>
                </div>
              </article>

              <article className="grafico-card">
                <h3>Desempenho por Setor</h3>
                <div className="radar-wrap">
                  <svg viewBox="0 0 220 220" className="radar-svg">
                    <circle cx="110" cy="110" r="70" fill="none" stroke="#d7e3fb" />
                    <circle cx="110" cy="110" r="50" fill="none" stroke="#d7e3fb" />
                    <circle cx="110" cy="110" r="30" fill="none" stroke="#d7e3fb" />

                    <polygon
                      points={radarPoints}
                      fill="rgba(30,99,219,0.20)"
                      stroke="#1e63db"
                      strokeWidth="3"
                    />
                  </svg>

                  <div className="radar-labels">
                    {folha.indicadoresGraficos.desempenhoSetor.map((item, index) => (
                      <span key={index}>{item.nome}</span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">
              <Icone nome="fa-solid fa-briefcase" className="titulo-icone" />
              {folha.solucoesPremium.titulo}
            </h2>

            <div className="cards-grid">
              {folha.solucoesPremium.itens.map((item, index) => (
                <article className="info-card" key={index}>
                  <div className="info-icone">
                    <Icone nome={item.icone} />
                  </div>
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="secao secao-final">
          <div className="container">
            <h2 className="secao-titulo centralizado">
              <Icone nome="fa-solid fa-star" className="titulo-icone" />
              {folha.motivos.titulo}
            </h2>

            <div className="cards-grid motivos-grid">
              {folha.motivos.itens.map((item, index) => (
                <article className="info-card pequeno" key={index}>
                  <div className="info-icone">
                    <Icone nome={item.icone} />
                  </div>
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer data={footerData} />

      <style jsx>{`
        .folha-page {
          min-height: 100vh;
          padding-bottom: 10px;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .secao {
          padding: 26px 0 8px;
        }

        .secao-final {
          padding-bottom: 40px;
        }

        .secao-titulo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 0 0 26px;
          color: ${folha.estilo.tituloSecao};
          font-size: 2rem;
          font-weight: 800;
          text-align: center;
        }

        .centralizado {
          justify-content: center;
        }

        .titulo-icone {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }

        .resumo-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .resumo-card,
        .grafico-card,
        .info-card {
          background: #ffffff;
          border-radius: 18px;
          box-shadow: ${folha.estilo.sombra};
          border: 1px solid rgba(20, 80, 200, 0.06);
        }

        .resumo-card {
          padding: 22px 18px;
          text-align: center;
        }

        .resumo-card strong {
          display: block;
          font-size: 2rem;
          line-height: 1.1;
          color: ${folha.estilo.tituloSecao};
          margin-bottom: 8px;
        }

        .resumo-card span {
          display: block;
          font-size: 0.92rem;
          color: #596780;
          line-height: 1.45;
        }

        .graficos-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          align-items: start;
        }

        .grafico-card {
          padding: 18px 16px;
          min-height: 290px;
        }

        .grafico-card h3 {
          margin: 0 0 16px;
          color: ${folha.estilo.tituloSecao};
          text-align: center;
          font-size: 1.35rem;
          line-height: 1.3;
          font-weight: 800;
        }

        .bars-chart {
          height: 180px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 8px 0;
        }

        .bar-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          flex: 1;
        }

        .bar {
          width: 100%;
          max-width: 24px;
          border-radius: 8px 8px 0 0;
          background: linear-gradient(180deg, #7fa7ff 0%, #4a74d9 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);
        }

        .bar-col span {
          font-size: 0.7rem;
          color: #6a7892;
        }

        .donut-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          padding-top: 8px;
        }

        .donut-chart {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .donut-hole {
          width: 78px;
          height: 78px;
          border-radius: 50%;
          background: #ffffff;
        }

        .legenda {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px 14px;
        }

        .legenda-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .legenda-cor {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }

        .legenda-item small {
          color: #64748b;
          font-size: 0.72rem;
        }

        .line-chart {
          padding-top: 8px;
        }

        .line-svg {
          width: 100%;
          height: 170px;
        }

        .line-labels {
          display: flex;
          justify-content: space-between;
          padding: 0 8px;
          color: #6b7890;
          font-size: 0.72rem;
        }

        .radar-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding-top: 6px;
        }

        .radar-svg {
          width: 180px;
          height: 180px;
        }

        .radar-labels {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 6px 14px;
          width: 100%;
          text-align: center;
        }

        .radar-labels span {
          font-size: 0.72rem;
          color: #6b7890;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .info-card {
          padding: 22px 18px;
          text-align: center;
        }

        .info-card.pequeno {
          padding: 20px 16px;
        }

        .info-icone {
          width: 46px;
          height: 46px;
          margin: 0 auto 14px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(20, 80, 200, 0.08);
          color: ${folha.estilo.tituloSecao};
          font-size: 1.2rem;
        }

        .info-card h3 {
          margin: 0 0 10px;
          color: ${folha.estilo.tituloSecao};
          font-size: 1rem;
          line-height: 1.35;
          font-weight: 800;
        }

        .info-card p {
          margin: 0;
          color: #64748b;
          font-size: 0.84rem;
          line-height: 1.55;
        }

        .motivos-grid {
          margin-top: 6px;
        }

        @media (max-width: 1100px) {
          .resumo-grid,
          .cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .graficos-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .secao-titulo {
            font-size: 1.5rem;
          }

          .resumo-grid,
          .graficos-grid,
          .cards-grid {
            grid-template-columns: 1fr;
          }

          .grafico-card {
            min-height: auto;
          }

          .resumo-card strong {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </>
  );
}