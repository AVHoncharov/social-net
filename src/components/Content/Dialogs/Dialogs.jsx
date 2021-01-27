import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./Message/MessageItem";
import NewMessageItem from "./Message/NewMessage/NewMessageItem"

const Dialogs = (props) => {
  let dialogsElements = props.users.map((dialog) => (
    <DialogItem key={dialog.id.toString()} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.messagesData.messages.map((msg) => (
    <MessageItem key={msg.id.toString()} message={msg.message} id={msg.id} />
  ));
  
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
      <NewMessageItem 
        messages={props.messagesData.messages}
        newMessageText={props.messagesData.newMessage}
        dispatch = {props.dispatch}/>
    </div>
  );
};

export default Dialogs;
