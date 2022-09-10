// REACT ICONS

// Styled Components
import * as Style from "./style";
import Globals from "../../styles/Globals";

import Card from "../../components/Card";
import MenuBottom from "../../components/MenuBottom";

export default function Equipe() {
  return (
    <>
      <Globals />
      <div className="cicle1"></div>
      <div className="cicle2"></div>
      <div className="cicle3"></div>
      <div className="cicle4"></div>
      <Style.Main>
        <h1>Equipe</h1>
        <Style.Conteiner>
          <Card nome="Walyson" foto="/walyson.png"/>
          <Card nome="cayo" foto="/cayo.png"/>
          <Card nome="ricardo" foto="/ricardo.png"/>
          <Card nome="Dheymison" foto="/dhy.png"/>
          <Card nome="Geysson" foto="/geysson.png"/>
          <Card nome="Reinaldo" foto="/rei.png"/>
        </Style.Conteiner>
      </Style.Main>
      <MenuBottom />
    </>
  );
}
