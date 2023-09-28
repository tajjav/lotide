//
//@ eqArrays function
//
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
 * eqObjects function definition, it takes in two objects.
 * Returns true if both objects have identical keys with identical values.
 * Otherwise you get back a big fat false!
 * @param {object} obj1
 * @param {object} obj2
 * @returns boolean
 */
const eqObjects = function (obj1, obj2) {
  //check length using Object.keys() and compare
  //if not same length return false
  let keysArrayObj1 = Object.keys(obj1);
  let keysArrayObj2 = Object.keys(obj2);
  //console.log('key1', keysArrayObj1);
  if (keysArrayObj1.length !== keysArrayObj2.length) {
    return false;
  }
  //loop through array of keys returned by Object.keys() for one of the object
  for (let element of keysArrayObj1) {
    // check each key is an array, if true then check arrays are equal in both objects 
    //console.log('key', element);
    //console.log("ArrayIsArray", Array.isArray(obj1[element]));
    if (Array.isArray(obj1[element]) && eqArrays(obj1[element], obj2[element])) {
      return true;
    }
    //inside loop compare objects values for that key. no match return false
    if (obj1[element] !== obj2[element]) {
      return false;
    };
  }
  //at the end of loop return true as it will go to end only if matched.
  return true;
}
/**
 * assertObjectsEqual function definition, this function compares two objects and print to console
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