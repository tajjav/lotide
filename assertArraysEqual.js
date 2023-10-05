const eqArrays = require('./eqArrays');

/**
 * assertArraysEqual function definition, it prints message to console that whether two arrays are equal or not.
 * @param {Array} ckArray1 
 * @param {Array} ckArray2 
 */
const assertArraysEqual = function (ckArray1, ckArray2) {
  let result = eqArrays(ckArray1, ckArray2);
  if (result)
    console.log("Both arrays are equal");
  else
    console.log("Two arrays are not equal");
}

module.exports = assertArraysEqual;

