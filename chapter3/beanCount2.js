/*
This is modified version of beanCount.js using the closure

Write a function countBs that takes a string as its only argument 
and returns a number that indicates how many uppercase “B” characters 
are in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes an argument that indicates the character 
that is to be counted (rather than counting only uppercase “B” characters). 

Rewrite countBs to make use of this new function.
*/

function countChar(char) {

  function innerFunction(str) {
    var count = 0;
    for (var i = 0; i < str.length; i += 1) {
      if (str.charAt(i) == char) {
        count += 1;
      }
    }
    return count;
  }

  return innerFunction;
}

var countBs = countChar("B");
var countKs = countChar("k");

console.log(countBs("BBC"));
console.log(countKs("kakkerlak"));