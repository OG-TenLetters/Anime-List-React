import React from "react";
import Post from "./subcomponent/Post";

const PostBox = () => {
  return (
    <>
      <div className="post-box">
        <h1 className="post-box__title">Trending Posts</h1>
        <div className="post-box__posts">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <button className="post-box__btn clickable">Read More...</button>
        </div>
      </div>
    </>
  );
};

export default PostBox;
