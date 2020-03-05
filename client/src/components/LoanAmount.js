import React, {Component} from 'react';

class LoanAmount extends Component {


    render() {
        return (
            <div>
                <p>
                    Loan Amount
                </p>
                <input type='text' onChange={this.props.updateLoanAmount.bind(this)}>
                </input>
            </div>

        )
    }
}

export default LoanAmount;