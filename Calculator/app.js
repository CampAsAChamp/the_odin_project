const multiplyCode = "test";

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function multiply(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }

    return product;
}

function power(base, exponent) {
    let product = 1;
    for (let i = 0; i < exponent; i++) {
        product *= base;
    }

    return product;
}

function factorial(n) {
    if (n < 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

function operate(operator, x, y) {
    console.log(operator, ": ", x, ", ", y);

    switch (operator) {
        case plus:
            console.log("Plus");
            break;
        case minus:
            console.log("Minus");
            break;
        case multiplication:
            console.log("Multiplication");
            break;
        case divide:
            console.log("Divide");
            break;

        default:
            console.log("Operator not supported");
            break;
    }
}

let calcDisplay = document.querySelector("#calc-display");
let numberBtns = document.querySelectorAll(".number");
let operatorBtns = document.querySelectorAll(".operator");
let clearAllBtn = document.querySelector("#clear");
let backspaceBtn = document.querySelector("#backspace");
// let divideBtn = document.querySelector("#divide");
// let multiplyBtn = document.querySelector("#multiply");
// let subtractBtn = document.querySelector("#subtract");
// let addBtn = document.querySelector("#add");
let firstNum = 0;
let secondNum = 0;
let operator = "";
let opPressed = false;

clearAllBtn.addEventListener("click", () => {
    calcDisplay.textContent = "";
});

backspaceBtn.addEventListener("click", () => {
    calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
});

numberBtns.forEach((singleNum) => {
    singleNum.addEventListener("click", () => {
        if (opPressed) {
            calcDisplay.textContent = "";
            secondNum = singleNum.textContent;
            console.log(firstNum, operator, secondNum);
            operate(operator, firstNum, secondNum);
        }
        calcDisplay.textContent += singleNum.textContent;
    });
});

/*
1) Store the first number that is input into the calculator when a user presses an operator
2) Save which operation has been chosen
3) Call operate() on them when the user presses the “=” key.

You should already have the code that can populate the display, 
so once operate() has been called, update the display with the ‘solution’ to the operation.
*/

operatorBtns.forEach((singleOperator) => {
    singleOperator.addEventListener("click", () => {
        firstNum = calcDisplay.textContent;
        operator = singleOperator.textContent;

        // if (
        // calcDisplay.textContent.length !== 0 &&
        // calcDisplay.textContent.charAt(calcDisplay.textContent.length - 1) !== singleOperator.textContent
        // ) {
        opPressed = true;
        console.log("Pressed an operator:", operator);
        // calcDisplay.textContent += singleOperator.textContent;
        // }
    });
});
