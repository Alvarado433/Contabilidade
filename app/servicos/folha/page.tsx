import dados from "@/Dados/site";


import Navbar from "@/Home/navbar/navbar";
import Topo from "@/Home/Topbar/topo";
import Footer from "@/Home/footer/footer";
import footerData from "@/Dados/Footer/footerdata";

import BannerFolhaInterno from "@/utils/banner/Interno/BannerFolhaInterno";
import folhaData from "@/Dados/Folha/folha";

export default function FolhaPage() {
  const folha = folhaData.folhaPagamento;

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
        <BannerFolhaInterno
          titulo={folha.titulo}
          descricao={folha.descricao}
          gradiente={folha.estilo?.gradiente}
        />
      </main>

      <Footer data={footerData} />
    </>
  );
}