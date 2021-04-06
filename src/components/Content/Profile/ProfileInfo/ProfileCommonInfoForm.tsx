import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { ProfileType } from "../../../../types/types";
import { createField, GetStringKeys } from "../../../common/FormsControls/FormsControls";
import { Element } from '../../../common/FormsControls/FormsControls';
import formStyle from '../../../common/FormsControls/FormsControls.module.css'

const Input = Element('input');

type ProfileCommonInfoFormPropsType = {
  profile: ProfileType;
}

type ProfileContactsFormTypeKeys = GetStringKeys<ProfileType>

const ProfileCommonInfoForm: React.FC<InjectedFormProps<ProfileType, ProfileCommonInfoFormPropsType> & ProfileCommonInfoFormPropsType> = ({handleSubmit , error}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>

        <div>
          <b>Full Name</b>: {createField<ProfileContactsFormTypeKeys>('Full Name', "fullName",[], Input)} 
        </div>
    <div>
    <b>Looking for a job</b>: {createField<ProfileContactsFormTypeKeys>('', "lookingForAJob",[], Input,'',{},'','checkbox' )}     {/* // */}


    </div>
          <b>My professional scills</b>:
          {createField<ProfileContactsFormTypeKeys>('My professional scills', "lookingForAJobDescription",[], Input)}
      <div>
        <b>About me</b>:  {createField<ProfileContactsFormTypeKeys>('About me', "aboutMe",[], Element('textarea'))}
      </div>
       {error && <div className={formStyle.formSummaryError}>
            {error}
          </div>}
    </form>
  );
};

const ProfileCommonInfoReduxForm = reduxForm<ProfileType, ProfileCommonInfoFormPropsType>({form:'edit-profile-common-info',})(ProfileCommonInfoForm);

export default ProfileCommonInfoReduxForm;
