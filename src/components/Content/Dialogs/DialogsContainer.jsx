import React from "react";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";
import StoreContext from "../../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
//   let state = props.store.getState();

//   let postMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };

//   let updateMessageText = (text) => {
//     props.store.dispatch(updateMessageTextActionCreator(text));
//   };

  return (
    <StoreContext.Consumer>
      {store => {
            let state = store.getState();

            let postMessage = () => {
              store.dispatch(addMessageActionCreator());
            };
          
            let updateMessageText = (text) => {
              store.dispatch(updateMessageTextActionCreator(text));
            };
        return (
          <Dialogs
            dialogsPage={state}
            postMessage={postMessage}
            updateMessageText={updateMessageText}
            users={state.dialogsPage.users}
            messages={state.dialogsPage.messagesData.messages}
            newMessageText={state.dialogsPage.messagesData.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
