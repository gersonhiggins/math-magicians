import React from 'react';
import {
  numberClick, operatorClick, ac, dot, result, porcentaje,
} from '../modules/calculate';

const Calculator = () => (
  <div className="calculator">
    <h2>Lets do some math </h2>
    <div className="calculator-box">
      <form>
        <div className="grid">
          <input className="input" type="text" value="0" readOnly />
          <p className="saved">0</p>
          <div className="buttons">
            <button onClick={ac} type="button" className="ac">AC</button>
            <button onClick={operatorClick} type="button" className="operator">+/-</button>
            <button onClick={porcentaje} type="button" className="operator">%</button>
            <button onClick={operatorClick} type="button" className="calc operator">÷</button>
            <button onClick={numberClick} type="button" className="number">7</button>
            <button onClick={numberClick} type="button" className="number">8</button>
            <button onClick={numberClick} type="button" className="number">9</button>
            <button onClick={operatorClick} type="button" className="calc operator">x</button>
            <button onClick={numberClick} type="button" className="number">4</button>
            <button onClick={numberClick} type="button" className="number">5</button>
            <button onClick={numberClick} type="button" className="number">6</button>
            <button onClick={operatorClick} type="button" className="calc operator">-</button>
            <button onClick={numberClick} type="button" className="number">1</button>
            <button onClick={numberClick} type="button" className="number">2</button>
            <button onClick={numberClick} type="button" className="number">3</button>
            <button onClick={operatorClick} type="button" className="calc operator">+</button>
            <button onClick={numberClick} type="button" className="number cero">0</button>
            <button onClick={dot} type="button" className="number">.</button>
            <button onClick={result} type="button" className="calc result">=</button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Calculator;
