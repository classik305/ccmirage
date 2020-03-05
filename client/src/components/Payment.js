import React, {Component} from 'react';
import {Toast, ToastBody, ToastHeader} from 'reactstrap';

class Payment extends Component {

    paymentStyle = {
        display: 'block',
        border: '3px purple solid',
        backgroundColor: 'gray',
        opacity: '.5',
        fontSize: '16px',
        margin: '3px'
    }

    render() {
        return (

            <div>
                <div className="p-3 my-2 rounded">
                    <Toast>
                        <ToastHeader>
                            Payment No. {this.props.paymentNumber + 1}
                        </ToastHeader>
                        <ToastBody>
                            Principal: ${this.props.payment - this.props.interestPaid}
                            <br />
                            Interest: ${this.props.interestPaid}
                            <br />
                            Total Payment: ${this.props.payment}
                        </ToastBody>
                    </Toast>
                </div>
            </div>
            // <div style={this.paymentStyle}>
            //     <p style={{margin: '3px'}}>
            //         {this.props.payment}
            //     </p>
            //     <p style={{margin: '3px'}}>
            //         {this.props.paymentNumber + 1}
            //     </p>
            //     <p style={{margin: '3px'}}>
            //         {this.props.interestPaid}
            //     </p>
            // </div>
        )
    }
}

export default Payment;