import styled from "styled-components";

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;   
`;

export const Logo = styled.a.attrs({
    href: "/"
})`
    position: absolute;
    text-decoration: none;
    left: 20px;
    top: 20px;
    display: block;
    width: 100px;
    height: 56px;
    font-size: 20px;
    background-size: contain;
`;

export const Nav = styled.div`
    width: 800px;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    font-size: 17px;
    padding: 0 15px;
    // background-color: red;
    margin-right: 10px;
    color: #333333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont{
        position: absolute;
        right: 5px;
        bottom: 9px;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: 'search'    
})`
    font-size: 15px;
    height: 38px;
    width: 200px;
    padding: 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    background: #eee;
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 210px;
    padding: 20px 20px 0px 10px;
    box-shadow: 0 0px 8px rgba(0,0,0,.2);
    box-sizing: border-box;
    background-color: #fff;
`;

export const SearchInfoTitle = styled.div`
	font-size: 14px;
    color: #969696;
    margin-bottom: 10px;
`;

export const SearchInfoChange = styled.a`
    float: right;
    font-size: 13px;
    cursor: pointer;
`;

export const SearchInfoItem = styled.a `
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 2px 4px;
    color: #787878;
`;

export const Addition = styled.div`
        position: absolute;
        right: 0;
        top: 0;
        height: 56px;
        // background: green;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    border:1px solid rgba(236,97,73,.7);
    border-radius: 19px;
    padding: 0 20px;
    margin-right: 20px;
    font-size: 14px;

    &.writing{
        background-color:#ea6f5a;
        color: white;
    }
`;

