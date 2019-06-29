
import React from "react";
import {connect} from "react-redux";
import {
    WriterWrapper,
    WriterTitle,
    WriterChange,
    Author
} from "../home_style"; 

class Writer extends React.Component{
    render(){
        return (
            <WriterWrapper>
                <WriterTitle>
                    Recommended Writers
                    <WriterChange>change</WriterChange>
                </WriterTitle>
                {
                    this.props.writerList.map((writer) => {
                        return (
                            <Author key={writer.id}>
                                <img alt="author-img" className="author-img" src={writer.imgUrl}></img>
                                <p className="author-name">{writer.name}</p>
                            </Author>
                        )    
                    })
                }            
                </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        writerList: state.home.writerList
    }
}

export default connect(mapStateToProps, null)(Writer);