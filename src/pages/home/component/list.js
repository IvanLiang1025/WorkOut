



import React from "react";
import {connect} from "react-redux";
import { actionCreators } from "../store/index";
import {Link} from "react-router-dom";
import {
    ListItem,
    ItemInfo,
    LoadMoreList
} from "../home_style"
class List extends React.Component{
    render(){
        const {loadMoreList} = this.props;
        return (
            <div>
                {
                    this.props.articleList.map((item)=>{
                        return(
                           
                            <ListItem key={item.id}>
                                <img className="list-pic" alt="list-pic" src={item.imgUrl}></img>
                                <ItemInfo>
                                <Link to={"/detail/" + item.id} >  <h2 className="title">{item.articleTitle}</h2></Link>
                                    <p className="description">{item.articleDescription}</p>
                                </ItemInfo>
                            </ListItem>
                        
                           
                        )
                    })
                }
                <LoadMoreList onClick={loadMoreList}>Load More</LoadMoreList>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        articleList: state.home.articleList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMoreList(){
            dispatch(actionCreators.getMoreList());
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(List);