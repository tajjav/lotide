/**
 * eqArrays function definition, returns true if two arrays are exact match.
 * @param {Array} chkArray1 
 * @param {Array} chkArray2 
 * @returns {Boolean}
 */
const eqArrays = function (chkArray1, chkArray2) {

  if(chkArray1.length !== chkArray2.length)
    return false;
  
  for (let i = 0; i < chkArray1.length; i++) {
    if(chkArray1[i] !== chkArray2[i])
      return false;
  }

  return true;
}

module.exports = eqArrays;


