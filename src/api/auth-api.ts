import { instance, ResultCodeEnum, ResultCodeForCaptchaEnum } from "./api";
import { APIResponseType} from "./api"


type AuthMeResponseDataType = {
      id: number;
      email: string;
      login: string;
  };
  
  type LoginMeResponseDataType = {
      userId: number;
  };
  

export const authApi = {
     authMe() {
      return instance.get<APIResponseType<AuthMeResponseDataType>>(`auth/me`).then((res) => res.data);
    },
  
    login(
      email: string,
      password: string,
      rememberMe: boolean = false,
      captcha: null | string
    ) {
      return instance
        .post<APIResponseType<LoginMeResponseDataType, ResultCodeEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {
          email,
          password,
          rememberMe,
          captcha,
        })
        .then((res) => res.data);
    },
  
    logout() {
      return instance.delete(`auth/login`);
    },
  };
