import React from "react";
import { createElement } from "react";
import { reduxForm } from "redux-form";
import { createField } from "../../../common/FormsControls/FormsControls";
import { Element } from "./../../../common/FormsControls/FormsControls";
import style from "./ProfileInfo.module.css";
import formStyle from '../../../common/FormsControls/FormsControls.module.css'


const Input = Element("input");

const ProfileContactsForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>  
        {error && <div className={formStyle.formSummaryError}>
            {error}
          </div>}
      </div>
      <div>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div>
              <div className={style.contactBlock}>
                <div className={style.contactName}><b>{key} :</b></div>
                <div>{createField(key, "contacts." + key, [], Input)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
};
const ProfileContactsReduxForm = reduxForm({
  form: "edit-profile-contacs-info",
})(ProfileContactsForm);

export default ProfileContactsReduxForm;
