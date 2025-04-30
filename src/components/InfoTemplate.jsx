import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import ShareBox from "./ShareBox";
import { useNavigate } from "react-router-dom";

const InfoTemplate = ({ showContactModal, anime }) => {
  const navigate = useNavigate();
  return (
    
    <div className={`template__content ${showContactModal && "hide"} `}>
      <img
        className="template__cover-bg"
        src={anime?.images?.webp?.image_url}
        alt=""
      />
      <button onClick={() => navigate("/home")} className="back__btn">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      <figure className="template__img--wrapper">
        <div className="template__g-rating">18+</div>
        <img
          src={anime?.images?.webp?.large_image_url}
          alt=""
          className="template__img"
        />
      </figure>
      <div className="template__title">
        <h2 className="template__title-text">
          {anime?.title_english || anime?.title || anime?.title_japan}
        </h2>
        <div className="template__glass"></div>
      </div>
      <button className="add-to-list--btn nope">
        <FontAwesomeIcon icon={faPlus} />
        Add To List
      </button>
      <div className="template__details">
        <div className="template__summary">{anime?.synopsis}</div>
        <div className="template__self-promo">
          Anithon is the best site to keep track of all of your favorite anime!
          Or manga, shows, and movies! Whatever you decide, it will be here.
        </div>
        <div className="template__share">
          <ShareBox />
        </div>
        <div className="template__extra">
          <p>
            <b>Japanese:</b> {anime?.title_japanese || "Currently Not Found"}
          </p>
          <p>
            <b>Synonyms:</b>{" "}
            {anime?.title_synonyms === ""
              ? anime.title_synonyms
              : "Currently Not Found"}
          </p>
          <p>
            <b>Aired:</b> {anime?.aired?.string || "Currently Not Found"}
          </p>
          <p>
            <b>Duration:</b> {anime?.duration || "Currently Not Found"}
          </p>
          <p>
            <b>Status:</b> {anime?.status || "Currently Not Found"}
          </p>
          <p>
            <b>MAL Score:</b> {anime?.score || "Currently Not Found"}
          </p>
          <p>
            <b>Genres:</b>{" "}
            {anime?.genres?.length > 0
              ? anime.genres.map((genre) => genre.name).join(", ")
              : "Currently Not Found"}
          </p>
          <p>
            <b>Studios:</b>{" "}
            {anime?.studios?.length > 0
              ? anime.studios.map((studio) => studio.name).join(", ")
              : "Currently Not Found"}
          </p>
          <p>
            <b>Producers:</b>{" "}
            {anime?.producers?.length > 0
              ? anime.producers.map((producer) => producer.name).join(", ")
              : "Currently Not Found"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoTemplate;
