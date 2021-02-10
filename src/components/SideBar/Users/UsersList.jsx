import React from "react";
import style from "./UsersList.module.css";
import * as axios from "axios";
import userDefaultAvatarSmall from "../../../assets/images/avatar-default-small.png";

const UsersList = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios
              .get("https://social-network.samuraijs.com/api/1.0/users")
              .then((response) => {
                props.setUsers(response.data.items);
              });
        
            // props.setUsers(users);
          }
    };

  

  return (
    <div className={style.usersList}>
       <button onClick={getUsers}>get users</button>

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
