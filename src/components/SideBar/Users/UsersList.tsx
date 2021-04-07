import React, { FC } from "react";
import style from "./UsersList.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";
import { UserType } from "../../../types/types";
import UsersSearchForm from "./UsersSearchForm";
import { UsersFilterType } from "../../../redux/users-reducer";

type UsersListType = {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChanged: (pageNumber: number) => void;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  onFilterChanged: (filter: UsersFilterType) => void
};
const UsersList: FC<UsersListType> = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  let pagesList = [];
  for (let i = 1; i < pagesCount; i++) {
    pagesList.push(i);
  }
  return (
    <div className={style.usersList}>
      <UsersSearchForm onFilterChanged={props.onFilterChanged}/>

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
              follow={props.follow}
              unfollow={props.unfollow}
              followingInProgress={props.followingInProgress}
              user={user}
              key={user.id}
            />
          );
        })}
      </div>
    </div>
  );
};



export default UsersList;
