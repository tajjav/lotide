const assertArraysEqual = function (ckArray1, ckArray2) {
  let result = eqArrays(ckArray1,ckArray2);
  if(result)
    console.log("Both arrays are equal");
  else
    console.log("Two arrays are not equal");
}


const eqArrays = function (chkArray1, chkArray2) {

  if (chkArray1.length !== chkArray2.length)
    return false;

  for (let i = 0; i < chkArray1.length; i++) {
    if (chkArray1[i] !== chkArray2[i])
      return false;
  }

  return true;
}


//Test
assertArraysEqual([1,2,3],[1,2,3])
assertArraysEqual([1,2,3,4],[4,3,2,1])