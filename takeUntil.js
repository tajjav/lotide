const assertArraysEqual = require('./assertArraysEqual');

/**
 * takeUntil function definition, this function takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
 * @param {Array} array 
 * @param {callback} callback
 * @returns {Array} 
 */
const takeUntil = function (array, callback) {
  // start with an empty outputArray
  let outputArray = [];
  // loop over the array and check callback condition for each element
  for (let e of array) {
    // if true, exit the loop and return outputArray
    // if false. push element into output array
    if (callback(e)) {
      return outputArray;
    } else {
      outputArray.push(e);
    }
  }
  return outputArray;
}

module.exports = takeUntil;

//
// Test Code without assertArraysEqual
//
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); //--> [1,2,5,7,2]

console.log("---");

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const result2 = takeUntil(data2, x => x === ",");
console.log(result2); //--> ["I've", "been", "to", "Hollywood"]

//
// Test Code with assertArraysEqual
//
const fabionacci = [0, 1, 1, 2, 3, 5, 8, 13, 21];
const resultFabionacci = takeUntil(fabionacci, f => f >= 20);
assertArraysEqual(resultFabionacci, [0, 1, 1, 2, 3, 5, 8, 13]);
const newResultFabionacci = takeUntil(fabionacci, g => g > 21);
assertArraysEqual(newResultFabionacci, [0, 1, 1, 2, 3, 5, 8, 13, 21]);