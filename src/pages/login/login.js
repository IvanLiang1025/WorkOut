

import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {Redirect} from "react-router-dom";
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from "./login_style";

class Login extends React.Component{

    render(){
        const {logInStatus} = this.props;
        if (!logInStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <h4 className="login-title">Login</h4>
                        
                        <Input placeholder="username" ref={(input)=>{ this.username=input}}></Input>
                        <Input placeholder="password" type="password" ref={(input)=>{this.password=input}}></Input>
                        <Button onClick={()=>{this.props.logIn(this.username, this.password)}}>Log in</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/"></Redirect>
        }
        
        
        
    }
}

const mapStateToProps = (state) =>{
    return {
        logInStatus: state.logIn.logInStatus
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        logIn(usernameEle, passwordEle){
            const username = usernameEle.value;
            const password = passwordEle.value;
            console.log(username, password);
            dispatch(actionCreators.checkLogIn(username, password));

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);