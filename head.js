const assertEqual = require('./assertEqual');

/**
 * Head function to return first element of array
 * @param {Array} array 
 * @returns {string} result
 */
const head = function(array) {
  let result = array[0];
  return result;
};

module.exports = head;


