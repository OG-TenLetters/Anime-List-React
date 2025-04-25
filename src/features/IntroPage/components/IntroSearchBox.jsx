import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AnimeCollage from "../../../assets/Anime Collage.webp";
import SiteLogo from "../../../components/SiteLogo";
import { Link } from "react-router-dom";

const IntroSearchBox = ({ showContactModal }) => {
  return (
    <>
      <section id="landing-page">
        <div className={`intro__search-box--container ${showContactModal && "hide"}`}>
          <div className="intro__search-box--row">
            <div className="intro__search-box--box">
              <figure className="intro__search-box-image--wrapper">
                <img
                  className="intro__search-box--image"
                  src={AnimeCollage}
                  alt=""
                />
              </figure>
              <div className="intro__search-box--cover"></div>
              <div className="intro__search-box--contents">
                <SiteLogo />

                <div className="intro__search-box--search-bar">
                  <input type="text" placeholder="Search at your own risk..." />
                  <button className="clickable intro__search-bar--btn">
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
                <Link to={'/home'}>
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
