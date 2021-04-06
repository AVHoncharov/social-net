import React from "react";
import { createElement } from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, GetStringKeys } from "../../../common/FormsControls/FormsControls";
import { Element } from "../../../common/FormsControls/FormsControls";
import style from "./ProfileInfo.module.css";
import formStyle from '../../../common/FormsControls/FormsControls.module.css'
import { ContactsType, ProfileType } from "../../../../types/types";


const Input = Element("input");

type ProfileContactsFormOwnProps = {
  profile: ProfileType;
};

type ProfileContactsFormValuesType = {

}

type ProfileContactsFormTypeKeys = GetStringKeys<ContactsType>

const ProfileContactsForm:React.FC<InjectedFormProps<ProfileType, ProfileContactsFormOwnProps> & ProfileContactsFormOwnProps>
= ({ handleSubmit, profile, error }) => {
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

                {/* todo create generic for contacts keys */}

                <div>{createField(key, "contacts." + key, [], Input)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileContactsReduxForm = reduxForm<ProfileType, ProfileContactsFormOwnProps>({
  form: "edit-profile-contacs-info",
})(ProfileContactsForm);

export default ProfileContactsReduxForm;
