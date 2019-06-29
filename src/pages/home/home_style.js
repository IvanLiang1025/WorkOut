
import styled from "styled-components";

export const HomeWrapper = styled.div`
    // overflow: hidden;
    width: 960px;
    margin: 30px auto 0 auto;
`;

export const HomeLeft= styled.div`

    width: 625px;
    float: left;
    // background: blue;
    .banner-img{
        width: 625px;
		height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
    // background: green;
`;

export const ListItem = styled.div`  
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    .list-pic {
        width: 120px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const LoadMoreList = styled.div`
    width: 60%;
    height: 30px;
    margin: 20px auto;
    text-align: center;
    line-height: 30px;
    background: green;
    border-radius: 20px;
`;

export const ItemInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
    }
    .description{
        font-size:13px;
        line-height: 24px;
        color: #999;
    }
`;

// Recommend component
export const RecommendWrapper = styled.div`
    width: 280px;
    margin-bottom: 20px;  
`;

export const RecommendItem = styled.a`
    display: block;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-bottom: 6px;
    background: linear-gradient(#F2E0CF, #DA7227);
    border-radius: 10px;
    // background: url(${(props) => {return props.imgUrl}});
    // background-size: contain;
    
`;

export const WriterWrapper = styled.div`
    width: 100%;
    margin-top: 50px;
   
`;
export const WriterTitle = styled.div`
    font-size: 13px;
`;

export const WriterChange = styled.a`
    float: right;
`;

export const Author = styled.div`
    width: 100%;
    margin: 25px 0;
    .author-img{
        width: 48px;
        height: 48px;
        float: left;
        margin-right: 10px;
    }
    .author-name{
        display: block;
        padding-top: 10px;
        font-size: 15px;
    }
`;

export const BackToTop = styled.div`
    position: fixed;
    right: 20px;
    bottom: 30px;
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #999;
    cursor: pointer;
`;