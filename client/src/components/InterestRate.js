import React, {Component} from 'react';

class InterestRate extends Component {


    render() {
        return (
            <div>
                <p>
                    Interest Rate
                </p>
                <input type='text' onChange={this.props.updateInterestRate.bind(this)}>
                </input>
            </div>

        )
    }
}

export default InterestRate;