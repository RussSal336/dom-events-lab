// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.


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
let displayText = '';

/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function(event) {
    currentNumber += event.target.innerText;
      display.innerText = currentNumber;
  })
}

/* good above */

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function(event) {
    console.log(event.target);
    if (event.target.textContent === 'C') {
      display.textContent = '0';
      firstNumber = '';
      currentNumber = '';
      console.log(firstNumber, currentNumber, operator);
    } else {
      operator = event.target.innerText;
      firstNumber = currentNumber;
      currentNumber = '';
      display.innerText = operator;
    }
  })
}



// good below


equalsButton.addEventListener('click', function(event) {
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
});

/*-------------------------------- Functions --------------------------------*/


