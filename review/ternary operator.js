/**
 * Using If-Else statement.
 *
 * If-Else statements can be unnecessarily hard to read if all you do is assign
 * the value of a variable in it.
 */
{
  const gameOver = true;
  let msg = "";

  if (gameOver) {
    msg = "You Lose";
  } else {
    msg = "You win";
  }

  console.log(msg); // "You Lose"
}

/**
 * Using the Ternary Operator.
 *
 * You can instead use the 'ternary operator' to simplify the code.
 * Ternary operators are just 'syntactic sugar' for simple if-else statements.
 *
 * Syntax: '<variable> = <condition> ? <value if true> : <value if false>;'
 */
{
  const gameOver = false;
  const msg = gameOver ? "You Lose" : "You Win";
  console.log(msg); // "You Win"
}
