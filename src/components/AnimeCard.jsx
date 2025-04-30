import React from "react";
import { useNavigate } from "react-router-dom";

const AnimeCard = ({ id, animeImg, animeTitle, animeTitleEnglish, animeTitleJapanese, animeSynopsis }) => {
  const navigate = useNavigate();

  const navToTop = (path) => {
    navigate(path)
    window.scrollTo ({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <div onClick={() => navToTop(`/home/info/${id}`)} className="anime-card">
        <figure className="anime-card__img--wrapper">
          <img src={animeImg} alt="" className="anime-card__img" />
          <div className="anime-card__cover"></div>
          <div className="anime-card__desc">
            {animeSynopsis}
          </div>
        </figure>
        <div className="anime-card__title--wrapper">
          <div className="anime-card__title">{animeTitle || animeTitleEnglish || animeTitleJapanese}</div>
        </div>
      </div>
    </>
  );
};

export default AnimeCard;