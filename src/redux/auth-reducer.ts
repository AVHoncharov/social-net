import { FormAction, stopSubmit } from "redux-form";
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from "../api/api";
import { authApi } from "../api/auth-api";
import { securityAPI } from "../api/security-api";
import { BaseThunkType, InferActionTypes } from "./redux-store";

let initialState: AuthInitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null,
};

type AuthInitialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  isFetching: boolean;
  captchaUrl: string | null;
};

type ActionTypes = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes | FormAction>;

const authReducer = (
  state = initialState,
  action: ActionTypes
): AuthInitialStateType => {
  switch (action.type) {
    case "SN/AUTH/SET_USER_DATA": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "SN/AUTH/GET_CAPTCHA_URL_SUCCESS": {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) => ({
    type: "SN/AUTH/SET_USER_DATA",
    payload: { userId, email, login, isAuth },
  } as const),
  getCaptchaUrlSuccess: (
    captchaUrl: string
  ) => ({
    type: "SN/AUTH/GET_CAPTCHA_URL_SUCCESS",
    payload: { captchaUrl },
  } as const)
}



export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let data = await authApi.authMe();

  if (data.resultCode === ResultCodeEnum.Success) {
    let { id, email, login } = data.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): ThunkType => async (dispatch) => {
  let loginData = await authApi.login(email, password, rememberMe, captcha);
  if (loginData.resultCode === ResultCodeEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    let message =
      loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  let data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;

  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = ():ThunkType => async (dispatch) => {
  let response = await authApi.logout();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
