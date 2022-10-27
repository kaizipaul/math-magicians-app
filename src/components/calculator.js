/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class calculator extends React.Component {
  render() {
    return (
      <div className="calculator-grid">
        <div className="output">
          <div data-previous-operand className="previous-operand" />
          <div data-current-operand className="current-operand" />
        </div>
        <button type="button" data-all-clear className="span-two">AC</button>
        <button type="button" data-delete>DEL</button>
        <button type="button" data-operation>÷</button>
        <button type="button" data-number>1</button>
        <button type="button" data-number>2</button>
        <button type="button" data-number>3</button>
        <button type="button" data-operation>*</button>
        <button type="button" data-number>4</button>
        <button type="button" data-number>5</button>
        <button type="button" data-number>6</button>
        <button type="button" data-operation>+</button>
        <button type="button" data-number>7</button>
        <button type="button" data-number>8</button>
        <button type="button" data-number>9</button>
        <button type="button" data-operation>-</button>
        <button type="button" data-number>.</button>
        <button type="button" data-number>0</button>
        <button type="button" data-equals className="span-two">=</button>
      </div>
    );
  }
}

export default calculator;
