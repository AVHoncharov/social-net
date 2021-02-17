import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
} from "../../../redux/users-reducer";
import UsersList from "./UsersList";
import Preloader from "../../common/Preloader/Preloader";
import { getUsers } from "./../../../redux/users-reducer";
import { withAuthRedirect } from "../../../hoc/WithAuthRedirect";
import { compose } from "redux";

class UserListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
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
          followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
  })
)(UserListContainer);

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
