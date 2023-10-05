const eqArrays = require('./eqArrays');

/**
 * middle function definition, it returns the middle index/es of an array.
 * @param {Array} arrayToFindMidE 
 * @returns {Array}
 */
const middle = function (arrayToFindMidE) {
  if (arrayToFindMidE.length <= 2){
    return [];
  }
  
  let middleIndex = Math.floor(arrayToFindMidE.length/2);
  //console.log(middleIndex);

  if (arrayToFindMidE.length % 2 === 0)
    return [arrayToFindMidE[middleIndex-1],arrayToFindMidE[middleIndex]];
  else {
    return [arrayToFindMidE[middleIndex]];
  }
}

module.exports = middle;

