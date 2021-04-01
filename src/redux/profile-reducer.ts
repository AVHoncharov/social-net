import { FormAction, stopSubmit } from "redux-form";
import { profileApi } from "../api/profile-api";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionTypes } from "./redux-store";

let initialState = {
  posts: [
    { id: 1, message: "How are you?", likeCount: 5 },
    { id: 2, message: "Follow the whire rabbit", likeCount: 10 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: ''
};

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case "SN/PROFILE/ADD-POST": {
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, message: action.newPostText, likeCount: 0 },
        ],
      };
    }

    case "SN/PROFILE/SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }

    case "SN/PROFILE/SET_STATUS": {
      return { ...state, status: action.status };
    }

    case "SN/PROFILE/DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id != action.postId),
      };
    }

    case "SN/PROFILE/SAVE_PHOTO_SUCCESS": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (newPostText: string) => ({
    type: "SN/PROFILE/ADD-POST",
    newPostText,
  } as const),
  setUserProfile: (profile: ProfileType) => ({ type: "SN/PROFILE/SET_USER_PROFILE", profile } as const),
  setStatus: (status: string) => ({ type: "SN/PROFILE/SET_STATUS", status } as const),
  savePhotoSuccess: (photos: PhotosType) => ({ type: "SN/PROFILE/SAVE_PHOTO_SUCCESS", photos } as const),
  deletePost: (postId: number) => ({ type: "SN/PROFILE/DELETE_POST", postId } as const)
}

export const getProfile = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileApi.getProfile(userId);
  dispatch(actions.setUserProfile(data));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let response = await profileApi.getStatus(userId);
  dispatch(actions.setStatus(response.data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const response = await profileApi.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(actions.setStatus(status));
  }
};

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const data = await profileApi.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const data = await profileApi.saveProfile(profile);
  if (data.resultCode === 0) {
    if(userId !== null) {
      dispatch(getProfile(userId));
    } else {
      throw new Error('user Id can not be null');
    }
  } else {
    let message =
      data.messages.length > 0
        ? data.messages[0]
        : "Some error";

    dispatch(stopSubmit("edit-profile-contacs-info", { _error: message }));
    return Promise.reject(message);
  }
};

export default profileReducer;

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionTypes | FormAction>;
