const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: "How are you?", likeCount: 5 },
    { id: 2, message: "Follow the whire rabbit", likeCount: 10 },
  ],
  newPostText: "It-Camasutra",
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            let stateCopy = {...state};
            stateCopy.posts=[...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};

            stateCopy.newPostText = action.text;

            return stateCopy;
        } 
        
        default: return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default profileReducer;