import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../../../../redux/dialogs-reducer';
import style from "./NewMessageItem.module.css";

const NewMessageItem = (props) => {
    let newMessageElement = React.createRef();
    
    let postMessage = ()=>{
        props.addMessage();
        // props.dispatch(addMessageActionCreator());
    }

    let onMessagePostChange = () => {
        let text = newMessageElement.current.value;
        props.updateMessageText(text);
        // props.dispatch(updateMessageTextActionCreator(text));    
    }

    return (
        <div className={style.NewMessage}>
            <div>
                <button onClick={postMessage} className={style.addMessageButton}>post</button>
            </div>
            <textarea placeholder="Enter your message"
                ref={newMessageElement} 
                className={style.NewMessageArea}
                onChange={onMessagePostChange}
                value={props.newMessageText}
            />
        </div>
    )
}

export default NewMessageItem;
