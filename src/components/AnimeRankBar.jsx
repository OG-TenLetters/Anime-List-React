import React from "react";
import { useNavigate } from "react-router-dom";

const AnimeRankBar = ({ index, rankImg, rankTitle, id, rankTitleEnglish, rankTitleJapanese }) => {
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
      <div onClick={() => navToTop(`/home/info/${id}`)} className="anime__rank-bar">
        <div className="anime__rank">
          <figure className="rank__img--wrapper">
            <img src={rankImg} alt="" className="rank__img" />
            <div className="rank__img--cover"></div>
            <div className="rank__number">{index + 1}</div>
          </figure>
        </div>
        <div className="rank__title"><div className="rank__title--text">{rankTitle || rankTitleEnglish || rankTitleJapanese}</div></div>
      </div>
    </>
  );
};

export default AnimeRankBar;