/**
 * Template literals are an easy way to format a string.
 *
 * Simply use backticks (`) instead of quotes/apostrophes ("/'),
 * and wrap the variable in a dollar sign followed by curly brackets (${}).
 */

const me = {
  name: "John",
  age: 21,
};

// Before ES6
console.log("My name is " + me.name + ", and I'm " + me.age + ".");

// After ES6
console.log(`My name is ${me.name}, and I'm ${me.age}.`);
