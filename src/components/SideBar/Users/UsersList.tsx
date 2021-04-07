import React, { FC, useEffect } from "react";
import style from "./UsersList.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";
import UsersSearchForm from "./UsersSearchForm";
import { actions, requestUsers, unfollow, UsersFilterType } from "../../../redux/users-reducer";
import { follow } from './../../../redux/users-reducer';
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getUsersFilter,
  getUsers,
  getFollowingInProgress,
} from "../../../redux/users-selectors";


export const UsersList: FC = () => {
  const users = useSelector(getUsers);
  const totalCount = useSelector(getTotalUsersCount);
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);
  
  const dispatch = useDispatch();

  useEffect(()=> {
   dispatch(requestUsers(currentPage, pageSize, filter));
  }, [])

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
    dispatch(actions.setCurrentPage(pageNumber));
  };

  const followUser =  (userId: number) => {
    dispatch(follow(userId))
  };
  const unfollowUser =  (userId: number) => {
    dispatch(unfollow(userId))
  };

  const onFilterChanged = (filter: UsersFilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
    dispatch(actions.setCurrentPage(1));
  };

  let pagesCount = Math.ceil(totalCount / pageSize);
  let pagesList = [];
  for (let i = 1; i < pagesCount; i++) {
    pagesList.push(i);
  }

  return (
    <div className={style.usersList}>
      <UsersSearchForm onFilterChanged={onFilterChanged} />

      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalCount={totalCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((user) => {
          return (
            <User
              follow={followUser}
              unfollow={unfollowUser}
              followingInProgress={followingInProgress}
              user={user}
              key={user.id}
            />
          );
        })}
      </div>
    </div>
  );
};
