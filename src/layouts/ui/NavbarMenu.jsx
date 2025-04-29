import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const NavbarMenu = ({ toggleMenu, toggleContactModal, renderMovies, setAnimes, renderAnimeData }) => {
  const navigate = useNavigate()
  const closeMenuToggleContact = () => {
    toggleMenu();
    toggleContactModal()
  }
  const closeMenuRenderMovies = async (path) => {
    toggleMenu()
    navigate(path)
    const moviesData = await renderMovies;
    setAnimes(moviesData);
  }
  const closeMenuRenderAnimeMain = async (path) => {
    toggleMenu()
    navigate(path)
    const animesData = await renderAnimeData;
    setAnimes(animesData);
  }

  return (
    <>
      <div className="nav__menu--backdrop">
        <button onClick={() => toggleMenu()} className="nav__menu--close">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="nav__menu--bg">
          <ul className="nav__menu--links">
            <div onClick={() => closeMenuRenderAnimeMain("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Home
              </li>
            </div>
            <div onClick={() => closeMenuRenderMovies("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Movies
              </li>
            </div>
            <div className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect nope">
                Manga
              </li>
            </div>

            <div className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect nope">
                Shows
              </li>
            </div>
            <div className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect nope">
                Featured
              </li>
            </div>
            <div className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect nope">
                Personal List
              </li>
            </div>
            <div className="nav__menu--link-box">
              <li
                onClick={() => closeMenuToggleContact()}
                className="nav__menu--link clickable link__hover-effect"
              >
                Contact
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
