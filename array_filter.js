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
