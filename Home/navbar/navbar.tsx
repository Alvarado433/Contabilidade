"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
} from "react-icons/fa";
import Icone from "@/utils/Icones/icone";

type ItemMenu = {
  titulo: string;
  url: string;
  filhos?: ItemMenu[];
};

type LogoProps = {
  nome: string;
  subtitulo: string;
  url: string;
};

type BotaoDireitoProps = {
  titulo: string;
  url: string;
};

type SocialItem = {
  url: string;
};

type NavbarProps = {
  logo: LogoProps;
  itens: ItemMenu[];
  botaoDireito: BotaoDireitoProps;
  social: SocialItem[];
};

export default function Navbar({
  logo,
  itens,
  botaoDireito,
  social,
}: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState<string | null>(null);
  const [submenuMobileAberto, setSubmenuMobileAberto] = useState<string | null>(
    null
  );

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleSubmenuMobile = (titulo: string) => {
    setSubmenuMobileAberto((prev) => (prev === titulo ? null : titulo));
  };

  const fecharSidebar = () => {
    setMenuMobileAberto(false);
    setSubmenuMobileAberto(null);
  };

  const fecharTudo = () => {
    setMenuMobileAberto(false);
    setSubmenuMobileAberto(null);
    setDropdownAberto(null);
  };

  const navegarComToast = (
    url: string,
    mensagem: string,
    fecharMenu = false
  ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    toast.dismiss();
    fecharTudo();

    toast.info(mensagem, {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    timeoutRef.current = setTimeout(() => {
      router.push(url);
    }, 3000);

    if (fecharMenu) {
      fecharSidebar();
    }
  };

  const getSocialIconName = (url: string) => {
    if (url.includes("wa.me") || url.includes("whatsapp")) {
      return "bi bi-whatsapp";
    }

    if (url.includes("facebook")) {
      return "fa-brands fa-facebook-f";
    }

    if (url.includes("instagram")) {
      return "fa-brands fa-instagram";
    }

    if (url.includes("linkedin")) {
      return "fa-brands fa-linkedin-in";
    }

    return "";
  };

  useEffect(() => {
    fecharTudo();
  }, [pathname]);

  useEffect(() => {
    if (menuMobileAberto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuMobileAberto]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <header id="navbar">
        <div className="container">
          <div className="mobile-left">
            <button
              type="button"
              className="menu-mobile-btn"
              onClick={() => setMenuMobileAberto(true)}
              aria-label="Abrir menu"
            >
              <FaBars />
            </button>
          </div>

          <button
            type="button"
            className="logo-area logo-btn"
            onClick={() =>
              navegarComToast(logo.url, `Redirecionando para ${logo.nome}...`)
            }
          >
            <div className="logo-nome">{logo.nome}</div>
            <div className="logo-sub">{logo.subtitulo}</div>
          </button>

          <nav className="menu-central">
            {itens.map((item) =>
              item.filhos && item.filhos.length > 0 ? (
                <div
                  key={item.titulo}
                  className="dropdown"
                  onMouseEnter={() => setDropdownAberto(item.titulo)}
                  onMouseLeave={() => setDropdownAberto(null)}
                >
                  <button type="button" className="menu-item menu-btn-reset">
                    <span>{item.titulo}</span>
                    <FaChevronDown size={12} />
                  </button>

                  <div
                    className={`dropdown-menu ${
                      dropdownAberto === item.titulo ? "show" : ""
                    }`}
                  >
                    {item.filhos.map((filho) => (
                      <button
                        key={filho.titulo}
                        type="button"
                        className="dropdown-item dropdown-btn-reset"
                        onClick={() =>
                          navegarComToast(
                            filho.url,
                            `Abrindo ${filho.titulo}...`
                          )
                        }
                      >
                        {filho.titulo}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={item.titulo}
                  type="button"
                  className="menu-item menu-btn-reset"
                  onClick={() =>
                    navegarComToast(item.url, `Abrindo ${item.titulo}...`)
                  }
                >
                  {item.titulo}
                </button>
              )
            )}
          </nav>

          <div className="navbar-right">
            <button
              type="button"
              className="btn-consultoria"
              onClick={() =>
                navegarComToast(
                  botaoDireito.url,
                  `Redirecionando para ${botaoDireito.titulo}...`
                )
              }
            >
              {botaoDireito.titulo}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`overlay ${menuMobileAberto ? "show" : ""}`}
        onClick={fecharSidebar}
      />

      <aside className={`sidebar ${menuMobileAberto ? "open" : ""}`}>
        <div className="sidebar-header">
          <div>
            <h2 className="sidebar-title">{logo.nome}</h2>
            <p className="sidebar-subtitle">{logo.subtitulo}</p>
          </div>

          <button
            type="button"
            className="btn-close-sidebar"
            onClick={fecharSidebar}
            aria-label="Fechar menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="sidebar-nav">
          {itens.map((item) =>
            item.filhos && item.filhos.length > 0 ? (
              <div key={item.titulo} className="sidebar-group">
                <button
                  type="button"
                  className="sidebar-link sidebar-btn-reset"
                  onClick={() => toggleSubmenuMobile(item.titulo)}
                >
                  <span>{item.titulo}</span>
                  {submenuMobileAberto === item.titulo ? (
                    <FaChevronUp size={14} />
                  ) : (
                    <FaChevronDown size={14} />
                  )}
                </button>

                <div
                  className={`sidebar-submenu ${
                    submenuMobileAberto === item.titulo ? "open" : ""
                  }`}
                >
                  {item.filhos.map((filho) => (
                    <button
                      key={filho.titulo}
                      type="button"
                      className="sidebar-sublink sidebar-sublink-btn"
                      onClick={() =>
                        navegarComToast(
                          filho.url,
                          `Abrindo ${filho.titulo}...`,
                          true
                        )
                      }
                    >
                      {filho.titulo}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={item.titulo}
                type="button"
                className="sidebar-link sidebar-btn-reset"
                onClick={() =>
                  navegarComToast(item.url, `Abrindo ${item.titulo}...`, true)
                }
              >
                <span>{item.titulo}</span>
              </button>
            )
          )}

          <button
            type="button"
            className="btn-consultoria sidebar-consultoria"
            onClick={() =>
              navegarComToast(
                botaoDireito.url,
                `Redirecionando para ${botaoDireito.titulo}...`,
                true
              )
            }
          >
            {botaoDireito.titulo}
          </button>
        </nav>

        <div className="sidebar-social">
          {social.map((item, index) => {
            const iconName = getSocialIconName(item.url);

            return (
              <a
                key={`${item.url}-${index}`}
                href={item.url}
                aria-label={`rede-social-${index}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icone nome={iconName} />
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
}