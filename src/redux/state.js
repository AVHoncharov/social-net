const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "How are you?", likeCount: 5 },
        { id: 2, message: "Follow the whire rabbit", likeCount: 10 },
      ],
      newPostText: "It-Camasutra",
    },
    dialogsPage: {
      users: [
        { id: 1, name: "One" },
        { id: 2, name: "Two" },
        { id: 3, name: "Three" },
        { id: 4, name: "Four" },
        { id: 5, name: "Five" },
        { id: 6, name: "Six" },
      ],

      messagesData: {
        messages:  [
            { id: 1, message: "message 1" },
            { id: 2, message: "message 2" },
            { id: 3, message: "message 3" },
        ],
        newMessage: 'Enter message'
    }
    },
    sideBar: {
      friendsList: [
        { name: "Barry", id: 1 },
        { name: "Tom", id: 2 },
        { name: "Petr", id: 3 },
        { name: "Kate", id: 4 },
        { name: "Alex", id: 5 },
        { name: "Tom", id: 6 },
      ],
    },
  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { //{type: 'ADD-POST'}
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
        break;

        case UPDATE_NEW_POST_TEXT: {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        } 
        break;

        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.messagesData.newMessage,
            };
        
            this._state.dialogsPage.messagesData.messages.push(newMessage);
            this._state.dialogsPage.messagesData.newMessage = "";
            this._callSubscriber(this._state);
        }
        break;

        case UPDATE_NEW_MESSAGE_TEXT: {
            this._state.dialogsPage.messagesData.newMessage = action.text;
            this._callSubscriber(this._state);
        }
        break;

        default: break;
    }
  },
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})

window.store = store;

export default store;
