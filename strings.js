let x;

const name = "Endang";
const age = 41;

x = "Hello, my name is " + name + " and I am " + age + " years old.";

// using template literal
x = `Hello, my name is ${name} and I am ${age + 5} years old.`;

// properties and methods
str = `Hello, my name is ${name} and I am ${age + 5} years old.`;

x = str.length; // 47 number
x = str.toUpperCase(); // HELLO, MY NAME IS ENDANG AND I AM 46 YEARS OLD. string
x = str.toLowerCase(); // hello, my name is endang and i am 46 years old. string
x = str.slice(0, 5); // Hello string
x = str.split(" "); // ['Hello,', 'my', 'name', 'is', 'Endang', 'and', 'I', 'am', '46', 'years', 'old.']0: "Hello,"1: "my"2: "name"3: "is"4: "Endang"5: "and"6: "I"7: "am"8: "46"9: "years"10: "old."length: 11[[Prototype]]: Array(0) 'object'
x = str[1]; // e string
x = str.charAt(0); // H string
x = str.indexOf("name"); // 10 number
x = str.substring(0, 5); // Hello string
x = str.slice(str.length - 5, str.length); // old. string
x = str.replace("Endang", "Jonathan"); // Hello, my name is Jonathan and I am 46 years old. string
x = str.includes("name"); // true boolean
x = str.valueOf(); // Hello, my name is Endang and I am 46 years old. string

// print to console
console.log(x, typeof x);
