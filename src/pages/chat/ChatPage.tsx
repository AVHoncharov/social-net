import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userDefaultAvatarSmall from "../../assets/images/avatar-default-small.png";
import { sendMessage, startMessagesListening } from "../../redux/chat-reducer";
import { AppStateType } from "../../redux/redux-store";
import { stopMessagesListening } from "./../../redux/chat-reducer";

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

const ChatPage: React.FC = () => {
  return <Chat />;
};

const Chat: React.FC = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
  },[]);

  return (
    <div>
      <ChatMessages />
      <AddChatMessageForm />
    </div>
  );
};

const ChatMessages: React.FC = ({ }) => {

  const messages = useSelector((state: AppStateType)=>{
    return state.chat.messages;
  });
  
  return (
    <div style={{ height: "500px", overflow: "auto" }}>
      {messages.map((m, index) => {
        return <ChatMessageItem key={index} message={m} />;
      })}
    </div>
  );
};

const ChatMessageItem: React.FC<{ message: ChatMessageType }> = ({
  message,
}) => {
  return (
    <div>
      <img width={30} src={message.photo}></img> <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  );
};

const AddChatMessageForm: React.FC= ({ }) => {
  const [message, setMessage] = useState("");
  const [wsReadyState, setWsReadyState] = useState<"pending" | "ready">(
    "pending"
  );

  const dispatch = useDispatch();

  const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const messageText = e.currentTarget.value;
    setMessage(messageText);
  };

  const sendMessageHandler = () => {
    if (message.trim().length === 0) return;

    dispatch(sendMessage(message))
    setMessage("");
  };

  return (
    <div>
      <div>
        <textarea onChange={onMessageChangeHandler} value={message}></textarea>
      </div>
      <div>
        <button
          // disabled={}
          onClick={sendMessageHandler}
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default ChatPage;
