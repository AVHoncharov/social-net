import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from './../../../hoc/WithAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text)=>{dispatch(updateMessageTextActionCreator(text));},
        postMessage: ()=>{dispatch(addMessageActionCreator());}
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
