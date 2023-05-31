import React from 'react';

const Calculator = () => (
  <div className="calculator">
    <h2>Lets do some math </h2>
    <div className="calculator-box">
      <form>
        <div className="grid">
          <input type="text" value="0" readOnly />
          <div className="buttons">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="calc">+</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="calc">x</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="calc">-</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="calc">+</button>
            <button type="button" className="cero">0</button>
            <button type="button">.</button>
            <button type="button" className="calc">=</button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Calculator;
