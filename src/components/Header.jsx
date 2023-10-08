import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import close from "../assets/shared/mobile/icon-close.svg";

const Header = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="coffeeroaster's logo" />
      </Link>
      <button
        onClick={() => setVisibility((prev) => !prev)}
        className="header__mobile-toggle"
      >
        <img src={visibility ? close : hamburger} alt="hamrbuger nav" />
      </button>
      <nav className={`header__mobile-nav  ${visibility ? "show" : "hidden"} `}>
        <ul className="header__mobile-nav-list">
          <li className="header__mobile-nav-link">
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li className="header__mobile-nav-link">
            <Link to="about">About Us</Link>
          </li>
          <li className="header__mobile-nav-link">
            <Link to="plan">Create Your Plan</Link>
          </li>
        </ul>
      </nav>
      <nav className="header__desktop-nav">
        <ul className="header__desktop-nav-list">
          <li className="header__desktop-nav-link">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "header__desktop-nav-link-item"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="header__desktop-nav-link">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "header__desktop-nav-link-item"
              }
              to="about"
            >
              About
            </NavLink>
          </li>
          <li className="header__desktop-nav-link">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "header__desktop-nav-link-item"
              }
              to="plan"
            >
              Create Your Plan
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
