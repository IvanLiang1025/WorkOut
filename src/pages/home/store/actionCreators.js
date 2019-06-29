import * as actionType from "./actionType";
import axios from "axios";


export const getHomeData = () => {
    return (dispatch) => {
        axios.get("/api/home.json").then((res) => {
            const homeData = res.data.homeData;
            dispatch(setHomeData(homeData));
        }).catch(() => {
            console.log("error");
        })
    }
}

export const getMoreList = () => {
    return (dispatch) =>{
        axios.get("/api/homeMoreArticle.json").then((res) => {
            const moreArticle = res.data.data.articleList;
            console.log(moreArticle);
            dispatch(loadMoreList(moreArticle));
        }).catch(() => {
            console.log("error");
        })
    }
    
}

const loadMoreList = (moreArticle) => {
    return {
        type: actionType.LOAD_MORE_LIST,
        moreArticle
    }
}


const setHomeData = (homeData) =>{
    return {
        type: actionType.SET_HOME_DATA,
        articleList: homeData.articleList,
        recommendList: homeData.recommendList,
        writerList: homeData.writerList
    }
}