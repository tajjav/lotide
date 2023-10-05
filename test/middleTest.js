const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//@ Test Code
console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5]));
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);