import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map((p) => (
    <Post id={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={style.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.profilePage.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>New Post</button>
        </div>
        <div className={style.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
