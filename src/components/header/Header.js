import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="#skills" className="logo">
          {/* <span className="grey-color"> &lt;</span> */}
          <span className="logo-name">{greeting.username}</span>
          {/* <span className="grey-color">/&gt;</span> */}
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          {exp === true && (
            <li>
              <a href="#experience">Experiences</a>
            </li>
          )}
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
