import React, { Component } from 'react';
import './App.css';

import Calculator from './Calculator/Calculator.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Calculator</h1>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
