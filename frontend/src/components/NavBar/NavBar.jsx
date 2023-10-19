import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import menuHamBurger from "./menu-hamburger.svg";
import { Link } from "react-scroll";
import "./navbar.scss";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-60}
          duration={150}
          onClick={closeMenu}
        >
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <img src={menuHamBurger} alt="hamburger menu" />
        </div>
      </div>
      <ul className={`nav-links ${showMenu ? "active" : ""}`}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-60}
          duration={150}
          onClick={closeMenu}
        >
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <Link
            activeClass="active"
            to="Services"
            spy={true}
            smooth={true}
            offset={-60}
            duration={150}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            activeClass="active"
            to="Industries"
            spy={true}
            smooth={true}
            offset={-60}
            duration={150}
            onClick={closeMenu}
          >
            Industries
          </Link>
          <Link
            activeClass="active"
            to="Cases"
            spy={true}
            smooth={true}
            offset={-60}
            duration={150}
            onClick={closeMenu}
          >
            Cases
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={150}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
        <li>
          <button>Let's Talk</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
