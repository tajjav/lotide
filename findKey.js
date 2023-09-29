/**
 * assertEqual function definition 
 * @param {primitive datatypes} actual 
 * @param {primitive datatypes} expected 
 */
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 * findKey function definition, it scans the object and return the first key for which the callback returns a truthy value. if no key is found, it should return undefined.
 * @param {Object} object 
 * @param {callback} callback 
 * @returns {string} key
 */
const findKey = function (object, callback) {
  // loop over object
  for (let key in object) {
    // console.log("object[key]: ", object[key]);
    // console.log("callback(object[key]): ", callback(object[key]));
    // check callback returns truthy for each value in the key-value pair.
    if (callback(object[key])) {
      // if truthy, returns key 
      return key;
    }
  }
  //else returns undefined.
  return undefined;
}

//
// Test Code
//
const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};
console.log(findKey(testObj, x => x.stars === 2)); // => "noma"
assertEqual(findKey(testObj, x => x.stars === 3), "Akaleri");