"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Icone from "@/utils/Icones/icone";
import { NavbarProps } from "@/Dados/Interfaces/navbar";

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

  const abrirLinkExterno = (url: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
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
              <Icone nome="fa-solid fa-bars" className="navbar-icon" />
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
            {itens.map((item) => {
              return item.filhos && item.filhos.length > 0 ? (
                <div
                  key={item.titulo}
                  className="dropdown"
                  onMouseEnter={() => setDropdownAberto(item.titulo)}
                  onMouseLeave={() => setDropdownAberto(null)}
                >
                  <button type="button" className="menu-item menu-btn-reset">
                    <span className="menu-item-content">
                      {item.icone ? (
                        <Icone
                          nome={item.icone}
                          className="navbar-icon navbar-icon-sm"
                        />
                      ) : null}

                      <span>{item.titulo}</span>

                      <Icone
                        nome="fa-solid fa-chevron-down"
                        className="navbar-icon navbar-icon-xs"
                      />
                    </span>
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
                        <span className="menu-item-content">
                          {filho.icone ? (
                            <Icone
                              nome={filho.icone}
                              className="navbar-icon navbar-icon-sm"
                            />
                          ) : null}
                          <span>{filho.titulo}</span>
                        </span>
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
                  <span className="menu-item-content">
                    {item.icone ? (
                      <Icone
                        nome={item.icone}
                        className="navbar-icon navbar-icon-sm"
                      />
                    ) : null}
                    <span>{item.titulo}</span>
                  </span>
                </button>
              );
            })}
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
              <span className="menu-item-content">
                {botaoDireito.icone ? (
                  <Icone
                    nome={botaoDireito.icone}
                    className="navbar-icon navbar-icon-sm"
                  />
                ) : null}
                <span>{botaoDireito.titulo}</span>
              </span>
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
            <Icone nome="fa-solid fa-xmark" className="navbar-icon" />
          </button>
        </div>

        <nav className="sidebar-nav">
          {itens.map((item) => {
            return item.filhos && item.filhos.length > 0 ? (
              <div key={item.titulo} className="sidebar-group">
                <button
                  type="button"
                  className="sidebar-link sidebar-btn-reset"
                  onClick={() => toggleSubmenuMobile(item.titulo)}
                >
                  <span className="menu-item-content">
                    {item.icone ? (
                      <Icone
                        nome={item.icone}
                        className="navbar-icon navbar-icon-sm"
                      />
                    ) : null}
                    <span>{item.titulo}</span>
                  </span>

                  {submenuMobileAberto === item.titulo ? (
                    <Icone
                      nome="fa-solid fa-chevron-up"
                      className="navbar-icon navbar-icon-xs"
                    />
                  ) : (
                    <Icone
                      nome="fa-solid fa-chevron-down"
                      className="navbar-icon navbar-icon-xs"
                    />
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
                      <span className="menu-item-content">
                        {filho.icone ? (
                          <Icone
                            nome={filho.icone}
                            className="navbar-icon navbar-icon-sm"
                          />
                        ) : null}
                        <span>{filho.titulo}</span>
                      </span>
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
                <span className="menu-item-content">
                  {item.icone ? (
                    <Icone
                      nome={item.icone}
                      className="navbar-icon navbar-icon-sm"
                    />
                  ) : null}
                  <span>{item.titulo}</span>
                </span>
              </button>
            );
          })}

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
            <span className="menu-item-content">
              {botaoDireito.icone ? (
                <Icone
                  nome={botaoDireito.icone}
                  className="navbar-icon navbar-icon-sm"
                />
              ) : null}
              <span>{botaoDireito.titulo}</span>
            </span>
          </button>
        </nav>

        <div className="sidebar-social">
          {social.map((item, index) => {
            const iconName = getSocialIconName(item.url);

            if (!iconName) return null;

            return (
              <button
                key={`${item.url}-${index}`}
                type="button"
                className="social-btn"
                aria-label={`rede-social-${index}`}
                onClick={() => abrirLinkExterno(item.url)}
              >
                <Icone nome={iconName} className="navbar-icon social-icon" />
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}