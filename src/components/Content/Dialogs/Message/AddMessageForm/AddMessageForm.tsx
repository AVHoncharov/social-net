import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Element } from '../../../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../../../utils/validators/validators';
import style from "./AddMessageForm.module.css";
import { NewMessageFormValuesType } from '../../Dialogs';

let maxLength50 = maxLengthCreator(50);
const Textarea = Element('textarea');

type NewMessageFromValuesKeysType = Extract<keyof NewMessageFormValuesType, string>;
type PropsType = {}
const AddMessageForm:  React.FC<
InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType
> = ({...props}) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div className={style.NewMessage}>
          <div>
            <button className={style.addMessageButton}>post</button>
          </div >
          {createField<NewMessageFromValuesKeysType>("Enter your message", "newMessageBody",[maxLength50],Textarea, style.NewMessageArea)}
        </div>
      </form>
    );
  };

export default reduxForm<NewMessageFormValuesType>({form: 'dialog-add-message-form'})(AddMessageForm);