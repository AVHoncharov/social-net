import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  maxLengthCreator,
  required,
} from "./../../../../utils/validators/validators";
import { Element } from "./../../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {
  let postsElements = props.profilePage.posts.map((p) => (
    <Post id={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  let onAddNewPost = (data) => {
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
});

const maxLength50 = maxLengthCreator(50);
const Textarea = Element("textarea");

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[maxLength50]}
        name="newPostText"
        placeholder="Enter you new post"
      />
      <div>
        <button>New Post</button>
      </div>
    </form>
  );
};

const ReduxAddNewPostForm = reduxForm({ form: "newPostTextForm" })(
  AddNewPostForm
);

export default MyPosts;
