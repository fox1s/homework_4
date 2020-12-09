import React, {Component} from 'react';

class IdOfAllElem extends Component {
    render() {
        let {id} = this.props;
        return (
            <div>
                id: {id}
            </div>
        );
    }
}

export default IdOfAllElem;