/* Eloquent Java script Second Edition. Ch. 2, exercise 1

Write a program that makes 7 calls to console.log to output
the following triangle:

#
##
###
####
#####
######
#######
*/

var rightPyramid = function() {
  var i, j, prn;
  prn = "";
  for (i = 0; i < 7; i += 1) {
    prn += '#';
    for (j = 0; j < i; j += 1) {
      prn += '#';
    }
    prn += "\n";
  }
  return(prn);
};

console.log(rightPyramid());