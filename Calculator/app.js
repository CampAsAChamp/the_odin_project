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
let clearAllBtn = document.querySelector("#clear");
let backspaceBtn = document.querySelector("#backspace");

clearAllBtn.addEventListener("click", () => {
    calcDisplay.textContent = "";
});

backspaceBtn.addEventListener("click", () => {
    calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
});

numberBtns.forEach((singleNum) => {
    singleNum.addEventListener("click", () => {
        calcDisplay.textContent += singleNum.textContent;
    });
});
