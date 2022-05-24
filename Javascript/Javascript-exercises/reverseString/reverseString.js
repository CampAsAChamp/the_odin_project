const reverseString = function (str) {
    // Splits the string into an array of one character each
    let splitStr = str.split("");

    // Reverse the array in place
    for (let i = 0, j = splitStr.length - 1; i <= j; i++, j--) {
        // console.log("[", i, "]", splitStr[i]);
        // console.log("[", j, "]", splitStr[j]);
        let temp = splitStr[i];

        splitStr[i] = splitStr[j];
        splitStr[j] = temp;
        // console.log(splitStr);
    }

    let joinStr = splitStr.join("");

    return joinStr;
};

module.exports = reverseString;
