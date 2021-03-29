import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { usersApi } from "../api/api";
import { followApi } from "../api/api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/object-helpers";
import { AppStateType } from "./redux-store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 25,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of usersId
};

export type InitialStateType = typeof initialState;

const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
        //  state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    }

    case SET_USERS: {
      return { ...state, users: action.users };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case TOOGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOOGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

type ActionTypes =
  | FollowSuccessActionType
  | UnfollowSuccessActionType
  | SetUsersActionType
  | SetCurrentPageActionCreator
  | SetTotalUsersCountActionType
  | ToogleIsFetchingActioType
  | ToogleIsFollowingProgressActionType;

type FollowSuccessActionType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followSuccess = (userId: number): FollowSuccessActionType => ({
  type: FOLLOW,
  userId,
});

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({
  type: SET_USERS,
  users,
});

type SetCurrentPageActionCreator = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (
  currentPage: number
): SetCurrentPageActionCreator => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalCount: number;
};
export const setTotalUsersCount = (
  totalCount: number
): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});

type ToogleIsFetchingActioType = {
  type: typeof TOOGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toogleIsFetching = (
  isFetching: boolean
): ToogleIsFetchingActioType => ({
  type: TOOGLE_IS_FETCHING,
  isFetching,
});

type ToogleIsFollowingProgressActionType = {
  type: typeof TOOGLE_IS_FOLLOWING_PROGRESS;
  followingInProgress: boolean;
  userId: number;
};
export const toogleIsFollowingProgress = (
  followingInProgress: boolean,
  userId: number
): ToogleIsFollowingProgressActionType => ({
  type: TOOGLE_IS_FOLLOWING_PROGRESS,
  followingInProgress,
  userId,
});

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(toogleIsFetching(true));

    let data = await usersApi.getUsers(page, pageSize);
    dispatch(toogleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (
    userId: number
  ) => FollowSuccessActionType | UnfollowSuccessActionType
) => {
  dispatch(toogleIsFollowingProgress(true, userId));

  let response = await apiMethod(userId);

  if (response.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toogleIsFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    let apiMethod = followApi.follow.bind(usersApi);

    _followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
  };
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    let apiMethod = followApi.unfollow.bind(usersApi);

    _followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
  };
};

export default usersReducer;
