import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store"


const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
              <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
      );
}
renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
