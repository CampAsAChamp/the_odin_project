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
