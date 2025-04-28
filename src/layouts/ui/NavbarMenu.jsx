import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const NavbarMenu = ({ toggleMenu, toggleContactModal, renderMovies, renderManga, setAnimes, setManga }) => {
  const navigate = useNavigate()
  const closeMenuToggleContact = () => {
    toggleMenu();
    toggleContactModal()
  }
  const closeMenuNavigate = (path) => {
    toggleMenu()
    navigate(path)
  }
  const closeMenuRenderMovies = async (path) => {
    toggleMenu()
    navigate(path)
    const moviesData = await renderMovies();
    console.log("Movies Data in NavbarMenu:", moviesData)
    setAnimes(moviesData);
    console.log("setAnimes called with:", moviesData);
  }
  const closeMenuRenderManga = async (path) => {
    toggleMenu()
    navigate(path)
    const mangaData = await renderManga();
    setManga(mangaData)
  }

  return (
    <>
      <div className="nav__menu--backdrop">
        <button onClick={() => toggleMenu()} className="nav__menu--close">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="nav__menu--bg">
          <ul className="nav__menu--links">
            <div onClick={() => closeMenuNavigate("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Home
              </li>
            </div>
            <div onClick={() => closeMenuRenderMovies("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Movies
              </li>
            </div>
            <div onClick={() => closeMenuRenderManga("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect nope">
                Manga
              </li>
            </div>

            <div onClick={() => closeMenuNavigate("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect nope">
                Shows
              </li>
            </div>
            <div onClick={() => closeMenuNavigate("/home")} className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect nope">
                Featured
              </li>
            </div>
            <div onClick={() => closeMenuNavigate("/home")} className="nav__menu--link-box">
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
