"use client";

import sobre from "@/Dados/sobre/sobre";



export default function SobrePage() {
  return (
    <>
      <main className="sobre-page">
        <section className="sobre-hero">
          <div className="container">
            <span className="sobre-badge">Sobre a Visacont</span>
            <h1 className="sobre-titulo">{sobre.titulo}</h1>
            <p className="sobre-descricao">{sobre.descricao}</p>
          </div>
        </section>

        <section className="sobre-mvv">
          <div className="container grid-3">
            <article className="card card-destaque">
              <h2>{sobre.missao.titulo}</h2>
              <p>{sobre.missao.texto}</p>
            </article>

            <article className="card card-destaque">
              <h2>{sobre.visao.titulo}</h2>
              <p>{sobre.visao.texto}</p>
            </article>

            <article className="card card-destaque">
              <h2>{sobre.valores.titulo}</h2>
              <ul className="lista-valores">
                {sobre.valores.lista.map((valor, index) => (
                  <li key={index}>{valor}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="sobre-certificacoes">
          <div className="container">
            <div className="section-topo">
              <span className="section-tag">Excelência e confiança</span>
              <h2>{sobre.certificacoes.titulo}</h2>
            </div>

            <div className="grid-3">
              {sobre.certificacoes.itens.map((item, index) => (
                <article key={index} className="card cert-card">
                  <div className="cert-icon">★</div>
                  <h3>{item.nome}</h3>
                  <p>{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sobre-historia">
          <div className="container">
            <div className="section-topo">
              <span className="section-tag">Nossa trajetória</span>
              <h2>{sobre.historia.titulo}</h2>
            </div>

            <div className="timeline">
              {sobre.historia.linhaTempo.map((item, index) => (
                <article key={index} className="timeline-item">
                  <div className="timeline-marker"></div>

                  <div className="timeline-content">
                    <span className="timeline-ano">{item.ano}</span>
                    <h3>{item.titulo}</h3>
                    <p>{item.descricao}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sobre-equipe">
          <div className="container">
            <div className="section-topo center">
              <span className="section-tag">Equipe Visacont</span>
              <h2>{sobre.equipe.titulo}</h2>
              <p>{sobre.equipe.descricao}</p>
            </div>

            <div className="grid-4">
              {sobre.equipe.membros.map((membro, index) => (
                <article key={index} className="card equipe-card">
                  <div className="avatar">
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

      <style jsx>{`
        .sobre-page {
          background: linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%);
          color: #162235;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .sobre-hero {
          padding: 110px 0 80px;
          background: linear-gradient(135deg, #0d2f6f 0%, #1546a0 50%, #0f3b88 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .sobre-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.09), transparent 28%),
            radial-gradient(circle at bottom right, rgba(255, 204, 77, 0.12), transparent 24%);
          pointer-events: none;
        }

        .sobre-hero .container {
          position: relative;
          z-index: 2;
        }

        .sobre-badge,
        .section-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .sobre-badge {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #dbe7ff;
          margin-bottom: 18px;
        }

        .section-tag {
          background: #e8f0ff;
          color: #0f4fc5;
          margin-bottom: 14px;
        }

        .sobre-titulo {
          margin: 0 0 18px;
          font-size: clamp(2.3rem, 5vw, 4rem);
          line-height: 1.08;
          font-weight: 900;
        }

        .sobre-descricao {
          max-width: 850px;
          margin: 0;
          font-size: 1.08rem;
          line-height: 1.9;
          color: #d9e5ff;
        }

        .sobre-mvv,
        .sobre-certificacoes,
        .sobre-historia,
        .sobre-equipe {
          padding: 78px 0;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .card {
          background: #ffffff;
          border: 1px solid #e2ebf8;
          border-radius: 24px;
          padding: 28px 24px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 45px rgba(15, 23, 42, 0.12);
        }

        .card h2,
        .card h3 {
          margin: 0 0 12px;
          color: #162235;
        }

        .card h2 {
          font-size: 1.35rem;
        }

        .card h3 {
          font-size: 1.15rem;
        }

        .card p {
          margin: 0;
          color: #667085;
          line-height: 1.8;
        }

        .card-destaque {
          position: relative;
          overflow: hidden;
        }

        .card-destaque::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #0f5fe0, #3b82f6, #ffcc4d);
        }

        .lista-valores {
          margin: 0;
          padding-left: 18px;
          color: #667085;
        }

        .lista-valores li {
          margin-bottom: 10px;
          line-height: 1.7;
        }

        .section-topo {
          margin-bottom: 30px;
        }

        .section-topo.center {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 34px;
        }

        .section-topo h2 {
          margin: 0 0 10px;
          font-size: clamp(1.8rem, 3vw, 2.7rem);
          color: #162235;
        }

        .section-topo p {
          margin: 0;
          color: #667085;
          line-height: 1.8;
        }

        .cert-card {
          text-align: left;
        }

        .cert-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          color: #ffffff;
          font-size: 1.3rem;
          font-weight: 900;
          box-shadow: 0 12px 24px rgba(15, 95, 224, 0.18);
        }

        .timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 18px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 0;
          left: 19px;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, #0f5fe0, #7fb1ff);
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .timeline-marker {
          position: relative;
          z-index: 2;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          border: 5px solid #f8fbff;
          box-shadow: 0 8px 18px rgba(15, 95, 224, 0.18);
          flex-shrink: 0;
        }

        .timeline-content {
          flex: 1;
          background: #ffffff;
          border: 1px solid #e2ebf8;
          border-radius: 22px;
          padding: 24px;
          box-shadow: 0 16px 35px rgba(15, 23, 42, 0.08);
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

        .timeline-content h3 {
          margin: 0 0 8px;
          font-size: 1.15rem;
          color: #162235;
        }

        .timeline-content p {
          margin: 0;
          color: #667085;
          line-height: 1.8;
        }

        .equipe-card {
          text-align: center;
        }

        .avatar {
          width: 78px;
          height: 78px;
          margin: 0 auto 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          color: #ffffff;
          font-size: 1.35rem;
          font-weight: 900;
          box-shadow: 0 12px 24px rgba(15, 95, 224, 0.2);
        }

        .equipe-card span {
          display: inline-block;
          color: #0f5fe0;
          font-weight: 700;
          font-size: 0.95rem;
        }

        @media (max-width: 1024px) {
          .grid-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .grid-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .sobre-hero {
            padding: 88px 0 64px;
          }

          .sobre-mvv,
          .sobre-certificacoes,
          .sobre-historia,
          .sobre-equipe {
            padding: 60px 0;
          }

          .grid-3,
          .grid-4 {
            grid-template-columns: 1fr;
          }

          .timeline::before {
            left: 15px;
          }

          .timeline-marker {
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
            font-size: 0.97rem;
            line-height: 1.8;
          }

          .card,
          .timeline-content {
            padding: 22px 18px;
            border-radius: 20px;
          }

          .avatar {
            width: 70px;
            height: 70px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}