import React from "react";
import style from "./ProfileInfo.module.css";
import userDefaultAvatarSmall from "../../../../assets/images/avatar-default-small.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length)
      props.savePhoto(e.target.files[0])
  }
  return (
    <div className={style.profileInfo}>
      <div className={style.profileAvatarBlock}>
        <label for="input-avatar-profile-photo">
          <img
            src={props.profile.photos.large || userDefaultAvatarSmall}
            alt=""
            className={
              props.isOwner
                ? style.profielAvatarImg + " " + style.selfProfile
                : style.profielAvatarImg
            }
            title={props.isOwner && "Нажмите на фото для выбора нового"}
          ></img>
        </label>
        {props.isOwner && (
          <input
            id="input-avatar-profile-photo"
            type={"file"}
            className={style.inputAvatarPhotoTag}
            onChange={onMainPhotoSelected}
          />
        )}
      </div>
      <div className={style.profileDesciptionBlock}>
        <div>
          <span>{props.profile.aboutMe}</span>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
        <div>
          {Object.entries(props.profile.contacts).map((arr) => {
            return (
              <p>
                <b>{arr[0]}:</b> {arr[1]}
              </p>
            );
          })}
        </div>
      </div>
      <div className={style.profileCommonInfoBlock}>
        <div>
          <span style={{ padding: "25px" }}>
            <b>{props.profile.fullName.toUpperCase()}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
