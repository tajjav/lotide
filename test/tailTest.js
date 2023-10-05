const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail",()=>{
  it("returns ['Lighthouse','Labs'] for ['Hello','Lighthouse','Labs']",()=>{
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse","Labs"]);
  });
  it("returns [] for []",()=>{
    assert.deepEqual(tail([]),[]);
  });
  it("Doesnot change original array ['Hello','Lighthouse','Labs']",()=>{
    const words = ['Hello','Lighthouse','Labs'];
    tail(words);
    assert.strictEqual(words.length,3);
  });
})