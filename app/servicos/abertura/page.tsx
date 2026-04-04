import dados from "@/Dados/site";
import Footer from "@/Home/footer/footer";
import Navbar from "@/Home/navbar/navbar";
import Topo from "@/Home/Topbar/topo";
import BannerInterno from "@/utils/banner/Interno/BannerInterno";

export default function AberturaPage() {
  const empresa = dados.empresaCompleta;

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
      <main className="abertura-page">



        <BannerInterno />

        <section id="conteudo" className="abertura-conteudo">
          <div className="abertura-container">
            <div className="abertura-intro">
              <span className="abertura-badge">{empresa.guia.badge}</span>
              <h2>{empresa.guia.titulo}</h2>
              <p>{empresa.guia.descricao}</p>
            </div>

            <div className="abertura-grid">
              {empresa.guia.topicos.map((topico, index) => (
                <article key={index} className="abertura-card abertura-card-topico">
                  <div className="abertura-card-topo">
                    <span className="abertura-numero">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p>{topico}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="abertura-bloco abertura-bloco-claro">
          <div className="abertura-container">
            <div className="abertura-header">
              <span className="abertura-badge">{empresa.documentos.badge}</span>
              <h2>{empresa.documentos.titulo}</h2>
              <p>{empresa.documentos.descricao}</p>
            </div>

            <div className="documentos-grid">
              {empresa.documentos.lista.map((item, index) => (
                <article key={index} className="documento-card">
                  <span className="documento-icone">
                    {empresa.documentos.icone || "✓"}
                  </span>
                  <div>
                    <h3>
                      {empresa.documentos.itemPrefixo}{" "}
                      {String(index + 1).padStart(2, "0")}
                    </h3>
                    <p>{item}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="abertura-bloco">
          <div className="abertura-container">
            <div className="abertura-header">
              <span className="abertura-badge">{empresa.regimes.badge}</span>
              <h2>{empresa.regimes.titulo}</h2>
              <p>{empresa.regimes.descricao}</p>
            </div>

            <div className="regimes-cards">
              {empresa.regimes.tabela.map((item, index) => (
                <article key={index} className="regime-card">
                  <div className="regime-card-topo">
                    <h3>{item.regime}</h3>
                    <span className="regime-chip">
                      {empresa.regimes.opcaoPrefixo} {index + 1}
                    </span>
                  </div>

                  <ul className="regime-lista">
                    <li>
                      <strong>{empresa.regimes.labels.ideal}:</strong> {item.ideal}
                    </li>
                    <li>
                      <strong>{empresa.regimes.labels.vantagens}:</strong>{" "}
                      {item.vantagens}
                    </li>
                    <li>
                      <strong>{empresa.regimes.labels.cuidado}:</strong>{" "}
                      {item.cuidado}
                    </li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="abertura-bloco abertura-bloco-claro">
          <div className="abertura-container">
            <div className="abertura-header">
              <span className="abertura-badge">{empresa.simulador.badge}</span>
              <h2>{empresa.simulador.titulo}</h2>
              <p>{empresa.simulador.descricao}</p>
            </div>

            <div className="custos-grid">
              {empresa.simulador.custos.map((item, index) => (
                <article key={index} className="custo-card">
                  <span className="custo-indice">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.item}</h3>
                  <strong>{item.valor}</strong>
                </article>
              ))}
            </div>

            <div className="mensalidade-box">
              <div>
                <span className="mensalidade-label">
                  {empresa.simulador.mensalidade.titulo}
                </span>
                <h3>{empresa.simulador.mensalidade.valor}</h3>
                <p>{empresa.simulador.mensalidade.obs}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="abertura-bloco">
          <div className="abertura-container">
            <div className="abertura-header">
              <span className="abertura-badge">{empresa.erros.badge}</span>
              <h2>{empresa.erros.titulo}</h2>
              <p>{empresa.erros.descricao}</p>
            </div>

            <div className="erros-grid">
              {empresa.erros.lista.map((erro, index) => (
                <article key={index} className="erro-card">
                  <span className="erro-indice">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p>{erro}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="abertura-bloco abertura-bloco-faq">
          <div className="abertura-container">
            <div className="abertura-header abertura-header-centralizado">
              <span className="abertura-badge">{empresa.faq.badge}</span>
              <h2>{empresa.faq.titulo}</h2>
              <p>{empresa.faq.descricao}</p>
            </div>

            <div className="faq-wrapper">
              {empresa.faq.questoes.map((item, index) => (
                <details key={index} className="faq-item" open={index === 0}>
                  <summary>
                    <span className="faq-numero">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="faq-pergunta">{item.q}</span>
                    <span className="faq-icone">+</span>
                  </summary>
                  <div className="faq-resposta">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="abertura-container">
            <div className="cta-final-box">
              <span className="abertura-badge abertura-badge-claro">
                {empresa.cta.badge}
              </span>
              <h2>{empresa.cta.titulo}</h2>
              <p>{empresa.cta.descricao}</p>
              <a href={empresa.cta.botao.url} className="cta-final-botao">
                {empresa.cta.botao.texto}
              </a>
            </div>
          </div>
        </section>


      </main>
      <Footer
        empresa={dados.footer.empresa}
        institucional={dados.footer.institucional}
        atendimento={dados.footer.atendimento}
        social={dados.footer.social}
        rodape={dados.footer.rodape}
      />
    </>

  );
}