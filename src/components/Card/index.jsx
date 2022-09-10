import Link from "next/link";
import { useState } from "react";


// Styled Components

import * as Style from "./style";
import Globals from "../../styles/Globals";

export default function Card({nome,foto}) {
  return (
    <Style.Content>
      <Globals />
      <div>
        <img src={foto} alt="" />
        <h2>{nome}</h2>

        
      </div>
    </Style.Content>
  );
}
