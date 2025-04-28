import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import ShareBox from "./ShareBox";
import SkeletonImg from "../assets/Skeleton.jpg"




const InfoTemplateSkeleton = () => {
  return (
    <div className="template__content--skeleton">
      <img className="template__cover-bg--skeleton" src={SkeletonImg} alt="" />
      <button className="back__btn">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      <figure className="template__img--wrapper--skeleton">
        <div className="template__g-rating">18+</div>
        <img src={SkeletonImg} alt="" className="template__img--skeleton" />
      </figure>
      <div className="template__title--skeleton">
        <h2 className="template__title-text--skeleton">{" ███████████████"}</h2>
        <div className="template__glass--skeleton"></div>
      </div>
      <button className="add-to-list--btn nope">
        <FontAwesomeIcon icon={faPlus} />
        Add To List
      </button>
      <div className="template__details--skeleton">
        <div className="template__summary--skeleton">
          █████ ███ ███ █████ ██████ ████ ███ ████ █ ████ ████ ████ ████ ██ █
          █████████ ████ █████████████ █████████ ████ ████ ██ █ █████ █████ ████
          ███ ███ ███ ███ ██████████ ██ ██████ ████ █████ ██████ ██ █ ██ ███ ███
          ████ █████ █████████ ███ █ ████ ██ ████ ████ ██ ████ ████████ █████
          █████ ███ ███ █████ ██████ ████ ███ ████ █ ████ ████ ████ ████ ██ █
          █████████ ████ █████████████ █████████ ████ ████ ██ █ █████ █████ ████
          ███ ███ ███ ███ ██████████ ██ ██████ ████ █████ ██████ ██ █ ██ ███ ███
          ████ █████ █████████ ███ █ ████ ██ ████ ████ ██ ████ ████████ █████
          █████ ███ ███ █████ ██████ ████ ███ ████ █ ████ ████ ████ ████ ██ █
          █████████ ████ █████████████ █████████ ████ ████ ██ █ █████ █████ ████
          ███ ███ ███ ███ ██████████ ██ ██████ ████ █████ ██████ ██ █ ██ ███ ███
          ████ █████ █████████ ███ █ ████ ██ ████ ████ ██ ████ ████████ █████
          █████ ███ ███ █████ ██████ ████ ███ ████ █ ████ ████ ████ ████ ██ █
          █████████ ████ █████████████ █████████ ████ ████ ██ █ █████ █████ ████
          ███ ███ ███ ███ ██████████ ██ ██████ ████ █████ ██████ ██ █ ██ ███ ███
          ████ █████ █████████ ███ █ ████ ██ ████ ████ ██ ████ ████████ █████
        </div>
        <div className="template__self-promo">
          Anithon is the best site to keep track of all of your favorite anime!
          Or manga, shows, and movies! Whatever you decide, it will be here.
        </div>
        <div className="template__share">
          <ShareBox />
        </div>
        <div className="template__extra--skeleton">
          <p>
            <b>Japanese:</b>
            {" ███████████████"}
          </p>
          <p>
            <b>Synonyms:</b>
            {" ███████████████"}
          </p>
          <p>
            <b>Aired:</b>
            {" ███████████████"}
          </p>
          <p>
            <b>Duration:</b>
            {" ███████████████"}
          </p>
          <p>
            <b>Status:</b>
            {" ███████████████"}
          </p>
          <p>
            <b>MAL Score:</b>
            {" ███████████████"}
          </p>
          <p>
            <b>Genres:</b>
            {" ███████████████"}
          </p>
          <p>
            <b>Studios:</b>
            {" ███████████████"}
          </p>
          <p>
            <b>Producers:</b>
            {" ███████████████"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoTemplateSkeleton;
