import style from "./nav.css";
import { useState } from "react";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";

function Nav() {
  const [navActive, setNavActive] = useState("#");
  return (
    <nav>
      <a
        href=""
        className={navActive == "#" ? "active" : ""}
        onClick={() => setNavActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={navActive == "#about" ? "active" : ""}
        onClick={() => setNavActive("#")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiences"
        className={navActive == "#experiences" ? "active" : ""}
        onClick={() => setNavActive("#experiences")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={navActive == "#services" ? "active" : ""}
        onClick={() => setNavActive("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={navActive == "#contact" ? "active" : ""}
        onClick={() => setNavActive("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
