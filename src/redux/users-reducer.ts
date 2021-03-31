import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { ResultCode, usersApi } from "../api/api";
import { followApi } from "../api/api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/object-helpers";
import { AppStateType, InferActionTypes } from "./redux-store";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 25,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of usersId
};

export type InitialStateType = typeof initialState;

type ActionTypes = InferActionTypes<typeof actions>;


const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "FOLLOW": {
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

    case "UNFOLLOW": {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    }

    case "SET_USERS": {
      return { ...state, users: action.users };
    }

    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "SET_TOTAL_USERS_COUNT": {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case "TOOGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    case "TOOGLE_IS_FOLLOWING_PROGRESS": {
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

export const actions = {
  followSuccess: (userId: number) => ({
    type: 'FOLLOW',
    userId,
  } as const),

  unfollowSuccess: (userId: number) => ({
    type: 'UNFOLLOW',
    userId,
  } as const),

  setUsers: (users: Array<UserType>) => ({
    type: 'SET_USERS',
    users,
  } as const),

  setCurrentPage: (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage,
  } as const),

  setTotalUsersCount: (totalCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    totalCount,
  } as const),

  toogleIsFetching: (isFetching: boolean) => ({
    type: 'TOOGLE_IS_FETCHING',
    isFetching,
  } as const),

  toogleIsFollowingProgress: (
    followingInProgress: boolean,
    userId: number
  ) => ({
    type: 'TOOGLE_IS_FOLLOWING_PROGRESS',
    followingInProgress,
    userId,
  } as const),
};

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toogleIsFetching(true));

    let data = await usersApi.getUsers(page, pageSize);
    dispatch(actions.toogleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (
    userId: number
  ) => ActionTypes
) => {
  dispatch(actions.toogleIsFollowingProgress(true, userId));

  let response = await apiMethod(userId);

  if (response.resultCode == ResultCode.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toogleIsFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    let apiMethod = followApi.follow.bind(usersApi);

    _followUnfollowFlow(dispatch, userId, apiMethod, actions.followSuccess);
  };
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    let apiMethod = followApi.unfollow.bind(usersApi);

    _followUnfollowFlow(dispatch, userId, apiMethod, actions.unfollowSuccess);
  };
};

export default usersReducer;
