// Normal function definition
{
  function print(msg) {
    console.log(msg);
  }

  print("Hello!"); // "Hello!"
}

// Arrow Function
{
  const print = (msg) => {
    console.log(msg);
  };

  print("Hello!"); // "Hello!"
}

// =============================================================================

/**
 * Arrow function are useful when you want to make a function that only returns
 * a value, since they are much more compact.
 *
 * Or when you want to use the function just in one place and, therefore
 * don't need to give it a name and can define it directly in the place that it
 * is going to be used. For example, passing the function as an argument to
 * another function.
 *
 * Equivalent to:
 * function myFilter(item) {
 *   return item > 2;
 * }
 */

const array = [1, 2, 3, 4, 5];
const filteredArray = array.filter((item) => item > 2);
console.log(filteredArray); // [3, 4, 5]
