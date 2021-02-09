import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/profile-reducer";
import StoreContext from "../../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  //   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   let onPostChange = (text) => {
//     //props.updateNewPostText(text);
//     props.store.dispatch(updateNewPostActionCreator(text));
//   };

  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        let addPost = () => {
            store.dispatch(addPostActionCreator());
          };
        
          let onPostChange = (text) => {
            //props.updateNewPostText(text);
            store.dispatch(updateNewPostActionCreator(text));
          };
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
