import React from "react";
import { connect } from "react-redux";
import {
  actions
} from "../../../../redux/profile-reducer";
import { AppStateType } from "../../../../redux/redux-store";
import MyPostMemorized, { DispatchPropsType, MapPropsType } from "./MyPosts";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    } 
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPostMemorized);

export default MyPostsContainer;
