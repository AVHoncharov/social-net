import React, { useState, useEffect, ChangeEvent } from "react";
import style from "./ProfileInfo.module.css";
import userDefaultAvatarSmall from "../../../../assets/images/avatar-default-small.png";
import ProfileStatus from "./ProfileStatus";
import ProfileCommonInfoForm from "./ProfileCommonInfoForm";
import ProfileCommonInfoReduxForm from "./ProfileCommonInfoForm";
import ProfileContactsReduxForm from "./ProfileContactsForm";
import { ProfileType } from "../../../../types/types";

type PofileInfoPropsType = {
  profile: ProfileType,
  isOwner: boolean,
  status: string,
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}
const ProfileInfo: React.FC<PofileInfoPropsType> = ({profile,isOwner, status,updateStatus,savePhoto,saveProfile}) => {
  const [editMode, setEditMode] = useState(false);
  const [editContactsMode, setEditContactsMode] = useState(false);

  ///update profile only if it's new
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) savePhoto(e.currentTarget.files[0]);
  };

  const onProfileCommonInfoSubmit = (formData: ProfileType) => {
    saveProfile(formData);
    setEditMode(false);
  };

  const onProfileContactsSubmit = (formData: ProfileType ) => {
    if(!profile) {
      console.error('There is no Profile')
    } else {
      formData = {
        ...formData,
        ...{
          fullName: profile.fullName,
          aboutMe: profile.aboutMe,
          lookingForAJob: profile.lookingForAJob,
          lookingForAJobDescription: profile.lookingForAJobDescription,
        },
      };
      //todo: remove Then
      saveProfile(formData).then(() => {
        setEditContactsMode(false);
      });
    }
  };

  return (
    <div className={style.profileInfo}>
      <div className={style.profileAvatarBlock}>
        <label htmlFor="input-avatar-profile-photo">
          <img
            src={profile.photos.large || userDefaultAvatarSmall}
            alt=""
            className={
              isOwner
                ? style.profielAvatarImg + " " + style.selfProfile
                : style.profielAvatarImg
            }
            title={isOwner ? "Нажмите на фото для выбора нового" : ''}
          ></img>
        </label>
        {isOwner && (
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
          <span>{profile.aboutMe}</span>
          <ProfileStatus
            statusText={status}
            updateStatus={updateStatus}
            isOwner={isOwner}
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
              initialValues={profile}
              profile={profile}
              onSubmit={onProfileContactsSubmit}
            />
          ) : (
            Object.entries(profile.contacts).map((contact) => {
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
            initialValues={profile}
            profile={profile}
            onSubmit={onProfileCommonInfoSubmit}
          />
        ) : (
          <ProfileCommonInfo
            profile={profile}
            isOwner={isOwner}
            turnOnEditMode={() => setEditMode(true)}
          />
        )}
      </div>
    </div>
  );
};

type ProfileCommonInfoPropsType = {
  profile: ProfileType,
  isOwner: boolean,
  turnOnEditMode: () => void
}

const ProfileCommonInfo: React.FC<ProfileCommonInfoPropsType> = ({ profile, isOwner, turnOnEditMode }) => {
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

type ContactsPropsType = {
  contactTitle: string,
  contactValue: string
}
const Contacts: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle} :</b> {contactValue}
    </div>
  );
};

export default ProfileInfo;
