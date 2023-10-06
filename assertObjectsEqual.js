const eqObjects = require('./eqObjects');

/**
 * assertObjectsEqual function definition, this function takes in 2 objects and returns true if they are equal and false otherwise.
 * @param {object} actualObj
 * @param {object} expectedObj
 * @returns void
 */
const assertObjectsEqual = function (actualObj, expectedObj) {
  const inspect = require('util').inspect;
  let result = eqObjects(actualObj, expectedObj);
  if (result)
    console.log(`🟢🟢🟢Assertion Passed: ${inspect(actualObj)} === ${inspect(expectedObj)}`);
  //console.log("Both objects are equal");
  else
    console.log(`🔴🔴🔴Assertion Failed: ${inspect(actualObj)} !== ${inspect(expectedObj)}`);
  //console.log("Provided objects are not equal");
}

module.exports = assertObjectsEqual;

//
// Test Code with primitive objects
//
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject);
const o1 = { sit: 4, stand: 10, laying: 5 }
const o2 = { laying: 5, sit: 4, stand: 10 }
assertObjectsEqual(o1, o2);
const o3 = { flying: 5, sit: 4, sleeping: 10 }
const o4 = { flying: 5, sit: 4, sleeping: 10 }
assertObjectsEqual(o3, o4);
//
// Test Code with Array As Values objects
//
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // => true
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false