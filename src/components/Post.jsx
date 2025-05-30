import React from 'react'
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileImg from "../assets/Anime-Profile-Example.webp";


const Post = () => {
  return (
    <>
    <div className="post-box__post">
  <div className="post-box__post--stats">
    <div className="post-box__post--stat-1">
      <div className="post-box__post--tag">#General</div>
      <div className="post-box__post--time">8 hours ago</div>
    </div>
    <div className="post-box__post--stat-2 nope">
      <FontAwesomeIcon icon={faComment} />
      <div className="post-box__post--chat-tally">225</div>
    </div>
  </div>
  <h2 className="post-box__post--title">Generic Title</h2>
  <p className="post-box__post--para">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Blanditiis ipsam mollitia quibusdam ullam necessitatibus
    suscipit in soluta impedit sunt facilis fuga officia dicta
    illo omnis dignissimos, magnam praesentium dolorem
    expedita doloribus delectus inventore hic? Pariatur nulla
    enim facilis dolorem fugit?
  </p>
  <div className="profile__info">
    <figure className="profile__img--wrapper">
      <img className="profile__img" src={ProfileImg} alt="" />
    </figure>
    <div className="profile__username">
      @DevinciCardiac49
    </div>
  </div>
</div>
</>
  )
}

export default Post