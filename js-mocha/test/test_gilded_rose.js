require('approvals')
  .mocha();

var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {  

  it("should foo with verify", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
    const items = gildedRose.updateQuality();
    this.verifyAsJSON(items);
  });   
});
