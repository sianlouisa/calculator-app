import React, { Component } from 'react';
import Buttons from './component/Buttons';
import Display from './component/Display';
import './App.css';
import math from 'mathjs';

class App extends Component {
  state = {
    calculation: [],
    error: '',
  };
  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Display input={this.state.calculation} error={this.state.error} />
        <Buttons
          getCalculation={this.getCalculation}
          clearCalculation={this.clearCalculation}
          deleteLastInput={this.deleteLastInput}
          returnVal={this.returnVal}
          value={this.state.calculation}
        />
      </div>
    );
  }

  clearCalculation = () => {
    this.setState({
      calculation: [],
      error: '',
    });
  };

  returnVal = () => {
    let result = this.state.calculation.join('');
    console.log(result);
    // refactor with regex
    if (
      (result[0] === '*') |
      (result[0] === '+') |
      (result[0] === '/') |
      (result[0] === '-') |
      (result.slice(-1)[0] === '*') |
      (result.slice(-1)[0] === '+') |
      (result.slice(-1)[0] === '/') |
      (result.slice(-1)[0] === '-')
    ) {
      this.setState({
        calculation: this.state.calculation,
        error: 'Invalid Calculation',
      });
    } else {
      result = math.eval(result);
      this.setState(
        {
          calculation: [result],
        },
        () => this.saveData,
      );
    }
  };

  getCalculation = input => {
    const calculation = this.state.calculation;
    calculation.push(input);
    this.setState(
      {
        calculation,
      },
      () => this.saveData,
    );
  };

  deleteLastInput = () => {
    const calculation = this.state.calculation;
    calculation.pop();
    this.setState({
      calculation,
      error: '',
    });
  };

  saveData = () => {
    localStorage.setItem('data', JSON.stringify(this.state));
  };
}

export default App;
