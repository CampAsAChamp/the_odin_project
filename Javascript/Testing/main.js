export function capitalize(str) {
  const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalizedStr;
}

export function reverseStr(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

export function analyzeArray(arr) {
  const average = arr.reduce((a, b) => a + b, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const obj = {
    average,
    min,
    max,
    length: arr.length,
  };

  return obj;
}
