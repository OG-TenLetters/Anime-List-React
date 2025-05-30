import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use, useEffect, useState } from "react";
import AnimeCollage from "../../../assets/Anime Collage.webp";
import SiteLogo from "../../../components/SiteLogo";
import { Link, useNavigate } from "react-router-dom";

const IntroSearchBox = ({ showContactModal, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [imgLoading, setImgLoading] = useState(true);
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
      performSearch();
    }
  };
  const handleSearchClick = (event) => {
    event.preventDefault();
    performSearch();
  };
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <>
      <section id="landing-page">
        <div
          className={`intro__search-box--container ${
            showContactModal && "hide"
          }`}
        >
          <div className="intro__search-box--row">
            <div className="intro__search-box--box">
              <figure className="intro__search-box-image--wrapper">
                  <div className="intro__search-box--image-skeleton"></div>
                  <img
                    className="intro__search-box--image"
                    src={AnimeCollage}
                    alt=""
                    onLoad={() => setImgLoading(false)}
                    style={{ display: imgLoading ? "none" : "block"}}
                  />
              </figure>
              <div className="intro__search-box--cover"></div>
              <div className="intro__search-box--contents">
                <SiteLogo />

                <div className="intro__search-box--search-bar">
                  <input
                    onKeyDown={handleKeyDown}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Search at your own risk..."
                  />
                  <button
                    onClick={handleSearchClick}
                    className="clickable intro__search-bar--btn"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
                <div className="intro__search-box--desc">
                  <b>Top Search:</b> Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Ducimus necessitatibus veritatis quas ipsam,
                  sunt animi obcaecati natus rem error unde blanditiis harum
                  fuga totam odio! Iusto, laborum? Officia odio quidem quos
                  ducimus? In maiores sint perferendis eveniet quos? Atque,
                  natus.
                </div>
                <Link onClick={toTop} to={"/home"}>
                  <button className="clickable intro__search-box--btn">
                    Start Here!
                    <div className="arrow--wrapper">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSearchBox;
