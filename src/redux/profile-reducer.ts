import { stopSubmit } from "redux-form";
import { profileApi } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


let initialState = {
  posts: [
    { id: 1, message: "How are you?", likeCount: 5 },
    { id: 2, message: "Follow the whire rabbit", likeCount: 10 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: ''
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, message: action.newPostText, likeCount: 0 },
        ],
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id != action.postId),
      };
    }

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};

type AddPostActionCreatorActiontype = {
  type: typeof ADD_POST,
  newPostText: string
}

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActiontype => ({
  type: ADD_POST,
  newPostText,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}
const setUserProfile = (profile: ProfileType):SetUserProfileActionType  => ({ type: SET_USER_PROFILE, profile });

type SetStatusActionType = {
  type: typeof SET_STATUS,
  status: string
}
const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotosType
}
const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos });

type DeletePostActionType = {
  type: typeof DELETE_POST,
  postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });

export const getProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileApi.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileApi.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileApi.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const response = await profileApi.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getProfile(userId));
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    let errorField = message.match(/(?<=>)\w+/)[0].toLowerCase() + "";

    dispatch(stopSubmit("edit-profile-contacs-info", { _error: message }));
    return Promise.reject(message);
  }
};

export default profileReducer;
