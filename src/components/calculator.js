/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';

class calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  click = (e) => {
    // eslint-disable-next-line prefer-destructuring
    const value = e.target.value;
    const calc = calculate(this.state, value);
    this.setState(calc);
  };

  update = (e) => {
    this.setState({ total: e.target.value });
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-grid">
        <div className="output">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" onClick={this.click} value="AC" data-all-clear>AC</button>
        <button type="button" onClick={this.click} value="+/-" data-plusminus>±</button>
        <button type="button" onClick={this.click} value="%" data-percent>%</button>
        <button type="button" onClick={this.click} value="÷" className="operation" data-operation>÷</button>
        <button type="button" onClick={this.click} value="7" data-number>7</button>
        <button type="button" onClick={this.click} value="8" data-number>8</button>
        <button type="button" onClick={this.click} value="9" data-number>9</button>
        <button type="button" onClick={this.click} value="x" className="operation" data-operation>x</button>
        <button type="button" onClick={this.click} value="4" data-number>4</button>
        <button type="button" onClick={this.click} value="5" data-number>5</button>
        <button type="button" onClick={this.click} value="6" data-number>6</button>
        <button type="button" onClick={this.click} value="-" className="operation" data-operation>-</button>
        <button type="button" onClick={this.click} value="1" data-number>1</button>
        <button type="button" onClick={this.click} value="2" data-number>2</button>
        <button type="button" onClick={this.click} value="3" data-number>3</button>
        <button type="button" className="operation" onClick={this.click} value="+" data-operation>+</button>
        <button type="button" onClick={this.click} value="0" data-number className="span-two">0</button>
        <button type="button" onClick={this.click} value="." data-number>.</button>

        <button type="button" onClick={this.click} value="=" className="operation" data-equals>=</button>
      </div>
    );
  }
}

export default calculator;
