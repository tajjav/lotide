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
//
//@ assertEqual function
//
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
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

//
// Test Code without assertEqual function with primitive objects
//
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log('WithoutAssertEqualPrimitive1', eqObjects(shirtObject, anotherShirtObject)); // => true
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log('WithoutAssertEqualPrimitive2', eqObjects(shirtObject, longSleeveShirtObject)); // => false
//
// Test Code using assertEqual function with primitive objects
//
const o1 = { sit: 4, stand: 10, laying: 5 }
const o2 = { laying: 5, sit: 4, stand: 10 }
assertEqual(eqObjects(o1, o2), true);
const o3 = { flying: 5, sit: 4, sleeping: 10 }
const o4 = { flying: 5, sit: 4, sleeping: 10 }
assertEqual(eqObjects(o3, o4), true);
//
// Test Code without using assertEqual function with Array As Values objects
//
const multiColorShirtObject1 = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject2 = { size: "medium", colors: ["red", "blue"] };
console.log('WithoutAssertEqualArrayAsVal1', eqObjects(multiColorShirtObject1, anotherMultiColorShirtObject2)); // => true
const longSleeveMultiColorShirtObject3 = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log('WithoutAssertEqualArrayAsVal2', eqObjects(multiColorShirtObject1, longSleeveMultiColorShirtObject3)); // => false
//
// Test Code using assertEqual function with Array As Values objects
//
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false