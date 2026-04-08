"use client";

import consultoria from "@/Dados/consultoria/consultoria";
import footerData from "@/Dados/Footer/footerdata";
import menu from "@/Dados/menu/menu";
import dados from "@/Dados/site";
import Footer from "@/Home/footer/footer";
import Navbar from "@/Home/navbar/navbar";
import Topo from "@/Home/Topbar/topo";


export default function ConsultoriaPage() {
  return (
    <>
      <Topo
        email={dados.topo.email}
        telefone={dados.topo.telefone}
        whatsapp={dados.topo.whatsapp}
      />

      <Navbar
        logo={menu.logo}
        itens={menu.itens}
        botaoDireito={menu.botaoDireito}
        social={menu.social}
      />

      <main className="consultoria-page">
        <section className="consultoria-hero">
          <div className="hero-overlay"></div>

          <div className="container hero-container">
            <div className="hero-conteudo">
              <span className="hero-badge">{consultoria.hero.badge}</span>

              <h1 className="hero-titulo">{consultoria.hero.titulo}</h1>

              <div className="hero-linha"></div>

              <p className="hero-descricao">{consultoria.hero.descricao}</p>

              <div className="hero-acoes">
                <a
                  href={consultoria.hero.botoes.principal.url}
                  className="hero-btn hero-btn-primary"
                >
                  {consultoria.hero.botoes.principal.texto}
                </a>

                <a
                  href={consultoria.hero.botoes.secundario.url}
                  className="hero-btn hero-btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {consultoria.hero.botoes.secundario.texto}
                </a>
              </div>
            </div>

            <div className="hero-lado">
              <article className="hero-card">
                <span className="hero-card-tag">Consultoria com resultado</span>
                <h3>Mais clareza, segurança e estratégia para sua empresa</h3>
                <p>
                  Ajudamos você a enxergar melhor os números, reduzir riscos e
                  tomar decisões com mais confiança.
                </p>
              </article>

              <div className="hero-mini-grid">
                <article className="hero-mini-card">
                  <strong>Diagnóstico</strong>
                  <span>Análise inicial para identificar gargalos e oportunidades</span>
                </article>

                <article className="hero-mini-card">
                  <strong>Planejamento</strong>
                  <span>Direcionamento estratégico para apoiar decisões</span>
                </article>

                <article className="hero-mini-card">
                  <strong>Organização</strong>
                  <span>Mais controle contábil, fiscal e financeiro</span>
                </article>

                <article className="hero-mini-card">
                  <strong>Crescimento</strong>
                  <span>Mais estrutura para evoluir com segurança</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="consultoria-intro">
          <div className="container">
            <div className="section-topo">
              <span className="section-tag">Por que isso importa</span>
              <h2>{consultoria.introducao.titulo}</h2>
              <p>{consultoria.introducao.descricao}</p>
            </div>

            <div className="dores-grid">
              {consultoria.introducao.dores.map((dor, index) => (
                <article key={index} className="dor-card">
                  <div className="dor-numero">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p>{dor}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="consultoria-diferenciais">
          <div className="container">
            <div className="section-topo">
              <span className="section-tag">Por que escolher a Visacont</span>
              <h2>{consultoria.diferenciais.titulo}</h2>
              <p>{consultoria.diferenciais.descricao}</p>
            </div>

            <div className="diferenciais-grid">
              {consultoria.diferenciais.itens.map((item, index) => (
                <article key={index} className="info-card destaque-topo">
                  <div className="info-icon">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="consultoria-entregas">
          <div className="container">
            <div className="section-topo">
              <span className="section-tag">O que você recebe</span>
              <h2>{consultoria.entregas.titulo}</h2>
              <p>{consultoria.entregas.descricao}</p>
            </div>

            <div className="entregas-grid">
              {consultoria.entregas.itens.map((item, index) => (
                <article key={index} className="entrega-card">
                  <span className="entrega-check">✓</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="consultoria-processo">
          <div className="container">
            <div className="section-topo">
              <span className="section-tag">Como funciona</span>
              <h2>{consultoria.processo.titulo}</h2>
            </div>

            <div className="processo-grid">
              {consultoria.processo.etapas.map((etapa, index) => (
                <article key={index} className="processo-card">
                  <div className="processo-numero">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{etapa.titulo}</h3>
                  <p>{etapa.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="consultoria-beneficios">
          <div className="container">
            <div className="section-topo center">
              <span className="section-tag">Benefícios</span>
              <h2>{consultoria.beneficios.titulo}</h2>
            </div>

            <div className="beneficios-grid">
              {consultoria.beneficios.itens.map((item, index) => (
                <article key={index} className="beneficio-card">
                  <div className="beneficio-icon">★</div>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="consultoria-cta">
          <div className="container">
            <div className="cta-box">
              <span className="cta-tag">{consultoria.cta.badge}</span>
              <h2>{consultoria.cta.titulo}</h2>
              <p>{consultoria.cta.descricao}</p>

              <div className="cta-acoes">
                <a
                  href={consultoria.cta.botoes.principal.url}
                  className="cta-btn cta-btn-primary"
                >
                  {consultoria.cta.botoes.principal.texto}
                </a>

                <a
                  href={consultoria.cta.botoes.secundario.url}
                  className="cta-btn cta-btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {consultoria.cta.botoes.secundario.texto}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer data={footerData} />

      <style jsx>{`
        .consultoria-page {
          background: linear-gradient(180deg, #f7faff 0%, #eef4ff 100%);
          color: #162235;
        }

        .container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .consultoria-hero {
          position: relative;
          overflow: hidden;
          padding: 120px 0 90px;
          background: linear-gradient(135deg, #0d2f6f 0%, #0f4fc5 48%, #103a86 100%);
          color: #ffffff;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 30%),
            radial-gradient(circle at 85% 20%, rgba(255, 204, 77, 0.13), transparent 24%),
            radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.06), transparent 26%);
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 0.9fr;
          gap: 34px;
          align-items: center;
        }

        .hero-badge,
        .section-tag,
        .cta-tag,
        .hero-card-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .hero-badge {
          margin-bottom: 18px;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #dbe7ff;
          font-size: 0.82rem;
        }

        .hero-titulo {
          margin: 0;
          font-size: clamp(2.5rem, 5vw, 4.4rem);
          line-height: 1.03;
          font-weight: 900;
          letter-spacing: -0.04em;
          max-width: 760px;
        }

        .hero-linha {
          width: 82px;
          height: 5px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ffcc4d, #ffd76f);
          margin: 24px 0;
          box-shadow: 0 6px 16px rgba(255, 204, 77, 0.28);
        }

        .hero-descricao {
          margin: 0;
          max-width: 760px;
          font-size: 1.06rem;
          line-height: 1.95;
          color: #dbe7ff;
        }

        .hero-acoes,
        .cta-acoes {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .hero-btn,
        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 14px 24px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          transition: all 0.28s ease;
        }

        .hero-btn-primary,
        .cta-btn-primary {
          background: linear-gradient(135deg, #ffcc4d, #ffb800);
          color: #10213f;
          box-shadow: 0 14px 28px rgba(255, 184, 0, 0.22);
        }

        .hero-btn-primary:hover,
        .cta-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 34px rgba(255, 184, 0, 0.3);
        }

        .hero-btn-secondary,
        .cta-btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1.4px solid rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(8px);
        }

        .hero-btn-secondary:hover,
        .cta-btn-secondary:hover {
          transform: translateY(-3px);
          background: #ffffff;
          color: #0f4fc5;
        }

        .hero-lado {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .hero-card,
        .hero-mini-card,
        .dor-card,
        .info-card,
        .entrega-card,
        .processo-card,
        .beneficio-card,
        .cta-box {
          background: #ffffff;
          border: 1px solid rgba(226, 235, 247, 0.95);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .hero-card {
          padding: 26px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(12px);
          color: #ffffff;
        }

        .hero-card-tag {
          margin-bottom: 14px;
          padding: 7px 12px;
          background: rgba(255, 255, 255, 0.16);
          color: #ffffff;
          font-size: 0.76rem;
        }

        .hero-card h3 {
          margin: 0 0 10px;
          font-size: 1.35rem;
          line-height: 1.25;
        }

        .hero-card p {
          margin: 0;
          color: #e4eeff;
          line-height: 1.8;
        }

        .hero-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .hero-mini-card {
          border-radius: 22px;
          padding: 20px 18px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(10px);
        }

        .hero-mini-card strong {
          display: block;
          margin-bottom: 8px;
          color: #ffffff;
          font-size: 1rem;
        }

        .hero-mini-card span {
          display: block;
          color: #dbe7ff;
          font-size: 0.92rem;
          line-height: 1.65;
        }

        .consultoria-intro,
        .consultoria-diferenciais,
        .consultoria-entregas,
        .consultoria-processo,
        .consultoria-beneficios,
        .consultoria-cta {
          padding: 84px 0;
        }

        .section-topo {
          max-width: 780px;
          margin-bottom: 34px;
        }

        .section-topo.center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .section-tag {
          margin-bottom: 14px;
          padding: 8px 14px;
          background: #eaf1ff;
          color: #0f5fe0;
          font-size: 0.82rem;
        }

        .section-topo h2 {
          margin: 0 0 12px;
          font-size: clamp(2rem, 3vw, 2.9rem);
          color: #162235;
          line-height: 1.15;
        }

        .section-topo p {
          margin: 0;
          color: #667085;
          line-height: 1.9;
        }

        .dores-grid,
        .diferenciais-grid,
        .entregas-grid,
        .processo-grid,
        .beneficios-grid {
          display: grid;
          gap: 24px;
        }

        .dores-grid,
        .diferenciais-grid,
        .processo-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .entregas-grid,
        .beneficios-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .dor-card,
        .info-card,
        .entrega-card,
        .processo-card,
        .beneficio-card {
          border-radius: 24px;
          padding: 26px 22px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .dor-card:hover,
        .info-card:hover,
        .entrega-card:hover,
        .processo-card:hover,
        .beneficio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 45px rgba(15, 23, 42, 0.12);
        }

        .dor-numero,
        .processo-numero,
        .info-icon,
        .beneficio-icon {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 800;
          box-shadow: 0 12px 24px rgba(15, 95, 224, 0.18);
        }

        .dor-card p,
        .info-card p,
        .entrega-card p,
        .processo-card p,
        .beneficio-card p {
          margin: 0;
          color: #667085;
          line-height: 1.8;
        }

        .info-card h3,
        .processo-card h3 {
          margin: 0 0 12px;
          color: #162235;
        }

        .destaque-topo {
          position: relative;
        }

        .destaque-topo::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          border-radius: 24px 24px 0 0;
          background: linear-gradient(90deg, #0f5fe0, #3b82f6, #ffcc4d);
        }

        .entrega-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .entrega-check {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #eef4ff;
          color: #0f5fe0;
          font-weight: 900;
          flex-shrink: 0;
        }

        .beneficio-card {
          text-align: center;
        }

        .cta-box {
          border-radius: 30px;
          padding: 42px 34px;
          background: linear-gradient(135deg, #0d2f6f 0%, #0f4fc5 100%);
          color: #ffffff;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-box::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 30%),
            radial-gradient(circle at bottom right, rgba(255, 204, 77, 0.15), transparent 24%);
          pointer-events: none;
        }

        .cta-box > * {
          position: relative;
          z-index: 2;
        }

        .cta-tag {
          margin-bottom: 14px;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #dbe7ff;
          font-size: 0.8rem;
        }

        .cta-box h2 {
          margin: 0 0 14px;
          font-size: clamp(1.9rem, 3vw, 2.8rem);
          line-height: 1.15;
        }

        .cta-box p {
          max-width: 760px;
          margin: 0 auto;
          color: #dbe7ff;
          line-height: 1.9;
        }

        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr;
          }

          .dores-grid,
          .diferenciais-grid,
          .entregas-grid,
          .processo-grid,
          .beneficios-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .consultoria-hero {
            padding: 100px 0 74px;
          }

          .consultoria-intro,
          .consultoria-diferenciais,
          .consultoria-entregas,
          .consultoria-processo,
          .consultoria-beneficios,
          .consultoria-cta {
            padding: 64px 0;
          }

          .hero-mini-grid,
          .dores-grid,
          .diferenciais-grid,
          .entregas-grid,
          .processo-grid,
          .beneficios-grid {
            grid-template-columns: 1fr;
          }

          .cta-box {
            padding: 34px 22px;
            border-radius: 24px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 14px;
          }

          .hero-descricao,
          .section-topo p,
          .cta-box p {
            font-size: 0.96rem;
            line-height: 1.8;
          }

          .hero-card,
          .hero-mini-card,
          .dor-card,
          .info-card,
          .entrega-card,
          .processo-card,
          .beneficio-card {
            border-radius: 20px;
          }

          .dor-card,
          .info-card,
          .entrega-card,
          .processo-card,
          .beneficio-card {
            padding: 22px 18px;
          }

          .hero-acoes,
          .cta-acoes {
            flex-direction: column;
          }

          .hero-btn,
          .cta-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}