'use client';

import dados from "@/Dados/site";
import footerData from "@/Dados/Footer/footerdata";
import fiscalData from "@/Dados/fiscal/fiscal";

import Navbar from "@/Home/navbar/navbar";
import Topo from "@/Home/Topbar/topo";
import Footer from "@/Home/footer/footer";
import BannerFiscalInterno from "@/utils/banner/Interno/BannerFiscalInterno";
import Icone from "@/utils/Icones/icone";

type SetorItem = {
  nome: string;
  descricao: string;
};

type RelatorioItem = {
  mes: string;
  tributos: string;
  pagos: string;
  economia: string;
  obs: string;
};

type RegimeItem = {
  nome: string;
  indicado: string;
  vantagem: string;
  atencao: string;
};

type ResultadoItem = {
  titulo: string;
  valor: string;
  descricao: string;
};

type DiferencialItem = {
  titulo: string;
  descricao: string;
  icone: string;
};

type FaqItem = {
  pergunta: string;
  resposta: string;
};

export default function FiscalPage() {
  const fiscal = fiscalData.fiscal;

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

      <main className="fiscal-page" style={{ background: fiscal.estilo.fundo }}>
        <BannerFiscalInterno
          titulo={fiscal.titulo}
          subtitulo={fiscal.subtitulo}
          descricao={fiscal.descricao}
          badge={fiscal.badge}
          destaque={fiscal.destaque}
          icone={fiscal.icone}
          gradiente={fiscal.estilo.gradiente}
        />

        {fiscal.metricasResumo && fiscal.metricasResumo.length > 0 && (
          <section className="secao">
            <div className="container">
              <h2 className="secao-titulo">Indicadores Estratégicos</h2>

              <div className="metricas-grid">
                {fiscal.metricasResumo.map(
                  (
                    item: { numero: string; texto: string },
                    index: number
                  ) => (
                    <article className="metrica-card" key={index}>
                      <strong>{item.numero}</strong>
                      <span>{item.texto}</span>
                    </article>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {fiscal.clientesExemplo && fiscal.clientesExemplo.length > 0 && (
          <section className="secao secao-compacta">
            <div className="container">
              <h2 className="secao-titulo">Empresas que se beneficiam deste modelo</h2>

              <div className="clientes-grid">
                {fiscal.clientesExemplo.map((item: string, index: number) => (
                  <div className="cliente-chip" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">Setores Atendidos</h2>

            <div className="setores-grid">
              {fiscal.setores.map((item: SetorItem, index: number) => (
                <article className="setor-card" key={index}>
                  <h3>{item.nome}</h3>
                  <p>{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">Funcionalidades</h2>

            <div className="funcionalidades-grid">
              {fiscal.funcionalidades.map((item: string, index: number) => (
                <article className="funcionalidade-card" key={index}>
                  <div className="check-wrap">✓</div>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {fiscal.entregaveis && fiscal.entregaveis.length > 0 && (
          <section className="secao">
            <div className="container">
              <h2 className="secao-titulo">Entregáveis</h2>

              <div className="entregaveis-grid">
                {fiscal.entregaveis.map((item: string, index: number) => (
                  <article className="entregavel-card" key={index}>
                    <div className="entregavel-icone">
                      <Icone nome="fa-solid fa-file-invoice-dollar" />
                    </div>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">Resultados</h2>

            <div className="resultados-grid">
              {fiscal.resultados.map((item: ResultadoItem, index: number) => (
                <article className="resultado-card" key={index}>
                  <strong>{item.valor}</strong>
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">Relatórios Detalhados</h2>

            <div className="tabela-wrap">
              <table className="tabela-fiscal">
                <thead>
                  <tr>
                    <th>Mês</th>
                    <th>Tributos</th>
                    <th>Pagos</th>
                    <th>Economia</th>
                    <th>Observações</th>
                  </tr>
                </thead>
                <tbody>
                  {fiscal.relatorios.map((item: RelatorioItem, index: number) => (
                    <tr key={index}>
                      <td>{item.mes}</td>
                      <td>{item.tributos}</td>
                      <td>{item.pagos}</td>
                      <td className="economia">{item.economia}</td>
                      <td>{item.obs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">Regimes Tributários</h2>

            <div className="regimes-grid">
              {fiscal.regimes.map((item: RegimeItem, index: number) => (
                <article className="regime-card" key={index}>
                  <h3>{item.nome}</h3>
                  <ul>
                    <li>
                      <strong>Indicado:</strong> {item.indicado}
                    </li>
                    <li>
                      <strong>Vantagem:</strong> {item.vantagem}
                    </li>
                    <li>
                      <strong>Atenção:</strong> {item.atencao}
                    </li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {fiscal.diferenciais && fiscal.diferenciais.length > 0 && (
          <section className="secao">
            <div className="container">
              <h2 className="secao-titulo">Diferenciais</h2>

              <div className="diferenciais-grid">
                {fiscal.diferenciais.map(
                  (item: DiferencialItem, index: number) => (
                    <article className="diferencial-card" key={index}>
                      <div className="tech-icone">
                        <Icone nome={item.icone} />
                      </div>
                      <h3>{item.titulo}</h3>
                      <p>{item.descricao}</p>
                    </article>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {fiscal.riscosEvitados && fiscal.riscosEvitados.length > 0 && (
          <section className="secao">
            <div className="container">
              <h2 className="secao-titulo">Riscos Evitados</h2>

              <div className="riscos-grid">
                {fiscal.riscosEvitados.map((item: string, index: number) => (
                  <article className="risco-card" key={index}>
                    <div className="risco-icone">!</div>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="secao">
          <div className="container">
            <h2 className="secao-titulo">Tecnologia & Compliance</h2>

            <div className="tecnologia-grid">
              {fiscal.tecnologia.map((item: string, index: number) => (
                <article className="tecnologia-card" key={index}>
                  <div className="tech-icone">
                    <Icone nome="fa-solid fa-shield-halved" />
                  </div>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {fiscal.faq && fiscal.faq.length > 0 && (
          <section className="secao">
            <div className="container">
              <h2 className="secao-titulo">FAQ Rápido</h2>

              <div className="faq-grid">
                {fiscal.faq.map((item: FaqItem, index: number) => (
                  <details className="faq-card" key={index} open={index === 0}>
                    <summary>{item.pergunta}</summary>
                    <p>{item.resposta}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="cta-section">
          <div className="container">
            <div className="cta-box">
              <h2>{fiscal.cta.titulo}</h2>
              <p>{fiscal.cta.descricao}</p>
              <a href={fiscal.cta.botao.url} className="cta-botao">
                {fiscal.cta.botao.texto}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer data={footerData} />

      <style jsx>{`
        .fiscal-page {
          min-height: 100vh;
          padding-bottom: 16px;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .secao {
          padding: 26px 0 10px;
        }

        .secao-compacta {
          padding-top: 8px;
        }

        .secao-titulo {
          margin: 0 0 22px;
          text-align: center;
          color: ${fiscal.estilo.tituloSecao};
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .metricas-grid,
        .setores-grid,
        .funcionalidades-grid,
        .resultados-grid,
        .regimes-grid,
        .tecnologia-grid,
        .entregaveis-grid,
        .diferenciais-grid,
        .riscos-grid,
        .faq-grid {
          display: grid;
          gap: 18px;
        }

        .metricas-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .setores-grid {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .funcionalidades-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .resultados-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .regimes-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .tecnologia-grid,
        .entregaveis-grid,
        .diferenciais-grid,
        .riscos-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .clientes-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .cliente-chip {
          background: #ffffff;
          color: ${fiscal.estilo.tituloSecao};
          border: 1px solid rgba(20, 80, 200, 0.08);
          box-shadow: ${fiscal.estilo.sombra};
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 700;
        }

        .metrica-card,
        .setor-card,
        .funcionalidade-card,
        .resultado-card,
        .regime-card,
        .tecnologia-card,
        .entregavel-card,
        .diferencial-card,
        .risco-card,
        .faq-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 22px 18px;
          box-shadow: ${fiscal.estilo.sombra};
          border: 1px solid rgba(20, 80, 200, 0.06);
        }

        .metrica-card {
          text-align: center;
        }

        .metrica-card strong {
          display: block;
          margin-bottom: 8px;
          color: ${fiscal.estilo.destaque};
          font-size: 2rem;
          line-height: 1.1;
          font-weight: 900;
        }

        .metrica-card span {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .setor-card h3,
        .resultado-card h3,
        .regime-card h3,
        .diferencial-card h3 {
          margin: 0 0 10px;
          color: ${fiscal.estilo.tituloSecao};
          font-size: 1.08rem;
          font-weight: 800;
          line-height: 1.3;
        }

        .setor-card p,
        .funcionalidade-card p,
        .resultado-card p,
        .tecnologia-card p,
        .entregavel-card p,
        .diferencial-card p,
        .risco-card p,
        .faq-card p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
          line-height: 1.65;
        }

        .funcionalidade-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .check-wrap {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: ${fiscal.estilo.destaque};
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 800;
        }

        .entregavel-card,
        .diferencial-card,
        .tecnologia-card,
        .risco-card {
          text-align: center;
        }

        .entregavel-icone,
        .tech-icone {
          width: 44px;
          height: 44px;
          margin: 0 auto 12px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(20, 80, 200, 0.08);
          color: ${fiscal.estilo.tituloSecao};
          font-size: 1.15rem;
        }

        .resultado-card {
          text-align: center;
        }

        .resultado-card strong {
          display: block;
          margin-bottom: 10px;
          color: ${fiscal.estilo.destaque};
          font-size: 2rem;
          line-height: 1.1;
          font-weight: 900;
        }

        .tabela-wrap {
          overflow-x: auto;
          background: #ffffff;
          border-radius: 18px;
          box-shadow: ${fiscal.estilo.sombra};
          border: 1px solid rgba(20, 80, 200, 0.06);
        }

        .tabela-fiscal {
          width: 100%;
          border-collapse: collapse;
          min-width: 760px;
        }

        .tabela-fiscal th,
        .tabela-fiscal td {
          padding: 14px 16px;
          text-align: left;
          border-bottom: 1px solid #edf2f7;
          font-size: 0.92rem;
        }

        .tabela-fiscal th {
          background: #f8fbff;
          color: ${fiscal.estilo.tituloSecao};
          font-weight: 800;
        }

        .tabela-fiscal td {
          color: #5f6f86;
        }

        .economia {
          color: ${fiscal.estilo.destaque};
          font-weight: 800;
        }

        .regime-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 10px;
        }

        .regime-card li {
          color: #64748b;
          font-size: 0.92rem;
          line-height: 1.55;
        }

        .regime-card strong {
          color: ${fiscal.estilo.tituloSecao};
        }

        .risco-icone {
          width: 34px;
          height: 34px;
          margin: 0 auto 10px;
          border-radius: 50%;
          background: rgba(255, 77, 79, 0.12);
          color: #d93025;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .faq-card summary {
          cursor: pointer;
          list-style: none;
          font-weight: 800;
          color: ${fiscal.estilo.tituloSecao};
          margin-bottom: 10px;
        }

        .faq-card summary::-webkit-details-marker {
          display: none;
        }

        .cta-section {
          padding: 26px 0 44px;
        }

        .cta-box {
          background: linear-gradient(135deg, #0d3f86 0%, #1e88ff 100%);
          border-radius: 22px;
          padding: 36px 28px;
          text-align: center;
          color: #ffffff;
          box-shadow: ${fiscal.estilo.sombra};
        }

        .cta-box h2 {
          margin: 0 0 12px;
          font-size: 2rem;
          line-height: 1.2;
          font-weight: 800;
        }

        .cta-box p {
          max-width: 760px;
          margin: 0 auto 18px;
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
        }

        .cta-botao {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 12px;
          background: ${fiscal.estilo.destaque};
          color: #ffffff;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .cta-botao:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }

        @media (max-width: 1100px) {
          .metricas-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .setores-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .funcionalidades-grid,
          .regimes-grid,
          .tecnologia-grid,
          .entregaveis-grid,
          .diferenciais-grid,
          .riscos-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .secao-titulo {
            font-size: 1.55rem;
          }

          .metricas-grid,
          .setores-grid,
          .funcionalidades-grid,
          .resultados-grid,
          .regimes-grid,
          .tecnologia-grid,
          .entregaveis-grid,
          .diferenciais-grid,
          .riscos-grid,
          .faq-grid {
            grid-template-columns: 1fr;
          }

          .cta-box {
            padding: 28px 18px;
          }

          .cta-box h2 {
            font-size: 1.55rem;
          }

          .cta-box p {
            font-size: 0.94rem;
          }
        }
      `}</style>
    </>
  );
}