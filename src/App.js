import React, { Component } from 'react';
import Button from './component/Button';
import Buttons from './component/Buttons';
import Display from './component/Display';
import './App.css';

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
        />
        <Button returnVal={this.returnVal} />
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
    const result = this.state.calculation.join('');
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
        calculation: result,
        error: 'Invalid Calculation',
      });
    } else
      this.setState(
        {
          calculation: eval(result),
        },
        () => this.saveData,
      );
  };

  getCalculation = input => {
    const calculation = this.state.calculation;
    calculation.push(input);
    this.setState({
      calculation,
    });
  };

  saveData = () => {
    localStorage.setItem('data', JSON.stringify(this.state));
  };
}

export default App;
