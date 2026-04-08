"use client";



import footerData from "@/Dados/Footer/footerdata";
import menu from "@/Dados/menu/menu";
import dados from "@/Dados/site";
import sobre from "@/Dados/sobre/sobre";
import Footer from "@/Home/footer/footer";
import Navbar from "@/Home/navbar/navbar";
import Topo from "@/Home/Topbar/topo";

export default function SobrePage() {
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

      <main className="sobre-page">
        <section className="sobre-hero">
          <div className="hero-overlay"></div>

          <div className="container hero-container">
            <div className="hero-conteudo">
              <span className="hero-badge">Sobre a Visacont</span>

              <h1 className="hero-titulo">
                Contabilidade moderna, humana e estratégica para empresas que
                querem crescer com segurança.
              </h1>

              <div className="hero-linha"></div>

              <p className="hero-descricao">{sobre.descricao}</p>

              <div className="hero-acoes">
                <a href="/contato" className="hero-btn hero-btn-primary">
                  Falar com um especialista
                </a>
                <a href="#historia" className="hero-btn hero-btn-secondary">
                  Conhecer nossa história
                </a>
              </div>
            </div>

            <div className="hero-destaques">
              <article className="hero-card hero-card-principal">
                <span className="hero-card-tag">Excelência contábil</span>
                <h3>Atendimento consultivo com foco em resultado</h3>
                <p>
                  Simplificamos a rotina fiscal, contábil e tributária para sua
                  empresa operar com mais organização, clareza e confiança.
                </p>
              </article>

              <div className="hero-mini-grid">
                <article className="hero-mini-card">
                  <strong>CRC Ativo</strong>
                  <span>Regularidade e confiança profissional</span>
                </article>

                <article className="hero-mini-card">
                  <strong>ISO 9001</strong>
                  <span>Qualidade e gestão com padrão internacional</span>
                </article>

                <article className="hero-mini-card">
                  <strong>Digital</strong>
                  <span>Processos online e atendimento ágil</span>
                </article>

                <article className="hero-mini-card">
                  <strong>Estratégia</strong>
                  <span>Mais visão para apoiar decisões empresariais</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="sobre-numeros">
          <div className="container">
            <div className="numeros-grid">
              <article className="numero-card">
                <h3>20+</h3>
                <p>Anos de trajetória e evolução constante</p>
              </article>

              <article className="numero-card">
                <h3>100%</h3>
                <p>Compromisso com transparência e conformidade</p>
              </article>

              <article className="numero-card">
                <h3>Digital</h3>
                <p>Atendimento moderno com processos otimizados</p>
              </article>

              <article className="numero-card">
                <h3>Humano</h3>
                <p>Relacionamento próximo e suporte consultivo</p>
              </article>
            </div>
          </div>
        </section>

        <section className="sobre-mvv">
          <div className="container">
            <div className="section-topo">
              <span className="section-tag">Nossos pilares</span>
              <h2>O que sustenta a Visacont todos os dias</h2>
              <p>
                Mais do que executar obrigações, buscamos orientar, organizar e
                fortalecer cada cliente com uma atuação segura e inteligente.
              </p>
            </div>

            <div className="mvv-grid">
              <article className="info-card destaque-topo">
                <div className="info-icon">🎯</div>
                <h3>{sobre.missao.titulo}</h3>
                <p>{sobre.missao.texto}</p>
              </article>

              <article className="info-card destaque-topo">
                <div className="info-icon">👁️</div>
                <h3>{sobre.visao.titulo}</h3>
                <p>{sobre.visao.texto}</p>
              </article>

              <article className="info-card destaque-topo">
                <div className="info-icon">🤝</div>
                <h3>{sobre.valores.titulo}</h3>
                <ul className="valores-lista">
                  {sobre.valores.lista.map((valor, index) => (
                    <li key={index}>{valor}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="sobre-certificacoes">
          <div className="container">
            <div className="section-topo">
              <span className="section-tag">Credibilidade</span>
              <h2>{sobre.certificacoes.titulo}</h2>
              <p>
                Reconhecimentos que refletem nosso padrão de qualidade,
                profissionalismo e compromisso com a evolução contínua.
              </p>
            </div>

            <div className="cert-grid">
              {sobre.certificacoes.itens.map((item, index) => (
                <article key={index} className="cert-card">
                  <div className="cert-top">
                    <span className="cert-numero">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="cert-selo">Reconhecimento</span>
                  </div>
                  <h3>{item.nome}</h3>
                  <p>{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sobre-historia" id="historia">
          <div className="container">
            <div className="section-topo">
              <span className="section-tag">Nossa trajetória</span>
              <h2>{sobre.historia.titulo}</h2>
              <p>
                Crescemos com consistência, ampliando nossos serviços e
                incorporando tecnologia sem abrir mão do atendimento próximo.
              </p>
            </div>

            <div className="timeline">
              {sobre.historia.linhaTempo.map((item, index) => (
                <article key={index} className="timeline-item">
                  <div className="timeline-dot"></div>

                  <div className="timeline-card">
                    <span className="timeline-ano">{item.ano}</span>
                    <h3>{item.titulo}</h3>
                    <p>{item.descricao}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sobre-time">
          <div className="container">
            <div className="section-topo center">
              <span className="section-tag">Nosso time</span>
              <h2>{sobre.equipe.titulo}</h2>
              <p>{sobre.equipe.descricao}</p>
            </div>

            <div className="time-grid">
              {sobre.equipe.membros.map((membro, index) => (
                <article key={index} className="time-card">
                  <div className="time-avatar">
                    {membro.nome
                      .split(" ")
                      .map((parte) => parte[0])
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <h3>{membro.nome}</h3>
                  <span>{membro.cargo}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sobre-cta">
          <div className="container">
            <div className="cta-box">
              <span className="cta-tag">Próximo passo</span>
              <h2>Pronto para contar com uma contabilidade mais estratégica?</h2>
              <p>
                Fale com a Visacont e descubra como podemos simplificar sua
                rotina, fortalecer sua gestão e apoiar o crescimento do seu
                negócio com segurança.
              </p>

              <div className="cta-acoes">
                <a href="/contato" className="cta-btn cta-btn-primary">
                  Solicitar atendimento
                </a>
                <a href="/servicos/abertura" className="cta-btn cta-btn-secondary">
                  Ver serviços
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer data={footerData} />

      <style jsx>{`
        .sobre-page {
          background: linear-gradient(180deg, #f7faff 0%, #eef4ff 100%);
          color: #162235;
        }

        .container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .sobre-hero {
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
        .hero-card-tag,
        .cert-selo {
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
          font-size: clamp(2.6rem, 5vw, 4.6rem);
          line-height: 1.02;
          font-weight: 900;
          letter-spacing: -0.04em;
          max-width: 760px;
        }

        .hero-linha {
          width: 82px;
          height: 5px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ffcc4d, #ffd76f);
          margin: 24px 0 24px;
          box-shadow: 0 6px 16px rgba(255, 204, 77, 0.28);
        }

        .hero-descricao {
          margin: 0;
          max-width: 760px;
          font-size: 1.06rem;
          line-height: 1.95;
          color: #dbe7ff;
        }

        .hero-acoes {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 32px;
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

        .hero-destaques {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .hero-card,
        .hero-mini-card,
        .info-card,
        .cert-card,
        .timeline-card,
        .time-card,
        .numero-card,
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

        .sobre-numeros {
          position: relative;
          margin-top: -38px;
          padding-bottom: 18px;
          z-index: 3;
        }

        .numeros-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .numero-card {
          border-radius: 24px;
          padding: 26px 22px;
          text-align: center;
        }

        .numero-card h3 {
          margin: 0 0 8px;
          font-size: 2rem;
          color: #0f5fe0;
        }

        .numero-card p {
          margin: 0;
          color: #667085;
          line-height: 1.7;
        }

        .sobre-mvv,
        .sobre-certificacoes,
        .sobre-historia,
        .sobre-time,
        .sobre-cta {
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

        .mvv-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .info-card {
          position: relative;
          padding: 30px 24px;
          border-radius: 26px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .destaque-topo::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          border-radius: 26px 26px 0 0;
          background: linear-gradient(90deg, #0f5fe0, #3b82f6, #ffcc4d);
        }

        .info-card:hover,
        .cert-card:hover,
        .time-card:hover,
        .numero-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 45px rgba(15, 23, 42, 0.12);
        }

        .info-icon {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          color: #ffffff;
          font-size: 1.45rem;
          box-shadow: 0 12px 24px rgba(15, 95, 224, 0.18);
        }

        .info-card h3,
        .cert-card h3,
        .timeline-card h3,
        .time-card h3 {
          margin: 0 0 12px;
          color: #162235;
        }

        .info-card p,
        .cert-card p,
        .timeline-card p {
          margin: 0;
          color: #667085;
          line-height: 1.85;
        }

        .valores-lista {
          margin: 0;
          padding-left: 18px;
          color: #667085;
        }

        .valores-lista li {
          margin-bottom: 10px;
          line-height: 1.72;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .cert-card {
          position: relative;
          overflow: hidden;
          padding: 30px 24px;
          border-radius: 26px;
        }

        .cert-card::before {
          content: "";
          position: absolute;
          inset: 0 auto auto 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #0f5fe0, #3b82f6, #ffcc4d);
        }

        .cert-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 16px;
        }

        .cert-numero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: #eef4ff;
          color: #0f5fe0;
          font-size: 0.95rem;
          font-weight: 800;
        }

        .cert-selo {
          padding: 7px 12px;
          background: #f8fbff;
          border: 1px solid #e4ecf7;
          color: #667085;
          font-size: 0.76rem;
        }

        .timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 26px;
          margin-top: 6px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 0;
          left: 20px;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, #0f5fe0, #8cb8ff);
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 22px;
        }

        .timeline-dot {
          position: relative;
          z-index: 2;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          border: 5px solid #f7faff;
          box-shadow: 0 10px 22px rgba(15, 95, 224, 0.18);
          flex-shrink: 0;
        }

        .timeline-card {
          flex: 1;
          padding: 24px;
          border-radius: 24px;
        }

        .timeline-ano {
          display: inline-flex;
          margin-bottom: 10px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #eef4ff;
          color: #0f5fe0;
          font-size: 0.8rem;
          font-weight: 800;
        }

        .time-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .time-card {
          padding: 30px 22px;
          border-radius: 26px;
          text-align: center;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .time-avatar {
          width: 86px;
          height: 86px;
          margin: 0 auto 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          color: #ffffff;
          font-size: 1.45rem;
          font-weight: 900;
          box-shadow: 0 14px 28px rgba(15, 95, 224, 0.18);
        }

        .time-card span {
          display: inline-block;
          color: #0f5fe0;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .sobre-cta {
          padding-top: 20px;
          padding-bottom: 90px;
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

        .cta-acoes {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr;
          }

          .numeros-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .mvv-grid,
          .cert-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .time-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .sobre-hero {
            padding: 100px 0 74px;
          }

          .sobre-mvv,
          .sobre-certificacoes,
          .sobre-historia,
          .sobre-time {
            padding: 64px 0;
          }

          .sobre-cta {
            padding-bottom: 70px;
          }

          .hero-mini-grid,
          .numeros-grid,
          .mvv-grid,
          .cert-grid,
          .time-grid {
            grid-template-columns: 1fr;
          }

          .timeline::before {
            left: 15px;
          }

          .timeline-dot {
            width: 32px;
            height: 32px;
          }

          .timeline-item {
            gap: 16px;
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
          .info-card,
          .cert-card,
          .timeline-card,
          .time-card,
          .numero-card {
            border-radius: 20px;
          }

          .info-card,
          .cert-card,
          .timeline-card,
          .time-card,
          .numero-card {
            padding: 22px 18px;
          }

          .time-avatar {
            width: 74px;
            height: 74px;
            font-size: 1.25rem;
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