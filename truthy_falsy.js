const email = "test@example.com";

// string with anything in it, is a truthy values
if (email) {
  console.log("your email is valid.");
}

/*
Falsy Values:
- false
- 0
- "" or '' (Empty String)
- null
- undefined
- NaN
*/

/*
Truthy Values:
- Everything else that is not falsy
- true
- '0' (0 in a string)
- ' ' (space in a string)
- 'false' (false in a string)
- [] (empyt array)
- {} (empty object)
- function () {} (empty function)
*/

// checking for empty arrays
const posts = [];

if (posts.length > 0) {
  console.log("Show Post List");
} else {
  console.log("No Posts to Show");
}

// checking for empty objects
const user = {};

if (Object.keys(user).length > 0) {
  console.log("Show User List");
} else {
  console.log("No Users to Show");
}
