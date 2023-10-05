const assertEqual = require('./assertEqual');
//
//@ countLetters function definition
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

module.exports = countLetters;

//
// Test Code
//
let word = 'tomorrow';
assertEqual(countLetters(word)["o"],3);
let word1 = "lighthouse in the house";
assertEqual(countLetters(word1)["h"],4);