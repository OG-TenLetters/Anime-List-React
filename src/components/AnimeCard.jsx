import React from "react";
import { useNavigate } from "react-router-dom";

const AnimeCard = ({ animeId, animeImg, animeTitle, animeTitleEnglish, animeTitleJapanese, animeSynopsis }) => {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(`/home/info/${animeId}`)} className="anime-card">
        <figure className="anime-card__img--wrapper">
          <img src={animeImg} alt="" className="anime-card__img" />
          <div className="anime-card__cover"></div>
          <div className="anime-card__desc">
            {animeSynopsis}
          </div>
        </figure>
        <div className="anime-card__title">{animeTitle || animeTitleEnglish || animeTitleJapanese}</div>
      </div>
    </>
  );
};

export default AnimeCard;