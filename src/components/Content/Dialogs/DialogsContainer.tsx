import React from "react";
import { connect } from "react-redux";
import {
    actions,
  MessageType, UsersType,
  
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect';
import { compose } from "redux";
import { AppStateType } from "../../../redux/redux-store";

type MapStatePropsType = {
    users: Array<UsersType>,
    messages: Array<MessageType>
}

type MapDispatchToPropsType = {
    postMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messagesData.messages
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        postMessage: (newMessageBody: string)=>{dispatch(actions.addMessageActionCreator(newMessageBody));}
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchToPropsType, null, AppStateType>(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);