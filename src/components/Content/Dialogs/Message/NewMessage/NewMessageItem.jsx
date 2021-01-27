import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../../../../redux/state';
import style from "./NewMessageItem.module.css";

const NewMessage = (props) => {
    let newMessageElement = React.createRef();
    
    let postMessage = ()=>{
        props.dispatch(addMessageActionCreator());
    }

    let onMessagePostChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageTextActionCreator(text));    
    }

    return (
        <div className={style.NewMessage}>
            <div>
                <button onClick={postMessage} className={style.addMessageButton}>post</button>
            </div>
            <textarea ref={newMessageElement} 
                className={style.NewMessageArea}
                onChange={onMessagePostChange}
                value={props.newMessageText}
            />
        </div>
    )
}

export default NewMessage;
