import React from "react";
import style from "./UsersList.module.css";
import userDefaultAvatarSmall from "../../../assets/images/avatar-default-small.png";

const UsersList = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pagesList = [];
  for (let i = 1; i < pagesCount; i++) {
    pagesList.push(i);
  }

  return (
    <div className={style.usersList}>
      <div>
        {pagesList.map((page) => {
          return (
            <span
              key={page}
              className={
                props.currentPage === page
                  ? style.selectedPage
                  : style.defaultPage
              }
              onClick={(e) => props.onPageChanged(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img
                src={
                  user.photos.small != null
                    ? user.photos.small
                    : userDefaultAvatarSmall
                }
                className={style.userPhoto}
              ></img>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
