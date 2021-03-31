import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth-reducer";
import { AppStateType } from "./redux-store";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


export type AppInitialStateType = {
  initialized: boolean,
}

let initialState: AppInitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): AppInitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

type ActionTypes = InitializedSuccessActionType;

type  InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;


export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(()=> {
        dispatch(initializedSuccess());
    })
};


export default appReducer;