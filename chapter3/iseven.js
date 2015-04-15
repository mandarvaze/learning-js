/*
Without using % (the remainder operator), Here's a way to define 
whether a positive whole number is even or odd:

- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. 
The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? 
Can you think of a way to fix this?
*/

function isEven(num, debug) {
  if (debug === undefined) {
    debug = false;
  }
  /* Convert negative number to a positive number first, and then check */
  if (num < 0) {
    num = (num * -1);
  }
  if (debug) {
    console.log("DEBUG: Checking if " + num + " is Even");
  }
  if (num === 0) { 
    /* Using === only to silence the "Use '===' to compare with '0'. - W041"
    warning printed by JSHint. Else == is fine for actual numbers.
    No such warning for comparison with 1, below */
    return true;
  }
  if (num == 1) {
    return false;
  }
  return isEven(num - 2, debug);
}

function printIsEven(is_even) {
  if (is_even) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log("50 is " + printIsEven(isEven(50)));
console.log("75 is " + printIsEven(isEven(75)));
console.log("-1 is " + printIsEven(isEven(-1)));
console.log("-4 is " + printIsEven(isEven(-4)));