const assertArraysEqual = require('./assertArraysEqual');

/**
 * map function definition. This is a custom map function.
 * @param {Array} array 
 * @param {Callback Function} callbackFunction 
 * @returns {modified Array}
 */
const map = function (array, callbackFunction) {
  let result = [];
  for (let element of array) {
    result.push(callbackFunction(element));
  }
  return result;
}

module.exports = map;

//
// Test Code without assertArraysEqual
//
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, words => words[0]);
console.log(results1);

//
// Test Code with assertArraysEqual
//
const fabionacci = [0, 1, 1, 2, 3, 5, 8, 13, 21];
const resultfabionacci = map(fabionacci, f => f * 2);
assertArraysEqual(resultfabionacci, [0, 2, 2, 4, 6, 10, 16, 26, 42]);
const arrayObj = [
  { name: 'shark', likes: 'ocean', age: '50' },
  { name: 'turtle', likes: 'pond', age: '60' },
  { name: 'otter', likes: 'swarms', age: '80' }
];
const reformatArray = map(arrayObj, e => e.name + " " + e.age);
assertArraysEqual(reformatArray, ['shark 50', 'turtle 60', 'otter 80']);