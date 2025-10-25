/* 
FizzBuzz Challenge

Instructions:
- Print/log the numbers from 1 to 100
- for multiples of three print "Fizz" instead of the number
- for multiples of five print 'Buzz'
- fir number which are multiples of both three and five print 'FizzBuzz'
*/

// Solution
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    continue;
  }

  if (i % 3 === 0) {
    console.log("Fizz");
    continue;
  }

  if (i % 5 === 0) {
    console.log("Buzz");
    continue;
  }

  console.log(i);
}

// Using While Loop
let i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    i++;
    continue;
  }
  if (i % 3 === 0) {
    console.log("Fizz");
    i++;
    continue;
  }
  if (i % 5 === 0) {
    console.log("Buzz");
    i++;
    continue;
  }
  console.log(i);
  i++;
}
