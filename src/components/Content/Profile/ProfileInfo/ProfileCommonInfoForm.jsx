import React from "react";
import { reduxForm } from "redux-form";
import { createField } from "../../../common/FormsControls/FormsControls";
import { Element } from './../../../common/FormsControls/FormsControls';
import formStyle from '../../../common/FormsControls/FormsControls.module.css'

const Input = Element('input');

const ProfileCommonInfoForm = ({handleSubmit , error}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>

        <div>
          <b>Full Name</b>: {createField('Full Name', "fullName",[], Input)} 
        </div>
    <div>
    <b>Looking for a job</b>: {createField('', "lookingForAJob",[], Input, {type:'checkbox'} )}

    </div>
          <b>My professional scills</b>:
          {createField('My professional scills', "lookingForAJobDescription",[], Input)}
      <div>
        <b>About me</b>:  {createField('About me', "aboutMe",[], Element('textarea'))}
      </div>
       {error && <div className={formStyle.formSummaryError}>
            {error}
          </div>}
    </form>
  );
};
const ProfileCommonInfoReduxForm = reduxForm({form:'edit-profile-common-info',})(ProfileCommonInfoForm);

export default ProfileCommonInfoReduxForm;
