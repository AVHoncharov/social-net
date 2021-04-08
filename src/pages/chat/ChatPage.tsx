import { message } from "antd";
import { WSAEACCES } from "node:constants";
import React, { ChangeEvent, useEffect, useState } from "react";
import userDefaultAvatarSmall from "../../assets/images/avatar-default-small.png";

const ws = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

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
  return (
    <div>
      <ChatMessages />
      <AddChatMessageForm />
    </div>
  );
};

const ChatMessages: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    ws.addEventListener("message", (e) => {
      const newMessages = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    });
  }, []);

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
const AddChatMessageForm: React.FC = () => {
  const [message, setMessage] = useState("");

  const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const messageText = e.currentTarget.value;
    setMessage(messageText);
  };

  const sendMessage = () => {
    if (message.trim().length === 0) return;

    ws.send(message);
    setMessage('');
    
  };

  return (
    <div>
      <div>
        <textarea onChange={onMessageChangeHandler} value={message}></textarea>
      </div>
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
export default ChatPage;
