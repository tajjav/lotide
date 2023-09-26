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
//@ countLetters function
//
const countLetters = function (inputstring) {
  let result = {};
  for(var letter of inputstring){
    if(result[letter]){
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  console.log(result);
  return result;
}


//
// Test Code
//
let word = 'tomorrow';
assertEqual(countLetters(word)["o"],3);
let word1 = "lighthouse in the house";
assertEqual(countLetters(word1)["h"],4);