"use client";

import { useState } from "react";
import dados from "@/Dados/site";
import menu from "@/Dados/menu/menu";
import footerData from "@/Dados/Footer/footerdata";
import Topo from "@/Home/Topbar/topo";
import Footer from "@/Home/footer/footer";
import Navbar from "@/Home/navbar/navbar";


type FormData = {
  nome: string;
  empresa: string;
  segmento: string;
  email: string;
  telefone: string;
  funcionarios: string;
  faturamento: string;
  necessidade: string;
  mensagem: string;
};

export default function ConsultoriaDadosPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    empresa: "",
    segmento: "",
    email: "",
    telefone: "",
    funcionarios: "",
    faturamento: "",
    necessidade: "",
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

    console.log("DADOS DA CONSULTORIA:", formData);

    setEnviado(true);

    setFormData({
      nome: "",
      empresa: "",
      segmento: "",
      email: "",
      telefone: "",
      funcionarios: "",
      faturamento: "",
      necessidade: "",
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

      <main className="consultoria-dados-page">
        <section className="hero">
          <div className="hero-overlay"></div>

          <div className="container hero-container">
            <span className="hero-badge">Solicitação de Consultoria</span>
            <h1 className="hero-title">
              Conte um pouco sobre sua empresa para prepararmos a melhor consultoria
            </h1>
            <p className="hero-description">
              Preencha os dados abaixo e nossa equipe poderá entender melhor seu
              cenário, suas necessidades e como a Visacont pode ajudar seu negócio.
            </p>
          </div>
        </section>

        <section className="form-section">
          <div className="container">
            <div className="form-layout">
              <div className="info-card">
                <span className="info-tag">Antes de começar</span>
                <h2>O que vamos analisar</h2>
                <p>
                  Com essas informações, conseguimos entender o momento da sua
                  empresa e direcionar melhor o atendimento consultivo.
                </p>

                <ul className="info-list">
                  <li>Perfil da empresa</li>
                  <li>Estrutura atual do negócio</li>
                  <li>Necessidades contábeis e estratégicas</li>
                  <li>Possíveis riscos e oportunidades</li>
                  <li>Melhor caminho para o próximo passo</li>
                </ul>
              </div>

              <div className="form-card">
                <div className="form-top">
                  <span className="form-tag">Formulário</span>
                  <h2>Dados para consultoria</h2>
                </div>

                {enviado ? (
                  <div className="sucesso-box">
                    <h3>Solicitação enviada com sucesso</h3>
                    <p>
                      Recebemos suas informações. Em breve a equipe da Visacont
                      poderá entrar em contato para dar continuidade ao atendimento.
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
                    <label htmlFor="empresa">Nome da empresa</label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Digite o nome da empresa"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="segmento">Segmento</label>
                    <input
                      id="segmento"
                      name="segmento"
                      type="text"
                      value={formData.segmento}
                      onChange={handleChange}
                      placeholder="Ex: Comércio, serviços, tecnologia"
                      required
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

                  <div className="field">
                    <label htmlFor="funcionarios">Quantidade de funcionários</label>
                    <select
                      id="funcionarios"
                      name="funcionarios"
                      value={formData.funcionarios}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione</option>
                      <option value="1 a 5">1 a 5</option>
                      <option value="6 a 10">6 a 10</option>
                      <option value="11 a 20">11 a 20</option>
                      <option value="21 a 50">21 a 50</option>
                      <option value="50+">Mais de 50</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="faturamento">Faixa de faturamento</label>
                    <select
                      id="faturamento"
                      name="faturamento"
                      value={formData.faturamento}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione</option>
                      <option value="Até R$ 10 mil">Até R$ 10 mil</option>
                      <option value="R$ 10 mil a R$ 50 mil">R$ 10 mil a R$ 50 mil</option>
                      <option value="R$ 50 mil a R$ 100 mil">R$ 50 mil a R$ 100 mil</option>
                      <option value="R$ 100 mil a R$ 500 mil">R$ 100 mil a R$ 500 mil</option>
                      <option value="Acima de R$ 500 mil">Acima de R$ 500 mil</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="necessidade">Principal necessidade</label>
                    <select
                      id="necessidade"
                      name="necessidade"
                      value={formData.necessidade}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione</option>
                      <option value="Planejamento tributário">Planejamento tributário</option>
                      <option value="Consultoria fiscal">Consultoria fiscal</option>
                      <option value="Consultoria contábil">Consultoria contábil</option>
                      <option value="Organização financeira">Organização financeira</option>
                      <option value="Abertura ou estruturação">Abertura ou estruturação</option>
                      <option value="Outro assunto">Outro assunto</option>
                    </select>
                  </div>

                  <div className="field field-full">
                    <label htmlFor="mensagem">Conte mais sobre sua necessidade</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva sua situação, dúvidas ou objetivos"
                      rows={6}
                      required
                    />
                  </div>

                  <div className="field-full form-actions">
                    <button type="submit" className="submit-btn">
                      Enviar solicitação
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer data={footerData} />

      <style jsx>{`
        .consultoria-dados-page {
          background: linear-gradient(180deg, #f7faff 0%, #eef4ff 100%);
          color: #162235;
        }

        .container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero {
          position: relative;
          overflow: hidden;
          padding: 110px 0 80px;
          background: linear-gradient(135deg, #0d2f6f 0%, #0f4fc5 48%, #103a86 100%);
          color: #ffffff;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 30%),
            radial-gradient(circle at bottom right, rgba(255, 204, 77, 0.14), transparent 24%);
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-badge,
        .info-tag,
        .form-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .hero-badge {
          margin-bottom: 18px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #dbe7ff;
        }

        .hero-title {
          margin: 0 0 18px;
          font-size: clamp(2.3rem, 5vw, 4.2rem);
          line-height: 1.04;
          font-weight: 900;
          letter-spacing: -0.04em;
          max-width: 850px;
        }

        .hero-description {
          max-width: 850px;
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.9;
          color: #dbe7ff;
        }

        .form-section {
          padding: 84px 0;
        }

        .form-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.2fr;
          gap: 26px;
          align-items: start;
        }

        .info-card,
        .form-card {
          background: #ffffff;
          border: 1px solid #e3ebf7;
          border-radius: 28px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .info-card {
          padding: 28px 24px;
          position: sticky;
          top: 24px;
        }

        .info-tag,
        .form-tag {
          margin-bottom: 14px;
          background: #eaf1ff;
          color: #0f5fe0;
        }

        .info-card h2,
        .form-top h2,
        .sucesso-box h3 {
          margin: 0 0 12px;
          color: #162235;
        }

        .info-card p,
        .sucesso-box p {
          margin: 0;
          color: #667085;
          line-height: 1.85;
        }

        .info-list {
          margin: 22px 0 0;
          padding-left: 18px;
          color: #667085;
        }

        .info-list li {
          margin-bottom: 12px;
          line-height: 1.75;
        }

        .form-card {
          padding: 30px 26px;
        }

        .form-top {
          margin-bottom: 24px;
        }

        .sucesso-box {
          margin-bottom: 22px;
          padding: 18px;
          border-radius: 18px;
          background: #eef8f1;
          border: 1px solid #d4ead9;
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

        .form-actions {
          display: flex;
          justify-content: flex-start;
        }

        .submit-btn {
          min-height: 52px;
          padding: 14px 24px;
          border: none;
          border-radius: 999px;
          background: linear-gradient(135deg, #0f5fe0, #3b82f6);
          color: #ffffff;
          font-size: 0.96rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 14px 28px rgba(15, 95, 224, 0.18);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 34px rgba(15, 95, 224, 0.24);
        }

        @media (max-width: 1024px) {
          .form-layout {
            grid-template-columns: 1fr;
          }

          .info-card {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 96px 0 68px;
          }

          .form-section {
            padding: 64px 0;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 14px;
          }

          .hero-description,
          .info-card p,
          .sucesso-box p,
          .info-list li {
            font-size: 0.96rem;
            line-height: 1.8;
          }

          .info-card,
          .form-card {
            padding: 22px 18px;
            border-radius: 22px;
          }

          .submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}