import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      {props.message}
      <div>
        <span className={style.like}>like - {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
