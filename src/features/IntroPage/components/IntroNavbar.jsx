import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const IntroNavbar = () => {
  return (
      <nav className="intro__nav">
        <ul className="intro__nav--links">
          <li className="intro__nav--link link__hover-effect clickable"><Link to="/home">Home</Link></li>
          <li className="intro__nav--link link__hover-effect clickable">Movies</li>
          <li className="intro__nav--link link__hover-effect clickable">Manga</li>
          <li className="intro__nav--link link__hover-effect clickable">Shows</li>
          <li className="intro__nav--link link__hover-effect clickable">Featured</li>
          <li className="intro__nav--link link__hover-effect clickable">Personal List</li>
          <li className="intro__nav--link link__hover-effect clickable">Contact</li>
        <div className="theme__toggle clickable">
            <FontAwesomeIcon className=".moon" icon={faMoon} />
        </div>
        </ul>
      </nav>
  );
};

export default IntroNavbar;
