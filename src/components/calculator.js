/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [data, setState] = useState({ total: 0, next: null, operation: null });

  const click = (e) => {
    // eslint-disable-next-line prefer-destructuring
    const value = e.target.value;
    const calc = calculate(data, value);
    setState(calc);
  };

  const update = (e) => {
    setState({ total: e.target.value });
  };

  return (
    <div className="calculator-grid">
      <div className="output" onChange={update}>
        {data.total}
        {data.operation}
        {data.next}
      </div>
      <button type="button" onClick={click} value="AC" data-all-clear>AC</button>
      <button type="button" onClick={click} value="+/-" data-plusminus>±</button>
      <button type="button" onClick={click} value="%" data-percent>%</button>
      <button type="button" onClick={click} value="÷" className="operation" data-operation>÷</button>
      <button type="button" onClick={click} value="7" data-number>7</button>
      <button type="button" onClick={click} value="8" data-number>8</button>
      <button type="button" onClick={click} value="9" data-number>9</button>
      <button type="button" onClick={click} value="x" className="operation" data-operation>x</button>
      <button type="button" onClick={click} value="4" data-number>4</button>
      <button type="button" onClick={click} value="5" data-number>5</button>
      <button type="button" onClick={click} value="6" data-number>6</button>
      <button type="button" onClick={click} value="-" className="operation" data-operation>-</button>
      <button type="button" onClick={click} value="1" data-number>1</button>
      <button type="button" onClick={click} value="2" data-number>2</button>
      <button type="button" onClick={click} value="3" data-number>3</button>
      <button type="button" className="operation" onClick={click} value="+" data-operation>+</button>
      <button type="button" onClick={click} value="0" data-number className="span-two">0</button>
      <button type="button" onClick={click} value="." data-number>.</button>

      <button type="button" onClick={click} value="=" className="operation" data-equals>=</button>
    </div>
  );
}

export default Calculator;
