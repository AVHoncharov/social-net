import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={style.posts}>
      <div>
        My posts
        <div>New Post</div>
        <div>
          <Post message="How are you?" likeCount={5}/>
          <Post message="Follow the white rabbit" likeCount={10}/>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
