import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text)=>{dispatch(updateMessageTextActionCreator(text));},
        postMessage: ()=>{dispatch(addMessageActionCreator());}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
