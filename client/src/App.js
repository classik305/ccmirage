import React, {Component} from 'react';

import Payments from './components/Payments';
import Chart from './components/Chart';
import BarChart from './components/BarChart';
import InputContainer from './components/InputContainer';

import './App.css';

class App extends Component {

  styling = () => {
    let mainContainerStyle;
    window.innerWidth >= 768 ? mainContainerStyle = {
      display: 'flex',
      flexDirection: 'row',
      height: 'inherit',
      overflowY: 'hidden',
      overflowX: 'hidden'
    } : mainContainerStyle = {};

      return mainContainerStyle;
  };

  state = {
    loanAmount: 0,
    interestRate: null,
    years: null,
    numberOfPayments: null,
    paymentAmount: null,
    payments: [],
    totalInterest: null,
    totalPaid: 0
  }

  updateLoanAmount = (input) => {
    this.setState({loanAmount: input.target.value
    });
  }

  updateYears = (input) => {
    this.setState({duration: input.target.value});
  }

  updateInterestRate = (input) => {
    this.setState({interestRate: input.target.value});
  }

  //----- CALCULATIONS -----//

  calculatePayment = () => {
    const newNumberOfPayments = this.state.duration * 12;
    //const effectiveInterest = Math.pow(1 + this.state.interestRate / 100,(1 / 12)) - 1;
    const effectiveInterest = this.state.interestRate/(12 * 100);
    const v = 1 / (1 + effectiveInterest);
    const aAngleN = (1 - Math.pow(v,newNumberOfPayments)) / effectiveInterest;
    const paymentAmount = (Math.round(this.state.loanAmount / aAngleN * 100) / 100);

    //----- CALC PAYMENT/INTEREST ARRAYS -----//
    const payments = [];
    for(let i=0; i<newNumberOfPayments; i++) {
      payments.push({
          amount: paymentAmount,
          number: i,
          interest: Math.round(paymentAmount * (1 - Math.pow(v, newNumberOfPayments - i + 1)) * 100) / 100
      });
    };

    //----- SUM INTEREST -----//
    let totalInterest = 0;
    for (let i=0 ; i < payments.length ; i++) {
      totalInterest = totalInterest + payments[i].interest;
    };
    totalInterest = Math.round(totalInterest * 100) / 100;

    this.setState({
      numberOfPayments: newNumberOfPayments,
      paymentAmount: paymentAmount,
      payments: payments,
      totalInterest: totalInterest,
      totalPaid: this.state.loanAmount + totalInterest});
  }

  //----- ------- -----//
  render() {
    document.getElementById('root').style.height = '100%';
    document.getElementById('root').style.width = '100vw';
    return (
      <div style={{height: '100%'}}>
        <div style={{
          padding:'10px',
          backgroundColor: '#9A8DCC',
          textAlign: 'center'
          //borderRadius: '10px 10px 10px 10px'
          }}>
            <h1>LOAN CALCULATOR</h1>
            <InputContainer
              updateLoanAmount={this.updateLoanAmount}
              updateYears={this.updateYears}
              updateInterestRate={this.updateInterestRate}
              calculatePayment={this.calculatePayment}/>
        </div>
        <div
          style={{height: '87%'}}
          >
          <div
            //style={this.styling()}
            className='main-container'
            >
            <div style={{
              flex: '1',
              backgroundColor: '#9C97AE'
              //borderRadius: '10px 10px 10px 10px'
              }}>
            <h4 style={{height: '5%', display: 'block'}}>{this.state.paymentAmount !== null ? `Monthly Payment: ${this.state.paymentAmount}` : ''}</h4>
            <h4 style={{height: '5%', display: 'block'}}>{this.state.totalInterest !== null ? `Total Interest: ${this.state.totalInterest}` : ''}</h4>
              <div
              style={{
                height: '90%',
                overflowY: 'auto'
                }}>
                <Payments
                  payments={this.state.payments}>
                </Payments>
              </div>
            </div>
            <div style={{flex: '3'}}>
              <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div style={{flex: '1'}}>
                  <Chart
                    totalPaid={this.state.totalPaid}
                    totalInterest={this.state.totalInterest}
                    loanAmount={this.state.loanAmount}></Chart>
                </div>
                <div style={{flex: '1.5'}}>
                  <BarChart
                  totalPaid={this.state.totalPaid}
                  totalInterest={this.state.totalInterest}
                  loanAmount={this.state.loanAmount}
                  payments={this.state.payments}></BarChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;