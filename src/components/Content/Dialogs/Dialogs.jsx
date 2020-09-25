import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./Message/MessageItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem key={dialog.id.toString()} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.messagesData.map((msg) => (
    <MessageItem key={msg.id.toString()} message={msg.message} id={msg.id} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
