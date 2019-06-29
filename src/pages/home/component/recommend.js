import React from "react";
import {connect} from "react-redux";
import{
    RecommendWrapper,
    RecommendItem
} from "../home_style";

class Recommend extends React.Component{
    render(){
        return (
            <RecommendWrapper>
                {
                    this.props.recommendList.map((item) => {
                        return(
                            <RecommendItem key={item.id} imgUrl={item.imgUrl}>{item.title}</RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommendList: state.home.recommendList
    }
}
export default connect(mapStateToProps,null)(Recommend);