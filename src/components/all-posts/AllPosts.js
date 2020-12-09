import React, {Component} from 'react';
import {PostsService} from "../services/PostsService";
import PostComponent from "../posts/PostComponent";

class AllPosts extends Component {
    PostsService = new PostsService()
    state = {posts: []}
    componentDidMount() {
        this.PostsService.getAllPostsFromAPI().then(posts => this.setState({posts}))
    }


    render() {
        let {posts} = this.state;
        return (
            <div>
                {posts.map((value, index) => {
                    if(index<10){
                        return <PostComponent item={value} key={value.id}/>
                    }
                    return  false
                })}
            </div>
        );
    }
}
export default AllPosts;