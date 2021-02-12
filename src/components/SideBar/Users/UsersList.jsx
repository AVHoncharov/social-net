import React from "react";
import style from "./UsersList.module.css";
import userDefaultAvatarSmall from "../../../assets/images/avatar-default-small.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { followApi } from "../../../api/api";

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
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={
                    user.photos.small != null
                      ? user.photos.small
                      : userDefaultAvatarSmall
                  }
                  className={style.userPhoto}
                ></img>
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    followApi.unfollow(user.id).then((response) => {
                      if (response.resultCode == 0) {
                        props.unfollow(user.id);
                      }
                    });
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    followApi.follow(user.id).then((response) => {
                      if (response.resultCode == 0) {
                        props.follow(user.id);
                      }
                    });
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
