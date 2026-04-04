'use client'

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
  FaHome,
  FaUsers,
  FaBriefcase,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";

type LinkItem = {
  titulo: string;
  icone: string;
  url: string;
};

type SocialItem = {
  icone: string;
  url: string;
};

type FooterProps = {
  empresa: {
    logo: string;
    descricao: string;
    endereco: string;
    telefone: string;
    email: string;
  };
  institucional: {
    titulo: string;
    links: LinkItem[];
  };
  atendimento: {
    titulo: string;
    links: LinkItem[];
  };
  social: {
    titulo: string;
    descricao: string;
    links: SocialItem[];
  };
  rodape: {
    texto: string;
    politicaLabel: string;
    politicaUrl: string;
    assinatura: string;
  };
  botoes?: {
    topo?: {
      icone?: string;
      ariaLabel?: string;
    };
  };
};

const iconMap: Record<string, React.ReactNode> = {
  "fa-solid fa-house": <FaHome />,
  "fa-solid fa-users": <FaUsers />,
  "fa-solid fa-briefcase": <FaBriefcase />,
  "fa-solid fa-shield-halved": <FaShieldAlt />,
  "fa-solid fa-user-group": <FaUserFriends />,
  "fa-solid fa-envelope": <FaEnvelope />,
  "fa-solid fa-phone": <FaPhone />,
  "fa-solid fa-location-dot": <FaMapMarkerAlt />,
  "fa-brands fa-facebook-f": <FaFacebookF />,
  "fa-brands fa-instagram": <FaInstagram />,
  "fa-brands fa-linkedin-in": <FaLinkedinIn />,
  "fa-solid fa-arrow-up": <FaArrowUp />,
};

function renderIcon(iconName?: string) {
  if (!iconName) return null;
  return iconMap[iconName] ?? null;
}

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
      <div className="footer-container">
        <div className="footer-col animate-fade-in">
          <img src={empresa.logo} alt="Logo da empresa" className="footer-logo" />

          <p dangerouslySetInnerHTML={{ __html: empresa.descricao }} />

          <ul className="footer-contato">
            <li>
              <span style={{ marginRight: 8 }}>
                {renderIcon("fa-solid fa-location-dot")}
              </span>
              {empresa.endereco}
            </li>

            <li>
              <span style={{ marginRight: 8 }}>
                {renderIcon("fa-solid fa-phone")}
              </span>
              {empresa.telefone}
            </li>

            <li>
              <span style={{ marginRight: 8 }}>
                {renderIcon("fa-solid fa-envelope")}
              </span>
              {empresa.email}
            </li>
          </ul>
        </div>

        <div className="footer-col animate-fade-in">
          <h5>{institucional.titulo}</h5>

          <ul>
            {institucional.links.map((item, index) => (
              <li key={index}>
                <a href={item.url}>
                  <span style={{ marginRight: 8 }}>
                    {renderIcon(item.icone)}
                  </span>
                  {item.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col animate-fade-in">
          <h5>{atendimento.titulo}</h5>

          <ul>
            {atendimento.links.map((item, index) => (
              <li key={index}>
                <a href={item.url}>
                  <span style={{ marginRight: 8 }}>
                    {renderIcon(item.icone)}
                  </span>
                  {item.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col animate-fade-in">
          <h5>{social.titulo}</h5>

          <p>{social.descricao}</p>

          <div className="footer-social-icons">
            {social.links.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {renderIcon(item.icone)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p dangerouslySetInnerHTML={{ __html: rodape.texto }} />

        <a href={rodape.politicaUrl} className="footer-link">
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
        {renderIcon(botoes?.topo?.icone || "fa-solid fa-arrow-up")}
      </button>
    </footer>
  );
}