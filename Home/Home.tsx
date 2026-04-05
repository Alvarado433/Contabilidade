import dados from "@/Dados/site";

import Topo from "./Topbar/topo";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Banner from "./Banner/page";
import RenderServicos from "./servicos/RenderServicos";
import EspecialistaDestaque from "./Destaque/page";


import footerData from "@/Dados/Footer/footerdata";
import bannerData from "@/Dados/Banner/banner";
import bannerDestaque from "@/Dados/Banner/Bannerdestaque";
import Carrossel from "./carrosselbanner/carrossel";

export default function Home() {
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

      <Banner banner={bannerData.banner} />

      <Carrossel />

      <RenderServicos servicos={dados.renderServicos} />

      <EspecialistaDestaque banner={bannerDestaque} />

      <Footer data={footerData} />
    </>
  );
}