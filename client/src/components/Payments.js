import React, {Component} from 'react';

import Payment from './Payment';

class Payments extends Component {

    render() {
        return (
            <div>
                {this.props.payments.map(payment => (
                    <Payment
                        payment={payment.amount}
                        paymentNumber={payment.number}
                        interestPaid={payment.interest}>
                    </Payment>
                    ))}
            </div>
        )
    }
}

export default Payments;