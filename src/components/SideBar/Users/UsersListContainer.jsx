import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../../redux/users-reducer";
import UsersList from "./UsersList";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId)); 
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (page) => {
        dispatch(setCurrentPageAC(page))
    },
    setTotalUsersCount:(totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
