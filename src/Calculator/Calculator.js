import React, { Component } from 'react';

import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  getAllowedKeys = () => [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'Enter'
  ]

  handleKeyPress = (e) => {
    if (!this.getAllowedKeys().includes(e.key)) {
      e.preventDefault();
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div className="Calculator">
        <input className="Calculator-input" onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Calculator;