import React from "react";
import SiteLogo from "../components/SiteLogo";
import { Link } from "react-router-dom";

const Footer = ({ setShowModal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop();
  const showModalScroll = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
    setShowModal(true);
  };
  return (
    <>
      <footer id="footer">
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__content">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
              >
                <SiteLogo />
              </a>
              <ul className="footer__links">
                <li className="footer__link footer-link__hover-effect">
                  <Link to="/home">Home</Link>
                </li>
                <li className="footer__link footer-link__hover-effect nope">
                  Privacy Policy
                </li>
                <li className="footer__link footer-link__hover-effect nope">
                  Terms of Service
                </li>
                <li
                  onClick={() => showModalScroll()}
                  className="footer__link footer-link__hover-effect clickable"
                >
                  Contact
                </li>
                <li className="footer__link footer-link__hover-effect clickable">
                  Resume
                </li>
              </ul>
              <div className="copyright">
                ©Copyright 2025 Jadon Smith <br /> All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
