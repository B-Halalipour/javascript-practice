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

// challenge 2:

const users = [
  { name: "Behnoud", active: true },
  { name: "Maya", active: false },
  { name: "Devin", active: true },
];

const getActiveUsers = function (users) {
  const activeUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].active) activeUsers.push(users[i]);
  }
  return activeUsers;
};

console.log(getActiveUsers(users));

// challenge 3:

const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

btn.addEventListener("click", function () {
  text.textContent = "Button clicked!";
});

const boxBtn = document.querySelector(".toggle");
const box = document.querySelector(".box");

boxBtn.addEventListener("click", function () {
  box.classList.toggle("hidden");
});
