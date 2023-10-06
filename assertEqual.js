/**
 * assertEqual function definition, it prints to console, if actual is equal to expected. it works on primitive data types.
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

module.exports = assertEqual;