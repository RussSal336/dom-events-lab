/*-------------------------------- Constants --------------------------------*/

const numberButtons = document.querySelectorAll('.button.number');
const operatorButtons = document.querySelectorAll('.button.operator');
const equalsButton = document.querySelector('.button.equals');
const display = document.querySelector('.display');
const calculator = document.querySelector('#calculator');

/*-------------------------------- Variables --------------------------------*/

let firstNumber = '';
let currentNumber = '';
let operator = null;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function (event) {
    currentNumber += event.target.innerText;
    display.innerText = currentNumber;
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function (event) {
    if (event.target.textContent === 'C') {
      display.textContent = '0';
      firstNumber = '';
      currentNumber = '';
    } else {
      operator = event.target.innerText;
      firstNumber = currentNumber;
      currentNumber = '';
      display.innerText = operator;
    }
  });
}

equalsButton.addEventListener('click', function (event) {
  let result;
  const num1 = Number(firstNumber);
  const num2 = Number(currentNumber);

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  }
  display.innerText = result;
  firstNumber = result;
  currentNumber = result;
  operator = null;
});

/*-------------------------------- Functions --------------------------------*/
 
