function sayHello() {
  console.log("Hello World");
}

sayHello();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(1, 2);

// return function
function subtract(num1, num2) {
  return num1 - num2;
}

const result = subtract(10, 5);
console.log(result);

function registerUser(user = "Guest") {
  // if (!user) {
  //   user = "Guest";
  // }

  return user + " is registered.";
}

console.log(registerUser("Endang"));
console.log(registerUser());

// Rest Params
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Object as params
function loginUser(user) {
  return `The user ${user.name} with id ${user.id} is logged in.`;
}

const user = {
  id: 1,
  name: "Endang",
};

console.log(loginUser(user));

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}

console.log(getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
