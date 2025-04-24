import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Skeleton from "../assets/Skeleton.jpg"

const AnimeRankSkeleton = () => {
  return (
    <>
    <div className="anime__rank-bar--skeleton">
      <div className="anime__rank--skeleton">
        <figure className="rank__img--wrapper--skeleton">
          <img src={Skeleton} alt="" className="rank__img--skeleton" />
          <div className="rank__img--cover--skeleton"></div>
          <div className="rank__number--skeleton"><FontAwesomeIcon className='skeleton__spinner' icon={faSpinner}/></div>
        </figure>
      </div>
      <div className="rank__title--skeleton">Loading...</div>
    </div>
  </>
  )
}

export default AnimeRankSkeleton