import React from "react";
import { faLinkedinIn, faMeta, faRedditAlien, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ShareBox = () => {
  return (
    <>
      <div className="intro__info-box--share-box">
        <div className="info-box__share-box--title">
          <span className="primary">Share Anithon</span>
          <br /> to your friends!
        </div>
        <div className="info-box__share-box--btns">
          <button className="info-box__share-box--btn">
            <FontAwesomeIcon icon={faLinkedinIn} />
            Share
          </button>
          <button className="info-box__share-box--btn">
            <FontAwesomeIcon icon={faXTwitter} />
            Share
          </button>
          <button className="info-box__share-box--btn">
            <FontAwesomeIcon icon={faMeta} />
            Share
          </button>
          <button className="info-box__share-box--btn">
            <FontAwesomeIcon icon={faRedditAlien} />
            Share
          </button>
          <button className="info-box__share-box--btn">
            <FontAwesomeIcon icon={faShare} />
            Link Share
          </button>
        </div>
      </div>
    </>
  );
};

export default ShareBox;
