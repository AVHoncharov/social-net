import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={style.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>New Post</button>
        </div>
        <div className={style.posts}>
          <Post message="How are you?" likeCount={5} />
          <Post message="Follow the white rabbit" likeCount={10} />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
