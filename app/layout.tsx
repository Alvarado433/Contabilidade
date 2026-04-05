import type { Metadata } from "next";
import "./globals.css";
import dados from "@/Dados/site";
import './../public/site/topo/Topo.css'
import './../public/site/navbar/Menu.css'
import './../public/site/servico/abertura/abertura.css'
import './../public/Footer/footer.css'
import './../public/Banner/Interno/Banner.css'
import './../public/Especialista/especialista.css'
import './../public/carrosse/carrossel.css'

import { ToastContainer } from "react-toastify";
export const metadata: Metadata = {
  title: dados.configuracao.titulo,
  description: dados.configuracao.descricao,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={dados.configuracao.idioma}>
      <body>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"
        />
      </body>
    </html>
  );
}