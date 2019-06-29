
import * as actionType from "./actionType";
// import { fromJS } from "immutable";

const defaultState = {
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
};

export default (state=defaultState, action) => {
    const tempState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionType.SEARCH_FOCUS:
            tempState.focused = true;
            return tempState;
        case actionType.SEARCH_BLUR:
            tempState.focused = false;
            return tempState;
        case actionType.POPULAR_LIST:
            tempState.list = action.list;
            tempState.totalPage = action.totalPage;
            return tempState;
        case actionType.MOUSE_ENTER:
            tempState.mouseIn = true;
            return tempState;
        case actionType.MOUSE_LEAVE:
            tempState.mouseIn = false;
            return tempState;   
        case actionType.CHANGE_LIST:
            tempState.page = action.page;
            return tempState;
        default:
            return state;
    }
};