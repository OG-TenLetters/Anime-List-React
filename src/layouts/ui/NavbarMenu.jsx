import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarMenu = ({ toggleMenu, toggleContactModal }) => {
  const closeMenuToggleContact = () => {
    toggleMenu();
    toggleContactModal()
  }

  return (
    <>
      <div className="nav__menu--backdrop">
        <button onClick={() => toggleMenu()} className="nav__menu--close">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="nav__menu--bg">
          <ul className="nav__menu--links">
            <div className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Home
              </li>
            </div>
            <div className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Movies
              </li>
            </div>
            <div className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Manga
              </li>
            </div>

            <div className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Shows
              </li>
            </div>
            <div className="nav__menu--link-box">
              <li className="nav__menu--link clickable link__hover-effect">
                Featured
              </li>
            </div>
            <div className="nav__menu--link-box">
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
