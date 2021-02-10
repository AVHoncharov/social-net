import React from "react";
import style from "./UsersList.module.css";
import * as axios from "axios";
import userDefaultAvatarSmall from "../../../assets/images/avatar-default-small.png";

class UsersList extends React.Component {
  componentDidMount() {
      debugger;
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    debugger;
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalCount / this.props.pageSize
    );
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
                  this.props.currentPage === page ? style.selectedPage : style.defaultPage
                }
                onClick={(e)=> this.onPageChanged(page)}
              >
                {page}
              </span>
            );
          })}
        </div>
        {this.props.users.map((user) => (
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
                      this.props.unfollow(user.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
  }
}

export default UsersList;
