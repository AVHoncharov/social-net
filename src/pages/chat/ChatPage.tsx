import React, { ChangeEvent, useEffect, useRef, useState } from "react";
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
  const status = useSelector((state: AppStateType) => {
    return state.chat.status;
  });

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
  }, []);

  return (
    <div>
      {status === "error" && <div>Some Error occured. Please refresh page</div>}
      <>
        <ChatMessages />
        <AddChatMessageForm />
      </>
    </div>
  );
};

const ChatMessages: React.FC = ({}) => {
  const messages = useSelector((state: AppStateType) => {
    return state.chat.messages;
  });

  const [autoScroll, setAutoScroll] = useState(false);

  const autoScrollingElement = useRef<HTMLDivElement>(null);
  const onScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 300
    ) {
      !autoScroll && setAutoScroll(true);
    } else {
      !autoScroll && setAutoScroll(false);
    }
  };
  useEffect(() => {
    if (autoScroll) {
      autoScrollingElement.current?.scrollIntoView();
    }
  }, [messages]);

  return (
    <div
      style={{ height: "500px", overflow: "auto" }}
      onScroll={onScrollHandler}
    >
      {messages.map((m, index) => {
        return <ChatMessageItem key={m.id} message={m} />;
      })}
      <div ref={autoScrollingElement}></div>
    </div>
  );
};

const ChatMessageItem: React.FC<{ message: ChatMessageType }> = React.memo(({
  message,
}) => {
  console.log('>>>>message')
  return (
    <div>
      <img width={30} src={message.photo}></img> <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  );
})

const AddChatMessageForm: React.FC = ({}) => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const status = useSelector((state: AppStateType) => {
    return state.chat.status;
  });

  const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const messageText = e.currentTarget.value;
    setMessage(messageText);
  };

  const sendMessageHandler = () => {
    if (message.trim().length === 0) return;

    dispatch(sendMessage(message));
    setMessage("");
  };

  return (
    <div>
      <div>
        <textarea onChange={onMessageChangeHandler} value={message}></textarea>
      </div>
      <div>
        <button disabled={status !== "ready"} onClick={sendMessageHandler}>
          Send
        </button>
      </div>
    </div>
  );
};
export default ChatPage;
