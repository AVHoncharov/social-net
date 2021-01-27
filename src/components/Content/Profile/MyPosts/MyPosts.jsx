import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = ()=> {
    props.dispatch({type:'ADD-POST'});
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', text: text});
    // props.updateNewPostText('');

  }

  return (
    <div className={style.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea ref ={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ addPost }>New Post</button>
        </div>
        <div className={style.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
