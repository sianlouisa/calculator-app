import React from 'react';

class Buttons extends React.Component {
  state = { input: '' };
  render() {
    return (
      <>
        <button value="1" onClick={this.handleClick}>
          1
        </button>
        <button value="2" onClick={this.handleClick}>
          2
        </button>
        <button value="3" onClick={this.handleClick}>
          3
        </button>
        <button value="4" onClick={this.handleClick}>
          4
        </button>
        <button value="5" onClick={this.handleClick}>
          5
        </button>
        <button value="6" onClick={this.handleClick}>
          6
        </button>
        <button value="7" onClick={this.handleClick}>
          7
        </button>
        <button value="8" onClick={this.handleClick}>
          8
        </button>
        <button value="9" onClick={this.handleClick}>
          9
        </button>
        <button value="0" onClick={this.handleClick}>
          0
        </button>
        <button value="." onClick={this.handleClick}>
          .
        </button>
        <button value="*" onClick={this.handleClick}>
          *
        </button>
        <button value="-" onClick={this.handleClick}>
          -
        </button>
        <button value="+" onClick={this.handleClick}>
          +
        </button>
        <button value="/" onClick={this.handleClick}>
          /
        </button>
        <button value="c" onClick={this.props.clearCalculation}>
          C
        </button>
        <button value="back" onClick={this.props.deleteLastInput}>
          B
        </button>
      </>
    );
  }

  handleClick = event => {
    const input = event.target.value;
    this.props.getCalculation(input);
  };
}

export default Buttons;
