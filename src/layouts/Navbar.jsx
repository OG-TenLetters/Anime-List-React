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

const Navbar = ({
  toggleTheme,
  showContactModal,
  toggleContactModal,
  setAnimes,
  renderMovies,
  renderManga,
  renderAnimeData,
  animesData,
  setSearchQuery,
}) => {
  const navigate = useNavigate();
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [inputValue, setInputValue] = useState("");
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

  const performSearch = () => {
    const searchTerm = inputValue.trim();
    if (searchTerm) {
      setSearchQuery(searchTerm);
      navigate("/home");
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      performSearch()
    }
  };
  const handleSearchClick = (event) => {
    event.preventDefault()
    performSearch();
  };

  return (
    <>
      <NavbarMenu
        renderAnimeData={renderAnimeData}
        animesData={animesData}
        renderMovies={renderMovies}
        renderManga={renderManga}
        setAnimes={setAnimes}
        toggleMenu={toggleMenu}
        showContactModal={showContactModal}
        toggleContactModal={toggleContactModal}
      />

      <section id="home__nav">
        <nav className={`home__nav ${showContactModal && "hide"}`}>
          <div className="nav__group">
            <button onClick={() => toggleMenu()} className="nav__menu--btn">
              <div className="menu__btn--container">
                <FontAwesomeIcon className="clickable" icon={faBurger} />
              </div>
            </button>
            <div
              onClick={() => {
                navigate("/");
              }}
            >
              <SiteLogo />
            </div>
            <div className="home__searchbar">
              <input
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                
                type="text"
                placeholder="Search..."
              />
              <div className="home__search--btns">
                <div
                  onClick={handleSearchClick}
                  className="home__search--btn"
                >
                  <FontAwesomeIcon className="clickable" icon={faSearch} />
                </div>
                <button className="search__filter--btns">
                  <div className="search__filter--word nope">Filter</div>
                  <FontAwesomeIcon icon={faFilter} />
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowSearchBar(!showSearchBar)}
              className="search__btn"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <div className="home__social--links nope">
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
            <div className="home__language--toggle nope">
              <div className="home__languages">
                <div className="home__language">EN</div>
                <div className="home__language">JP</div>
              </div>
              <div className="languages__title">Anime Name</div>
            </div>
            <div className="home__community nope">
              <FontAwesomeIcon icon={faComments} />
              <div className="community__title">Community</div>
            </div>
            <button
              onClick={() => toggleTheme()}
              className="theme__toggle clickable"
            >
              <FontAwesomeIcon className=".moon" icon={faMoon} />
              <FontAwesomeIcon className=".sun" icon={faSun} />
            </button>
            <button className="login">Login</button>
          </div>
          {showSearchBar ? (
            <div className="home__searchbar2">
              <input
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                type="text"
                placeholder="Search..."
              />
              <div className="home__search--btns2">
                <div onClick={handleSearchClick} className="home__search--btn2">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <button className="search__filter--btns2">
                  <div className="search__filter--word2">Filter</div>
                  <FontAwesomeIcon icon={faFilter} />
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </nav>
      </section>
    </>
  );
};

export default Navbar;
