console.log(10 > 20 && 30 > 15);

// && - will return first falsy value or the last value
let a;

a = 10 && 20; // 20
a = 10 && 20 && 30; // 30
a = 10 && 0 && 30; // 0

console.log(a);

// || - will return the first truthy value or the last value

let b;

b = 10 || 20; // 10
b = 10 || 0 || 30; // 10
b = 0 || null || "" || undefined; // undefined

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined
let c;

c = 10 ?? 20; // 10
c = null ?? 20; // 20
c = undefined ?? 20; // 20
c = 0 ?? 30; // 0
c = "" ?? 30; // ''

console.log(c);
