import React from "react";
import { faLinkedinIn, faMeta, faRedditAlien, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ShareBox = () => {
  return (
    <>
      <div className="share-box">
        <div className="share-box__title">
          <span className="primary">Share Anithon</span> to your friends!
        </div>
        <div className="share-box__btns">
          <button className="share-box__btn clickable">
            <FontAwesomeIcon icon={faLinkedinIn} />
            Share
          </button>
          <button className="share-box__btn clickable">
            <FontAwesomeIcon icon={faXTwitter} />
            Share
          </button>
          <button className="share-box__btn clickable">
            <FontAwesomeIcon icon={faMeta} />
            Share
          </button>
          <button className="share-box__btn clickable">
            <FontAwesomeIcon icon={faRedditAlien} />
            Share
          </button>
          <button className="share-box__btn clickable">
            <FontAwesomeIcon icon={faShare} />
            Link Share
          </button>
        </div>
        <button className="share-box__more-btn">
          Share!
        </button>
      </div>
    </>
  );
};

export default ShareBox;
