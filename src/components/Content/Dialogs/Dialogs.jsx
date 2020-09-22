import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
  
    return (     
    <div className={style.dialog}>
      <NavLink to={path} activeClassName={style.activeLink}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
    return(
        <div className={style.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name="One" id="1"/>
        <DialogItem name="Two" id="2"/>
        <DialogItem name="Three" id="3"/>
        <DialogItem name="Four" id="4"/>
        <DialogItem name="Five" id="5"/>
        <DialogItem name="Six" id="6"/>
      </div>
      <div className={style.messages}>
        <MessageItem message="message 1"/>
        <MessageItem message="message 2"/>
        <MessageItem message="message 3"/>
        <MessageItem message="message 4"/>
      </div>
    </div>
  );
};

export default Dialogs;
