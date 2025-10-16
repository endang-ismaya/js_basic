let x;

x = 5 + "5"; // 55 string

x = 5 + +"5"; // 10 number

x = "5" + 5; // 55 string

x = "5" - 5; // 0 number

x = 5 * "5"; // 25 number

x = 5 / "5"; // 1 number

x = 5 % "5"; // 0 number

x = 5 ** "5"; // 3125 number

x = 5 + null; // 5 number

x = 5 + undefined; // NaN

x = 5 + true; // 6 number

x = 5 + false; // 5 number

// print to console
console.log(x, typeof x);
