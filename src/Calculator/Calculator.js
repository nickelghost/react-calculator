import React, { Component } from 'react';

import './Calculator.css';

class Calculator extends Component {
  getAllowedKeys = () => [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'Enter'
  ]

  handleKeyPress = (e) => {
    if (!this.getAllowedKeys().includes(e.key)) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div className="Calculator">
        <input className="Calculator-input" onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default Calculator;