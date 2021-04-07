import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, actions, UsersFilterType } from "../../../redux/users-reducer";
import UsersList from "./UsersList";
import Preloader from "../../common/Preloader/Preloader";
import { requestUsers } from "../../../redux/users-reducer";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter
} from "../../../redux/users-selectors";
import { UserType } from "../../../types/types";
import { AppStateType } from "../../../redux/redux-store";

type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalCount: number;
  followingInProgress: Array<number>;
  users: Array<UserType>;
  filter: UsersFilterType
};

type MapDispatchPropsType = {
  requestUsers: (currentPage: number, pageSize: number, filter: UsersFilterType) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  setCurrentPage: (pageNumber: number) => void
};

type OwnPropsType = {
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UserListContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize, filter } = this.props;
    this.props.requestUsers(currentPage, pageSize, filter);
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize, filter } = this.props;
    this.props.requestUsers(pageNumber, pageSize, filter);
    this.props.setCurrentPage(pageNumber);
  };

  onFilterChanged = (filter: UsersFilterType)=> {
    const { pageSize } = this.props;
    this.props.requestUsers(1, pageSize,filter);
    this.props.setCurrentPage(1);
  }

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
          onFilterChanged={this.onFilterChanged}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state)
  };
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      requestUsers,
      setCurrentPage: actions.setCurrentPage
    }
  )
)(UserListContainer);
