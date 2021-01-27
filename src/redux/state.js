const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
      dialogsData: [
        { id: 1, name: "One" },
        { id: 2, name: "Two" },
        { id: 3, name: "Three" },
        { id: 4, name: "Four" },
        { id: 5, name: "Five" },
        { id: 6, name: "Six" },
      ],

      messagesData: [
        { id: 1, message: "message 1" },
        { id: 2, message: "message 2" },
        { id: 3, message: "message 3" },
      ],
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
    if(action.type===ADD_POST) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
          };
      
          this._state.profilePage.posts.push(newPost);
          this._state.profilePage.newPostText = "";
          this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.text;
        this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

window.store = store;

export default store;
