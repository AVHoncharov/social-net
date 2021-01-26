import { renderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "How are you?", likeCount: 5 },
      { id: 2, message: "Follow the whire rabbit", likeCount: 10 },
    ],
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
          {name: "Barry", id: 1},
          {name: "Tom", id: 2},
          {name: "Petr", id: 3},
          {name: "Kate", id: 4},
          {name: "Alex", id: 5},
          {name: "Tom", id: 6},
      ]
  }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);

    renderEntireTree(state);
}

export default state;
