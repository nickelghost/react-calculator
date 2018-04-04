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
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '+', '-', '*', '/', '.', 'Enter'
  ]

  calculate = () => {
    const input = this.state.input;
    const nums = input.split(/[+*/-]/);
    const operators = input.split(/[0-9.]/).filter((el) => el.length !== 0);
    console.log(operators);
    let currentNum = Number(nums.splice(0, 1));

    for (let i = 0; i < nums.length; i++) {
      const nextNum = Number(nums[i]);
      const operator = operators[i];
      if (operator === '+') {
        currentNum += nextNum;
      } else if (operator === '-') {
        currentNum -= nextNum;
      } else if (operator === '*') {
        currentNum *= nextNum;
      } else if (operator === '/') {
        currentNum /= nextNum;
      }
    }
    this.setState({
      input: String(currentNum)
    });
  }

  handleKeyPress = (e) => {
    if (!this.getAllowedKeys().includes(e.key)) {
      e.preventDefault();
    }
    if (e.key === 'Enter') {
      this.calculate();
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
        <input className="Calculator-input" onKeyPress={this.handleKeyPress}
          onChange={this.handleChange} value={this.state.input} />
      </div>
    );
  }
}

export default Calculator;