import React from "react";
import ReactBadge from "../assets/React-Badge.webp";
import SqlBadge from "../assets/SQL-Badge.svg";
import Html5Badge from "../assets/HTML5-Badge.png";
import CssBadge from "../assets/CSS-Badge.webp";
import JavascriptBadge from "../assets/JavaScript-Badge.webp";
import TypescriptBadge from "../assets/TypeScript-Badge.webp";
import FirebaseBadge from "../assets/FireBase-Badge.svg";
import ReduxBadge from "../assets/Redux-Badge.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const ContactModal = ({ showContactModal, toggleContactModal }) => {
  const sendEmail = (e) => {
    e.preventDefault();
    const loading = document.querySelector(".contact-modal__overlay--loading");
    const success = document.querySelector(".contact-modal__overlay--success");
    emailjs
      .sendForm(
        "service_dmf4e7a",
        "template_acfbkmf",
        e.target,
        "qVGgK80-uMkkItvbU"
      )
      .then(() => {
        // throw new Error("error")
        loading.classList.remove("contact-modal__overlay--visible");
        success.classList += " contact-modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("contact-modal__overlay--visible");
        alert(
          "The emial service is temporarily unavailable. Please email me directly at 1tenletters0@gmail.com"
        );
      });

    loading.classList += " contact-modal__overlay--visible";
    setTimeout(() => {
      console.log("It worked!");
    }, 500);
  };

  return (
    <>
      <div className={`contact-modal ${showContactModal && "show"}`}>
        <div className="contact-modal__half contact-modal__about">
          <h3 className="contact-modal__title contact-modal__title--about">
            This is where I'm currently at:
          </h3>
          <h4 className="contact-modal__subtitle contact-modal__subtitle--about">
            I do what I can, not what I can't... yet.
          </h4>
          <p className="contact-modal__para">
            I'm a 24 year old
            <b className="primary"> frontend software engineer</b> in Washington
            State, USA. <br />
            My job is to achieve the best
            <b className="primary"> user experience</b> whilst keeping the site,
            clean, light, and engaging. <br />
            I've tackled problems through different avenues of my life, from
            robotics, art, multi-insurance, to aviation maintenance and I'm
            excited to <b className="primary"> incorporate </b>
            my skills to website development.
          </p>
          <div className="contact-modal__languages">
            <figure className="contact-modal__language">
              <img
                className="contact-modal__language--img"
                src={Html5Badge}
                alt=""
              />
              <span className="contact-modal__language--name">HTML5</span>
            </figure>
            <figure className="contact-modal__language">
              <img
                className="contact-modal__language--img"
                src={CssBadge}
                alt=""
              />
              <span className="contact-modal__language--name">CSS</span>
            </figure>
            <figure className="contact-modal__language">
              <img
                className="contact-modal__language--img"
                src={JavascriptBadge}
                alt=""
              />
              <span className="contact-modal__language--name">Javascript</span>
            </figure>
            <figure className="contact-modal__language">
              <img
                className="contact-modal__language--img"
                src={TypescriptBadge}
                alt=""
              />
              <span className="contact-modal__language--name">Typescript</span>
            </figure>
            <figure className="contact-modal__language">
              <img
                className="contact-modal__language--img"
                src={ReactBadge}
                alt=""
              />
              <span className="contact-modal__language--name">React</span>
            </figure>
            <figure className="contact-modal__language">
              <img
                className="contact-modal__language--img"
                src={FirebaseBadge}
                alt=""
              />
              <span className="contact-modal__language--name">Firebase</span>
            </figure>
            <figure className="contact-modal__language">
              <img
                className="contact-modal__language--img"
                src={ReduxBadge}
                alt=""
              />
              <span className="contact-modal__language--name">Redux</span>
            </figure>
            <figure className="contact-modal__language">
              <img
                className="contact-modal__language--img"
                src={SqlBadge}
                alt=""
              />
              <span className="contact-modal__language--name">SQL</span>
            </figure>
          </div>
        </div>
        <div className="contact-modal__half contact-modal__contact">
          <div className="contact-modal__title contact-modal__title--contact">
            <h3 className="contact-modal__title contact-modal__title--contact">
              Let's Have a Chat!
            </h3>
            <h4 className="contact-modal__subtitle contact-modal__title--contact">
              I'm currently open to new opportunities.
            </h4>
            <form id="contact__form" action="" onSubmit={sendEmail}>
              <div className="form__item">
                <label className="form__item--label">Name</label>
                <input
                  className="input"
                  name="user_name"
                  type="text"
                  required
                ></input>
              </div>
              <div className="form__item">
                <label className="form__item--label">Email</label>
                <input
                  className="input"
                  name="user_email"
                  type="text"
                  required
                ></input>
              </div>
              <div className="form__item">
                <label className="form__item--label">Message</label>
                <textarea
                  className="input"
                  name="message"
                  type="text"
                  required
                ></textarea>
              </div>
              <button id="contact__submit" className="form__submit">
                Send it My Way
              </button>
            </form>
            <div className="contact-modal__overlay--loading">
              <FontAwesomeIcon icon={faSpinner} />
            </div>
            <div className="contact-modal__overlay--success">
              I appreciate the message! Looking forward to speaking to you soon.
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          onClick={() => toggleContactModal(!showContactModal)}
          className="contact-modal__exit clickable"
          icon={faTimes}
        />
      </div>
    </>
  );
};

export default ContactModal;
