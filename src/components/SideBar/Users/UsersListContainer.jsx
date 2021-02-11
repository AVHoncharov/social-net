import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
} from "../../../redux/users-reducer";
import UsersList from "./UsersList";
import * as axios from "axios";
import Preloader from "../../common/Preloader/Preloader";

class UserListContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleIsFetching(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleIsFetching(false);

        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <UsersList
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//       follow: (userId) => {
//         dispatch(followAC(userId));
//       },
//       unfollow: (userId) => {
//         dispatch(unfollowAC(userId));
//       },
//       setUsers: (users) => {
//         dispatch(setUsersAC(users));
//       },
//       setCurrentPage: (page) => {
//         dispatch(setCurrentPageAC(page));
//       },
//       setTotalUsersCount: (totalCount) => {
//         dispatch(setTotalUsersCountAC(totalCount));
//       },
//       toogleIsFetching:(isFetching) => {
//           dispatch(toogleIsFetching(isFetching));
//       }
//     };
//   };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
})(UserListContainer);
