

import * as actionType from "./actionType";

const defaultState = {
    articleList:[],
    writerList: [],
    recommendList: []
};

export default (state=defaultState, action) => {
    const tempState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionType.SET_HOME_DATA:
            tempState.articleList = action.articleList;
            tempState.writerList = action.writerList;
            tempState.recommendList = action.recommendList;
            return tempState;
        case actionType.LOAD_MORE_LIST:
        tempState.articleList = tempState.articleList.concat(action.moreArticle);
        return tempState;
        default: 
            return state;
    } 
};