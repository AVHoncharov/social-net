import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";
import { ProfileType } from "../../../types/types";

type ProfilePropsType = {
  profile: ProfileType,
  isOwner: boolean,
  status: string,
  updateStatus: (status: string) => void
  savePhoto: (file:File) => void
  saveProfile: (profile: ProfileType) => Promise<any>

}
const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo profile={props.profile} isOwner ={props.isOwner} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
      <MyPostsContainer
      //    store={props.store}
      />
    </div>
  );
};

export default Profile;
