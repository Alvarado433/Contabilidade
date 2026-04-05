"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    toast.dismiss();
    fecharTudo();

    toast.info(mensagem, {
      autoClose: 3000,
      theme: "dark",
    });

    timeoutRef.current = setTimeout(() => {
      router.push(url);
    }, 3000);

    if (fecharMenu) fecharSidebar();
  };

  // 🔥 converte URL → nome do ícone
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
    document.body.style.overflow = menuMobileAberto ? "hidden" : "";
  }, [menuMobileAberto]);

  return (
    <>
      <header id="navbar">
        <div className="container">
          {/* MOBILE BTN */}
          <div className="mobile-left">
            <button
              className="menu-mobile-btn"
              onClick={() => setMenuMobileAberto(true)}
            >
              <Icone nome="fa-solid fa-bars" />
            </button>
          </div>

          {/* LOGO */}
          <button
            className="logo-area"
            onClick={() =>
              navegarComToast(logo.url, `Indo para ${logo.nome}...`)
            }
          >
            <div className="logo-nome">{logo.nome}</div>
            <div className="logo-sub">{logo.subtitulo}</div>
          </button>

          {/* MENU */}
          <nav className="menu-central">
            {itens.map((item) =>
              item.filhos ? (
                <div
                  key={item.titulo}
                  className="dropdown"
                  onMouseEnter={() => setDropdownAberto(item.titulo)}
                  onMouseLeave={() => setDropdownAberto(null)}
                >
                  <button className="menu-item">
                    {item.titulo}
                    <Icone nome="fa-solid fa-chevron-down" />
                  </button>

                  <div
                    className={`dropdown-menu ${
                      dropdownAberto === item.titulo ? "show" : ""
                    }`}
                  >
                    {item.filhos.map((filho) => (
                      <button
                        key={filho.titulo}
                        className="dropdown-item"
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
                  className="menu-item"
                  onClick={() =>
                    navegarComToast(item.url, `Abrindo ${item.titulo}...`)
                  }
                >
                  {item.titulo}
                </button>
              )
            )}
          </nav>

          {/* BOTÃO */}
          <div className="navbar-right">
            <button
              className="btn-consultoria"
              onClick={() =>
                navegarComToast(
                  botaoDireito.url,
                  `Indo para ${botaoDireito.titulo}`
                )
              }
            >
              {botaoDireito.titulo}
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`overlay ${menuMobileAberto ? "show" : ""}`}
        onClick={fecharSidebar}
      />

      {/* SIDEBAR */}
      <aside className={`sidebar ${menuMobileAberto ? "open" : ""}`}>
        <div className="sidebar-header">
          <div>
            <h2>{logo.nome}</h2>
            <p>{logo.subtitulo}</p>
          </div>

          <button onClick={fecharSidebar}>
            <Icone nome="fa-solid fa-xmark" />
          </button>
        </div>

        <nav className="sidebar-nav">
          {itens.map((item) =>
            item.filhos ? (
              <div key={item.titulo}>
                <button
                  onClick={() => toggleSubmenuMobile(item.titulo)}
                  className="sidebar-link"
                >
                  {item.titulo}
                  <Icone
                    nome={
                      submenuMobileAberto === item.titulo
                        ? "fa-solid fa-chevron-up"
                        : "fa-solid fa-chevron-down"
                    }
                  />
                </button>

                {submenuMobileAberto === item.titulo && (
                  <div className="sidebar-submenu">
                    {item.filhos.map((filho) => (
                      <button
                        key={filho.titulo}
                        onClick={() =>
                          navegarComToast(
                            filho.url,
                            `Abrindo ${filho.titulo}`,
                            true
                          )
                        }
                      >
                        {filho.titulo}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.titulo}
                className="sidebar-link"
                onClick={() =>
                  navegarComToast(item.url, `Abrindo ${item.titulo}`, true)
                }
              >
                {item.titulo}
              </button>
            )
          )}
        </nav>

        {/* SOCIAL */}
        <div className="sidebar-social">
          {social.map((item, index) => (
            <a key={index} href={item.url} target="_blank">
              <Icone nome={getSocialIconName(item.url)} />
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}