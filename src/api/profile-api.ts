import { PhotosType, ProfileType } from "../types/types";
import { instance, APIResponseType } from "./api";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileApi = {
    getProfile(userId: number) {
      return instance.get<ProfileType>(`profile/${userId}`).then(res=> res.data);
    },
  
    getStatus(userId: number) {
      return instance.get<string>(`profile/status/${userId}`);
    },
  
    updateStatus(statusText: string) {
      return instance.put<APIResponseType>(`profile/status`, { status: statusText });
    },
  
    saveProfile(profile: ProfileType) {
      return instance.put<APIResponseType>(`profile`, profile)
      .then(res=>res.data);
    },
  
    savePhoto(photoFile: any) {
      let formData = new FormData();
      formData.append("image", photoFile);
      return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(res=> res.data);
    },
  };