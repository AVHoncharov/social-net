import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import userDefaultAvatarSmall from "../../../../assets/images/avatar-default-small.png";
import ProfileStatus from "./ProfileStatus";
import ProfileCommonInfoForm from "./ProfileCommonInfoForm";
import ProfileCommonInfoReduxForm from "./ProfileCommonInfoForm";
import ProfileContactsReduxForm from "./ProfileContactsForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [editContactsMode, setEditContactsMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.currentTarget.files.length) props.savePhoto(e.currentTarget.files[0]);
  };

  const onProfileCommonInfoSubmit = (formData) => {
    props.saveProfile(formData);
    setEditMode(false);
  };
  const onProfileContactsSubmit = (formData) => {
    formData = {
      ...formData,
      ...{
        fullName: props.profile.fullName,
        aboutMe: props.profile.aboutMe,
        lookingForAJob: props.profile.lookingForAJob,
        lookingForAJobDescription: props.profile.lookingForAJobDescription,
      },
    };
    props.saveProfile(formData).then(() => {
      setEditContactsMode(false);
    });
  };
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
        <br />
        <div
          onDoubleClick={() => setEditContactsMode(true)}
          className={style.contactsList}
        >
          Contacts:
          {editContactsMode ? (
            <ProfileContactsReduxForm
              initialValues={props.profile}
              profile={props.profile}
              onSubmit={onProfileContactsSubmit}
            />
          ) : (
            Object.entries(props.profile.contacts).map((contact) => {
              return (
                <Contacts
                  key={contact[0]}
                  contactTitle={contact[0]}
                  contactValue={contact[1]}
                />
              );
            })
          )}
        </div>
      </div>
      <div className={style.profileCommonInfoBlock}>
        {editMode ? (
          <ProfileCommonInfoForm
            initialValues={props.profile}
            profile={props.profile}
            onSubmit={onProfileCommonInfoSubmit}
          />
        ) : (
          <ProfileCommonInfo
            profile={props.profile}
            isOwner={props.isOwner}
            turnOnEditMode={() => setEditMode(true)}
          />
        )}
      </div>
    </div>
  );
};

const ProfileCommonInfo = ({ profile, isOwner, turnOnEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={turnOnEditMode}>edit</button>
        </div>
      )}
      <div>
        <span>
          <b>{profile.fullName.toUpperCase()}</b>
        </span>
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional scills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle} :</b> {contactValue}
    </div>
  );
};

export default ProfileInfo;
