import React from "react";
import { connect } from "react-redux";
import {
  actions
} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {dispatch(actions.addPostActionCreator(newPostText));}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
