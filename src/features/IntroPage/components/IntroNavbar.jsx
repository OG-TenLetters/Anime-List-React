import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IntroNavbar = () => {
  return (
      <nav className="intro__nav">
        <ul className="intro__nav--links">
          <li className="intro__nav--link link__hover-effect">Home</li>
          <li className="intro__nav--link link__hover-effect">Movies</li>
          <li className="intro__nav--link link__hover-effect">Manga</li>
          <li className="intro__nav--link link__hover-effect">Shows</li>
          <li className="intro__nav--link link__hover-effect">Featured</li>
          <li className="intro__nav--link link__hover-effect">Personal List</li>
          <li className="intro__nav--link link__hover-effect">Contact</li>
        <div className="theme__toggle">
            <FontAwesomeIcon className=".moon" icon={faMoon} />
        </div>
        </ul>
      </nav>
  );
};

export default IntroNavbar;
