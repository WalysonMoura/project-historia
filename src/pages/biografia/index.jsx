// REACT ICONS

// Styled Components

import * as Style from "./style";
import Globals from "../../styles/Globals";
import Curiosidade from "../../components/Curiosidade";
import MenuBottom from "../../components/MenuBottom";

export default function Biografia() {
  return (
    <>
      <Globals />
      <div className="cicle1"></div>
      <div className="cicle2"></div>
      <div className="cicle3"></div>
      <div className="cicle4"></div>
      <Style.Main>
        <h1>Resumo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at illum
          sunt sit fuga fugit non tempore tempora nam odit. Debitis officiis,
          temporibus necessitatibus asperiores nam nisi consectetur modi
          repellendus.
        </p>
        <Style.Card>
          <Curiosidade
            titulo="Curiosidade 1"
            subTitulo="O Pai dos Pobres"
            descricao="Vargas ficou conhecido pelo apelido “Pai dos Pobres”. Isso porque, durante o seu governo, Getúlio adotou uma série de medidas populistas. Uma das contribuições mais significativas foi a criação das leis trabalhistas (CLT) e do salário mínimo"
          />

          <Curiosidade
            titulo="Curiosidade 2"
            subTitulo="Segunda Guerra Mundial"
            descricao="O presidente Getúlio Vargas, devido à chamada “política da boa vizinhança”, se aliou aos Estados Unidos e, consequentemente, aos denominados “Aliados”. Os brasileiros, então, participaram do conflito através da Força Expedicionária Brasileira (FEB)."
          />

          <Curiosidade
            titulo="Curiosidade 3"
            subTitulo="Um golpe leva Vargas para o cargo de presidente"
            descricao="O primeiro mandato de Vargas teve início logo após um golpe que destituiu o então presidente, Washington Luís.. Assim, um golpe de estado liderado pelos militares, conhecido como Revolução de 1930, o colocou na presidência "
          />

          <Curiosidade
            titulo="Curiosidade 4"
            subTitulo="Três fases de um governante"
            descricao="Getúlio Vargas ficou, ao todo, 15 anos no poder. O seu governo, a Era Vargas, pode ser dividido em três etapas fundamentais: Governo Provisório (1930-1934), Governo Constitucional (1934-1937) e Estado Novo (1937-1945)."
          />
        </Style.Card>
      </Style.Main>

      <MenuBottom />
    </>
  );
}
