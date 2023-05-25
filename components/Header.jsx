import {
  AiOutlineClose,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const toggleNav = () => {
    setClicked(!clicked);
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("toggle-nav");
  };

  return (
    <div className="header">
      <Link className="logo" href={"/"}>
        <span>Samid.</span>
      </Link>
      <nav id="navbar">
        <Link className="active" href={"/"}>
          <AiOutlineHome />
          <span>Home</span>
        </Link>
        <Link href={"/about"}>
          <AiOutlineUser />
          <span>About</span>
        </Link>
        <Link href={"/projects"}>
          <AiOutlineFundProjectionScreen />
          <span>Projects</span>
        </Link>
        <Link href={"/contact"}>
          <AiOutlinePhone />
          <span>Contact</span>
        </Link>
      </nav>
      {/* Toggle Navbar */}
      {clicked === false ? (
        <AiOutlineMenu className="toggle-menu" onClick={toggleNav} />
      ) : (
        <AiOutlineClose className="toggle-menu" onClick={toggleNav} />
      )}
    </div>
  );
};
export default Header;
