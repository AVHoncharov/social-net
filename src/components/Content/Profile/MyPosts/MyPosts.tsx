import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { AddPostFromValueType, ReduxAddNewPostForm } from "./AddNewPostForm";
import { PostType } from "../../../../types/types";

export type MapPropsType = {
  posts: Array<PostType>,
}

export type DispatchPropsType = {
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  let onAddNewPost = (data: AddPostFromValueType) => {
    props.addPost(data.newPostText);
  };

  return (
    <div className={style.postsBlock}>
      <div>
        <h3>My posts</h3>
        <ReduxAddNewPostForm onSubmit={onAddNewPost} />
        <div className={style.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

const MyPostMemorized = React.memo(MyPosts);

export default MyPostMemorized;
