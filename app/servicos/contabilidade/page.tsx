import dados from "@/Dados/site";
import Navbar from "@/Home/navbar/navbar";
import Topo from "@/Home/Topbar/topo";
import ContabilidadeBanner from "@/utils/banner/Interno/contabilidade";


export default function Contabilidade() {
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

      <main className="abertura-page">
        <ContabilidadeBanner banner={dados.bannerContabilidade} />
      </main>
    </>
  );
}