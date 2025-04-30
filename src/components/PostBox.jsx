import React from "react";
import Post from "./Post";

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
          <button className="post-box__btn nope">Read More...</button>
        </div>
      </div>
    </>
  );
};

export default PostBox;
