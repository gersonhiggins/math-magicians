import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons';
import calculate from '../logic/calculate';
import Result from './result';

const Calculator = ({ begin }) => {
  const [obj, setObj] = useState({ next: begin });
  const buttonClick = (buttonName) => {
    setObj((obj) => calculate(obj, buttonName));
  };

  const operation = obj.next ? obj.next : obj.total || 0;

  return (
    <div className="calculator">
      <h2>Lets do some math </h2>
      <div className="calc-box">
        <Result value={operation} />
        <Buttons onButtonClick={buttonClick} />
      </div>
    </div>
  );
};

Calculator.propTypes = { begin: PropTypes.number };
Calculator.defaultProps = { begin: 0 };

export default Calculator;
