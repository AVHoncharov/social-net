const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  users: [
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" },
    { id: 4, name: "Four" },
    { id: 5, name: "Five" },
    { id: 6, name: "Six" },
  ],

  messagesData: {
    messages: [
      { id: 1, message: "message 1" },
      { id: 2, message: "message 2" },
      { id: 3, message: "message 3" },
    ],
  },
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {

      return {
        ...state,
        messagesData: {
          ...state.messagesData,
          messages: [...state.messagesData.messages, {id: 5, message:action.newMessageBody }],
        },
      };
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });

export default dialogsReducer;
