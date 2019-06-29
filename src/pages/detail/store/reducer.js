
import * as actionType from "./actionType";

const defaultState = {
    title: "",
    author: "",
    content: "",
    imgUrl: ""
}

export default (state=defaultState, action) => {
    const tempState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionType.SET_DETAIL_DATA:
           tempState.title = action.title;
           tempState.author = action.author;
           tempState.content = action.content;
           tempState.imgUrl = action.imgUrl;
            
            return tempState;
        default:
            return state;
    }
}