"use client";

import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

type TopoProps = {
  email: string;
  telefone: string;
  whatsapp: string;
};

export default function Topo({ email, telefone, whatsapp }: TopoProps) {
  return (
    <div className="topbar">
      <div className="container">

        <div className="email-area">
          <FaEnvelope />
          <a href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        <div className="phones">

          <a href={`tel:${telefone}`} className="phone-link">
            <FaPhone className="fa-phone" />
            <span>{telefone}</span>
          </a>

          <span className="separator">|</span>

          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            className="phone-link"
          >
            <FaWhatsapp className="fa-whatsapp" />
            <span>{telefone}</span>
          </a>

        </div>

      </div>
    </div>
  );
}