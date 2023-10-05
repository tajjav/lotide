const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

//@ flatten function definition, that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
const flatten = function (arrayOfNestedArrays) {
  const result = [];
  for (let i = 0; i < arrayOfNestedArrays.length; i++) {
    if(Array.isArray(arrayOfNestedArrays[i])) {
      for ( let j = 0; j < arrayOfNestedArrays[i].length; j++) {
        result.push(arrayOfNestedArrays[i][j]);
      }
    } else {
      result.push(arrayOfNestedArrays[i]);
    }
  }
  return result;
}

module.exports = flatten;

// Test Code
console.log(flatten([1,2,[3,4],5,[6]]));
assertArraysEqual(flatten([1,2,[3,4],5,6,[7],[8,9]]),[1,2,3,4,5,6,7,8,9]);
