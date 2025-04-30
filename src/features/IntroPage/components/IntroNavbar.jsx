import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

                
const IntroNavbar = ({ toggleTheme, showContactModal, toggleContactModal, setAnimes, renderMovies, renderAnimes}) => {
  const navigate = useNavigate()
  const moviesNav = async () => {
    const moviesData = await renderMovies;
    setAnimes(moviesData);
    navigate("/home")
  }



  return (
    <section id="intro-nav" >
    <nav className={`intro-nav ${showContactModal && "hide"}`}>
      <ul className="intro__nav--links">
        <li className="intro__nav--link link__hover-effect clickable">
          <Link to="/home">Home</Link>
        </li>
        <li onClick={moviesNav} className="intro__nav--link link__hover-effect clickable nope">
          Movies
        </li>
        <li className="intro__nav--link link__hover-effect nope">Manga</li>
        <li className="intro__nav--link link__hover-effect nope">Shows</li>
        <li className="intro__nav--link link__hover-effect nope">
          Featured
        </li>
        <li className="intro__nav--link link__hover-effect nope">
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
