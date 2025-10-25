if (true) {
  console.log("This is true");
}

if (false) {
  console.log("This is not true");
}

const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
} else {
  console.log(`${x} is less than ${y}`);
}

// nested if
const d = new Date();
const hour = d.getHours();

if (hour < 12) {
  console.log("Good Morning");

  if (hour === 6) {
    console.log("Wake Up!!");
  }
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
