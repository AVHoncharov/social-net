import { InferActionTypes } from "./redux-store";

export type UsersType = {
  id: number;
  name: string;
};

export type MessageType = {
  id: number;
  message: string;
};

let initialState = {
  users: [
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" },
    { id: 4, name: "Four" },
    { id: 5, name: "Five" },
    { id: 6, name: "Six" },
  ] as Array<UsersType>,

  messagesData: {
    messages: [
      { id: 1, message: "message 1" },
      { id: 2, message: "message 2" },
      { id: 3, message: "message 3" },
    ] as Array<MessageType>,
  },
};

const dialogsReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case "SN/DIALOGS/ADD-MESSAGE": {
      return {
        ...state,
        messagesData: {
          ...state.messagesData,
          messages: [
            ...state.messagesData.messages,
            { id: 5, message: action.newMessageBody },
          ],
        },
      };
    }

    default:
      return state;
  }
};

export const actions = {
  addMessageActionCreator: (
    newMessageBody: string
  ) => ({ type: "SN/DIALOGS/ADD-MESSAGE", newMessageBody } as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionTypes<typeof actions>;