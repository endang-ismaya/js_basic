// regular function declaration
function add(a, b) {
  return a + b;
}

// Arrow function form 1
const addArrow = (a, b) => a + b;

// Arrow function form 2
const addArrow2 = (a, b) => {
  return a + b;
};

const double = (a) => a * 2;

console.log(add(1, 2));
console.log(addArrow(1, 2));
console.log(addArrow2(1, 2));
console.log(double(2));

// returning an object
const createObj = () => {
  return {
    name: "John",
    age: 30,
  };
};

// using paranthesis
const createObj2 = () => ({
  name: "John",
  age: 30,
});

console.log(createObj());
console.log(createObj2());

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number));
