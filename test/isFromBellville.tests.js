
let assert = require("assert");
let isFromBellville = require("../isFromBellville");
describe ("the isFromBellville function", function(){
    it("should return true if a registration Number is from Bellville", function(){
        assert.equal(true, isFromBellville('CY 123'));
    })
    it("should return true if a registration Number is from Bellville", function(){
        assert.equal(true, isFromBellville('CY 456'));
    })
    it("should return false if a registration Number is not from Bellville", function(){
        assert.equal(false, isFromBellville('CJ 123'));
    })
    it("should return false if a registration Number is not from Bellville", function(){
        assert.equal(false, isFromBellville('NN 1230'));
    })
})
