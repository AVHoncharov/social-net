const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.messagesData.newMessage,
            };
        
            state.messagesData.messages.push(newMessage);
            state.messagesData.newMessage = "";
        }
        break;

        case UPDATE_NEW_MESSAGE_TEXT: {
            state.messagesData.newMessage = action.text;
        }
        break;

        default: return state;
    }

    return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})

export default dialogsReducer;
