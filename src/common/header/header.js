import React from "react";
import { connect } from "react-redux";
import {actionCreators} from "./headerStore/index";
import {actionCreators as logInActionCreators} from "../../pages/login/store";
import {Link} from "react-router-dom";
import {
    HeaderWrapper, 
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoChange,
    SearchInfoItem,
    Addition,
    Button
} from "./header_style";


class Header extends React.Component{
    
    getListArea = () => {
        const {
            focused, list, page, totalPage, mouseIn, 
            handleMouseEnter, handleMouseLeave, handleListChange
        } = this.props;
        const pageList = [];
        if(  list.length){
            for(let i = (page-1)*10; i < page*10; i++){
                if(list[i]!== undefined){
                    pageList.push( <SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>);
                }
            }
        }
        
        if(focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                        <SearchInfoTitle>
                            Popular
                            <SearchInfoChange onClick={()=> handleListChange(page, totalPage)}>
                            Change
                            </SearchInfoChange>
                        </SearchInfoTitle>
                        <div>
                            {pageList}
                        </div>
                    </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        const { logInStatus, handleFocus, handleBlur, handleLogOut} = this.props;
        
        return (
            <HeaderWrapper>
                    <Logo>WorkOut</Logo>
                <Nav>
                    <NavItem className="left active">Home</NavItem>
                    <NavItem className="left">Download App</NavItem>
                    {
                      
                        !logInStatus ? <NavItem className="right"><Link to="/login" style={{textDecoration: "none"}}>Login</Link> </NavItem> :
                        <NavItem className="right" onClick={()=>{handleLogOut()}}>Log out </NavItem>
                    }
                   
                    <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                    <SearchWrapper>
                        <NavSearch 
                        onFocus={handleFocus}
                        onBlur ={handleBlur}>
                        </NavSearch>
                        <span className="iconfont">&#xe637;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                    
                </Nav>
                <Addition>
                    <Button className="writing"><span className="iconfont">&#xe603;</span>Issue</Button>
                    <Button>Sign up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused,
        list: state.header.list,
        page: state.header.page,
        totalPage: state.header.totalPage,
        mouseIn: state.header.mouseIn,
        logInStatus: state.logIn.logInStatus
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        handleFocus(){ 
            dispatch(actionCreators.searchPopular());
            dispatch(actionCreators.searchFocus());
        },
        handleBlur(){
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleListChange(page, totalPage){
           
            if(page < totalPage){
                dispatch(actionCreators.changeList(page+1));
            }else{
                dispatch(actionCreators.changeList(1));
            }
        },
        handleLogOut(){
            dispatch(logInActionCreators.logOut());
 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);