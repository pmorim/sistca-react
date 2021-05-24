/**
 * Objects are very similar to structures in C.
 * They serve as a way to organize your data.
 *
 * In this example, we have an object that contains
 * 3 attributes (variables) and 2 methods (functions).
 *
 * You can use the 'this' keyword as a reference to the object itself. With it
 * you can access other properties/methods when inside the object itself.
 */

const dog = {
  // Attributes
  name: "Ruffles",
  owner: "John Smith",
  breed: "German Sheppard",

  // Methods
  bark: () => console.log("Woof!"),

  printDogTag: function () {
    //console.log(`Hello, my name is ${name}.`); // 'name' is not defined
    console.log(
      `Hello, my name is ${this.name}.\nPlease return me to: ${this.owner}.`
    );
  },
};

console.log(dog.breed);
dog.printDogTag();

/**
 * Note that the function definition in 'printDogTag' does not need a name
 * since we will never call it by its original name.
 *
 * Note as well that you cannot use an arrow function in 'printDogTag' because
 * arrow functions do not work with the 'this' keyword.
 *
 * You can use classes for more complex objects. They work similarly to the ones
 * in other languages, like C++ or Python.
 */
