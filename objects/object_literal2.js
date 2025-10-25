let x;

let todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 40.7128,
      lng: -74.006,
    },
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// merge object
const obj3 = Object.assign({}, obj1, obj2);
const obj4 = { ...obj1, ...obj2 };

x = obj4;

todo = [
  {
    id: 1,
    name: "Buy Milk",
    completed: false,
  },
  {
    id: 2,
    name: "Buy Bread",
    completed: false,
  },
  {
    id: 3,
    name: "Buy Eggs",
    completed: false,
  },
];

x = todo[0].name;

x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo);
x = todo[0].hasOwnProperty("name");

// print to console
console.log(x, typeof x);

// =============
// Destructuring
// =============
const firstName = "John";
const lastName = "Doe";
const age = 40;

const person1 = {
  firstName,
  lastName,
  age,
};

console.log(person1);

const person2 = {
  job: "Developer",
  company: "Google",
  salary: 100000,
};

const { job, company, salary } = person2;

console.log(job, company, salary);
