import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>users</Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>posts</Link>
                    </div>
                    <div>
                        <Link to={'/comments'}>comments</Link>
                    </div>
                    <hr/>
                    <div>
                        <Switch>
                            <Route path={'/users'} render={() => <AllUsers/>}/>
                        </Switch>
                        <Switch>
                            <Route path={'/posts'} render={() => <AllPosts/>}/>
                        </Switch>
                        <Switch>
                            <Route path={'/comments'} render={(props) => <AllComments/>}/>
                        </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;