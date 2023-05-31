const numberClick = (e) => {
  const calcInput = document.querySelector('.input');
  calcInput.value += e.target.innerText;
  calcInput.value = Number(calcInput.value);
};
const operatorClick = (e) => {
  const calcInput = document.querySelector('.input');
  const saved = document.querySelector('.saved');
  saved.innerText = calcInput.value + e.target.innerText;
  calcInput.value = '';
};
const ac = () => {
  const calcInput = document.querySelector('.input');
  calcInput.value = '0';
};
const dot = (e) => {
  const calcInput = document.querySelector('.input');
  calcInput.value += e.target.innerText;
};
const result = () => {
  const calcInput = document.querySelector('.input');
  const saved = document.querySelector('.saved');
  const operator = saved.innerText[saved.innerText.length - 1];
  const number = saved.innerText.slice(0, saved.innerText.length - 1);
  if (operator === '+') {
    calcInput.value = Number(calcInput.value) + Number(number);
  }
  if (operator === '-') {
    calcInput.value = Number(number) - Number(calcInput.value);
  }
  if (operator === '÷') {
    calcInput.value = Number(number) / Number(calcInput.value);
  }
  if (operator === 'x') {
    calcInput.value = Number(calcInput.value) * Number(number);
  }
};
const porcentaje = () => {
  const calcInput = document.querySelector('.input');
  calcInput.value = Number(calcInput.value) / 100;
};
export {
  numberClick, operatorClick, ac, dot, result, porcentaje,
};
