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
        <Icone nome={botoes?.topo?.icone || "fa-solid fa-arrow-up"} />
      </button>

      
    </footer>
  );
}