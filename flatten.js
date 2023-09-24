//@ assertArraysEqual function
const assertArraysEqual = function (ckArray1, ckArray2) {
  let result = eqArrays(ckArray1,ckArray2);
  if(result)
    console.log("Both arrays are equal");
  else
    console.log("Two arrays are not equal");
}

//@ eqArrays function
const eqArrays = function (chkArray1, chkArray2) {

  if(chkArray1.length !== chkArray2.length)
    return false;
  
  for (let i = 0; i < chkArray1.length; i++) {
    if(chkArray1[i] !== chkArray2[i])
      return false;
  }

  return true;
}

//@ flatten function
const flatten = function (arrayOfNestedArrays) {
  const result = [];
  for (let i = 0; i < arrayOfNestedArrays.length; i++) {
    if(Array.isArray(arrayOfNestedArrays[i])) {
      for ( let j = 0; j < arrayOfNestedArrays[i].length; j++) {
        result.push(arrayOfNestedArrays[i][j]);
      }
    } else {
      result.push(arrayOfNestedArrays[i]);
    }
  }
  return result;
}

// Test Code
console.log(flatten([1,2,[3,4],5,[6]]));
assertArraysEqual(flatten([1,2,[3,4],5,6,[7],[8,9]]),[1,2,3,4,5,6,7,8,9]);
