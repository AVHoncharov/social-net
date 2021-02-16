import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from './../../../hoc/WithAuthRedirect';
import { compose } from "redux";

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

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);