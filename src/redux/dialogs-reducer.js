const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    newMessageText: "",
  },
};
const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.messagesData.newMessageText,
            };
        
            let stateCopy = {...state};

            stateCopy.messagesData.messages.push(newMessage);
            stateCopy.messagesData.newMessageText = "";

            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
          let stateCopy = {...state};

          stateCopy.messagesData.newMessageText = action.text;

          return stateCopy;
        }

        default: return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})

export default dialogsReducer;
