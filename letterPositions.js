const assertArraysEqual = require('./assertArraysEqual');

//
//@ letterPositions function definition, this function takes in a string and returns all indices of letter positions in the string.
//
const letterPositions = function (sentence) {
  const result = {};
  //console.log(typeof(sentence));
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    if (result.hasOwnProperty(letter)) {
      result[letter].push(i);
    } else {
      result[letter] = [i];
    }
  }
  console.log(result);
  return result;
}

module.exports = letterPositions;
//
// Test Code
//

assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house").h,[3,5,15,18]);



//wrong attempt
    // let indexElement = sentence.indexOf(letter);
    // while(indexElement !== -1){
    //   result.push(indexElement);
    //   indexElement = sentence.indexOf(letter,indexElement+1);
    // }