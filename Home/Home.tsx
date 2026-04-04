import dados from "@/Dados/site";
import footerData from "@/Dados/footer";

import Topo from "./Topbar/topo";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Banner from "./Banner/page";
import RenderServicos from "./servicos/RenderServicos";

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

      <Banner banner={dados.banner} />

      <RenderServicos servicos={dados.renderServicos} />

      <Footer data={footerData} />
    </>
  );
}