import {
  faLinkedinIn,
  faMeta,
  faRedditAlien,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ShareBox from "../../../components/ShareBox";

const IntroInfo = () => {
  return (
    <section id="#Intro-Info">
      <div className="intro__info--container">
        <div className="intro__info--row">
          <div className="intro__info-box--box">
            <ShareBox />
            <div className="intro__info-box--contents">
              <div className="info-box__contents--info">
                <h1>The most user friendly place for keeping track of your list</h1>
              </div>

              <div className="intro__info-box--post-box"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroInfo;
