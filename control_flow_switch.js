const d = new Date(2025, 8, 31, 9, 0, 0);

const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 0:
    console.log("January");
    break;
  case 1:
    console.log("February");
    break;
  case 2:
    console.log("March");
    break;
  case 3:
    console.log("April");
    break;
  case 4:
    console.log("May");
    break;
  case 5:
    console.log("June");
    break;
  case 6:
    console.log("July");
    break;
  case 7:
    console.log("August");
    break;
  case 8:
    console.log("September");
    break;
  case 9:
    console.log("October");
    break;
  case 10:
    console.log("November");
    break;
  case 11:
    console.log("December");
    break;
  default:
    console.log("Invalid Month");
}

switch (true) {
  case hour < 12:
    console.log("Good Morning");
    break;
  case hour < 18:
    console.log("Good Afternoon");
    break;
  default:
    console.log("Good Evening");
}
