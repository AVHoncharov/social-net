import { FormAction, stopSubmit } from "redux-form";
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from "../api/api";
import { authApi } from "../api/auth-api";
import { ChatMessageType } from "../api/chat-api";
import { securityAPI } from "../api/security-api";
import { BaseThunkType, InferActionTypes } from "./redux-store";
import { chatApi } from "./../api/chat-api";
import { Dispatch } from "redux";

let initialState: ChatInitialStateType = {
  messages: [] as ChatMessageType[],
};

type ChatInitialStateType = {
  messages: Array<ChatMessageType>;
};

type ActionTypes = InferActionTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionTypes | FormAction>;

const chatReducer = (
  state = initialState,
  action: ActionTypes
): ChatInitialStateType => {
  switch (action.type) {
    case "SN/CHAT/MESSAGES_RECEIVED": {
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
      };
    }

    default:
      return state;
  }
};

export const actions = {
  messagesRecieved: (messages: ChatMessageType[]) =>
    ({
      type: "SN/CHAT/MESSAGES_RECEIVED",
      payload: { messages },
    } as const),
};

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesRecieved(messages));
    };
  }

  return _newMessageHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.start();
  chatApi.subscribe(newMessageHandlerCreator(dispatch));
};

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.unsubscribe(newMessageHandlerCreator(dispatch));
  chatApi.stop();
};

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatApi.sendMessage(message);
};

export default chatReducer;
