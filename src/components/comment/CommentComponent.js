import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class CommentComponent extends Component {
    render() {
        let {item, match:{url}} = this.props
        return (
            <div>
                {item.id}. {item.name} <Link to={`${url}/${item.id}`}>details</Link>
            </div>
        );
    }
}

export default withRouter(CommentComponent);