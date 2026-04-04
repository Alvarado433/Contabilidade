"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nomesPersonalizados: Record<string, string> = {
  servicos: "Serviços",
  abertura: "Abertura de Empresa",
  mensal: "Contabilidade Mensal",
  imposto: "Imposto de Renda",
  fiscal: "Assessoria Fiscal",
  sobre: "Sobre Nós",
  blog: "Blog",
  contato: "Contato",
  consultoria: "Consultoria",
  "acoes-sociais": "Ações Sociais",
  projetos: "Projetos Comunitários",
  doacoes: "Campanhas de Doação",
  voluntariado: "Voluntariado",
  relatorios: "Relatórios de Impacto",
};

function formatarNome(segmento: string) {
  return (
    nomesPersonalizados[segmento] ||
    segmento.replace(/-/g, " ").replace(/\b\w/g, (letra) => letra.toUpperCase())
  );
}

export default function Breadcrumb() {
  const pathname = usePathname();

  const segmentos = pathname.split("/").filter(Boolean);

  const caminhos = segmentos.map((segmento, index) => {
    const href = "/" + segmentos.slice(0, index + 1).join("/");
    return {
      href,
      nome: formatarNome(segmento),
    };
  });

  return (
    <>
      <nav className="breadcrumb-clean" aria-label="Breadcrumb">
        <div className="breadcrumb-clean-container">
          <Link href="/">Início</Link>

          {caminhos.map((item, index) => {
            const ultimo = index === caminhos.length - 1;

            return (
              <span key={item.href} className="breadcrumb-clean-item">
                <span className="breadcrumb-clean-separador">/</span>
                {ultimo ? <strong>{item.nome}</strong> : <Link href={item.href}>{item.nome}</Link>}
              </span>
            );
          })}
        </div>
      </nav>

      <style>{`
        .breadcrumb-clean {
          width: 100%;
          background: #ffffff;
          border-bottom: 1px solid #edf2f7;
        }

        .breadcrumb-clean-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
          color: #64748b;
          font-size: 0.88rem;
        }

        .breadcrumb-clean-item {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .breadcrumb-clean a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .breadcrumb-clean a:hover {
          color: #1d4ed8;
        }

        .breadcrumb-clean-separador {
          color: #94a3b8;
        }

        .breadcrumb-clean strong {
          color: #0f172a;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .breadcrumb-clean-container {
            padding: 10px 16px;
            font-size: 0.82rem;
          }
        }
      `}</style>
    </>
  );
}