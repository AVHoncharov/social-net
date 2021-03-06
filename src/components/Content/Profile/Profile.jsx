import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
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
