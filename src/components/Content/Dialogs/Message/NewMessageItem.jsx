import React from 'react';
import style from "./../Message/NewMessageItem.module.css";

const NewMessage = (props) => {
    let newMessageElement = React.createRef();
    
    let postMessage = ()=>{
        let text = newMessageElement.current.value;
    }

    return (
        <div className={style.NewMessage}>
            <div>
                <button onClick={postMessage} className={style.addMessageButton}>post</button>
            </div>
            <textarea ref={newMessageElement} className={style.NewMessageArea}></textarea>
        </div>
    )
}

export default NewMessage;
