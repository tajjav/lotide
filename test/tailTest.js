const lotide = require('../index');
const assert = require('chai').assert;

describe("#tail",()=>{
  it("returns ['Lighthouse','Labs'] for ['Hello','Lighthouse','Labs']",()=>{
    assert.deepEqual(lotide.tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse","Labs"]);
  });
  it("returns [] for []",()=>{
    assert.deepEqual(lotide.tail([]),[]);
  });
  it("Doesnot change original array ['Hello','Lighthouse','Labs']",()=>{
    const words = ['Hello','Lighthouse','Labs'];
    lotide.tail(words);
    assert.strictEqual(words.length,3);
  });
})