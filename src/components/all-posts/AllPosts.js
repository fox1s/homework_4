import React, {Component} from 'react';
import {PostsService} from "../services/PostsService";
import PostComponent from "../posts/PostComponent";
import {Route, Switch,withRouter} from "react-router-dom";
import IdOfAllElem from "../Id-of-all-elem/IdOfAllElem";

class AllPosts extends Component {
    PostsService = new PostsService()
    state = {posts: []}
    componentDidMount() {
        this.PostsService.getAllPostsFromAPI().then(posts => this.setState({posts}))
    }


    render() {
        let {posts} = this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                {posts.map((value, index) => {
                    if(index<10){
                        return <PostComponent item={value} key={value.id}/>
                    }
                    return  false
                })}
                <hr/>
                  <Switch>
                      <Route path={`${url}/:id`} render={(props)=>{
                          let {match:{params:{id}}} = props;
                          return <IdOfAllElem id ={id}/>
                      }}/>
                  </Switch>
            </div>
        );
    }
}
export default withRouter(AllPosts);