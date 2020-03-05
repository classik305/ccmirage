import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {

    chartData = () => {

        const payments = [];
        const interestPayments = [];
        const paymentNumbers = [];

        for(let i=0 ; i<this.props.payments.length ; i++) {
            payments.push(this.props.payments[i].amount);
            interestPayments.push(this.props.payments[i].interest);
            paymentNumbers.push(i+1);
        };

        return {
            labels: paymentNumbers,
            datasets: [
                {
                    label: 'Interest',
                    type: 'line',
                    data: interestPayments,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgb(197, 179, 197)',
                },
                {
                    label: 'Payments',
                    type: 'bar',
                    data: payments,
                    backgroundColor: '#7A62D5',
                    borderColor: 'rgb(165, 110, 165)',
                }
            ]
        }
    }

    render() {
        return (
            <Bar
                data={this.chartData()}
                options={{
                    maintainAspectRatio: false,
                    responsive: true}}>
            </Bar>
        )
    }

}

export default BarChart;