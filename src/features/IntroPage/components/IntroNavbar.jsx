import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

                
const IntroNavbar = ({ toggleTheme, showContactModal, toggleContactModal }) => {

  return (
    <section id="intro-nav" >
    <nav className={`intro-nav ${showContactModal && "hide"}`}>
      <ul className="intro__nav--links">
        <li className="intro__nav--link link__hover-effect clickable">
          <Link to="/home">Home</Link>
        </li>
        <li className="intro__nav--link link__hover-effect clickable">
          Movies
        </li>
        <li className="intro__nav--link link__hover-effect clickable">Manga</li>
        <li className="intro__nav--link link__hover-effect clickable">Shows</li>
        <li className="intro__nav--link link__hover-effect clickable">
          Featured
        </li>
        <li className="intro__nav--link link__hover-effect clickable">
          Personal List
        </li>
        <li
        onClick={() => toggleContactModal(!showContactModal)}
          className="intro__nav--link link__hover-effect clickable contact"
        >
          Contact
        </li>
        <button onClick={() => toggleTheme()} className="theme__toggle clickable">
          <FontAwesomeIcon className=".moon" icon={faMoon} />
          <FontAwesomeIcon className=".sun" icon={faSun} />
        </button>
      </ul>
    </nav>
    </section>
  );
};

export default IntroNavbar;
