import { FormAction, stopSubmit } from "redux-form";
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from "../api/api";
import { authApi } from "../api/auth-api";
import { ChatMessageAPIType, StatusType } from "../api/chat-api";
import { securityAPI } from "../api/security-api";
import { BaseThunkType, InferActionTypes } from "./redux-store";
import { chatApi } from "./../api/chat-api";
import { Dispatch } from "redux";
import {v1} from 'uuid'

let initialState: ChatInitialStateType = {
  messages: [] as ChatMessageType[],
  status: "pending" as "pending" | "ready",
};

type ChatMessageType = ChatMessageAPIType & {id: string}; 

type ChatInitialStateType = {
  messages: Array<ChatMessageType>;
  status: StatusType;
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
        messages: [...state.messages, ...action.payload.messages.map((m)=>({...m, id: v1()}))].filter((m, index, array)=> index >= array.length - 100),
      };
    }

    case "SN/CHAT/STATUS_CHANGED": {
      return {
        ...state,
        status: action.payload.status,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  messagesRecieved: (messages: ChatMessageAPIType[]) =>
    ({
      type: "SN/CHAT/MESSAGES_RECEIVED",
      payload: { messages },
    } as const),

    statusChanged: (status: StatusType) =>
    ({
      type: "SN/CHAT/STATUS_CHANGED",
      payload: { status },
    } as const),
};

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesRecieved(messages));
    };
  }

  return _newMessageHandler;
};

let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(actions.statusChanged(status));
    };
  }

  return _statusChangedHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.start();
  chatApi.subscribe('messages-recieved', newMessageHandlerCreator(dispatch));
  chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
};

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.unsubscribe('messages-recieved', newMessageHandlerCreator(dispatch));
  chatApi.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
  chatApi.stop();
};

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatApi.sendMessage(message);
};

export default chatReducer;
