import axios, { AxiosResponse } from "axios";
import { ProfileType, UserType } from "../types/types";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "api-key": "642dd878-8a02-409c-874f-eb31899a6794",
  },
});

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10,
}

export type APIResponseType<D = {},RC = ResultCodeEnum> = {
  data: D,
  messages: Array<string>,
  resultCode: RC
}

export type GetItemsType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};
