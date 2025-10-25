let x;

const num = new Number(5.55);

x = num.toString(); // 5.55 string
x = num.toFixed(1); // 5.5 string
x = num.toPrecision(1); // 6 string
x = num.valueOf(); // 5.55 number
x = num.toLocaleString(); // 5.55 string
x = num.toExponential(2); // 5.55e+0 string
x = Number.MAX_VALUE; // 1.7976931348623157e+308 number
x = Number.MIN_VALUE; // 5e-324 number

// print to console
console.log(x, typeof x);
