import Image from "next/image";
// REACT ICONS

// Styled Components

import * as Style from "./style";
import Globals from "../../styles/Globals";

export default function Curiosidade({ titulo, subTitulo, descricao }) {
  return (
    <Style.Card>
      <Style.Content>
        <Globals />
        <div className="frente">
          <h3>{titulo}</h3>
          <p>{subTitulo}</p>
          <Image src="/l.png" width={100} height={100} responsive/>
        </div>

        <div className="verso">
          <p>{descricao}</p>
        </div>
      </Style.Content>
    </Style.Card>
  );
}
