import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const NavbarMenu = ({ toggleMenu, toggleContactModal, setMovies, renderMovies }) => {
  const navigate = useNavigate()
  const closeMenuToggleContact = () => {
    toggleMenu();
    toggleContactModal()
  }
  const closeMenuNavigate = (path) => {
    toggleMenu()
    navigate(path)
  }
  const closeMenuRenderMovies = (path) => {
    toggleMenu()
    navigate(path)
    setMovies(true)
    renderMovies()
  }
  return (
    <>
      <div className="nav__menu--backdrop">
        <button onClick={() => toggleMenu()} className="nav__menu--close">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="nav__menu--bg">
          <ul className="nav__menu--links">
            <div onClick={() => closeMenuRenderMovies("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Home
              </li>
            </div>
            <div onClick={() => closeMenuNavigate("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Movies
              </li>
            </div>
            <div onClick={() => closeMenuNavigate("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Manga
              </li>
            </div>

            <div onClick={() => closeMenuNavigate("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Shows
              </li>
            </div>
            <div onClick={() => closeMenuNavigate("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Featured
              </li>
            </div>
            <div onClick={() => closeMenuNavigate("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
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
