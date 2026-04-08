"use client";

import { useState } from "react";


import Icone from "@/utils/Icones/icone";
import contato from "@/Dados/contato/contato";
import footerData from "@/Dados/Footer/footerdata";
import menu from "@/Dados/menu/menu";
import dados from "@/Dados/site";
import Footer from "@/Home/footer/footer";
import Navbar from "@/Home/navbar/navbar";
import Topo from "@/Home/Topbar/topo";

type FormData = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
};

export default function ContatoPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("DADOS DO CONTATO:", formData);

    setEnviado(true);

    setFormData({
      nome: "",
      empresa: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    });
  };

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

      <main className="contato-page">
        <section className="contato-hero">
          <div className="hero-overlay"></div>

          <div className="container hero-container">
            <div className="hero-content">
              <span className="hero-badge">{contato.hero.badge}</span>

              <h1 className="hero-title">{contato.hero.titulo}</h1>

              <div className="hero-line"></div>

              <p className="hero-description">{contato.hero.descricao}</p>

              <div className="hero-actions">
                <a
                  href={contato.hero.botoes.principal.url}
                  className="hero-btn hero-btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {contato.hero.botoes.principal.texto}
                </a>

                <a
                  href={contato.hero.botoes.secundario.url}
                  className="hero-btn hero-btn-secondary"
                >
                  {contato.hero.botoes.secundario.texto}
                </a>
              </div>
            </div>

            <div className="hero-card">
              <span className="hero-card-tag">Atendimento Visacont</span>
              <h3>Fale com nossa equipe do jeito que for melhor para você</h3>
              <p>
                Tire dúvidas, solicite uma consultoria ou envie uma mensagem para
                que possamos entender sua necessidade e orientar sua empresa com
                mais clareza.
              </p>

              <ul className="hero-list">
                <li>Atendimento por WhatsApp</li>
                <li>Contato por e-mail</li>
                <li>Telefone para atendimento direto</li>
                <li>Formulário profissional no site</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contato-canais">
          <div className="container">
            <div className="section-top">
              <span className="section-tag">Canais de atendimento</span>
              <h2>{contato.canais.titulo}</h2>
              <p>{contato.canais.descricao}</p>
            </div>

            <div className="canais-grid">
              {contato.canais.itens.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="canal-card"
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                >
                  <div className="canal-icon">
                    <Icone nome={item.icone} className="canal-icon-svg" />
                  </div>

                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                  <strong>{item.valor}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contato-form-section" id="form-contato">
          <div className="container">
            <div className="contato-layout">
              <div className="beneficios-card">
                <span className="section-tag">Por que escolher a Visacont</span>
                <h2>{contato.beneficios.titulo}</h2>

                <div className="beneficios-list">
                  {contato.beneficios.itens.map((item, index) => (
                    <article key={index} className="beneficio-item">
                      <div className="beneficio-icon">
                        <Icone nome={item.icone} className="beneficio-icon-svg" />
                      </div>

                      <div>
                        <h3>{item.titulo}</h3>
                        <p>{item.descricao}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="form-card">
                <div className="form-top">
                  <span className="form-tag">Formulário</span>
                  <h2>{contato.formulario.titulo}</h2>
                  <p>{contato.formulario.descricao}</p>
                </div>

                {enviado ? (
                  <div className="success-box">
                    <h3>Mensagem enviada com sucesso</h3>
                    <p>
                      Recebemos suas informações. Em breve a equipe da Visacont
                      poderá entrar em contato com você.
                    </p>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="form-grid">
                  <div className="field">
                    <label htmlFor="nome">Seu nome</label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="empresa">Empresa</label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Digite o nome da empresa"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Digite seu e-mail"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="telefone">Telefone / WhatsApp</label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="text"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="Digite seu telefone"
                      required
                    />
                  </div>

                  <div className="field field-full">
                    <label htmlFor="assunto">Assunto</label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione um assunto</option>
                      {contato.formulario.assuntos.map((assunto, index) => (
                        <option key={index} value={assunto}>
                          {assunto}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field field-full">
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva sua necessidade"
                      rows={6}
                      required
                    />
                  </div>

                  <div className="field-full form-footer">
                    <p className="response-time">
                      {contato.formulario.tempoResposta}
                    </p>

                    <button type="submit" className="submit-btn">
                      Enviar mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="contato-faq">
          <div className="container">
            <div className="section-top center">
              <span className="section-tag">Dúvidas frequentes</span>
              <h2>{contato.faq.titulo}</h2>
            </div>

            <div className="faq-grid">
              {contato.faq.itens.map((item, index) => (
                <article key={index} className="faq-card">
                  <h3>{item.pergunta}</h3>
                  <p>{item.resposta}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contato-cta">
          <div className="container">
            <div className="cta-box">
              <span className="cta-tag">{contato.cta.badge}</span>
              <h2>{contato.cta.titulo}</h2>
              <p>{contato.cta.descricao}</p>

              <div className="cta-actions">
                <a
                  href={contato.cta.botoes.principal.url}
                  className="cta-btn cta-btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {contato.cta.botoes.principal.texto}
                </a>

                <a
                  href={contato.cta.botoes.secundario.url}
                  className="cta-btn cta-btn-secondary"
                >
                  {contato.cta.botoes.secundario.texto}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer data={footerData} />

      <style jsx>{`
        .contato-page {
          background: linear-gradient(180deg, #f7faff 0%, #eef4ff 100%);
          color: #162235;
        }

        .container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contato-hero {
          position: relative;
          overflow: hidden;
          padding: 120px 0 88px;
          background: linear-gradient(135deg, #0d2f6f 0%, #0f4fc5 48%, #103a86 100%);
          color: #ffffff;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 30%),
            radial-gradient(circle at bottom right, rgba(255, 204, 77, 0.13), transparent 24%);
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 28px;
          align-items: center;
        }

        .hero-badge,
        .section-tag,
        .form-tag,
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

        .hero-title {
          margin: 0 0 18px;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          line-height: 1.04;
          font-weight: 900;
          letter-spacing: -0.04em;
          max-width: 820px;
        }

        .hero-line {
          width: 82px;
          height: 5px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ffcc4d, #ffd76f);
          margin: 24px 0;
          box-shadow: 0 6px 16px rgba(255, 204, 77, 0.28);
        }

        .hero-description {
          max-width: 760px;
          margin: 0;
          font-size: 1.06rem;
          line-height: 1.95;
          color: #dbe7ff;
        }

        .hero-actions,
        .cta-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .hero-btn,
        .cta-btn,
        .submit-btn {
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
        .cta-btn-primary,
        .submit-btn {
          background: linear-gradient(135deg, #ffcc4d, #ffb800);
          color: #10213f;
          box-shadow: 0 14px 28px rgba(255, 184, 0, 0.22);
        }

        .hero-btn-primary:hover,
        .cta-btn-primary:hover,
        .submit-btn:hover {
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

        .hero-card,
        .canal-card,
        .beneficios-card,
        .form-card,
        .faq-card,
        .cta-box {
          background: #ffffff;
          border: 1px solid rgba(226, 235, 247, 0.95);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .hero-card {
          padding: 28px 24px;
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
          font-size: 1.3rem;
          line-height: 1.25;
        }

        .hero-card p {
          margin: 0 0 18px;
          color: #e4eeff;
          line-height: 1.8;
        }

        .hero-list {
          margin: 0;
          padding-left: 18px;
          color: #e4eeff;
        }

        .hero-list li {
          margin-bottom: 10px;
          line-height: 1.7;
        }

        .contato-canais,
        .contato-form-section,
        .contato-faq,
        .contato-cta {
          padding: 84px 0;
        }

        .section-top {
          max-width: 780px;
          margin-bottom: 34px;
        }

        .section-top.center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .section-tag,
        .form-tag {
          margin-bottom: 14px;
          padding: 8px 14px;
          background: #eaf1ff;
          color: #0f5fe0;
          font-size: 0.82rem;
        }

        .section-top h2,
        .form-top h2,
        .beneficios-card h2,
        .cta-box h2 {
          margin: 0 0 12px;
          font-size: clamp(2rem, 3vw, 2.9rem);
          color: #162235;
          line-height: 1.15;
        }

        .section-top p,
        .form-top p,
        .cta-box p {
          margin: 0;
          color: #667085;
          line-height: 1.9;
        }

        .canais-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .canal-card {
          display: block;
          padding: 28px 22px;
          border-radius: 24px;
          text-decoration: none;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .canal-card:hover,
        .beneficio-item:hover,
        .faq-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 45px rgba(15, 23, 42, 0.12);
        }

        .canal-icon,
        .beneficio-icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          color: #ffffff;
          box-shadow: 0 12px 24px rgba(15, 95, 224, 0.18);
        }

        .canal-icon-svg,
        .beneficio-icon-svg {
          font-size: 1.2rem;
        }

        .canal-card h3,
        .beneficio-item h3,
        .faq-card h3 {
          margin: 0 0 10px;
          color: #162235;
        }

        .canal-card p,
        .beneficio-item p,
        .faq-card p {
          margin: 0 0 12px;
          color: #667085;
          line-height: 1.8;
        }

        .canal-card strong {
          color: #0f5fe0;
          font-size: 0.95rem;
        }

        .contato-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.2fr;
          gap: 26px;
          align-items: start;
        }

        .beneficios-card,
        .form-card {
          border-radius: 28px;
        }

        .beneficios-card {
          padding: 28px 24px;
          position: sticky;
          top: 24px;
        }

        .beneficios-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }

        .beneficio-item {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 14px;
          align-items: start;
          padding: 16px;
          border-radius: 20px;
          background: #f8fbff;
          border: 1px solid #e5edf8;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .beneficio-icon {
          margin-bottom: 0;
          width: 50px;
          height: 50px;
          border-radius: 16px;
        }

        .form-card {
          padding: 30px 26px;
        }

        .form-top {
          margin-bottom: 24px;
        }

        .success-box {
          margin-bottom: 22px;
          padding: 18px;
          border-radius: 18px;
          background: #eef8f1;
          border: 1px solid #d4ead9;
        }

        .success-box h3 {
          margin: 0 0 8px;
          color: #162235;
        }

        .success-box p {
          margin: 0;
          color: #667085;
          line-height: 1.8;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field-full {
          grid-column: 1 / -1;
        }

        .field label {
          font-size: 0.95rem;
          font-weight: 700;
          color: #162235;
        }

        .field input,
        .field select,
        .field textarea {
          width: 100%;
          border: 1px solid #d8e3f2;
          border-radius: 16px;
          padding: 14px 16px;
          font-size: 0.96rem;
          color: #162235;
          background: #ffffff;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: #0f5fe0;
          box-shadow: 0 0 0 4px rgba(15, 95, 224, 0.12);
        }

        .field textarea {
          resize: vertical;
          min-height: 140px;
        }

        .form-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .response-time {
          margin: 0;
          color: #667085;
          font-size: 0.92rem;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .faq-card {
          padding: 26px 22px;
          border-radius: 24px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .contato-cta {
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
          color: #ffffff;
        }

        .cta-box p {
          max-width: 760px;
          margin: 0 auto;
          color: #dbe7ff;
        }

        @media (max-width: 1100px) {
          .hero-container,
          .contato-layout {
            grid-template-columns: 1fr;
          }

          .canais-grid,
          .faq-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .beneficios-card {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .contato-hero {
            padding: 100px 0 74px;
          }

          .contato-canais,
          .contato-form-section,
          .contato-faq,
          .contato-cta {
            padding: 64px 0;
          }

          .canais-grid,
          .faq-grid,
          .form-grid {
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

          .hero-description,
          .section-top p,
          .form-top p,
          .cta-box p,
          .faq-card p {
            font-size: 0.96rem;
            line-height: 1.8;
          }

          .hero-actions,
          .cta-actions {
            flex-direction: column;
          }

          .hero-btn,
          .cta-btn,
          .submit-btn {
            width: 100%;
          }

          .hero-card,
          .canal-card,
          .beneficios-card,
          .form-card,
          .faq-card {
            border-radius: 22px;
          }

          .beneficios-card,
          .form-card {
            padding: 22px 18px;
          }

          .form-footer {
            flex-direction: column;
            align-items: stretch;
          }

          .response-time {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}