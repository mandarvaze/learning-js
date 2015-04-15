/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of
the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz",
for numbers that are divisible by both 3 and 5
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

var fizzbuzz = function (num) {
    var msg = "";
    if (num % 3 === 0) {
      msg += 'Fizz';
    }
    if (num % 5 === 0) {
      msg += 'Buzz';
    }
    if (! msg.length) {
      msg = num;
    }
    return msg;
};

for (var i = 0; i < 101; i += 1) {
  console.log(fizzbuzz(i));
}
