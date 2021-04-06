import React from "react";
import style from "./User.module.css";
import userDefaultAvatarSmall from "../../../../assets/images/avatar-default-small.png";
import { NavLink } from "react-router-dom";
import { UserType } from "../../../../types/types";

type PropsType = {
  user: UserType;
  followingInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

const User: React.FC<PropsType>  = ({ user, followingInProgress, unfollow, follow }) => {
  return (
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
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
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
  );
};

export default User;
