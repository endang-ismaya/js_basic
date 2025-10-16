/*
Capitalize Challenge

Instruction:
Take the variable 'myString' and capitalize the first letter of the word
using some of the methods that we talked about in the last video.
Put the result in a variable called 'myNewString'.

Create multiple solutions if you would like

Expected Result:
const myString = 'developer'
console.log(myNewString); // 'Developer'

Hints:
1. You can use the 'charAt()' method as well as 'string[index]'
  to get the character at a spesific index.
2. The '.toUpperCase()' method will make the entire string uppercase.
3. 'substring() or slice() will return a spesifc portion of a string. 
*/

myString = "developer";

// solution 1
myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

// solution 2
myNewString = myString[0].toUpperCase() + myString.slice(1);

// solution 3
myNewString = myString.substring(0, 1).toUpperCase() + myString.substring(1);

// solution 4
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString); // 'Developer'
