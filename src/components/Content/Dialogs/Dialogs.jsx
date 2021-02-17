import React from "react";
import { Field, reduxForm } from "redux-form";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./Message/MessageItem";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let dialogsElements = props.dialogsPage.users.map((dialog) => (
    <DialogItem key={dialog.id.toString()} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.dialogsPage.messagesData.messages.map((msg) => (
    <MessageItem key={msg.id.toString()} message={msg.message} id={msg.id} />
  ));

  let addNewMessage = (data) => {
    props.postMessage(data.newMessageBody);
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
      <AddMessaeFromRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.NewMessage}>
        <div>
          <button className={style.addMessageButton}>
            post
          </button>
        </div>
        <Field component='textarea' name='newMessageBody' placeholder='Enter your message' className={style.NewMessageArea}/>
      </div>
    </form>
  );
};

const AddMessaeFromRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
