'use client';

import React from "react";
import { FooterProps } from "@/Dados/Interfaces/Footer";
import Icone from "@/utils/Icones/icone";


export default function Footer({
  empresa,
  institucional,
  atendimento,
  social,
  rodape,
  botoes,
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-overlay" />

      <div className="footer-container">
        <div className="footer-col footer-empresa">
          <img
            src={empresa.logo}
            alt="Logo da empresa"
            className="footer-logo"
          />

          <p
            className="footer-descricao"
            dangerouslySetInnerHTML={{ __html: empresa.descricao }}
          />

          <ul className="footer-contato">
            <li>
              <Icone
                nome="fa-solid fa-location-dot"
                className="contact-icon"
              />
              <span>{empresa.endereco}</span>
            </li>

            <li>
              <Icone
                nome="fa-solid fa-phone"
                className="contact-icon"
              />
              <span>{empresa.telefone}</span>
            </li>

            <li>
              <Icone
                nome="fa-solid fa-envelope"
                className="contact-icon"
              />
              <span>{empresa.email}</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>{institucional.titulo}</h5>

          <ul className="footer-links">
            {institucional.links.map((item, index) => (
              <li key={index}>
                <a href={item.url}>
                  <Icone nome={item.icone} className="link-icon" />
                  <span>{item.titulo}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>{atendimento.titulo}</h5>

          <ul className="footer-links">
            {atendimento.links.map((item, index) => (
              <li key={index}>
                <a href={item.url}>
                  <Icone nome={item.icone} className="link-icon" />
                  <span>{item.titulo}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>{social.titulo}</h5>

          <p className="footer-social-desc">{social.descricao}</p>

          <div className="footer-social-icons">
            {social.links.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Rede social ${index + 1}`}
              >
                <Icone nome={item.icone} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p dangerouslySetInnerHTML={{ __html: rodape.texto }} />

        <a href={rodape.politicaUrl} className="footer-link-bottom">
          {rodape.politicaLabel}
        </a>

        <div
          className="assinatura"
          dangerouslySetInnerHTML={{ __html: rodape.assinatura }}
        />
      </div>

      <button
        className="btn-topo"
        aria-label={botoes?.topo?.ariaLabel || "Voltar ao topo"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Icone
          nome={botoes?.topo?.icone || "fa-solid fa-arrow-up"}
        />
      </button>

      <style jsx>{`
        .footer {
          position: relative;
          background: linear-gradient(180deg, #082a62 0%, #061f4a 100%);
          color: #f5f7ff;
          overflow: hidden;
        }

        .footer-overlay {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.035) 0px,
            rgba(255, 255, 255, 0.035) 2px,
            transparent 2px,
            transparent 10px
          );
          pointer-events: none;
        }

        .footer-container {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 58px 70px 46px;
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
          gap: 48px;
        }

        .footer-col h5 {
          position: relative;
          margin: 0 0 22px;
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
        }

        .footer-col h5::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 38px;
          height: 4px;
          border-radius: 999px;
          background: #2ea3ff;
        }

        .footer-empresa {
          max-width: 290px;
        }

        .footer-logo {
          width: 112px;
          height: 112px;
          object-fit: contain;
          background: #0d47af;
          padding: 12px;
          border-radius: 0;
          display: block;
          margin-bottom: 18px;
        }

        .footer-descricao {
          margin: 0 0 22px;
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.88);
          font-weight: 500;
        }

        .footer-contato {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        .footer-contato li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.98rem;
          line-height: 1.5;
        }

        .contact-icon {
          color: #2292ff;
          font-size: 0.95rem;
          margin-top: 3px;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 13px;
        }

        .footer-links li a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 0.98rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .footer-links li a:hover {
          color: #59b5ff;
          transform: translateX(2px);
        }

        .link-icon {
          color: #dfe9ff;
          font-size: 0.92rem;
          width: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-social-desc {
          margin: 0 0 22px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.8;
          font-size: 1rem;
          max-width: 270px;
        }

        .footer-social-icons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .footer-social-icons a {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-social-icons a:hover {
          background: #1f8fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 18px rgba(31, 143, 255, 0.3);
        }

        .footer-bottom {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: #021737;
          text-align: center;
          padding: 22px 18px 18px;
        }

        .footer-bottom p {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 500;
        }

        .footer-bottom :global(strong) {
          font-weight: 800;
        }

        .footer-link-bottom {
          display: inline-block;
          margin-bottom: 10px;
          color: #2ea3ff;
          text-decoration: none;
          font-weight: 700;
          transition: color 0.2s ease;
        }

        .footer-link-bottom:hover {
          color: #7bc6ff;
        }

        .assinatura {
          color: rgba(255, 255, 255, 0.92);
          font-size: 0.98rem;
          font-weight: 500;
        }

        .assinatura :global(strong) {
          color: #f4b019;
          font-weight: 800;
        }

        .btn-topo {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 44px;
          height: 44px;
          border: none;
          border-radius: 50%;
          background: linear-gradient(135deg, #1f8fff 0%, #1870d5 100%);
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 12px 25px rgba(18, 101, 203, 0.35);
          z-index: 20;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-topo:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(18, 101, 203, 0.42);
        }

        @media (max-width: 1100px) {
          .footer-container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 34px;
            padding: 42px 32px 34px;
          }

          .footer-empresa {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .footer-container {
            grid-template-columns: 1fr;
            padding: 34px 20px 28px;
            gap: 30px;
          }

          .footer-logo {
            width: 100px;
            height: 100px;
          }

          .footer-bottom {
            padding: 20px 14px 16px;
          }

          .btn-topo {
            right: 16px;
            bottom: 16px;
          }
        }
      `}</style>
    </footer>
  );
}