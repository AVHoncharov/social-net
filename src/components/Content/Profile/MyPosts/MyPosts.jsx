import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "How are you?", likeCount: 5 },
    { id: 2, message: "Follow the whire rabbit", likeCount: 10 },
  ];

  let postsElements = posts.map((p) => (
    <Post id={p.id} message={p.message} likeCount={p.likeCount} />
  ));

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
        <div className={style.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
