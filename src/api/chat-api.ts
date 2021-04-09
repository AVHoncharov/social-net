let subscribers = [] as SubscriberType[];

let ws: WebSocket | null = null;

const closeWsHandler = () => {
  console.log("CLOSE WS");
  setTimeout(createWS, 3000);
};

const messageWsHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data);
  subscribers.forEach((s) => s(newMessages));
};

function createWS() {
  ws?.removeEventListener("close", closeWsHandler);
  ws?.close();

  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  ws.addEventListener("close", closeWsHandler);
  ws.addEventListener("message", messageWsHandler);
}

export const chatApi = {
  start() {
    createWS();
  },
  stop() {
    subscribers = [];
    ws?.removeEventListener("close", closeWsHandler);
    ws?.removeEventListener("message", messageWsHandler);
    ws?.close();
  },
  subscribe(callback: SubscriberType) {
    subscribers.push(callback);

    return () => {
      subscribers.filter((s) => s !== callback);
    };
  },

  unsubscribe(callback: SubscriberType) {
    subscribers.filter((s) => s !== callback);
  },

  sendMessage(message: string) {
    ws?.send(message);
  },
};

type SubscriberType = (messages: ChatMessageType[]) => void;

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
