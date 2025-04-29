import React from "react";
import Skeleton from "../assets/Skeleton.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const AnimeCardSkeleton = () => {
  return (
    <>
      <div className="anime-card__skeleton">
        <figure className="anime-card__skeleton--img-wrapper">
          <img className="anime-card__skeleton--img" src={Skeleton} alt="" />
          <div className="anime-card__skeleton--cover"></div>
        </figure>
        <div className="anime-card__skeleton--title--wrapper">
          <div className="anime-card__skeleton--title"><FontAwesomeIcon icon={faSpinner}/></div>
        </div>
      </div>
    </>
  );
};

export default AnimeCardSkeleton;
