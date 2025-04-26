import React from "react";
import AnimeCover from "../assets/Banner Piece 14.jpg"
import { useNavigate, useParams } from "react-router-dom";

const AnimeRankBar = ({index, rankImg, rankTitle, rankTitleEnglish, rankTitleJapanese}) => {
  const navigate = useNavigate()
  const { mal_id } = useParams()
  return (
    <>
      <div onClick={() => navigate(`./info/${mal_id}`)} className="anime__rank-bar">
        <div className="anime__rank">
          <figure className="rank__img--wrapper">
            <img src={rankImg} alt="" className="rank__img" />
            <div className="rank__img--cover"></div>
            <div className="rank__number">{index + 1}</div>
          </figure>
        </div>
        <div className="rank__title"><div className="rank__title--text">{rankTitle || rankTitleEnglish ||rankTitleJapanese }</div></div>
      </div>
    </>
  );
};

export default AnimeRankBar;
