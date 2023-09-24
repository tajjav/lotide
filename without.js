// wrong attempt
// const without = function (sourceArray, itemsToRemoveArray) {
//   let result = [];
//   for ( let i = 0; i < sourceArray.length; i++) {
//     for ( let j = 0; j < itemsToRemoveArray.length; j++) {
//       if(sourceArray[i] === itemsToRemoveArray[j]) {
//         result = sourceArray.splice(i,1);
//         console.log(result);
//       }
//     }
//   }
//   return result;
// }

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



//@ without function
const without = function (sourceArray, itemsToRemoveArray) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemoveArray.includes(sourceArray[i])) {
      result.push(sourceArray[i]);
    }
  }
  return result;
}

//Test Code
console.log(without(["1","2","3"],[1,2,"3"]));
assertArraysEqual(without([1,2,3], [1]),[2,3]);
assertArraysEqual(without([1,2,3], [1,2,3]),[]); // test to make sure original array is not modified














