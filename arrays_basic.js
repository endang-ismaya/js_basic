// Array Literal
const numbers = [12, 45, 33, 29, 39];
console.log(numbers, typeof numbers);

// Array constructor
const fruits = new Array("Apple", "Banana", "Orange");
console.log(fruits, typeof fruits);

// Access Element of Array
console.log(numbers[0]);
console.log(fruits[1]);
const favFruit = `My favorite fruit is ${fruits[2]}`;
console.log(favFruit);

// Array Properties
console.log(numbers.length);
console.log(fruits.length);

// Change array
fruits[1] = "Mango";
console.log(fruits);

// Array Methods
fruits.push("Strawberry");
console.log(fruits); // ['Apple', 'Mango', 'Orange', 'Strawberry']

fruits.pop();
console.log(fruits); // ['Apple', 'Mango', 'Orange']

fruits.unshift("Strawberry");
console.log(fruits); // ['Strawberry', 'Apple', 'Mango', 'Orange']

fruits.shift();
console.log(fruits); // ['Apple', 'Mango', 'Orange']

fruits.splice(1, 1);
console.log(fruits); // ['Apple', 'Orange']

fruits.reverse();
console.log(fruits); // ['Orange', 'Apple']

fruits.sort();
console.log(fruits); // ['Apple', 'Orange']

fruits.sort().reverse();
console.log(fruits); // ['Orange', 'Apple']

// check if element exists
console.log(fruits.includes("Orange")); // true

// check index of element
console.log(fruits.indexOf("Apple")); // 1

// check last index of element
console.log(fruits.indexOf("apple")); // -1

// add another fruits
fruits.push("Mango", "Strawberry", "Pineapple");
console.log(fruits); // ['Orange', 'Apple', 'Mango', 'Strawberry', 'Pineapple']

console.log(fruits.slice(1, 4)); // ['Apple', 'Mango', 'Strawberry']
console.log(fruits); // ['Orange', 'Apple', 'Mango', 'Strawberry', 'Pineapple']

// splice deleting base on index number
// fruits.splice(1, 4);
// console.log(fruits); // ['Orange']

// chaining methods
sliceReverseFruit = fruits.slice(1, 4).reverse().toString().charAt(0);
console.log(sliceReverseFruit); // ['Strawberry', 'Mango', 'Apple']

// nesting array
const fruits1 = ["Apple", "Banana", "Orange", "Mango"];
const berries = ["Strawberry", "Blueberry", "Raspberry"];

// fruits1.push(berries);
// console.log(fruits1); // ['Apple', 'Banana', 'Orange', 'Mango', ['Strawberry', 'Blueberry', 'Raspberry']]

const allFruits = fruits1.concat(berries);
console.log(allFruits); //
// ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 'Blueberry', 'Raspberry']

// spread operator
const allFruits1 = [...fruits1, ...berries];
console.log(allFruits1);
// ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 'Blueberry', 'Raspberry']

// flatten arrays
const arrNum = [1, 2, [3, 4, 5], 6, 7, [8, 9, 10]];
const flatArrNum = arrNum.flat();
console.log(flatArrNum); //
// [1, 2, 3, 4, 5, 6, 7, 8, 8, 10]

// static method on array object
console.log(Array.isArray(fruits)); // true
console.log(Array.from("Hello")); // ['H', 'e', 'l', 'l', 'o']

// arrayof
console.log(Array.of(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]
