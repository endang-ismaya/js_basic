const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  hobbies: ["reading", "traveling", "cooking"],
  friends: ["Jane Doe", "Bob Smith", "Alice Johnson"],
};

console.log(person);

const johnName = person.name;
console.log(johnName);

const johnAddress = person.address;
console.log(johnAddress);

const johnStreet = person.address.street;
console.log(johnStreet);

const johnCity = person.address.city;
console.log(johnCity);

const johnState = person.address.state;
console.log(johnState);

const johnZip = person.address.zip;
console.log(johnZip);

const johnHobbies = person.hobbies;
console.log(johnHobbies);

const johnHobbies0 = person.hobbies[0];
console.log(johnHobbies0);

// add properties
person.hasChildren = true;
person.great = function () {
  console.log(`Hello, my name is ${this.name}`);
};
console.log(person);
person.great();
