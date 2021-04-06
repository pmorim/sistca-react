/**
 * Never use 'var'.
 * Always use 'let' or 'const' instead.
 *
 * Note: 'let' is not equivalent to 'var'.
 * In some cases, it fixes some issues.
 */

// ====================================

/**
 * Old Javascript
 * Before ES6
 */
var x = 5;
console.log(x); // 5

x = 10;
console.log(x); // 10

/**
 * New Javascript
 * After ES6
 */
let y = 5;
y = 10;
console.log(y); // 10

const z = 5;
z = 10; // Uncaught TypeError: Assignment to constant variable.
