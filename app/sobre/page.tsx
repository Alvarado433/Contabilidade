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
          <div className="container">
            <span className="sobre-badge">Institucional</span>
            <h1 className="sobre-titulo">{sobre.titulo}</h1>
            <p className="sobre-descricao">{sobre.descricao}</p>
          </div>
        </section>

        <section className="sobre-mvv">
          <div className="container">
            <div className="sobre-topo">
              <span className="sobre-tag">Nossos pilares</span>
              <h2>O que move a Visacont</h2>
              <p>
                Trabalhamos com foco em excelência, confiança e inovação para
                entregar uma contabilidade moderna e estratégica.
              </p>
            </div>

            <div className="mvv-grid">
              <article className="info-card">
                <div className="info-icon">🎯</div>
                <h3>{sobre.missao.titulo}</h3>
                <p>{sobre.missao.texto}</p>
              </article>

              <article className="info-card">
                <div className="info-icon">👁️</div>
                <h3>{sobre.visao.titulo}</h3>
                <p>{sobre.visao.texto}</p>
              </article>

              <article className="info-card">
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
            <div className="sobre-topo">
              <span className="sobre-tag">Credibilidade</span>
              <h2>{sobre.certificacoes.titulo}</h2>
              <p>
                Reconhecimentos que reforçam nosso compromisso com qualidade,
                segurança e atendimento de alto nível.
              </p>
            </div>

            <div className="cert-grid">
              {sobre.certificacoes.itens.map((item, index) => (
                <article key={index} className="cert-card">
                  <div className="cert-numero">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{item.nome}</h3>
                  <p>{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sobre-historia">
          <div className="container">
            <div className="sobre-topo">
              <span className="sobre-tag">Trajetória</span>
              <h2>{sobre.historia.titulo}</h2>
              <p>
                Uma caminhada construída com evolução constante, tecnologia e
                compromisso com os clientes.
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
            <div className="sobre-topo center">
              <span className="sobre-tag">Equipe</span>
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
      </main>

      <Footer data={footerData} />

      <style jsx>{`
        .sobre-page {
          background: linear-gradient(180deg, #f7faff 0%, #eef4ff 100%);
          color: #162235;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .sobre-hero {
          position: relative;
          overflow: hidden;
          padding: 120px 0 90px;
          background: linear-gradient(135deg, #103a86 0%, #0f4fc5 45%, #0d2f6f 100%);
          color: #ffffff;
        }

        .sobre-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 30%),
            radial-gradient(circle at bottom right, rgba(255, 204, 77, 0.12), transparent 24%);
          pointer-events: none;
        }

        .sobre-hero .container {
          position: relative;
          z-index: 2;
        }

        .sobre-badge,
        .sobre-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .sobre-badge {
          margin-bottom: 18px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #dbe7ff;
        }

        .sobre-tag {
          margin-bottom: 14px;
          background: #eaf1ff;
          color: #0f5fe0;
        }

        .sobre-titulo {
          margin: 0 0 18px;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .sobre-descricao {
          max-width: 860px;
          margin: 0;
          color: #dbe7ff;
          font-size: 1.06rem;
          line-height: 1.95;
        }

        .sobre-mvv,
        .sobre-certificacoes,
        .sobre-historia,
        .sobre-time {
          padding: 82px 0;
        }

        .sobre-topo {
          max-width: 760px;
          margin-bottom: 32px;
        }

        .sobre-topo.center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .sobre-topo h2 {
          margin: 0 0 10px;
          font-size: clamp(1.9rem, 3vw, 2.8rem);
          color: #162235;
        }

        .sobre-topo p {
          margin: 0;
          color: #667085;
          line-height: 1.85;
        }

        .mvv-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .info-card,
        .cert-card,
        .timeline-card,
        .time-card {
          background: #ffffff;
          border: 1px solid #e3ebf7;
          border-radius: 24px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .info-card {
          padding: 28px 24px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .info-card:hover,
        .cert-card:hover,
        .time-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 45px rgba(15, 23, 42, 0.12);
        }

        .info-icon {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          color: #ffffff;
          font-size: 1.45rem;
          box-shadow: 0 12px 25px rgba(15, 95, 224, 0.18);
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
          line-height: 1.7;
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
        }

        .cert-card::before {
          content: "";
          position: absolute;
          inset: 0 auto auto 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #0f5fe0, #3b82f6, #ffcc4d);
        }

        .cert-numero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          margin-bottom: 16px;
          border-radius: 14px;
          background: #eef4ff;
          color: #0f5fe0;
          font-size: 0.95rem;
          font-weight: 800;
        }

        .timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 26px;
          margin-top: 10px;
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
          gap: 22px;
          align-items: flex-start;
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
          padding: 28px 22px;
          text-align: center;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .time-avatar {
          width: 82px;
          height: 82px;
          margin: 0 auto 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 900;
          box-shadow: 0 14px 28px rgba(15, 95, 224, 0.18);
        }

        .time-card span {
          display: inline-block;
          color: #0f5fe0;
          font-size: 0.95rem;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
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
            padding: 96px 0 72px;
          }

          .sobre-mvv,
          .sobre-certificacoes,
          .sobre-historia,
          .sobre-time {
            padding: 64px 0;
          }

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
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 14px;
          }

          .sobre-descricao {
            font-size: 0.96rem;
            line-height: 1.8;
          }

          .info-card,
          .cert-card,
          .timeline-card,
          .time-card {
            padding: 22px 18px;
            border-radius: 20px;
          }

          .time-avatar {
            width: 74px;
            height: 74px;
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}