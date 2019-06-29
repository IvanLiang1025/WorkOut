
import styled from "styled-components";

export const LoginWrapper = styled.div`
    height: 100%;
    // // min-height: 750px;
    position: absolute;
    left: 0;
    right: 0;
    top: 56px;
    bottom: 0;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
`;

export const LoginBox = styled.div`
    
    width: 400px;
    height: 300px;
    margin: 40px auto;
    padding: 50px 50px;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    background: #fff;
    box-sizing: border-box;
    .login-title{
        display: block;
        margin: 0 auto 20px;
        padding: 10px;
        font-weight: bold;
        color: #969696;
    }
`;



export const Input = styled.input`
   
    width: 200px;
    height: 20px;
    padding: 5px 5px;
    border: 1px solid #c8c8c8;
    outline: none;
    margin: 5px 0;
    color: #777;

`;

export const Button = styled.button`
    width: 200px;
    padding: 5px 10px;
    margin: 20px 0;
    border: none;
    border-radius: 20px;
    color: #fff;
    background-color: #3194D0;
    cursor: pointer;
    outline: none;
`;