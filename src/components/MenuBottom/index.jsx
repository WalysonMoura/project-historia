import Link from "next/link";
import { useState } from "react";

// REACT ICONS
import { FaBook,FaUsers  } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { MdQuiz } from "react-icons/md"

// Styled Components
import { Menu } from "./style";
import * as Style from "./style";
import Globals from "../../styles/Globals";

export default function MenuBottom() {
    return(
        <Menu>
            <Globals/>
            <nav>
                <Style.MenuList>
                    <li>
                        <Link  href="../../">
                            <a><HiHome  color="#094D92"/></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="../../quiz">
                            <a><MdQuiz color="#094D92"/></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="../../biografia">
                            <a><FaBook  color="#094D92"/></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="../../equipe">
                            <a><FaUsers  color="#094D92"/></a>
                        </Link>
                    </li>
                </Style.MenuList>
            </nav>
        </Menu>
    )
}