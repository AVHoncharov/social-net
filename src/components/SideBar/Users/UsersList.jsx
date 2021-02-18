import React from "react";
import style from "./UsersList.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";

const UsersList = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChanged,
  ...props
}) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  let pagesList = [];
  for (let i = 1; i < pagesCount; i++) {
    pagesList.push(i);
  }

  return (
    <div className={style.usersList}>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalCount={totalCount}
        pageSize={pageSize}
      />
      <div>
        {props.users.map((user) => {
          return <User
            follow={props.follow}
            unfollow={props.unfollow}
            followingInProgress={props.followingInProgress}
            user={user}
            key={user.id}
          />;
        })}
      </div>
    </div>
  );
};

export default UsersList;
