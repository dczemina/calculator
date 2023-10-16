// Calculator Variables
let operator = null;
let number1 = null;
let number2 = null;
let display = '';
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
// Other
btnEqual.addEventListener('click', () => equals())
btnClear.addEventListener('click', () => clear())

// Math Functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

// UI Functions

/**
 *
 * @returns the result of the operation using the two numbers as input. num1 is the left-hand side of operations.
 */
function operate() {
    if (operator === '+' || operator.toLowerCase() === 'add')
        return add(number1, number2);
    if (operator === '-' || operator.toLowerCase() === 'subtract')
        return subtract(number1, number2);
    if (operator === '*' || operator.toLowerCase() === 'multiply')
        return multiply(number1, number2);
    if (operator === '/' || operator.toLowerCase() === 'divide')
        return divide(number1, number2);
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

/**
 * Set the operator for the current equation. If an operator is already chosen, perform the equation instead.
 * @param {string} chosenOp the operator
 */
function updateOperator(chosenOp) {
    if (!operator) {
        operator = chosenOp;
        number1 = +currentNumber; // store currentNumber as number1
        currentNumber = null; // reset currentNumber
        display = `${number1} ${operator}`
        showDisplay();
    } else {
        if (!currentNumber) currentNumber = number1;
        equals();
    }
}

/**
 * Update the display in the UI
 */
function showDisplay() {
    calcDisplay.textContent = display;
}

/**
 * Perform the equation as long as number1 and operator are defined
 */
function equals() {
    if (!number1 || !operator) return;

    if (!currentNumber) currentNumber = number1;

    number2 = +currentNumber; // store currentNumber as number2
    currentNumber = ''; // reset currentNumber
    display = `${display} ${number2}`
    showDisplay();
    currentNumber = operate();
    showCurrentNumber();
    resetVars();
}

function clear() {
    resetVars();
    currentNumber = '0';
    display = '';
    showDisplay();
    showCurrentNumber();
}

/**
 * Reset variables used within the calculation
 */
function resetVars() {
    operator = null;
    number1 = null;
    number2 = null;
}

// Initially display
showCurrentNumber();