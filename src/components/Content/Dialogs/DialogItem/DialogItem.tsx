import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import style from "../Dialogs.module.css";


type DialogItemType = {
  id: number,
  name: string
}

const DialogItem: FC<DialogItemType> = ({id, name}) => {
  let path = "/dialogs/" + id;

  return (
    <div className={style.dialog}>
      <NavLink to={path} activeClassName={style.activeLink}>
        {name}
      </NavLink>
    </div>
  );
};


export default DialogItem;
