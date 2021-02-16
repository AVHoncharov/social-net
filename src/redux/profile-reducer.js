import { profileApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'; 

let initialState = {
  posts: [
    { id: 1, message: "How are you?", likeCount: 5 },
    { id: 2, message: "Follow the whire rabbit", likeCount: 10 },
  ],
  newPostText: "",
  profile: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts:[...state.posts, {id: 5, message: state.newPostText, likeCount: 0 }],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            };
        } 
        
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        default: return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
          });
      
    }
}
export default profileReducer;