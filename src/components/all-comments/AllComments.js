import React, {Component} from 'react';
import {CommentsService} from "../services/CommentsService";
import CommentComponent from "../comment/CommentComponent";

class AllComments extends Component {
    CommentsService = new CommentsService()
    state = {comments:[]}
    componentDidMount() {
        this.CommentsService.getAllCommentsFromAPI().then(comments => this.setState({comments}))
    }

    render() {
        let {comments} = this.state
        return (
            <div>
                {
                    comments.map((value, index) => {
                    if(index<10){
                        return <CommentComponent item = {value} key = {value.id}/>
                    }
                    return  false
                })
                }
            </div>
        );
    }
}

export default AllComments;