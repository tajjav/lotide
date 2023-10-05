/**
 * tail function definition, it returns the last / tail element of an array.
 * @param {Array} array 
 * @returns {string} result
 */
const tail = function(array) {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(`${array[i]}`);
  }
  return result;
};

module.exports = tail;