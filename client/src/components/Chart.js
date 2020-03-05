import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class Chart extends Component {

    chartData = () => {
        return {
            labels: ['Interest', 'Principal'],
            datasets: [
                {
                    label: 'Total Paid',
                    data: [this.props.totalInterest, this.props.loanAmount],
                    backgroundColor: ['rgba(255, 99, 132, 0.6)','#7A62D5'],
                    borderColor: 'rgb(197, 179, 197)',

                }
            ]
        }
    } 

    render() {
        return (
            <Doughnut
                data={this.chartData()}
                options={{
                    title: {
                        display: true,
                        text: `Total Paid: ${this.props.totalPaid}`
                    },
                    maintainAspectRatio: false,
                    responsive: true
                }}></Doughnut>
        )
    }

}

export default Chart;