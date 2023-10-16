// Calculator Variables
let operator;
let number1;
let number2;
let display;
let currentNumber = '0';

// DOM variables
const calcDisplay = document.querySelector('#calc-display');
const calcCurrentNumber = document.querySelector('#calc-current-number');
const btnClear = document.querySelector('#btn-clear');
const btn0 = document.querySelector('#btn-0');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');
const btn6 = document.querySelector('#btn-6');
const btn7 = document.querySelector('#btn-7');
const btn8 = document.querySelector('#btn-8');
const btn9 = document.querySelector('#btn-9');
const btnDec = document.querySelector('#btn-decimal');
const btnAdd = document.querySelector('#btn-add');
const btnSub = document.querySelector('#btn-sub');
const btnMult = document.querySelector('#btn-mult');
const btnDiv = document.querySelector('#btn-div');
const btnEqual = document.querySelector('#btn-equal');

// DOM events
// Numbers
btn0.addEventListener('click', () => updateCurrentNumber('0'))
btn1.addEventListener('click', () => updateCurrentNumber('1'))
btn2.addEventListener('click', () => updateCurrentNumber('2'))
btn3.addEventListener('click', () => updateCurrentNumber('3'))
btn4.addEventListener('click', () => updateCurrentNumber('4'))
btn5.addEventListener('click', () => updateCurrentNumber('5'))
btn6.addEventListener('click', () => updateCurrentNumber('6'))
btn7.addEventListener('click', () => updateCurrentNumber('7'))
btn8.addEventListener('click', () => updateCurrentNumber('8'))
btn9.addEventListener('click', () => updateCurrentNumber('9'))
btnDec.addEventListener('click', () => updateCurrentNumber('.'))
// Operators
btnAdd.addEventListener('click', () => updateOperator('+'))
btnSub.addEventListener('click', () => updateOperator('-'))
btnMult.addEventListener('click', () => updateOperator('*'))
btnDiv.addEventListener('click', () => updateOperator('/'))

// Math Functions
function add(a, b) {
    console.log(arguments);
    return a + b;
}
function subtract(a, b) {
    console.log(arguments);
    return a - b;
}
function multiply(a, b) {
    console.log(arguments);
    return a * b;
}
function divide(a, b) {
    console.log(arguments);
    return a / b;
}

// UI Functions

/**
 * 
 * @param {string} op the mathematical operator
 * @param {number} num1 the first number in the operation
 * @param {number} num2 the second number in the operation
 * @returns the result of the operation using the two numbers as input. num1 is the left-hand side of operations.
 */
function operate(op, num1, num2) {
    if (op === '+' || op.toLowerCase() === 'add')
        return add(num1, num2);
    if (op === '-' || op.toLowerCase() === 'subtract')
        return subtract(num1, num2);
    if (op === '*' || op.toLowerCase() === 'multiply')
        return multiply(num1, num2);
    if (op === '/' || op.toLowerCase() === 'divide')
        return divide(num1, num2);
    return 'Invalid operation'
}

/**
 * @param {string} digit the digit or decimal in string format to add to the current number
 */
function updateCurrentNumber(digit) {
    if (currentNumber) {
        if (currentNumber === '0') {
            currentNumber = digit
        } else {
            currentNumber += digit;
        }
    } else {
        currentNumber = '' + digit; // ensure currentNumber is a string
    }
    showCurrentNumber();
}

/**
 * Update the current number display in the UI
 */
function showCurrentNumber() {
    calcCurrentNumber.textContent = currentNumber;
}

function updateOperator(chosenOp) {
    operator = chosenOp;
    display = `${currentNumber} ${operator}`

    console.log(display);
}

// Initially display
showCurrentNumber();