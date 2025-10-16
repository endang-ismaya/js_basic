// Data Type

// -----------------------
// Primitive Data Types
// -----------------------
// Stored directly in the 'stack', where it is accessed from.
// - String: Sequence of characters. Must be in quotes or backticks
// - Number: Integers as well as floating-point numbers
// - Boolean: Logical entity / true of false
// - Null: Intentional absence of any object value
// - Undefined: A variable that has not yet been defined / assigned
// - Symbol: Built-in object whose constructor returns a unique symbol
// - BigInt: Numbers that are greater than the "Number" type can handle

// ---------------------------
// Reference Types (Objects)
// ---------------------------
// Stored in the heap and accesed by reference.
// Reference types or 'objects' are a non-primitive value and when
// assigned to a variable, the variable is given a reference to that value.

// Object literals, arrays, and functions are all reference types

// ========================================================================
// String
const firstName = "Salt Bae";

// Number
const age = 30;
const decimal = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
let scoreUndef;

// Symbol
const id = Symbol("id");

// BigInt
const bigInt = 123456789012345678901234567890n;

// Reference TYpes
const numbers = [1, 2, 3, 4, 5];

const person = {
  name: "John",
  age: 30,
};

// print the output
const output = person;
console.log(output, typeof output);

// ==================
// Stack and Heap
// ==================

// values are stored on the stack
const name = "John";
const aged = 30;

// reference values are stored on the heap
const person1 = {
  name: "Brad",
  age: 40,
};

let newName = name;
newName = "Jonathan";

let newPerson = person1;
newPerson.name = "Bradley";

console.log(name, newName);
console.log(person1, newPerson);

// ===============================
// Type Conversion / Type Casting
// ===============================
// convert string to number
let amount = "100";
let intAmount = parseInt(amount);
let plusAmount = +amount;
let numAmount = Number(amount);

console.log(amount, typeof amount);
console.log(intAmount, typeof intAmount);
console.log(plusAmount, typeof plusAmount);
console.log(numAmount, typeof numAmount);

// convert number to string
let newAmount = 100;
let strAmount = newAmount.toString();
console.log(newAmount, typeof newAmount);
console.log(strAmount, typeof strAmount);

// convert number to boolean
amount = Boolean(intAmount);
console.log(amount, typeof amount);
