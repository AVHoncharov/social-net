import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth-reducer";
import { AppStateType, InferActionTypes } from "./redux-store";

let initialState = {
  initialized: false,
};

export type AppInitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof actions>;

const appReducer = (state = initialState, action: any): AppInitialStateType => {
  switch (action.type) {
    case "SN/APP/INITIALIZED_SUCCESS": {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};


export const actions = {
  initializedSuccess: () => ({
    type: "SN/APP/INITIALIZED_SUCCESS",
  } as const)
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(()=> {
        dispatch(actions.initializedSuccess());
    })
};


export default appReducer;
