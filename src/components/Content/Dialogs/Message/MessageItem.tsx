import React, { FC } from "react";
import style from "./../Message/MessageItem.module.css";

type MessageItemType = {
  message: string,
  id: number
}

const MessageItem: FC<MessageItemType> = ({message}) => {
  return <div className={style.message}>{message}</div>;
};

export default MessageItem;
