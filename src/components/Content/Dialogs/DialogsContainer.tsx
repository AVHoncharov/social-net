import React from "react";
import { connect } from "react-redux";
import {
    actions,  
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect';
import { compose } from "redux";
import { AppStateType } from "../../../redux/redux-store";

// type MapStatePropsType = {
//     users: Array<UsersType>,
//     messages: Array<MessageType>
// }

// type MapDispatchToPropsType = {
//     postMessage: (newMessageBody: string) => void
// }

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
        // users: state.dialogsPage.users,
        // messages: state.dialogsPage.messagesData.messages
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,{
        postMessage: actions.sendMessage
    }),
    // connect<MapStatePropsType, MapDispatchToPropsType, null, AppStateType>(mapStateToProps,mapDispatchToProps),

    withAuthRedirect

)(Dialogs);