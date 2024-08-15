function addNumbers(num1, num2) {
    return num1 + num2;
}
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
function subtractNumbers(num1, num2) {
    return num1 - num2;
}
function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return 'Error:Division by zero is not allowed.';
    }
    return num1/num2
}

function performArithmatic(num1, num2, operation) {
    return operation(num1, num2);
}
console.log(performArithmatic(5, 3, addNumbers))

console.log(performArithmatic(5, 3, multiplyNumbers))

console.log(performArithmatic(5, 3, subtractNumbers))

console.log(performArithmatic(5, 3, divideNumbers))


