

import * as actionType from "./actionType";
import axios from "axios";
// import { fromJS } from "immutable";

export const searchFocus = ()=>{
    return {
        type: actionType.SEARCH_FOCUS
    }
};

export const searchBlur = ()=>{
    return {
        type: actionType.SEARCH_BLUR
    }
};

export const mouseEnter = () => {
    return {
        type: actionType.MOUSE_ENTER
    }
};

export const mouseLeave = () => {
    return{
        type: actionType.MOUSE_LEAVE
    }
}

export const searchPopular = () => {
    return (dispatch, getState) => {
        if(getState().header.list.length ===0 ) {
            axios.get("/api/headerList.json").then((res) => {
                dispatch(popularList(res.data.popularList));
            }).catch(()=>{
                console.log("error");
            })
        }  
    }
}

export const changeList = (page) =>{
    return {
        type: actionType.CHANGE_LIST,
        page
    }
}

const popularList = (list) =>{
    return{
        type: actionType.POPULAR_LIST,
        list,
        totalPage: Math.ceil(list.length/10)
    }
}