import React from "react";
import { Field, reduxForm } from "redux-form";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./Message/MessageItem";
import { maxLengthCreator, required } from './../../../utils/validators/validators';
import AddMessageFrom from "./Message/AddMessageForm/AddMessageForm";

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
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
      <AddMessageFrom onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
