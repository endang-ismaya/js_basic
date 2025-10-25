// =============
// for loop
// =============
for (let i = 0; i <= 10; i++) {
  console.log(`Hello ${i}`);
}

// nested loop
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// loop through an array
const names = ["Endang", "Jonathan", "Shawn", "Sabrina", "Jacklyn"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// =============
// break and continue
// =============
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    break;
  }

  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

// =============
// while loop
// =============
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

// loop over arrays
const numbers = [1, 2, 3, 4, 5];

// while (numbers.length > 0) {
//   console.log(numbers.pop());
// }

i = 0;
while (i < numbers.length) {
  console.log("num-" + numbers[i].toString().padStart(2, "0"));
  i++;
}

// =============
// Do While
// =============
let x = 10;
do {
  console.log("x is " + x);
  x++;
} while (x <= 10);

// =============
// for of loops
// =============
const items = ["book", "table", "chair", "pen"];
const users = [
  { name: "brad", age: 30 },
  { name: "john", age: 40 },
  { name: "jane", age: 50 },
];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user);
}

// =============
// loops over Maps
// =============
const map = new Map();
map.set("name", "Endang");
map.set("age", 30);

for (const [key, value] of map) {
  console.log(key, value);
}

// =============
// for in
// =============
const colorObj = {
  color1: "red",
  color2: "blue",
  color3: "green",
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ["red", "blue", "green"];

for (const index in colorArr) {
  console.log(index, colorArr[index]);
}

//
