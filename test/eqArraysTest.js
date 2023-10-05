const lotide = require('../index');
const assert = require('chai').assert;

describe("#eqArrays",()=>{
  it("returns boolean true if [1,2,3] exactly match with [1,2,3]",()=>{
    assert.strictEqual(lotide.eqArrays([1,2,3],[1,2,3]),true);
  });
  it("returns boolean false if [1,2,3] do not exactly match with [3,2,1]",()=>{
    assert.strictEqual(lotide.eqArrays([1,2,3],[3,2,1]),false);
  });
})