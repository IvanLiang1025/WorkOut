
import * as actionType from "./actionType";
import axios from "axios";

export const loadDetailData = (id) => {
    return (dispatch) => {
            axios.get("/api/detail.json?id=" + id).then((res)=>{
                const detailData = res.data.data;
                dispatch(setDetailPage(detailData));
            }).catch(()=>{
                console.log("detail: error");
            })
        }
}

const setDetailPage = (detailData) => {
    return {
        type: actionType.SET_DETAIL_DATA,
        title: detailData.title,
        author: detailData.author,
        imgUrl: detailData.imgUrl,
        content: detailData.content
    }
}
