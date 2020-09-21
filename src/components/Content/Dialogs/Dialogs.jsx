import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to="/dialogs/1">One</NavLink>
        </div>
        <div className={style.dialog}><NavLink to="/dialogs/2">Two</NavLink></div>
        <div className={style.dialog}><NavLink to="/dialogs/3">Three</NavLink></div>
        <div className={style.dialog}><NavLink to="/dialogs/4">Four</NavLink></div>
        <div className={style.dialog}><NavLink to="/dialogs/5">Five</NavLink></div>
        <div className={style.dialog}><NavLink to="/dialogs/6">Six</NavLink></div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Message 1</div>
        <div className={style.message}>Message 2</div>
        <div className={style.message}>Message 3</div>
        <div className={style.message}>Message 1</div>
        <div className={style.message}>Message 2</div>
        <div className={style.message}>Message 3</div>
        <div className={style.message}>Message 1</div>
        <div className={style.message}>Message 2</div>
        <div className={style.message}>Message 3</div>
        <div className={style.message}>Message 1</div>
        <div className={style.message}>Message 2</div>
        <div className={style.message}>Message 3</div>
      </div>
    </div>
  );
};

export default Dialogs;
