import axios from "axios";
import * as actionType from "./actionType";


export const logOut = () => {
    return {
        type: actionType.LOG_OUT
    }
}

export const checkLogIn = (username, password)=>{
    return (dispatch) =>{
        axios.get("/api/logIn.json?username=" + username +"&password=" + password).then((res)=>{
            const res_username = res.data.data.username;
            const res_password = res.data.data.password;
            if(res_username === username && res_password ===password){
                alert("log in successfully.");
                dispatch(setLogInStatus(true));
            }else{
                console.log("username or password can not be found");
            }
        }).catch(()=>{
            console.log("login: error");
        })
    }
}

const setLogInStatus = (logInStatus) => {
    return {
        type: actionType.SET_LOGIN_STATUS,
        logInStatus
    }
}