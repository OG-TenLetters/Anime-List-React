import React, { useState } from "react";

import {
  faBurger,
  faComments,
  faFilter,
  faMoon,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faMeta,
  faRedditAlien,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteLogo from "../components/SiteLogo";
import { useNavigate } from "react-router-dom";
import NavbarMenu from "./ui/NavbarMenu";
// import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, setShowModal, showModal }) => {
  const navigate = useNavigate();
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleMenu = () => {
    const navMenu = document.querySelector(".nav__menu--backdrop");
    if (showNavMenu) {
      navMenu.classList.remove("nav__menu--open");
      setShowNavMenu(false);
    } else {
      navMenu.classList.add("nav__menu--open");
      setShowNavMenu(true);
    }
  };

  return (
    <>
    <NavbarMenu toggleMenu={toggleMenu} showModal={showModal} setShowModal={setShowModal} />
    
      <section id="home__nav">
        <nav className={`home__nav ${showModal && "hide"}`}>
          <button onClick={() => toggleMenu()} className="nav__menu--btn">
            <FontAwesomeIcon icon={faBurger} />
          </button>

          <div
            onClick={() => {
              console.log("Site Clicked");
              navigate("/");
            }}
          >
            <SiteLogo />
          </div>
          <div className="home__searchbar">
            <input type="text" placeholder="Search..." />
            <div className="home__search--btns">
              <div className="home__search--btn">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <button className="search__filter--btns">
                <div className="search__filter--word">Filter</div>
                <FontAwesomeIcon icon={faFilter} />
              </button>
            </div>
          </div>
          <div className="home__social--links">
            <div className="home__social--link">
              <FontAwesomeIcon icon={faDiscord} />
            </div>
            <div className="home__social--link">
              <FontAwesomeIcon icon={faMeta} />
            </div>
            <div className="home__social--link">
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
            <div className="home__social--link">
              <FontAwesomeIcon icon={faRedditAlien} />
            </div>
          </div>
          <div className="home__language--toggle">
            <div className="home__languages">
              <div className="home__language">EN</div>
              <div className="home__language">JP</div>
            </div>
            Anime Name
          </div>
          <div className="home__community">
            <FontAwesomeIcon icon={faComments} />
            Community
          </div>
          <button
            onClick={() => toggleTheme()}
            id="theme__toggle"
            className="clickable"
          >
            <FontAwesomeIcon className=".moon" icon={faMoon} />
            <FontAwesomeIcon className=".sun" icon={faSun} />
          </button>
          <button className="login">Login</button>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
