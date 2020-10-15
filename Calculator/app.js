(function (window) {
    window.htmlentities = {
        /**
         * Converts a string to its html characters completely.
         *
         * @param {String} str String with unescaped HTML characters
         **/
        encode: function (str) {
            var buf = [];

            for (var i = str.length - 1; i >= 0; i--) {
                buf.unshift(["&#", str[i].charCodeAt(), ";"].join(""));
            }

            return buf.join("");
        },
        /**
         * Converts an html characterSet into its original character.
         *
         * @param {String} str htmlSet entities
         **/
        decode: function (str) {
            return str.replace(/&#(\d+);/g, function (match, dec) {
                return String.fromCharCode(dec);
            });
        },
    };
})(window);

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        alert("Can't divide by 0");
        clearCalc();
    }
    return x / y;
}

function operate(operator, x, y) {
    console.log(operator, ": ", x, ", ", y);

    let decodedEntity = htmlentities.decode(operator);
    let result = 0;

    switch (decodedEntity) {
        case decodedAddCode:
            console.log("Plus");
            result = add(x, y);
            break;
        case decodedSubtractCode:
            console.log("Minus");
            result = subtract(x, y);
            break;
        case decodedMultiplyCode:
            console.log("Multiplication");
            result = multiply(x, y);
            break;
        case decodedDivideCode:
            console.log("Divide");
            result = divide(x, y);
            break;

        default:
            clearCalc();
            console.log("Operator not supported");
            break;
    }
    calcDisplay.textContent = result;
}

let calcDisplay = document.querySelector("#calc-display");
let numberBtns = document.querySelectorAll(".number");
let operatorBtns = document.querySelectorAll(".operator");
let clearAllBtn = document.querySelector("#clear");
let backspaceBtn = document.querySelector("#backspace");

let divideBtn = document.querySelector("#divide");
let multiplyBtn = document.querySelector("#multiply");
let subtractBtn = document.querySelector("#subtract");
let addBtn = document.querySelector("#add");
let equalBtn = document.querySelector("#equal");

const decodedDivideCode = htmlentities.decode(divideBtn.textContent);
const decodedMultiplyCode = htmlentities.decode(multiplyBtn.textContent);
const decodedSubtractCode = htmlentities.decode(subtractBtn.textContent);
const decodedAddCode = htmlentities.decode(addBtn.textContent);

let firstNum = 0;
let secondNum = 0;
let operator = "";
let opPressed = false;

function clearCalc() {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    opPressed = false;
}

clearAllBtn.addEventListener("click", () => {
    calcDisplay.textContent = "";
    clearCalc();
});

backspaceBtn.addEventListener("click", () => {
    calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
});

numberBtns.forEach((singleNum) => {
    singleNum.addEventListener("click", () => {
        if (opPressed) {
            calcDisplay.textContent = "";
            secondNum = singleNum.textContent;
        }
        calcDisplay.textContent += singleNum.textContent;
    });
});

operatorBtns.forEach((singleOperator) => {
    singleOperator.addEventListener("click", () => {
        firstNum = calcDisplay.textContent;
        operator = singleOperator.textContent;

        opPressed = true;
        console.log("Pressed an operator:", operator);
    });
});

equalBtn.addEventListener("click", () => {
    operate(operator, firstNum, secondNum);
});
