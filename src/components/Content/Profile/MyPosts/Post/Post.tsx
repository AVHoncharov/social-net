import React from "react";
import style from "./Post.module.css";

type PostType = {
  message: string,
  likeCount: number,
  id: number
}
const Post: React.FC<PostType> = (props) => {
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
