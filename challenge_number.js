/* 
Number Challenge

Instruction:
- Create a variable called 'x' that is random number between 1 and 100
  along with a variable called 'y' that is a random number between 1 and 50

- Create a variable for the sum, difference, product, quotient and remainder
  of 'x' and 'y'. 

- Log the output in a astring that shows the two numbers of 'x' and 'y' along with 
  the operator and result.

- You can log the output string directly or put them in separate variables 
  and log them like below

- You can use string concatenation or template literals for the output.

Expected Result:
```
console.log(sumOutput); // 31 + 15 = 46
console.log(differenceOutput); // 31 - 15 = 16
console.log(productOutput); // 31 * 15 = 465
console.log(quotientOutput); // 31 / 15 = 2.0666666666
console.log(rmOutput); // 31 % 15 = 1
```
*/

// Create a random number between 1 and 100 for x
const x = Math.floor(Math.random() * 100) + 1;

// Create a random number between 1 and 50 for y
const y = Math.floor(Math.random() * 50) + 1;

// --- Perform Calculations ---
const sum = x + y;
const difference = x - y;
const product = x * y;
const quotient = x / y;
const rm = x % y;

// --- Create Output Strings ---
const sumOutput = `${x} + ${y} = ${sum}`;
const differenceOutput = `${x} - ${y} = ${difference}`;
const productOutput = `${x} * ${y} = ${product}`;
const quotientOutput = `${x} / ${y} = ${quotient}`;
const rmOutput = `${x} % ${y} = ${rm}`;

// --- Log the Results ---
console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);
