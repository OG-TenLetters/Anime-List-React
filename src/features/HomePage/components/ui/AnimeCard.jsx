import React from "react";
import AnimeCover from "../../../../assets/Banner Piece 16.jpg"

const AnimeCard = () => {
  
  return (
    <>
      <div className="anime-card">
        <figure className="anime-card__img--wrapper">
          <img src={AnimeCover} alt="" className="anime-card__img" />
          <div className="anime-card__cover"></div>
          <div className="anime-card__desc">
            for you wildests dreams. Bary B Benson was at Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Delectus nam esse expedita.
            Aliquid laborum reiciendis rem, esse sed soluta minima accusantium
            reprehenderit iusto eius ex, nulla id consequatur ipsum iste!
          </div>
        </figure>
        <div className="anime-card__title">DragonBall</div>
      </div>
    </>
  );
};

export default AnimeCard;
