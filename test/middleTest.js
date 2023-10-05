const lotide = require('../index');
const assert = require('chai').assert;

describe("#middle",()=>{
  it("returns [] for [1]",()=>{
    assert.deepEqual(lotide.middle([1]),[]);
  });
  it("returns [] for [1,2]",()=>{
    assert.deepEqual(lotide.middle([1,2]),[]);
  });
  it("returns [2] for [1,2,3]",()=>{
    assert.deepEqual(lotide.middle([1,2,3]),[2]);
  });
  it("returns [3,4] for [1,2,3]",()=>{
    assert.deepEqual(lotide.middle([1,2,3,4,5,6]),[3,4]);
  });
})