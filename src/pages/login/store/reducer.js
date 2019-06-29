import * as actionType from "./actionType";

const defaulState = {
    logInStatus: false
}

export default  (state=defaulState, action) => {
    const tempState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionType.SET_LOGIN_STATUS:
            tempState.logInStatus = action.logInStatus;
            return tempState;
        case actionType.LOG_OUT:
            tempState.logInStatus = false;
            return tempState;
        default:
            return state;
    }
}