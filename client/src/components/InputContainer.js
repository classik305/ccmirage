import React, {Component} from 'react';
import {InputGroup, InputGroupText, InputGroupAddon, Input, Container, Row, Col, Button} from 'reactstrap';

class InputContainer extends Component {

    styleContainer = {
        border: 'solid rgba(54, 162, 235, 0.6) 3px',
        padding: '8px',
        margin: '8px'
    }

    render() {
        return (
            <Container fluid={true}>
                <Row noGutters={true}>
                    <Col>
                        <InputGroup
                            onChange={this.props.updateLoanAmount}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText
                                    style={{
                                        backgroundColor: '#9C97AE',
                                        border: '0px'
                                        }}>Loan Amount</InputGroupText>
                            </InputGroupAddon>
                            <Input />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup
                            onChange={this.props.updateYears}>
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText
                                    style={{
                                        backgroundColor: '#9C97AE',
                                        border: '0px'
                                        }}>Duration (in years)</InputGroupText>
                                </InputGroupAddon>
                                <Input />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup
                            onChange={this.props.updateInterestRate}>
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText
                                    style={{
                                        backgroundColor: '#9C97AE',
                                        border: '0px'
                                        }}>Interest Rate</InputGroupText>
                            </InputGroupAddon>
                            <Input />
                        </InputGroup>
                    </Col>
                    <Col xs="1">
                        <div>
                            <Button
                                style={{backgroundColor: '#6844ED'}}
                                onClick={this.props.calculatePayment}>
                                    CALCULATE
                            </Button>    
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default InputContainer;