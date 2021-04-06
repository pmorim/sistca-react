/**
 * NEVER use '==' or '!='.
 * Use instead '===' or '!=='.
 *
 * Using the non-strict ones can lead to bugs that are hard to find/fix.
 */

console.log(5 == "5"); // true
console.log(5 === "5"); // false
