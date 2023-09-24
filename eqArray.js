const eqArrays = function (chkArray1, chkArray2) {

  if(chkArray1.length !== chkArray2.length)
    return false;
  
  for (let i = 0; i < chkArray1.length; i++) {
    if(chkArray1[i] !== chkArray2[i])
      return false;
  }

  return true;
}




const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};



//Test Code
assertEqual(eqArrays([1,2,3],[1,2,3]),true);
assertEqual(eqArrays([1,2,3],[3,2,1]),false);