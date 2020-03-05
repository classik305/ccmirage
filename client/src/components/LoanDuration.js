import React, {Component} from 'react';

class LoanDuration extends Component {
    render() {
        return (
            <div>
                <p>
                    Duration (in years)
                </p>
                <input type='text' onChange={this.props.updateYears.bind(this)}>
                </input>
            </div>
        )
    }
}

export default LoanDuration;