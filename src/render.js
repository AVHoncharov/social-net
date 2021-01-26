import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import {addPost} from "./redux/state"

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
              <App appState={state} addPost={addPost} />
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
      );
}