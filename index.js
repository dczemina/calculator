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

// Calculator Variables
let number1;
let operator;
let number2;

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