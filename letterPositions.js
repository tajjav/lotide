//
//@ assertArraysEqual function
//
const assertArraysEqual = function (ckArray1, ckArray2) {
  let result = eqArrays(ckArray1, ckArray2);
  if (result)
    console.log("Both arrays are equal");
  else
    console.log("Two arrays are not equal");
}

//
//@ eqArrays function
//
const eqArrays = function (chkArray1, chkArray2) {

  if (chkArray1.length !== chkArray2.length)
    return false;

  for (let i = 0; i < chkArray1.length; i++) {
    if (chkArray1[i] !== chkArray2[i])
      return false;
  }

  return true;
}


//
//@ letterPositions function
//
const letterPositions = function (sentence) {
  const result = {};
  //console.log(typeof(sentence));
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    if (result.hasOwnProperty(letter)) {
      result[letter].push(i);
    } else {
      result[letter] = [i];
    }





    // let indexElement = sentence.indexOf(letter);
    // while(indexElement !== -1){
    //   result.push(indexElement);
    //   indexElement = sentence.indexOf(letter,indexElement+1);
    // }
  }
  console.log(result);
  return result;
}

//
// Test Code
//

assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house").h,[3,5,15,18]);