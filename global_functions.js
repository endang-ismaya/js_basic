// console.log(window.innerWidth);

// function run() {
//   console.log(window.innerHeight);
// }

// run();

const x = 100;

if (true) {
  const y = 200;
  console.log(x + y);
}

// console.log(x + y); // Uncaught ReferenceError: y is not defined

// Declaration and Expression
console.log(addDolarSign(100));

// function declaration
function addDolarSign(price) {
  return "$" + price;
}

// function expression
const addDolarSign2 = function (price) {
  return "$" + price;
};

console.log(addDolarSign2(100));
