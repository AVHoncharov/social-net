import React from "react";
import style from "./UsersList.module.css";

const UsersList = (props) => {
    let users = [
            {
              id: 1,
              photoUrl: 'https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png',
              followed: true,
              fullName: "Dmitriy",
              status: "I am the Boss",
              location: { city: "Minsk", country: "Belarus" },
            },
            {
              id: 2,
              photoUrl: 'https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png',
              followed: false,
              fullName: "Alex",
              status: "Bu bu kaka",
              location: { city: "Moskow", country: "Russia" },
            },
            {
              id: 3,
              photoUrl: 'https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png',
              followed: true,
              fullName: "Andrew",
              status: "I am the status",
              location: { city: "Pinsk", country: "Belarus" },
            },
            {
              id: 4,
              photoUrl: 'https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png',
              followed: true,
              fullName: "Petr",
              status: "The best status in the World",
              location: { city: "New York", country: "USA" },
            },
           ];
    if(props.users.length === 0 ){
        props.setUsers(users);
    }
    
  return (
    <div className={style.usersList}>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} className={style.userPhoto}></img>
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
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
