import axios, { AxiosResponse } from "axios";
import { ProfileType } from "../types/types";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "api-key": "642dd878-8a02-409c-874f-eb31899a6794",
  },
});

export enum ResultCode {
  Success = 0,
  Error = 1
}

type AuthMeResponseType = {
  data: {
    id: number,
    email: string, 
    login: string
  },
  resultCode: number,
  messages: Array<string>
}

type LoginMeResponseType = {
  data: {
    userId: number,
  },
  resultCode: number,
  messages: Array<string>
}

export const authApi = {
  authMe() {
    return instance.get<AuthMeResponseType>(`auth/me`).then(res=> res.data);
  },

  login(email: string, password: string, rememberMe: boolean = false) {
    return instance.post<LoginMeResponseType>(`auth/login`, { email, password, rememberMe });
  },

  logout() {
    return instance.delete(`auth/login`);
  },
};

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const profileApi = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(statusText: string) {
    return instance.put(`profile/status`, { status: statusText });
  },

  saveProfile(profile: ProfileType){
    return instance.put(`profile`, profile);
  },

  savePhoto(photoFile: any) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
};

export const followApi = {
  follow(userId: number) {
    return instance
      .post(`follow/${userId}`, { posted_data: "" })
      .then((response) => response.data);
  },

  unfollow(userId: number) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

