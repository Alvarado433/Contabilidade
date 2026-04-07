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
import menu from "@/Dados/menu/menu";

export default function Home() {
  console.log("MENU NOVO:", menu);
  console.log("ITENS DO MENU:", menu.itens);
  console.log("BOTAO DIREITO:", menu.botaoDireito);

  return (
    <>
      <Topo
        email={dados.topo.email}
        telefone={dados.topo.telefone}
        whatsapp={dados.topo.whatsapp}
      />

      <Navbar
        logo={menu.logo}
        itens={menu.itens}
        botaoDireito={menu.botaoDireito}
        social={menu.social}
      />

      <Banner banner={bannerData.banner} />
      <RenderServicos servicos={dados.renderServicos} />
      <EspecialistaDestaque banner={bannerDestaque} />
      <Carrossel />
      <Footer data={footerData} />
    </>
  );
}