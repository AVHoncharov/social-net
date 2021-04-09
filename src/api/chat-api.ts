let subscribers = {
  "messages-recieved": [] as MessagesReceivedSubscriberType[],
  "status-changed": [] as StatusChangedSubscriberType[],
};

type EventNamesType = "messages-recieved" | "status-changed";
let ws: WebSocket | null = null;

const closeWsHandler = () => {
  console.log("CLOSE WS");
  notifySubscribersStatusChanged("pending");

  setTimeout(createWS, 3000);
};

const messageWsHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data);
  subscribers["messages-recieved"].forEach((s) => s(newMessages));
};

const openWsHandler = () => {
  notifySubscribersStatusChanged("ready");
};

const errorWsHandler = () => {
  notifySubscribersStatusChanged("error");
  console.error('Refresh page');
};

const cleanUp = () => {
  ws?.removeEventListener("close", closeWsHandler);
  ws?.removeEventListener("message", messageWsHandler);
  ws?.removeEventListener("open", openWsHandler);
  ws?.removeEventListener("error", errorWsHandler);
};


const notifySubscribersStatusChanged = (status: StatusType) => {
  subscribers["status-changed"].forEach((s) => s(status));
};
function createWS() {
  cleanUp();
  ws?.close();

  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  notifySubscribersStatusChanged("pending");

  ws.addEventListener("close", closeWsHandler);
  ws.addEventListener("message", messageWsHandler);
  ws.addEventListener("open", openWsHandler);
  ws.addEventListener("error", errorWsHandler);
}

export const chatApi = {
  start() {
    createWS();
  },
  stop() {
    subscribers["messages-recieved"] = [];
    subscribers["status-changed"] = [];
    cleanUp();
    ws?.close();
  },

  subscribe(
    eventName: EventNamesType,
    callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType
  ) {
    //@ts-ignore
    subscribers[eventName].push(callback);

    return () => {
      //@ts-ignore

      subscribers[eventName].filter((s) => s !== callback);
    };
  },

  unsubscribe(
    eventName: EventNamesType,
    callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType
  ) {

    //@ts-ignore
    subscribers[eventName] = subscribers[eventName].filter(
      (s: any) => s !== callback
    );
  },

  sendMessage(message: string) {
    ws?.send(message);
  },
};

type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;

export type ChatMessageAPIType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

export type StatusType = "pending" | "ready" | "error";
