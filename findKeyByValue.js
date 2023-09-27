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
//
//@ findKeyByValue function
//@ Param: obj
//@ Param: value
/*
  You can find the key against a value in an object.
*/
const findKeyByValue = function (obj,value){
// Loop over the object.
  for (let key in obj) {
    // compare if the key's value equal to the argument value.
    // if value match save in the result variable and return.
    if (obj[key] === value) {
      return key;
    }
  }
  // if no match return undefined.
  return undefined;
}
//
// Test Code
//
const bestTvShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTvShowsByGenre,"The Wire"), "drama");
assertEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show"), undefined);