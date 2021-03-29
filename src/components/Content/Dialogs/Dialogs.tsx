import React, { FC } from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./Message/MessageItem";
import { maxLengthCreator, required } from './../../../utils/validators/validators';
import AddMessageFrom from "./Message/AddMessageForm/AddMessageForm";
import { MessageType, UsersType } from "../../../redux/dialogs-reducer";

type DialogsType= {
  users: Array<UsersType>,
  messages: Array<MessageType>,
  postMessage:(newMessageBody: string) => void
}

const Dialogs: FC<DialogsType> = ({users, messages, ...props}) => {

  let dialogsElements = users.map((dialog) => (
    <DialogItem key={dialog.id.toString()} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = messages.map((msg) => (
    <MessageItem key={msg.id.toString()} message={msg.message} id={msg.id} />
  ));

  let addNewMessage = (data:any) => {
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
