import { Dispatch } from "react";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { authApi, ResultCode, ResultCodeForCaptcha } from "../api/api";
import { securityAPI } from "../api/api";
import { InitialStateType } from "./dialogs-reducer";

const SET_USER_DATA = "social-net/auth.SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "social-net/auth.GET_CAPTCHA_URL_SUCCESS";

type AuthInitialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  isFetching: boolean;
  captchaUrl: string | null;
};

let initialState: AuthInitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null,
};

type ActionTypes = GetCaptchaUrlSuccessActionType | SetAuthUserDataActionType;

const authReducer = (
  state = initialState,
  action: ActionTypes
): AuthInitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
  };
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: {
    captchaUrl: string;
  };
};

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AuthInitialStateType, unknown, ActionTypes>;

export const getAuthUserData = () => async (dispatch: DispatchType) => {
  let response = await authApi.authMe();

  if (response.resultCode === ResultCode.Success) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
) => async (dispatch: any) => {
  let loginData = await authApi.login(email, password, rememberMe, captcha);
  if (loginData.resultCode === ResultCode.Success) {
    dispatch(getAuthUserData());
  } else {
    if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    let message =
      loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  let response = await authApi.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
