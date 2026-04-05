import dados from "@/Dados/site";
import footerData from "@/Dados/Footer/footerdata";


import Navbar from "@/Home/navbar/navbar";
import Topo from "@/Home/Topbar/topo";
import Footer from "@/Home/footer/footer";
import fiscalData from "@/Dados/fiscal/fiscal";
import BannerFiscalInterno from "@/utils/banner/Interno/BannerFiscalInterno";


export default function FiscalPage() {
  const fiscal = fiscalData.fiscal;

  return (
    <>
      <Topo
        email={dados.topo.email}
        telefone={dados.topo.telefone}
        whatsapp={dados.topo.whatsapp}
      />

      <Navbar
        logo={dados.menu.logo}
        itens={dados.menu.itens}
        botaoDireito={dados.menu.botaoDireito}
        social={dados.rodape.social}
      />

      <main style={{ background: fiscal.estilo.fundo }}>
        <BannerFiscalInterno
          titulo={fiscal.titulo}
          subtitulo={fiscal.subtitulo}
          descricao={fiscal.descricao}
          badge={fiscal.badge}
          destaque={fiscal.destaque}
          icone={fiscal.icone}
          gradiente={fiscal.estilo.gradiente}
        />
      </main>

      <Footer data={footerData} />
    </>
  );
}