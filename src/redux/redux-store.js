import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer'
import sideBarReducer from './sideBar-reducer';
import usersReducer from './users-reducer';
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form:formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;