
let initialState = {};

export type InitialStateType = typeof initialState;

const sideBarReducer = (state = initialState, action: any): InitialStateType => {
    let stateCopy = {...state};

    return stateCopy;
}

export default sideBarReducer;