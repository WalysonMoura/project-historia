import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


// Styled Components

import * as Style from "./style";
import Globals from "../../styles/Globals";

export default function Card({nome,foto}) {
  return (
    <Style.Content>
      <Globals />
      <div>
      <Image src={foto} width={300} height={300} responsive/>
      
        
        <h2>{nome}</h2>

        
      </div>
    </Style.Content>
  );
}
