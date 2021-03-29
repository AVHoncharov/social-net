import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Element } from '../../../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../../../utils/validators/validators';
import style from "./AddMessageForm.module.css";

let maxLength50 = maxLengthCreator(50);
const Textarea = Element('textarea');

const AddMessageForm: FC<InjectedFormProps> = ({...props}) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div className={style.NewMessage}>
          <div>
            <button className={style.addMessageButton}>post</button>
          </div>
          <Field
            component={Textarea}
            validate={[required , maxLength50]}
            name="newMessageBody"
            placeholder="Enter your message"
            className={style.NewMessageArea}
          />
        </div>
      </form>
    );
  };

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);