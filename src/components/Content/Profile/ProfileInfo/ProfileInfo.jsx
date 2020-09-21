import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={style.profileInfo}>
      <div>
        <img src="https://img.favpng.com/20/5/24/social-media-computer-icons-avatar-user-internet-png-favpng-DwdFSAXdR58nGmLe4y67jEej0.jpg"></img>
      </div>
      <div className = {style.descriptionBlock}>
          ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
