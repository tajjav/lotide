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
 * map function definition. This is a custom map function.
 * @param {Array} array 
 * @param {Callback Function} callbackFunction 
 * @returns {modified Array}
 */
const map = function (array, callbackFunction) {
  let result = [];
  for (let element of array) {
    result.push(callbackFunction(element));
  }
  return result;
}

//
// Test Code without assertArraysEqual
//
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, words => words[0]);
console.log(results1);

//
// Test Code with assertArraysEqual
//
const fabionacci = [0, 1, 1, 2, 3, 5, 8, 13, 21];
const resultfabionacci = map(fabionacci, f => f * 2);
assertArraysEqual(resultfabionacci, [0, 2, 2, 4, 6, 10, 16, 26, 42]);
const arrayObj = [
  { name: 'shark', likes: 'ocean', age: '50' },
  { name: 'turtle', likes: 'pond', age: '60' },
  { name: 'otter', likes: 'swarms', age: '80' }
];
const reformatArray = arrayObj.map(e => e.name + " " + e.age);
assertArraysEqual(reformatArray, ['shark 50', 'turtle 60', 'otter 80']);