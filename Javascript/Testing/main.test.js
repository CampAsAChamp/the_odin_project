import * as funcs from "./main";

// 1. A capitalize function that takes a string and returns it with the first character capitalized.
test("capitalize", () => {
  expect(funcs.capitalize("nick")).toBe("Nick");
});

// 2. A reverseString function that takes a string and returns it reversed.
test("reverse string", () => {
  expect(funcs.reverseStr("nick")).toBe("kcin");
});

// 3. A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
describe("calculator", () => {
  test("add", () => {
    expect(funcs.calculator.add(1, 2)).toBe(3);
  });

  test("subtract", () => {
    expect(funcs.calculator.subtract(3, 1)).toBe(2);
  });

  test("divide", () => {
    expect(funcs.calculator.divide(4, 2)).toBe(2);
  });

  test("multiply", () => {
    expect(funcs.calculator.multiply(3, 2)).toBe(6);
  });
});

// 4. A caesarCipher function that takes a string and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.
// a. Don’t forget to test wrapping from z to a.
// b. Don’t forget to test keeping the same case.
// c. Don’t forget to test punctuation!
// d. For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

// 5. An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
/*
    const object = analyzeArray([1,8,3,4,2,6]);

    object == {
    average: 4,
    min: 1,
    max: 8,
    length: 6
    };
*/
test("analyze array", () => {
  expect(funcs.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
