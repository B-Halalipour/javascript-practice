"use strict";
// challenge 1:

const values = [0, 12, "hello", "", 25, null, 100];
const filterNumbersArr = function (arr) {
  const numbers = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== "number") continue;
    numbers.push(values[i]);
  }
  return numbers;
};

console.log(filterNumbersArr(values));
