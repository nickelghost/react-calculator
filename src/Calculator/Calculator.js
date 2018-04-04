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

  insert = (char) => {
    this.setState({
      input: this.state.input + char
    });
  }

  backspace = () => {
    const input = this.state.input;
    this.setState({
      input: input.substring(0, input.length - 1)
    });
  }

  wipe = () => {
    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <div className="Calculator">
        <input className="Calculator-input" onKeyPress={this.handleKeyPress}
          onChange={this.handleChange} value={this.state.input} />
        <div className="Calculator-row">
          <div className="Calculator-button Calculator-button-large" onClick={this.wipe}>
            C
          </div>
          <div className="Calculator-button" onClick={this.backspace}>
            &lt;--
          </div>
          <div className="Calculator-button" onClick={() => this.insert('/')}>
            /
          </div>
        </div>
        <div className="Calculator-row">
          <div className="Calculator-button" onClick={() => this.insert('7')}>
            7
          </div>
          <div className="Calculator-button" onClick={() => this.insert('8')}>
            8
          </div>
          <div className="Calculator-button" onClick={() => this.insert('9')}>
            9
          </div>
          <div className="Calculator-button" onClick={() => this.insert('*')}>
            *
          </div>
        </div>
        <div className="Calculator-row">
          <div className="Calculator-button" onClick={() => this.insert('4')}>
            4
          </div>
          <div className="Calculator-button" onClick={() => this.insert('5')}>
            5
          </div>
          <div className="Calculator-button" onClick={() => this.insert('6')}>
            6
          </div>
          <div className="Calculator-button" onClick={() => this.insert('-')}>
            -
          </div>
        </div>
        <div className="Calculator-row">
          <div className="Calculator-button" onClick={() => this.insert('1')}>
            1
          </div>
          <div className="Calculator-button" onClick={() => this.insert('2')}>
            2
          </div>
          <div className="Calculator-button" onClick={() => this.insert('3')}>
            3
          </div>
          <div className="Calculator-button" onClick={() => this.insert('+')}>
            +
          </div>
        </div>
        <div className="Calculator-row">
          <div className="Calculator-button Calculator-button-large" onClick={() => this.insert('0')}>
            0
          </div>
          <div className="Calculator-button" onClick={() => this.insert('.')}>
            .
          </div>
          <div className="Calculator-button" onClick={this.calculate}>
            =
          </div>
        </div>
      </div >
    );
  }
}

export default Calculator;