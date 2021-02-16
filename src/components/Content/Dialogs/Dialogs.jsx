import React from "react";
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

  let onPostMessage = () => {
    props.postMessage();
  };

  let onMessagePostChange = () => {
    let text = newMessageElement.current.value;
    props.updateMessageText(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
      <div className={style.NewMessage}>
        <div>
          <button onClick={onPostMessage} className={style.addMessageButton}>
            post
          </button>
        </div>
        <textarea
          placeholder="Enter your message"
          ref={newMessageElement}
          className={style.NewMessageArea}
          onChange={onMessagePostChange}
          value={props.dialogsPage.messagesData.newMessageText}
        />
      </div>
    </div>
  );
};

export default Dialogs;
