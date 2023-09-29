/**
 * assertArraysEqual function definition, it compares two arrays and result is printed to console
 * @param {Array} ckArray1 
 * @param {Array} ckArray2 
 */
const assertArraysEqual = function (ckArray1, ckArray2) {
  let result = eqArrays(ckArray1, ckArray2);
  if (result)
    //console.log("Both arrays are equal");
    console.log(`🟢🟢🟢Assertion Passed: ${ckArray1} === ${ckArray2}`);
  else
    //console.log("Two arrays are not equal");
    console.log(`🔴🔴🔴Assertion Failed: ${ckArray1} !== ${ckArray2}`);
}

/**
 * eqArrays function definition, it compares two arrays and return true if matched, vice versa.
 * @param {Array} chkArray1 
 * @param {Array} chkArray2 
 * @returns {Boolean}
 */
const eqArrays = function (chkArray1, chkArray2) {
  if (chkArray1.length !== chkArray2.length)
    return false;
  for (let i = 0; i < chkArray1.length; i++) {
    if (chkArray1[i] !== chkArray2[i])
      return false;
  }
  return true;
}

/**
 * 
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