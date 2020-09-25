import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let data = {
  posts: [
    { id: 1, message: "How are you?", likeCount: 5 },
    { id: 2, message: "Follow the whire rabbit", likeCount: 10 },
  ],
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
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
