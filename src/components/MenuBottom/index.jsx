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
                            <a><HiHome size={35} color="#094D92"/></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="../../quiz">
                            <a><MdQuiz size={35} color="#094D92"/></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="../../biografia">
                            <a><FaBook size={30} color="#094D92"/></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="../../equipe">
                            <a><FaUsers size={35} color="#094D92"/></a>
                        </Link>
                    </li>
                </Style.MenuList>
            </nav>
        </Menu>
    )
}