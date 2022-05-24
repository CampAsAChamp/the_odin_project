const repeatString = function (string, numRepeats) {
    if (numRepeats < 0) {
        return "ERROR";
    }

    let finalString = "";
    for (let i = 0; i < numRepeats; i++) {
        finalString += string;
    }

    return finalString;
};

module.exports = repeatString;
