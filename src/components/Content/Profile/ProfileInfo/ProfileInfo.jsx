import React from "react";
import style from "./ProfileInfo.module.css";
import userDefaultAvatarSmall from "../../../../assets/images/avatar-default-small.png";


const ProfileInfo = (props) => {
  return (
    <div className={style.profileInfo}>
      <div>
        <img src={userDefaultAvatarSmall} alt=""></img>
      </div>
      <div className = {style.descriptionBlock}>
          ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
