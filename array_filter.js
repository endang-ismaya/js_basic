// =========
// filter
// =========
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Strawberry",
  "Blueberry",
  "Raspberry",
];

const berries = fruits.filter((fruit) => fruit.includes("berry"));

console.log(berries); // ['Strawberry', 'Blueberry', 'Raspberry']

// =========
// map
// =========
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// =========
// reduce
// =========
// numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15

const cart = [
  {
    id: 1,
    name: "Smartphone",
    price: 500,
    quantity: 2,
  },
  {
    id: 2,
    name: "Laptop",
    price: 1000,
    quantity: 1,
  },
  {
    id: 3,
    name: "Tablet",
    price: 300,
    quantity: 3,
  },
];

const total = cart.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price * currentValue.quantity;
}, 0);

console.log(total); // 2900
