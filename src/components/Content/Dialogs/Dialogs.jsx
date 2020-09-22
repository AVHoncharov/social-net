import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={style.dialog}>
      <NavLink to={path} activeClassName={style.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

const Dialogs = (props) => {

  let dialogsData = [
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" },
    { id: 4, name: "Four" },
    { id: 5, name: "Five" },
    { id: 6, name: "Six" },
  ];

  let messagesData = [
    { id: 1, message: "message 1" },
    { id: 2, message: "message 2" },
    { id: 3, message: "message 3" },
  ];


  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={style.messages}>
        <MessageItem message={messagesData[0].message} id={messagesData[0].id}/>
        <MessageItem message={messagesData[1].message} id={messagesData[1].id}/>
        <MessageItem message={messagesData[2].message} id={messagesData[2].id} />
      </div>
    </div>
  );
};

export default Dialogs;
