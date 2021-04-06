import React, { FC } from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./Message/MessageItem";
import AddMessageFrom from "./Message/AddMessageForm/AddMessageForm";
import { InitialStateType, MessageType, UsersType } from "../../../redux/dialogs-reducer";

type OwnDialogPropsType = {
  dialogsPage: InitialStateType,
  postMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
  newMessageBody: string;
};


const Dialogs: FC<OwnDialogPropsType> = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.users.map((dialog) => (
    <DialogItem key={dialog.id.toString()} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messagesData.messages.map((msg) => (
    <MessageItem key={msg.id.toString()} message={msg.message} id={msg.id} />
  ));

  let addNewMessage = (data:{newMessageBody: string}) => {
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
