import { Dispatch } from "react";
import { APIResponseType, ResultCodeEnum } from "../api/api";
import { usersApi } from "../api/users-api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/object-helpers";
import { BaseThunkType, InferActionTypes } from "./redux-store";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 25,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of usersId
  filter: {
    term: '',
    friend: null as null | boolean
  }
};



const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "SN/USERS/FOLLOW": {
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

    case "SN/USERS/UNFOLLOW": {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    }

    case "SN/USERS/SET_USERS": {
      return { ...state, users: action.users };
    }

    case "SN/USERS/SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "SN/USERS/SET_TOTAL_USERS_COUNT": {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case "SN/USERS/TOOGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    case "SN/USERS/TOOGLE_IS_FOLLOWING_PROGRESS": {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    case 'SN/USERS/SET_FILTER': {
      return {...state, filter: {...action.payload.filter}}
    }
    default:
      return state;
  }
};

export const actions = {
  followSuccess: (userId: number) => ({
    type: 'SN/USERS/FOLLOW',
    userId,
  } as const),

  unfollowSuccess: (userId: number) => ({
    type: 'SN/USERS/UNFOLLOW',
    userId,
  } as const),

  setFilter: (filter: UsersFilterType) => ({
    type: 'SN/USERS/SET_FILTER',
    payload: {filter},
  } as const),

  setUsers: (users: Array<UserType>) => ({
    type: 'SN/USERS/SET_USERS',
    users,
  } as const),

  setCurrentPage: (currentPage: number) => ({
    type: 'SN/USERS/SET_CURRENT_PAGE',
    currentPage,
  } as const),

  setTotalUsersCount: (totalCount: number) => ({
    type: 'SN/USERS/SET_TOTAL_USERS_COUNT',
    totalCount,
  } as const),

  toogleIsFetching: (isFetching: boolean) => ({
    type: 'SN/USERS/TOOGLE_IS_FETCHING',
    isFetching,
  } as const),

  toogleIsFollowingProgress: (
    followingInProgress: boolean,
    userId: number
  ) => ({
    type: 'SN/USERS/TOOGLE_IS_FOLLOWING_PROGRESS',
    followingInProgress,
    userId,
  } as const),
};


export const requestUsers = (page: number, pageSize: number, filter: UsersFilterType): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toogleIsFetching(true));
    dispatch(actions.setFilter(filter));
    let data = await usersApi.getUsers(page, pageSize, filter.term, filter.friend);
    dispatch(actions.toogleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};

const _followUnfollowFlow = async (
  dispatch:  Dispatch<ActionTypes>,
  userId: number,
  apiMethod: (userId: number)=> Promise<APIResponseType>,
  actionCreator: (
    userId: number
  ) => ActionTypes
) => {
  dispatch(actions.toogleIsFollowingProgress(true, userId));

  let response = await apiMethod(userId);

  if (response.resultCode == ResultCodeEnum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toogleIsFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    let apiMethod = usersApi.follow;

    await _followUnfollowFlow(dispatch, userId, apiMethod, actions.followSuccess);
  };
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    let apiMethod = usersApi.unfollow;

    await _followUnfollowFlow(dispatch, userId, apiMethod, actions.unfollowSuccess);
  };
};

export default usersReducer;

type ThunkType =BaseThunkType<ActionTypes>;
export type UsersFilterType = typeof initialState.filter;
export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof actions>;

