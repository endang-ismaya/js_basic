/*
Array Challenge

Challenge 1:
Intructions:
- Use some of the array methods that we looked at to mutate the following array to 
  the expected result below

  ```
  const arr = [1, 2, 3, 4, 5]
  ```

  Expected Result:

  ```
  console.log(arr): // [6, 5, 4, 3, 2, 1, 0]
  ```

*/

const arr = [1, 2, 3, 4, 5];

// Solution
arr.unshift(0);
arr.push(6);
arr.reverse();

console.log(arr); // [6, 5, 4, 3, 2, 1, 0]

/*
Challenge 2:
Instructions:
- Combine arr1 and arr2 into a new array called arr3 with the following elements:
  ```
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [5, 6, 7, 8, 9, 10]
  ```

  Notice that both arr1 and arr2 include the number 5.
  You will have to find a way to get rid of the extra 5

  Expected Result:
  ```
  console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  ```

*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution
arr1.pop();
const arr3 = arr1.concat(arr2);

console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
