import React, {Component} from 'react';
import {UsersService} from "../services/UsersService";
import UserComponent from "../user/UserComponent";
import {Route, Switch, withRouter} from 'react-router-dom';
import IdOfAllElem from "../Id-of-all-elem/IdOfAllElem";

class AllUsers extends Component {
    UserService = new UsersService()
    state = {users: []}
    async componentDidMount() {
        await this.UserService.getAllUsersFromAPI().then(users => this.setState({users}))
    }


    render() {
        let {users} = this.state;
        let {match:{url}} = this.props
        return (
            <div>
                {users.map(value => <UserComponent item = {value} key = {value.id}/>)}
              <hr/>
              <div>
                  <Switch>
                      <Route path={`${url}/:id`} render={(props)=>{
                          let {match:{params:{id}}} = props;
                          return <IdOfAllElem id ={id}/>
                      }}/>
                  </Switch>
              </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);