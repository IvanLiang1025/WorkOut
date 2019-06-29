        


import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {
    DetailWrapper,
    Title,
    Author,
    AuthorInfo,
    Content
} from "./detail_style";

class Detail extends React.Component{
    componentDidMount(){
        this.props.getDetailPage(this.props.match.params.id);
        console.log(this.props.match.params);
    }
    render(){
      
        const {content, title, author, imgUrl} = this.props;
        return (
            <DetailWrapper>
                <Title>{title}</Title>
                <Author>
                    <img alt="author-img" className="author-img" src={imgUrl}></img>
                    <AuthorInfo>{author}</AuthorInfo>
                </Author>
                <Content dangerouslySetInnerHTML={{__html:content}} />
            </DetailWrapper>
        )
    }
}

const mapStateToProps = (state) =>  {
    return {
        title: state.detail.title,
        author: state.detail.author,
        content: state.detail.content,
        imgUrl: state.detail.imgUrl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailPage(id){
            dispatch(actionCreators.loadDetailData(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);