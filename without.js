const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

/**
 * without function definition, it returns only the items from the source array that are not in the itemsToRemove array.
 * @param {Array} sourceArray 
 * @param {Array} itemsToRemoveArray 
 * @returns {Array}
 */
const without = function (sourceArray, itemsToRemoveArray) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemoveArray.includes(sourceArray[i])) {
      result.push(sourceArray[i]);
    }
  }
  return result;
}

module.exports = without;

//
//Test Code
//
console.log(without(["1","2","3"],[1,2,"3"]));
assertArraysEqual(without([1,2,3], [1]),[2,3]);
assertArraysEqual(without([1,2,3], [1,2,3]),[]); // test to make sure original array is not modified
