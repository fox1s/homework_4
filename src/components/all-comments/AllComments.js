import React, {Component} from 'react';
import {CommentsService} from "../services/CommentsService";
import CommentComponent from "../comment/CommentComponent";
import {Route, Switch, withRouter} from "react-router-dom";
import IdOfAllElem from "../Id-of-all-elem/IdOfAllElem";

class AllComments extends Component {
    CommentsService = new CommentsService()
    state = {comments: []}

    componentDidMount() {
        this.CommentsService.getAllCommentsFromAPI().then(comments => this.setState({comments}))
    }

    render() {
        let {comments} = this.state
        let {match:{url}} = this.props
        return (
            <div>
                {
                    comments.map((value, index) => {
                        if (index < 10) {
                            return <CommentComponent item={value} key={value.id}/>
                        }
                        return false
                    })
                }
                <hr/>
                <Switch>
                    <Route path={`${url}/:id`} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <IdOfAllElem id={id}/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(AllComments);