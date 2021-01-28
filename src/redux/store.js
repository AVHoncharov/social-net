import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";

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
        newMessage: ''
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

  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  this._state.sideBar = sideBarReducer(this._state.sideBar, action);

  this._callSubscriber(this._state);
  },
};





window.store = store;

export default store;
