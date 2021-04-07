import React, { FC, useEffect } from "react";
import style from "./UsersList.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";
import UsersSearchForm from "./UsersSearchForm";
import {
  actions,
  requestUsers,
  unfollow,
  UsersFilterType,
} from "../../../redux/users-reducer";
import { follow } from "./../../../redux/users-reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getUsersFilter,
  getUsers,
  getFollowingInProgress,
} from "../../../redux/users-selectors";
import { useHistory } from "react-router";
import * as queryString from "querystring";
import { parse } from "node:path";

type QueryParamTypes = {
  term?: string;
  friend?: string;
  page?: string;
};

export const UsersList: FC = () => {
  const users = useSelector(getUsers);
  const totalCount = useSelector(getTotalUsersCount);
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamTypes;
    let actualPage = currentPage;
    let actualFilter = filter;

    if (!!parsed.page) actualPage = Number(parsed.page);
    if (!!parsed.term)
      actualFilter = { ...actualFilter, term: parsed.term as string };
    if (!!parsed.friend)
      actualFilter = {
        ...actualFilter,
        friend:
          parsed.friend === "null"
            ? null
            : parsed.friend === "true"
            ? true
            : false,
      };

    dispatch(requestUsers(actualPage, pageSize, actualFilter));
  }, []);

  useEffect(() => {
    const query: QueryParamTypes = {};
    if (!!filter.term) query.term = filter.term;
    if (filter.friend !== null) query.friend = String(filter.friend);
    if (currentPage !== 1) query.page = String(currentPage);

    history.push({
      pathname: "/users",
      search: queryString.stringify(query)  //`?term=${filter.term}&friend=${filter.friend}$page=${currentPage}`,
    });
  }, [filter, currentPage]);

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
    dispatch(actions.setCurrentPage(pageNumber));
  };

  const followUser = (userId: number) => {
    dispatch(follow(userId));
  };
  const unfollowUser = (userId: number) => {
    dispatch(unfollow(userId));
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
