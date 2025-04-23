import React from "react";
import AnimeCover from "../../../assets/Banner Piece 14.jpg"

const AnimeRankBar = () => {
  return (
    <>
      <div className="anime__rank-bar">
        <div className="anime__rank">
          <figure className="rank__img--wrapper">
            <img src={AnimeCover} alt="" className="rank__img" />
            <div className="rank__img--cover"></div>
            <div className="rank__number">1</div>
          </figure>
        </div>
        <div className="rank__title">Dragon Ball Z</div>
      </div>
    </>
  );
};

export default AnimeRankBar;
