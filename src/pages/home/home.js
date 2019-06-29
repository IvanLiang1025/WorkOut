import React from "react";
import List from "./component/list";
import Recommend from "./component/recommend";
import { connect } from "react-redux"; 
import Writer from "./component/writer";
import {actionCreators} from "./store/index";
import mainImg from "./images/main.jpg";

import {
    HomeWrapper,  
    HomeLeft,
    HomeRight,
    BackToTop
} from "./home_style";


class Home extends React.Component{
    componentDidMount(){
        this.props.getHomePage();   
    }

    handleBackTop = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="banner-img" src={mainImg}></img>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                <BackToTop onClick={this.handleBackTop}>Top</BackToTop>
            </HomeWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getHomePage() {
            dispatch(actionCreators.getHomeData());
        },
        // handleBackTop()
    }
};

export default connect(null, mapDispatchToProps)(Home);