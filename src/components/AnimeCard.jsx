import React from "react";
import AnimeCover from "../assets/Banner Piece 16.jpg"
import { useNavigate } from "react-router-dom";
const AnimeCard = ({animeImg, animeTitle, animeTitleEnglish, animeTitleJapanese, animeSynopsis  }) => {
  const navigate = useNavigate()
  // console.log(animeImg)
  return (
    <>
        <div onClick={() => navigate(`./info/1`)} className="anime-card">
          <figure className="anime-card__img--wrapper">
            <img src={animeImg} alt="" className="anime-card__img" />
            <div className="anime-card__cover"></div>
            <div className="anime-card__desc">
              {animeSynopsis}
            </div>
          </figure>
          <div className="anime-card__title">{ animeTitle || animeTitleEnglish || animeTitleJapanese }</div>
        </div>
    </>
  );
};

export default AnimeCard;
