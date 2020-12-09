import React, {Component} from 'react';

class FullUser extends Component {
    render() {
        let {id} = this.props;
        return (
            <div>
                id: {id}
            </div>
        );
    }
}

export default FullUser;