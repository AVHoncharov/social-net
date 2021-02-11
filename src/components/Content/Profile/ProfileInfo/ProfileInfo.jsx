import React from "react";
import style from "./ProfileInfo.module.css";
import userDefaultAvatarSmall from "../../../../assets/images/avatar-default-small.png";


const ProfileInfo = (props) => {

  return (
    <div className={style.profileInfo}>
      <div className={style.profileAvatarBlock}>
        <img src={props.profile.photos.large || userDefaultAvatarSmall} alt="" className={style.profielAvatarImg}></img>
      </div>
      <div className={style.profileDesciptionBlock}>
        <div>
            <span>{props.profile.aboutMe}</span>
        </div>
        <div>
                {Object.entries(props.profile.contacts).map((arr) => {
                    return (
                        <p>
                            <b>{arr[0]}:</b> {arr[1]} 
                        </p>
                    )
                })}
        </div>
      </div>
        <div className={style.profileCommonInfoBlock}>
            <div>
                <span style={{padding: '25px'}}><b>{props.profile.fullName.toUpperCase()}</b></span>
            </div>
        </div>
    </div>
  );
};

export default ProfileInfo;
