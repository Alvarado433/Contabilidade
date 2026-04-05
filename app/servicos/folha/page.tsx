import dados from "@/Dados/site";

import footerData from "@/Dados/Footer/footerdata";

import Navbar from "@/Home/navbar/navbar";
import Topo from "@/Home/Topbar/topo";
import Footer from "@/Home/footer/footer";
import BannerFolhaInterno from "@/utils/banner/Interno/BannerFolhaInterno";
import folhaData from "@/Dados/Folha/folha";

export default function FolhaPage() {
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

      <main>
        <BannerFolhaInterno data={folhaData.folhaPagamento} />
      </main>

      <Footer data={footerData} />
    </>
  );
}