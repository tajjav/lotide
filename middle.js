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

//@ middle function
const middle = function (arrayToFindMidE) {
  if (arrayToFindMidE.length <= 2){
    return [];
  }
  
  let middleIndex = Math.floor(arrayToFindMidE.length/2);
  console.log(middleIndex);

  if (arrayToFindMidE.length % 2 === 0)
    return [arrayToFindMidE[middleIndex-1],arrayToFindMidE[middleIndex]];
  else {
    return [arrayToFindMidE[middleIndex]];
  }
}



//@ Test Code
console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5]));
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);