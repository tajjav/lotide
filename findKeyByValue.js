const assertEqual = require('./assertEqual');

/**
 * findKeyByValue function definition, this function takes in an object and a value and returns the first key that corresponds to that value.
 * @param {Object} obj 
 * @param {value} value 
 * @returns {key}
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

module.exports = findKeyByValue;

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