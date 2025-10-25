// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores, and dollar signs
// - Can't start with a number

// let
let firstName = "John";
let lastName = "Doe";
console.log(firstName, lastName);

let age = 30;
age = 31; // re-assign variable
console.log(age);

let score;

score = 1;
score = 2;
console.log(score);

// const
const x = 100;
// x = 200; // Uncaught TypeError: Assignment to constant variable. program STOPPED!!!
console.log(x);

// const can push an array
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

// const can manipulate an object
const person = {
  name: "John",
  age: 30,
};
person.name = "Jane";
console.log(person);

// add an attribute into const object
person.email = "jane123@gmail.com";
console.log(person);

// ===============================
// Declare multiple values at once
// -------------------------------
let a, b, c;

const d = 10,
  e = 20,
  f = 30;
console.log(a, b, c);
console.log(d, e, f);
